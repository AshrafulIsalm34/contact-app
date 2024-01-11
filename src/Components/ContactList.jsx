import React from 'react';
import { useState } from 'react';

const contactInit={
    name:'',
    email:'',
    group:'',
  }

const ContactList = ({ContactData}) => {
    const [values, setValues] = useState({...contactInit});
    const {name,email,group} = values;
  
    const handleChange = (e)=>{
      setValues({
        ...values,
        [e.target.name]:e.target.value
      })
    }
    const handleSubmit =(e)=>{
      e.preventDefault()
      ContactData(values)
      setValues({...contactInit})
    }
  
  return (
    <form onSubmit={handleSubmit}>
    <div style={{display:'flex',gap:'1rem',justifyContent:'space-between'}} >
      <div>
        <label htmlFor="name" style={{marginRight:'0.2rem'}}>Name:</label>
        <input type="text" name="name" id="name" value={name} onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="email" style={{marginRight:'0.2rem'}}>Email:</label>
        <input type="email" name="email" id="email" value={email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="group" style={{marginRight:'0.2rem'}}>Group:</label>
        <select name="group" id="group" value={group} onChange={handleChange}>
          <option value="">Select Group</option>
          <option value="Home">Home</option>
          <option value="Office">Office</option>
        </select>
      </div>
    </div>
    <br/>
    <input type="submit" value={'Create New Contact'} />

  </form>
  )
}

export default ContactList