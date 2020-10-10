import React, {useState} from 'react';
import Lists from "./Lists";
import Buttons from "./Buttons";

const initialCount = [
    {id: 1, title: 'First', task:'Read a lable', status: false},
    {id: 2, title: 'Second', task:'Drink a sable', status: false},
    {id: 3, title: 'Third', task:'Burn a table', status: false},
  ];

function App() {

  const [count, setCount] = useState(initialCount);

  const Del = (id) => {
   const newList = count.filter(el => el.id !== id);
   setCount(newList)
  };

  const statusUpdate = (id) => {
    const updList = count.map(el => {
        if (el.id === id) return {...el, status: !el.status};
        else return el;
    })
      setCount(updList);
  };

  const addNew = (addTitle, addTask) => {
      const newList = [...count,{id: Math.random(),
                                title: addTitle,
                                task:addTask,
                                status: false}];

      setCount(newList);
  };

  const editCount = (addTitle, addTask, id) => {
      const newList = count.map(el => {
          if (el.id === id) return {...el, title:addTitle, task:addTask}
      return el
      })
  setCount(newList);
  }

  const moveHandler = (currentIndex, nextIndex) => {
    const newList = [...count];
    const element = newList[currentIndex];
    newList[currentIndex] = newList[nextIndex];
    newList[nextIndex] = element;
    setCount(newList);

  };


  return (
    <div>


        <Buttons addNew={addNew}/>
        {count.map((el, index) => <Lists stUpd={statusUpdate} Del={Del} el={el} index={index} isLast ={index === count.length-1} moveHandler={moveHandler} editCount={editCount}/>)}

    </div>
  );
}

export default App;
