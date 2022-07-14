import { Character, Episode } from "../models/common/types";

export interface ResponseInfo {
  count: number;
  next: string;
  pages: number;
  prev: string | null;
}

export interface CharacterResponse {
  info: ResponseInfo;
  results: Character[];
}

export type EpisodeResponse = Episode[];
