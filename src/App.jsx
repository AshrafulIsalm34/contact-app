import ContactList from "./Components/ContactList";
import {useState} from 'react'
import TableView from "./Components/TableView";




function App() {

  const [contacts,setContact] = useState([])


  const ContactData=(contact)=>{
    setContact([].concat(contacts,contact))
  }
 
  return (
   <div style={{width:'50%',margin:'0 auto',backgroundColor:'#efefef',padding:'0.5rem 1rem',marginTop:'3rem'}}>
    <h1 style={{textAlign:'center'}}>Contact List</h1>
    <ContactList ContactData={ContactData}/>
    <TableView contacts={contacts}/>
   </div>
  );
}

export default App;
