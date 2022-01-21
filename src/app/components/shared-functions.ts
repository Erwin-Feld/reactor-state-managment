/**
 * 
 * @param min 
 * @param max 
 * @returns rnd value * 1000 used for 
 */

export function rndIntervalRate(min: number, max: number) {
    const rndNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return rndNumber * 1000;
  }


