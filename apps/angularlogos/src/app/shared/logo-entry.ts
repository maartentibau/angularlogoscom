import { LogoMetadata } from './logo-metadata';

export interface LogoEntryBase {
  name: string;
  filename: string;
  rawUrl: string;
  githubUrl: string;
  imageUrl: string;
}

export type LogoEntry = LogoEntryBase & LogoMetadata;
