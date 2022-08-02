import React from 'react'

const TodoList = ({lists,onselect,id}) => {
  
  return (
    <>
    <div className='TodoList_delete'>
    <i onClick={()=>{onselect(id)}} className="fa fa-times" aria-hidden="true"></i>
        <li>{lists}</li>
    </div>
    </>
  );
};

export default TodoList;
