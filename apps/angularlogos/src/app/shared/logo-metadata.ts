export interface LogoMetadata {
  name?: string;
  website?: string;
  license?: string;
  creator?: string;
  description?: string;
}

export interface LogoMetadataAll {
  [filename: string]: LogoMetadata;
}

export interface LogoMetadataFileSchema {
  logos: LogoMetadataAll;
}
