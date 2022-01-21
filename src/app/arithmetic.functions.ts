

/**
 * 
 * @param previousValue 
 * @param currentValue 
 * @returns addition of previus and current value
 */
export function additionReducer(previousValue: number, currentValue: number) {
    return previousValue + currentValue;
}

/**
 * 
 * @param val 
 * @returns rounded number to two float with two decimal places
 */
export function roundNumber(val: number) {
    return parseFloat(val.toFixed(2))
}

