export type LatLngTuple = [number, number];


export interface TerritoryData {
    id: string;
    name: string;
    info: string;
    coordinates: LatLngTuple[];
}