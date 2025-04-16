// @ts-ignore: Enviroment files
import cards from 'C:/envs/cards.json';
// @ts-ignore: Enviroment files
import config from 'C:/envs/config.json';
// @ts-ignore: Enviroment files
import monthlyMessages from 'C:/envs/monthlyMessages.json';
import * as libsodium from 'libsodium-wrappers';
import cron from 'node-cron';
import {
  ChannelType,
  Client,
  EmbedBuilder,
  GatewayIntentBits,
  GuildTextBasedChannel,
  HexColorString,
  REST,
  Routes,
  TextBasedChannel,
  AttachmentBuilder,
} from 'discord.js';
import puppeteer, { ElementHandle } from 'puppeteer';
import { RollService, rollCommand } from './commands/roll';
import { commands as cardCommands } from './commands/cards';
import { playCommand } from './commands/play';
import {
  AudioPlayerStatus,
  StreamType,
  VoiceConnection,
  VoiceConnectionStatus,
  createAudioPlayer,
  createAudioResource,
  entersState,
  joinVoiceChannel,
} from '@discordjs/voice';
import ytdl, { getBasicInfo, getInfo } from 'ytdl-core';
import ytpl from 'ytpl';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
const cachedCards$ = new BehaviorSubject([...cards.cards]);

const commands = [playCommand, rollCommand, ...cardCommands];

const rest = new REST({ version: '10' }).setToken(config.DISCORD_TOKEN);

const installCommands = async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(config?.APP_ID), {
      body: commands,
    });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    return;
  }
};

installCommands();
const playedSongs$ = new BehaviorSubject(0);
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates],
});
const player = createAudioPlayer();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
let voiceConnection: VoiceConnection;
let csub: Subscription;
const currentPlayingSong$ = new Subject();
const playSong = async (url, interaction) => {
  const stream = ytdl(url, { filter: 'audioonly', quality: 'highestaudio' });
  const songInfo = await getBasicInfo(url);

  const song = createAudioResource(stream);

  player.play(song);
  voiceConnection.subscribe(player);

  const embededSong = new EmbedBuilder()
    .setTitle(
      `${songInfo.videoDetails.title} - ${songInfo.videoDetails.category}`
    )
    .setAuthor({
      name: `${client.user.username} 🎷🎷🎷`,
      iconURL: client.user.avatarURL(),
    })
    .setFooter({
      text: songInfo.videoDetails.author.name,
      iconURL: songInfo.videoDetails.author.thumbnails[0]?.url,
    });
  const randomHex = (
    h = 360 * Math.random(),
    s = 70,
    l = 72
  ): HexColorString => {
    l /= 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, '0'); // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  };
  embededSong.setColor(randomHex());
  await interaction.channel.send({ embeds: [embededSong] });
};
const playFromPlaylist = (songs) => {
  return () => {
    console.log(songs.items[playedSongs$.value].title, playedSongs$.value);
    currentPlayingSong$.next(songs.items[playedSongs$.value].url);
  };
};
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'add_card') {
    const cardName = interaction.options.getString('card');
    const _card = cards.cards.find((card) => card.name === cardName);
    const cached_cards = [...cachedCards$.value];
    cached_cards.push(_card);
    cachedCards$.next(cached_cards);
  }

  if (interaction.commandName === 'reset_cards') {
    cachedCards$.next([...cards.cards]);
  }

  if (interaction.commandName === 'card') {
    const cached_cards = [...cachedCards$.value];
    const result = new RollService(`1d${cached_cards.length}`).roll()[0];
    let card = cached_cards.splice(result + 1, 1)[0];
    if (!card) card = cached_cards.splice(result, 1)[0];
    cachedCards$.next(cached_cards);
    const embededCard = new EmbedBuilder()
      .setTitle(`${card?.name}`)
      .setDescription(card?.description)
      .setAuthor({
        name: interaction.user.globalName,
        iconURL: interaction.user.avatarURL(),
      });
    if (
      card.additionalRoll &&
      (card.additionalRollModifier === true ||
        card.additionalRollModifier === false)
    ) {
      const result = new RollService(`${card.additionalRoll}`).roll()[0];
      embededCard.setFooter({
        text: `PUNKTY OSKAROWE: ${
          card.additionalRollModifier ? '+' : '-'
        }${result}`,
      });
    }
    embededCard.setColor(0x5d5fef);
    await interaction.channel.send({ embeds: [embededCard] });
  }

  if (interaction.commandName === 'roll') {
    const dice = interaction.options.getString('dice');
    const count = interaction.options.getNumber('count');
    const rollFormula = count ? `${count}d${dice.split('d')[1]}` : `${dice}`;
    const rs = new RollService(rollFormula);
    console.log(interaction);
    const res = rs.roll();
    const emededRolls = [];
    const embededRoll = new EmbedBuilder()
      .setTitle(
        `${interaction.guild.emojis.cache.first()} Rolled: ${
          res.length > 1 ? res.join(',') : res[0]
        }`
      )
      .setAuthor({
        name: interaction.user.globalName,
        iconURL: interaction.user.avatarURL(),
      })
      .setFooter({ text: `Rolling: ${rollFormula}` });
    embededRoll.setColor(0xff7a00);
    emededRolls.push(embededRoll);
    emededRolls.forEach(async (roll) => {
      await interaction.channel.send({ embeds: [roll] });
    });
  }

  if (interaction.commandName === 'play') {
    const url = interaction.options.getString('url');
    player.stop();
    if (interaction.channel.type === ChannelType.GuildVoice) {
      if (!voiceConnection) {
        voiceConnection = joinVoiceChannel({
          channelId: interaction.channelId,
          guildId: interaction.guildId,
          adapterCreator: interaction.guild.voiceAdapterCreator as any,
        });
        voiceConnection.on(
          VoiceConnectionStatus.Disconnected,
          async (oldState, newState) => {
            try {
              await Promise.race([
                entersState(
                  voiceConnection,
                  VoiceConnectionStatus.Signalling,
                  5_000
                ),
                entersState(
                  voiceConnection,
                  VoiceConnectionStatus.Connecting,
                  5_000
                ),
              ]);
              // Seems to be reconnecting to a new channel - ignore disconnect
            } catch (error) {
              // Seems to be a real disconnect which SHOULDN'T be recovered from
              voiceConnection.destroy();
            }
          }
        );
      }
      if (interaction.options.getSubcommand() === 'song') {
        if (csub) csub.unsubscribe();
        player.off(AudioPlayerStatus.Idle, playFromPlaylist([]));
        await playSong(url, interaction);
      } else if (interaction.options.getSubcommand() === 'playlist') {
        if (csub) csub.unsubscribe();
        ytpl(url).then((songs) => {
          csub = currentPlayingSong$.subscribe((url) => {
            playedSongs$.next(playedSongs$.value + 1);
            playSong(url, interaction);
          });
          player
            .off(AudioPlayerStatus.Idle, playFromPlaylist(songs))
            .on(AudioPlayerStatus.Idle, playFromPlaylist(songs));
          playFromPlaylist(songs).call(this);
        });
      } else if (interaction.options.getSubcommand() === 'end') {
        if (csub) csub.unsubscribe();
        player.off(AudioPlayerStatus.Idle, playFromPlaylist([]));
        voiceConnection.destroy();
      }
    } else {
      await interaction.reply({
        content: `You need to be on voice channel.`,
      });
      return;
    }
  }

  await interaction.reply({
    content: `...`,
  });

  await setTimeout(() => {
    interaction.deleteReply();
  }, 100);
});

client.login(config.DISCORD_TOKEN);
async function sendMonthlyMessage(channel, message: string) {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--start-maximized'],
  });

  const page = await browser.newPage();
  await page.goto('https://lehazyo.github.io/homm3-messages/', {
    waitUntil: 'networkidle2',
  });
  await page.setViewport({ width: 1920, height: 1080 });
  console.log(`Message: ${message}`);

  const inputValue = await page.$eval(
    '#input',
    (el: HTMLInputElement) => el.value
  );

  await page.click('#input');
  for (let i = 0; i < inputValue.length; i++) {
    await page.keyboard.press('Backspace');
  }

  await page.type('#input', message);
  await page.waitForSelector('.download-button');

  const base64 = await page.$eval("#canvas", (el:HTMLCanvasElement) => el.toDataURL())
  await browser.close();
  const base64Data = base64.replace(/^data:image\/png;base64,/, '');

  const imageBuffer = Buffer.from(base64Data, 'base64');
  console.log(imageBuffer);
  const attachment = new AttachmentBuilder(imageBuffer, {
    name: 'message.png',
  });

  await channel.send({
    content: ``,
    files: [attachment],
  });
}

cron.schedule('0 9 1 * *', async () => {
  const channelId = '1361982080728436806';
  const channel = await client.channels.fetch(channelId);

  if (channel?.isTextBased()) {
    const randomIndex = Math.floor(Math.random() * monthlyMessages.length);
    const message = monthlyMessages[randomIndex];
    await sendMonthlyMessage(
      channel,
      `Astrologowie ogłaszają miesiąc ${message.title}
      
      ${message.content}`
    );
  }
});
