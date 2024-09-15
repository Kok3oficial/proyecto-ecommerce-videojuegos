
import React, { useReducer } from 'react'
import UserContext from './UserContext'
import UserReducer from './UserReducer'
import axiosClient from '../../config/axios'

const UserState = (props) => {

    const initialState = {
        user: {
            username: null,
            email: null,
        },
        authStatus: false,
        loading: true
    };

    const [globalState, dispatch] = useReducer(UserReducer, initialState);

    const registerUser = async (dataForm) => {

        try {
            const res = await axiosClient.post("/user/register", dataForm)
            dispatch({
                type: "REGISTRO_EXITOSO",
                payload: res.data
            })

        } catch (error) {
            console.log(error)
        }
    };

    const loginUser = async (dataForm) => {

        try {
            const respuesta = await axiosClient.post("/user/login", dataForm)
            localStorage.setItem('token', respuesta.data.token);
            dispatch({
                type: "LOGIN_EXITOSO",
                payload: respuesta.data
            })

        } catch (error) {
            console.log(error);
            dispatch({
                type: "REGISTRAR_ERRORES",
                payload: true
            })
        }
    };

    const verifyingToken = async () => {
        try {
          const token = localStorage.getItem('token');
          if (token) {
            axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          } else {
            delete axiosClient.defaults.headers.common['Authorization'];
            throw new Error('No token available');
          }
    
          const response = await axiosClient.get("/user/verifytoken");
          if (!response.ok) {
            throw new Error('No autorizado');
          }
    
          const data = await response.data;
          dispatch({
            type: "OBTENER_USUARIO",
            payload: data.usuario,
          });
    
        } catch (error) {
          console.error('Error al verificar el token:', error);
          localStorage.removeItem('token');
          dispatch({
            type: "CERRAR_SESION",
          });
        }
      };

const logout = () => {

    localStorage.removeItem('token');
    delete axiosClient.defaults.headers.common['Authorization'];
    dispatch({
        type: "CERRAR_SESION",
    });
};

return (
    <UserContext.Provider
        value={{
            user: globalState.user,
            authStatus: globalState.authStatus,
            loading: globalState.loading,
            errores: globalState.errores,
            registerUser,
            loginUser,
            verifyingToken,
            logout,
        }}
    >
        {props.children}
    </UserContext.Provider>
);
    };

export default UserState;

