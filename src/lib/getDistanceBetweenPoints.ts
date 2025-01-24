/**
 * Calculates the distance between two geographic coordinates using the Haversine formula.
 * @param point1 - First geographic coordinate with `lat` and `lon` properties.
 * @param point2 - Second geographic coordinate with `lat` and `lon` properties.
 * @returns The distance between the two coordinates in kilometers.
 * 
 * @example
 * getDistanceBetweenPoints({ lat: 51.5074, lon: 0.1278 }, { lat: 48.8566, lon: 2.3522 }); // 343.5
 */
export function getDistanceBetweenPoints(
  point1: { lat: number; lon: number },
  point2: { lat: number; lon: number }
): number {
  const toRadians = (degrees: number): number => degrees * (Math.PI / 180);

  const R = 6371; // Radius of the Earth in kilometers
  const dLat = toRadians(point2.lat - point1.lat);
  const dLon = toRadians(point2.lon - point1.lon);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(point1.lat)) *
      Math.cos(toRadians(point2.lat)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in kilometers
}
