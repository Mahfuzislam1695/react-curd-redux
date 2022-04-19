import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Layout from './../components/layouts/Layout';
import TasksList from './../components/layouts/tasks/TasksList';
import TaskCreate from './../components/layouts/tasks/TaskCreate';
import axios, { Axios } from 'axios';
import { getTaskData, storeTaskData } from '../components/services/TasksServices';

function TaskListPage() {

  const [isCreateMode, setIsCreateMode] = useState(false);
  const [tasks, setTasks] = useState([]);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [isAdded, setIsAdded] = useState('false');

  useEffect(() => {
    initializeData();
  }, []);

  const initializeData = async () => {
    const data = await getTaskData();
    data.sort();
    data.reverse();
    setTasks(data);
  }

  const createTask = async (e) => {
    e.preventDefault();

    //validate data
    if (title.length === 0) {
      alert('Please give a title')
      return false;
    }

    if (priority.length === 0) {
      alert('Please give a priority')
      return false;
    }
    const taskItem = {
      Title: title,
      Priority: priority,
    }
    //call ai and store to database
    const isAdded = await storeTaskData(taskItem);
    if (isAdded) {
      setTitle('');
      setDescription('');
      setPriority('');
      await initializeData();
    }else {
      alert('something is wrong')
    }
  }


  return (
    <>
      <Layout>
        {
          isCreateMode && (
            <TaskCreate
              title={title}
              setTitle={(value) => setTitle(value)}
              description={description}
              setDescription={(value) => setDescription(value)}
              priority={priority}
              setPriority={(value) => setPriority(value)}
              createTask={(e) => createTask(e)}
            />
          )
        }


        <TasksList data={tasks} onClickHandler={() => setIsCreateMode(isCreateMode ? false : true)} />

      </Layout>


    </>
  );
}

export default TaskListPage;
