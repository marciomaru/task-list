import React, { useState } from "react";
import Button from "../Button";
import styles from './Form.module.scss';
import { ITask } from '../../types/task';
import { v4 as uuidv4 } from 'uuid';

type Props = {
    task: ITask[];
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

export default function Form2({ task, setTasks }: Props) {
    const [nameTask, setNameTask] = useState('');
    const [time, setTime] = useState('00:00');

    function addTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setTasks(actualyTasks =>
            [...actualyTasks,
            {
                id: uuidv4(),
                nameTask,
                completed: false,
                selected: false,
                time,
            }
            ]
        );
        setNameTask('');
        setTime('00:00:00');
    }

    function handleNameTask(e: React.ChangeEvent<HTMLInputElement>) {
        const enteredNameTask = e.target.value;
        setNameTask(enteredNameTask);
    }
    function handleTime(e: React.ChangeEvent<HTMLInputElement>) {
        const enteredTime = e.target.value;
        setTime(enteredTime);
    }

    return (
        <form className={styles.newTask} onSubmit={addTask}>
            <div className={styles.inputContainer}>
                <label htmlFor="nameTask">
                    Nome:
                </label>
                <input
                    type="text"
                    name="nameTask"
                    value={nameTask}
                    onChange={handleNameTask}
                    id="nameTask"
                    placeholder="nome do tarefa"
                    required
                />
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="time">
                    Tempo:
                </label>
                <input
                    type="time"
                    step="1"
                    name="time"
                    value={time}
                    onChange={handleTime}
                    id="time"
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>

            <Button
                type="submit"
                text="Adicionar"
            />
        </form>
    );

}