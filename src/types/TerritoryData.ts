export type LatLngTuple = [number, number];

export type CropType = 'alfafa' | 'corn' | 'wheat' | 'unsown' | 'forest';
export interface TerritoryData {
    id: string;
    name: string;
    coordinates: LatLngTuple[];
    cropType: CropType;
}

export type MapType = 'NDVI' | 'NDRE' | 'MCARI';;