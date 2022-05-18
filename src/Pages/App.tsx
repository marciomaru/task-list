import { useState } from 'react'
import Form from '../components/Form';
import TaskList from '../components/TaskList';
import StopWatch from '../components/StopWatch';
import { ITask } from '../types/task';
import "./styles.scss";



function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [select, setSelect] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelect(selectedTask);
    setTasks(previoustask => previoustask.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false,
    })));
  }

  function finishTask() {
    if (select) {
      setSelect(undefined);
      setTasks(previousTask => previousTask.map(task => {
        if (task.id === select.id) {
          return {
            ...task,
            selected: false,
            completed: true,
          }
        }
        return task;
      }))
    }
  }

  return (
    <div className='AppStyle'>
      <Form
        task={tasks}
        setTasks={setTasks}
      />
      <TaskList
        tasks={tasks}
        selectTask={selectTask}
      />
      <StopWatch
        selected={select}
        finishTask={finishTask}
      />
    </div>
  );
}

export default App
