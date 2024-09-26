import { Injectable } from '@angular/core';
import { Area } from './area.enum';
import { BaseArea } from './areas/base.area';
import { WaterArea } from './areas/water.area';
import { RoadArea } from './areas/road.area';
import { TrainArea } from './areas/train.area';
import { AirWayArea } from './areas/airway.area';
import { CountrysideArea } from './areas/countryside.area';
import config from 'C:/envs/config.json';
@Injectable({ providedIn: 'root' })
export class EventsService {
  allAreas: BaseArea[] = [
    new WaterArea(),
    new RoadArea(),
    new TrainArea(),
    new AirWayArea(),
    new CountrysideArea(),
  ];

  getRandomEvent(key: string): string | null {
    // Znalezienie odpowiedniego obszaru na podstawie klucza
    const foundArea = this.allAreas.find(
      (area) =>
        area.areas.includes(key as Area) ||
        area.areas.some((a) => a.startsWith(key[0]))
    );

    if (foundArea) {
      // Losowanie wydarzenia z dostępnych eventów
      const randomIndex = Math.floor(Math.random() * foundArea.events.length);
      return foundArea.events[randomIndex];
    }

    return null; // Jeśli nie znaleziono, zwracamy null
  }

  async getEventDescription(eventName: string): Promise<string | null> {
    const url = 'https://api.openai.com/v1/chat/completions';
    const apiKey = process.env.OPENAIAPI_KEY ?? config.OPENAIAPI_KEY; // Zamień to na swój klucz API
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const data = {
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content:
            'You are GAME MASTER for pen&paper sessions. You are playing system The End of The World: Zombie Apocalypse',
        },
        {
          role: 'user',
          content: `Napisz opis sytuacji: [${eventName}] podczas apokalipsy zombie. Aktualna godzina to: ${hours}:${minutes}:${seconds}`,
        },
      ],
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const result = await response.json();
      return result.choices[0].message.content as string;
    } catch (error) {
      console.error('Error:', error);
    }
    return null;
  }
}
