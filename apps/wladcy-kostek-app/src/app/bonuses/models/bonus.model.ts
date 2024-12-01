export interface Bonus {
    id:number;
    name: string;
    sessionCount: number;
    bonusCount: number;
    moneySupported: number; 
}

export interface BonusInfo {
    system: string;
    season: string;
    bonuses: string[];
}