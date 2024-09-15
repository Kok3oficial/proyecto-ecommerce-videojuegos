import { useReducer } from 'react';
import GameContext from './GameContext';
import GameReducer from './GameReducer';
import axiosClient from '../../config/axios'

const GameState = (props) => {
    const initialState = {
        games: [],
        loading: false,
    };

    const [ globalState, dispatch ] = useReducer(GameReducer, initialState);

    const createGame = async (dataForm) => {
        const form = {
            nombre: dataForm.nombre,
            precio: dataForm.precio
        }
        try {
            await axiosClient.post(`/product/crear-juego`, form);
            postGames();
        } catch (error) {
            console.log(error);
        }
    }

    
    
     const getGames = async () => {
         try {
             const res = await axiosClient.get(`/product/obtener-juegos`);
             console.log('fetched Products', res.data );

             dispatch({
                 type: "OBTENER-JUEGOS",
                 payload: res.data.games
                
             });
         } catch (error) {
	        console.log(error);
         }
     }

    const updateGame = async (id, dataForm) => {
        const form = {
            id,
            nombre: dataForm.nombre,
            precio: dataForm.precio
        };
        try {
            await axiosClient.put(`/product/actualizar-juego/:id`, form);
            getGames();
        } catch (error) {
            console.log(error);
        }
    }

    const deleteGame = async (id) => {
        const data = { id };
        try {
            await axiosClient.delete(`/product/borrar-juego/:id`, { data });
            getGames();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <GameContext.Provider value={{
            games: globalState.games,
            createGame,
            getGames,
            updateGame,
            deleteGame
            }}>
            { props.children }
        </GameContext.Provider>
    )
}

export default GameState;