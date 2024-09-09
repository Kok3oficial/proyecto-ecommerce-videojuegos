import React from 'react'

const hagane = () => {
  return (
    
      <div key={game._id}>
            <img src={game.imagen} height="200" width="200"/>
            <h2>{game.nombre}</h2>
            <p>Precio: ${game.precio}</p>
            <PaypalButton valor={game.precio} />
            {<button onClick={() => activateEditMode(game)}>Editar</button>}
            <button onClick={() => sendDataToDeleteGame(game)}>
              Borrar
            </button>
     </div>

  )
}

export default hagane

