import React, {useState} from 'react';
import TodoList from '../TodoList/TodoList';

const Todo = () => {
    const [item, setItem] = useState('');
    const [ary, setAry] = useState([]);
    const [preview, setpreview] = useState(false);

    const List =()=>{
        setAry((olditems)=>{
            return [...olditems, item];
        });
        setItem('');
        setpreview(true);
    };

    const deleteFunc =(id)=>{
        setAry((olditems)=>{
            return olditems.filter((arrelem, index)=>{
                return index !== id;
            })
        });
    };
  return (
    <>
      <div className="todo">
        <div className="todo_list">

            <h1>TODO LIST</h1>
           
                <input type="text" value={item} onChange={(e)=>{
                    setItem(e.target.value);
                }} placeholder='List' />
                <button onClick={List}>+</button>
                {preview ?   <div className="list">
                    <ul>
                        {ary.map((lists, index)=>{
                            return <TodoList key={index} onselect={deleteFunc} id={index} lists={lists}/>;
                        })}
                    </ul>
                </div>: <h3 className='preview'>Preview</h3>}
             
            
        </div>
      </div>
    </>
  );
};

export default Todo;
