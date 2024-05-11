export enum MediaType {
  CHARACTER = "character",
  MOVIE = "movie",
  HQ = "hq",
}

export interface CommonProps {
  title: string;
  poster: string;
  href: string;
  type: MediaType;
  description: string;
}

export interface Character extends CommonProps {
  appearances?: string[];
  rating?: number;
}

export interface Movie extends CommonProps {
  availableOn?: string[];
  rating?: number;
}

export interface HQ extends Movie {}

export type PreviewCardProps = Character | Movie | HQ;
