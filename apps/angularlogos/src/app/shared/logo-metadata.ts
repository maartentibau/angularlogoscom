// if you do any changes here, don't forget to update the metadata-schema.json
export interface LogoMetadata {
  name: string;
  website?: string;
  license?: string;
  creator?: string;
  description?: string;
}

export interface LogoMetadataEntities {
  [filename: string]: LogoMetadata;
}

export interface LogoMetadataFileSchema {
  logos: LogoMetadataEntities;
}
