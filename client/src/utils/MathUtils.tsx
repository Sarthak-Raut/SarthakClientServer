export function GetRandomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

export function GetRandomInt(min: number, max: number): number {
    return Math.floor(GetRandomNumber(min, max));
}
