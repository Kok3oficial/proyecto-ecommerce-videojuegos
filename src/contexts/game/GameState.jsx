import React, { useReducer, useState } from "react";
import GameReducer from './GameReducer';
import GameContext from "./GameContext";
import axiosClient from '../../config/axios'


const GameState =(props) => {
    const initialState = {
        games: [], 
        loading: false,
    };
    const [globalState, dispatch ] = useReducer(GameReducer, initialState );

    const createGame= async (dataForm) => {
        const form = {
            nombre: dataForm.nombre,
            precio: dataForm.precio,
            descripcion: dataForm.descripcion,
        }
        try {
            await axiosClient.post('/game/create', form);
            getGames();

        } catch (error) {
            console.log(error);
            
        }
    }

    const getGames = async () => {
      
        try {
            const res = await axiosClient.get('/game/readall');
            console.log('fetched Games', res.data );
            
            dispatch({
                type: "OBTENER-JUEGOS",
                payload: res.data.games
            });
        } catch (error) {
	        console.log(error);
        }
    };


    const updateGame = async (id, dataForm) => {
        const form = {
            id,
            nombre: dataForm.nombre,
            precio: dataForm.precio,
            descripcion: dataForm.descripcion
        };
        try {
            await axiosClient.put('/game/update/:id', form);
            getGames();
        } catch (error) {
            console.log(error);
        }
    };

    const deleteGame = async (id) => {
        const data = { id };
        try {
            await axiosClient.delete('/game/delete/:id', { data });
            getGames();
        } catch (error) {
            console.log(error);
        }
    };

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

};

export default GameState;