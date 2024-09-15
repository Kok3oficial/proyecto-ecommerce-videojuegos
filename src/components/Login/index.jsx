import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../../contexts/users/UserContext';
import { Box, Container, TextField, Button, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // Importa esto para usar el link de react-router

export default function Login(props) {
  const userCtx = useContext(UserContext);
  const { loginUser, authStatus, verifyingToken } = userCtx;

  const [data, setData] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    verifyingToken();
    if (authStatus) {
      props.history.push('/perfil');
    }
  }, [authStatus]);
  if (authStatus) return null;
  const handleChange = (event) => {

    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const sendData = (event) => {
    event.preventDefault();
    loginUser(data);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography component="h1" variant="h5">
          Iniciar sesión
        </Typography>

        <Box component="form" onSubmit={sendData} sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            fullWidth
            id="email-address"
            label="Correo"
            name="email"
            autoComplete="email"
            autoFocus
            required
            onChange={handleChange}
          />

          <TextField
            margin="normal"
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            required
            onChange={handleChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: 'indigo',
              color: 'white',
              '&:hover': {
                backgroundColor: 'purple',
              },
            }}
          >
            Comenzar
          </Button>

          {/* Aquí está el enlace al registro */}
          <Typography variant="body2" color="textSecondary" align="center">
            ¿No tienes una cuenta?{' '}
            <Link component={RouterLink} to="/registro" variant="body2">
              Regístrate aquí
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

