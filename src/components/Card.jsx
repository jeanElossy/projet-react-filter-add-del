import React from 'react'
import Header from './Header';
import UserList from "./UserList";
import {useState} from "react"

const Card = () => {

  const [data, setData] = useState([]);
  const handleAddUser = (user) =>{
    const newData = [...data];
    newData.push(user);

    setData(newData);
  }

  const handleDeleteUser = (id) => {

    // 1ere methode
    /*const newData = data.filter(user => 
        user.id !== id
      );*/

    // 2e methode

    const newData = [...data];
    const index = newData.findIndex(i => i.id === id);

    newData.splice(index, 1);

    setData(newData);
  }

  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
  }
  console.log(searchTerm);


  return (
    <div className="box border border-dark">
      <Header 
        addUser={handleAddUser}
        search={handleChange}
      />

			<UserList 
        users={data}
        filter={searchTerm}
        deleteUser={handleDeleteUser}
        />
	  </div>
  )
}

export default Card;
