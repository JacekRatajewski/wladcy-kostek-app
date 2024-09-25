export interface News {
    id: number;
    title: string;
    message: string;
    imageBase64: string | null;
    userId: string;
    dateTime: string;
  }