import React from 'react'

const UserList = ({users, deleteUser, filter}) => {

  return (
    <div className="bar">
      {users
        .filter((user) => user.nom.toLowerCase().includes(filter.toLowerCase()))
        .map(user => (
        <div className="user" key={user.id}>
            <div className="col d-flex justify-content-around align-items-center mt-3">
                <div> 
                    <img 
                      className="img rounded-circle" 
                      src="https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_960_720.jpg" 
                      alt="dev" 
                    /> 
                    </div> 
                    <div> 
                      <p>{user.nom}</p>
                      <p>{user.description}</p>
                    </div>
                    <div>
                      <i className="fas fa-trash-alt" onClick={() => deleteUser(user.id)}></i>
                    </div>
                </div>
            <div className="line mt-3"></div>
        </div>
      ))}
    </div>
  )
}

export default UserList;
