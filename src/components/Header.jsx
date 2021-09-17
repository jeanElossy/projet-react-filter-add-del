import  { useState } from 'react';

const Header = ({addUser, search}) => {

  const [name, setName] = useState("");
  const handleClick = (e) => {
    (name === "") ?  alert("Veuillez entrer votre nom") : (
      addUser({
        id: new Date().getTime(),
        nom: name,
        description: "Developpeur"
      })
    )
  }


  return (
    <div className="header w-100 bg-primary p-3 d-flex flex-column">

      <div>
        <form 
          action="/" 
          className="form-group d-flex mb-3 align-items-center float-end position-relative"
        >
          <input 
            type="text" 
            name="name" 
            id="name" 
            className="form-control input--top"
            placeholder="Recherche par nom"
            onChange={search}
          />
            <div>
              <i className="fas fa-search position-absolute"></i>
            </div>
        </form>
      </div>

      <div>
          <h1 className="h4">Ajouter un utilsateur <span className="text-white">{name}</span></h1>
          <form action="/" className="form-group d-flex align-items-center">
              <input 
                  type="text"
                  name="name" 
                  id="name" 
                  className="form-control input rounded-pill text-white " 
                  placeholder="Entrer votre nom" 
                  required
                  onChange={(e) => setName(e.target.value)}
              />
              <div className="card__plus d-flex justify-content-center align-items-center p-2 ms-2 rounded-circle" onClick={handleClick}>
                  <span className="text-white d-flex justify-content-center align-items-center">+</span>
              </div>
          </form>
      </div>
    </div>
  )
}

export default Header;
