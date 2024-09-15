import React, { useContext, useEffect, useState } from "react";
import GameContext from "../../contexts/games/GameContext";
import PaypalButton from "./PaypalButton";

export const Games = () => {
  const [game, setGame] = useState({
    nombre: "",
    precio: "",
  });

  const [editMode, setEditMode] = useState(false);
  const [id, setId] = useState(null);
  const [error, setError] = useState(null);

  const ctx = useContext(GameContext);
  const { games, getGames, createGame, updateGame, deleteGame } = ctx;

  useEffect(() => {
    getGames();
  }, []);

  const handleChange = (event) => {
    setGame({
      ...game,
      [event.target.name]: event.target.value,
    });
  };

  const sendDataToCreateGame = (event) => {
    event.preventDefault();
    if (!game.nombre.trim() || !game.precio.trim()) {
      return setError("Debes llenar todos los campos de texto");
    }
    createGame(game);
    setError(null);
  };

  const sendDataToUpdateGame = (event) => {
    event.preventDefault();
    if (!game.nombre.trim() || !game.precio.toString().trim()) {
      return setError("Debes llenar todos los campos de texto");
    }

    updateGame(id, game);
    setId(null);

    setGame({
      nombre: "",
      precio: "",
    });

    setEditMode(false);
    setError(null);
  };

  const sendDataToDeleteGame = (element) => {
    deleteGame(element._id);
  };

  const activateEditMode = (element) => {
    setEditMode(true);
    setId(element._id);
    setGame({
      nombre: element.nombre,
      precio: element.precio,
    });
  };

  return (
    <div>
      {/* TÍTULO (DEPENDIENDO DEL MODO EN EL QUE ESTEMOS) */}
      <h1>{editMode ? "Edita juego" : "Crea un juego"}</h1>
      {/* NUESTRO FORMULARIO */}
      <form
        onSubmit={
          editMode
            ? (e) => {
                sendDataToUpdateGame(e);
              }
            : (e) => {
                sendDataToCreateGame(e);
              }
        }
      >
        <h2>Escribe el nombre del videojuego</h2>
        <input
          name="nombre"
          onChange={(e) => {
            handleChange(e);
          }}
          value={game.nombre}
        />
        <h2>Escribe el precio</h2>
        <input
          name="precio"
          onChange={(e) => {
            handleChange(e);
          }}
          value={game.precio}
          type="number"
        />
        <button type="submit">
          {editMode ? "Editar juego" : "Crear juego"}
        </button>
      </form>
      {error ? error : null}
      <h1>Videojuegos</h1>
      {games.map((game) => {
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
        );
      })}
    </div>
  );
};
