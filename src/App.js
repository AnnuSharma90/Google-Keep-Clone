import React, {useState} from 'react';
import 'tachyons';
import Header from './Header';
import Footer from './Footer';
import Createnote from './Createnote';
import Note from './Note';

function App() {
  const[addItem, setAddItem]= useState([]);

  const addNote=(note)=>{
    setAddItem((prevData)=>{
      return[...prevData,note];
    });
  }

  const onDelete=(id)=>{
    setAddItem((olddata)=>
      olddata.filter((curdata, index)=>{
      return index !== id;
    })
  );
  };

  return (
    <div>
    <Header/>
    <Createnote passNote={addNote}/>
    {addItem.map((val, index)=>{
      return(
    <Note 
        key={index}
        id={index} 
        title={val.title} 
        content={val.content}
        delItem={onDelete}/>
      );
    })}
    <Footer/> 
    </div>
  );
}

export default App;
