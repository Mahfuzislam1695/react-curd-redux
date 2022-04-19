import React from 'react';

const TaskDetails = (props) => {
    const {item, index} =props;
    return (
        <tr>
                  <td>{index+1}</td>
                  <td>{item._id}</td>
                  <td>{item.Title}</td>
                  <td>{item.Priority}</td>
                  <td>
                    <i className="fa fa-pencil text-success " title='Edit Task'></i>
                    <i className="fa fa-trash text-danger ml-2" title='Delete Task'></i>
                  </td>
                </tr>
    );
};

export default TaskDetails;