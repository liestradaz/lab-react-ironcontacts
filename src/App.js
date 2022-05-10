import logo from './logo.svg';
import contacts from "./contacts.json";
import { useState } from 'react';
import './App.css';

function App() {
  const  [contactsList, setContactsList] = useState(contacts.slice(0,5))

  const addContact = () => {
    const randomNum = Math.floor(Math.random()*contacts.length)

    const newContact = contacts[randomNum]

    const newArr = [...contactsList]
    newArr.push(newContact)
    setContactsList(newArr)
  }

  const sortByPopularity = () =>{
    const popularity = [...contactsList].sort((a,b)=>b.popularity - a.popularity)
    setContactsList(popularity)
  }

  const sortByName = () =>{
    const name = [...contactsList].sort((a,b)=>a.name > b.name ? 1:-1)
    setContactsList(name)
  }

  const deleteContact = (id) =>{
    const newArr = contactsList.filter(e=>e.id!=id)
    setContactsList(newArr)
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={()=>addContact()}>Add Random Contact</button>
      <button onClick={()=>sortByPopularity()}>Sort by popularity</button>
      <button onClick={()=>sortByName()}>Sort by name</button>
      <table class="center">
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Actions</th>
        </tr>
        <tr>
        {contactsList.map((contact)=>{
          return <tr key={contact.id}>
                    <td><img src={contact.pictureUrl} alt="image" /></td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity}</td>
                    <td>{contact.wonOscar && <p>🏆</p>}</td>
                    <td>{contact.wonEmmy && <p>🏆</p>}</td>
                    <td><button onClick={()=>deleteContact(contact.id)}>Delete</button></td>

                  </tr>
        })}
        </tr>
      </table>
    </div>
  );
}

export default App;
