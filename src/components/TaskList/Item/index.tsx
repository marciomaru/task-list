import { ITask } from '../../../types/task';
import styles from './Item.module.scss';

interface Props extends ITask {
    selectTask: (selectedTask: ITask) => void;
}

export default function Item({
    completed,
    id,
    nameTask,
    selectTask,
    selected,
    time,
}: Props) {
    return (
        <li
            className={
                `
                    ${styles.item} ${selected ? styles.selectedItem : ''}
                    ${completed ? styles.completedItem : ''}
                `
            }
            onClick={() => !completed && selectTask(
                {
                    nameTask,
                    time,
                    selected,
                    completed,
                    id,
                }
            )
            }
        >
            <h3>{nameTask}</h3>
            <div>{time}</div>
            {
                completed &&
                <span
                    className={styles.concluded}
                    aria-label='item completado'
                >
                </span>
            }
        </li>
    );
}