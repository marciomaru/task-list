import React from 'react';
import { ITask } from '../../types/task';
import styles from './TaskList.module.scss';
import Item from "./Item";

interface Props {
    tasks: ITask[];
    selectTask: (selectedTask: ITask) => void;
}

function TaskList({ tasks, selectTask }: Props) {

    return (
        <aside className={styles.taskList}>
            <h2>Apartamentos Ocupados</h2>
            <ul>
                {
                    tasks.map((tasks) => (
                        <Item
                            selectTask={selectTask}
                            key={tasks.id}
                            {...tasks}
                        />
                    ))
                }
            </ul>
        </aside>
    );
}

export default TaskList;