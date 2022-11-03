export interface Weather{
    properties: Properties;
}

interface Properties{
    periods: Period[];
}

export default interface Period{
    name: string;
    icon: string;
    temperature: number;
    detailedForecast: string;
}