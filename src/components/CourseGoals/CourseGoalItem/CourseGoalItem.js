import React from 'react';
import Button from '../../UI/Button/Button';


import './CourseGoalItem.css';

const CourseGoalItem = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (<div>
    <li className="goal-item" >
      {props.children}
    </li>
    <Button  onClick={deleteHandler}>Delete</Button>
    </div>
  );
};

export default CourseGoalItem;
