import React from 'react';
import { Button, Form } from 'react-bootstrap';

const TaskCreate = (props) => {
    const {title, setTitle, priority, setPriority, createTask} =props;
    return (
        <div>
            <Form onSubmit={(e) => createTask(e)}>
              <h2 className='mt-5 pb-2'>
                New Task
              </h2>
              <Form.Group className="mb-3" controlId="title">
                <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
              </Form.Group>

              {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="text" as="textarea" placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)} />
              </Form.Group> */}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                
                <select className='form-control' value={priority} onChange={(e) => setPriority(e.target.value)} >
                <option value={''}>Select Task priority</option>
                  <option value={"low"}>low</option>
                  <option value={'medium'}>medium</option>
                  <option value={'high'}>high</option>
                </select>
                

              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
        </div>
    );
};

export default TaskCreate;