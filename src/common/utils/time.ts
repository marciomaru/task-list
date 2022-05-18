export function timeToSeconds(time: string) {
    const [
        hours = '0',
        minutes = '0',
        secondes = '0',
    ] = time.split(':');

    const hoursToSecondes = Number(hours) * 3600;
    const minutesToSecondes = Number(minutes) * 60;

    return hoursToSecondes + minutesToSecondes + Number(secondes);
}     