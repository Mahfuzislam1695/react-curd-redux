import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import TaskDetails from './TaskDetails';

const TasksList = (props) => {
  const tasks = props.data;
  const onClickHandler =props.onClickHandler; 
  const [isCreateMode, setIsCreateMode] = useState(false);
  return (
    <div>
      <div>
          <div className="float-left">
            <h2 className="mt-3 pb-3">My Task</h2>
          </div>
          <div className="float-right">
            <button className="btn btn-primary" onClick={() =>onClickHandler() }>
              <i className="fa fa-plus-circle test-success pointer" title="Edit Task"></i></button>
          </div>
          <div className="clearfix"></div>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Task Title</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              tasks.map((item, index) => (
                <TaskDetails key={index} item={item} index={index}/>
              ))
            }

          </tbody>
        </Table>
    </div>
  );
};

export default TasksList;