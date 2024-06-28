enum TypeOfEvent {
  CONCERT = "CONCERT",
  FESTIVAL = "FESTIVAL",
}

export interface MusicEventI {
  id: string;
  title: string;
  place: string;
  imageUrl: string;
  region: string;
  town: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  typeOfEvent: TypeOfEvent;
  createdAt: Date;
}
