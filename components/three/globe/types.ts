export type HubType =
  | "Head Office"
  | "Air Hub"
  | "Sea Hub"
  | "Distribution Hub";

export type TransportType =
  | "air"
  | "sea";

export interface GlobeHub {
  id: string;
  name: string;
  country: string;

  latitude: number;
  longitude: number;

  type: HubType;
}

export interface GlobeRoute {
  id: string;

  from: string;

  to: string;

  transport: TransportType;
}

export interface GlobeSettings {
  radius: number;

  rotationSpeed: number;

  atmosphereScale: number;

  cloudScale: number;
}

export interface CityVector {
  x: number;
  y: number;
  z: number;
}

export interface FlightRouteProps {
  start: CityVector;

  end: CityVector;

  color?: string;
}

export interface GlobeSceneProps {
  autoRotate?: boolean;

  showAtmosphere?: boolean;

  showClouds?: boolean;

  showRoutes?: boolean;

  showCityPins?: boolean;

  showPlanes?: boolean;

  showShips?: boolean;
}