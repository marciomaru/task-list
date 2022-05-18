import styles from "./Watch.module.scss";

interface Props {
    time: number | undefined;
}

function Watch({ time = 0 }: Props) {

    const minutes = Math.floor(time / 60);
    const secondes = time % 60;
    const [firstNumberMinu, secondNumberMinu] = String(minutes)
        .padStart(2, '0');
    const [firstNumberSec, secondNumberSec] = String(secondes)
        .padStart(2, '0');
    return (
        <>
            <span className={styles.watchNumber}>{firstNumberMinu}</span>
            <span className={styles.watchNumber}>{secondNumberMinu}</span>
            <span className={styles.watchDivision}>:</span>
            <span className={styles.watchNumber}>{firstNumberSec}</span>
            <span className={styles.watchNumber}>{secondNumberSec}</span>

        </>
    );
}

export default Watch;