export type LatLngTuple = [number, number];

export type CropType = 'alfafa' | 'corn' | 'wheat' | 'unsown' | 'forest';
export type DOC = 'cadastral' | 'segment';
export interface TerritoryData {
    id: string;
    name: string;
    coordinates: LatLngTuple[];
    cropType: CropType;
    type: DOC;
}

export type MapType = 'NDVI' | 'NDRE' | 'MCARI';;