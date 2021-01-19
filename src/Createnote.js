import React, {useState} from 'react';
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';

const Createnote =(props)=>{
	const [note, setNote]= useState({
		title:'', 
		content:''
	});

	const inputEvent=(event)=>{
		const{name, value}= event.target;

		setNote((prevData)=>{
			return{
				...prevData,
				[name]: value,
			};
		});
	};

	const addEvent= ()=>{
		props.passNote(note);
		setNote({
			title:'', 
			content:''
		});
	}
	
	return(
		<div className="center mw5  mt4 shadow-5">
		  <input 
			  className="f4 w-100 ma0 pa2 ba b--white-025" 
			  type='text'
			  name='title' 
			  value={note.title}
			  onChange={inputEvent}
			  placeholder='Title'
			 />
		  <textarea 
			  className="f6 f5-ns w-100 pa2 h4 ma0 ba b--white-025 "
			  name='content'
			  value={note.content}
			  onChange={inputEvent}
			  placeholder='write your note here...'>
		  </textarea>
		  <div className='tr'>
		  <button className='bg-green ' onClick={addEvent}><AddTwoToneIcon /></button>
		  </div>
		  </div>


		);

};
export default Createnote;