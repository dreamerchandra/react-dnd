import { UID, URL } from "./common";


export enum NinjaRank  {
  Genin = 'Genin',
  Chuunin = "Chuunin",
  Jounin = "Jounin",
}

export const NO_OF_RANKS = Object.keys(NinjaRank).length;

export interface Ninja {
  name: string;
  profilePic: URL;
  id: UID;
  rank: NinjaRank;
  missionCompleted: Number;
}