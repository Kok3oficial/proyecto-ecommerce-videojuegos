import React, { useState, useContext } from 'react';
import UserContext from '../../contexts/users/UserContext';
import { Box, Container, TextField, Button, Typography } from '@mui/material';

export default function Register() {
  const userCtx = useContext(UserContext);

  const { registerUser } = userCtx;

  const [data, setData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    event.preventDefault();
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const sendData = (event) => {
    event.preventDefault();
    registerUser(data);
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
          Crear cuenta
        </Typography>

        <Box component="form" onSubmit={sendData} sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            fullWidth
            id="username"
            label="Nombre de usuario"
            name="username"
            autoComplete="username"
            autoFocus
            required
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Correo"
            name="email"
            
            autoComplete="email"
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
            Registrarme
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

