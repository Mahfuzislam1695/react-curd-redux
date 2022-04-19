import axios from 'axios';


    export const getTaskData =async() => {
        let data =[];
                await axios.get("https://todo-app37.herokuapp.com/loadTodo")
                    .then((response) => {
                        data = response.data;
                    });
                    return data;
                //setTasks(data);
            }
    export const storeTaskData = async(taskItem) => {
        let isAdded = false;
        await axios.post("https://todo-app37.herokuapp.com/addtodo",taskItem)
        .then(response => {
            isAdded = response.data;
        })
        return isAdded;  
       }

                