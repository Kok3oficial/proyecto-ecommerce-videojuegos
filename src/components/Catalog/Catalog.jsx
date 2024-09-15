// src/components/Catalog/Catalog.js
import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { PayPalButtons } from '@paypal/react-paypal-js'; // Importa PayPal Buttons

// Información del catálogo de videojuegos
const games = [
  {
    name: "Hagane: The Final Conflict",
    image: "https://image-link-of-hagane.jpg",
    price: 300,
  },
  {
    name: "Earthbound",
    image: "https://image-link-of-earthbound.jpg",
    price: 250,
  },
  {
    name: "Demon's Crest",
    image: "https://image-link-of-demons-crest.jpg",
    price: 200,
  },
  {
    name: "Aero Fighters",
    image: "https://image-link-of-aero-fighters.jpg",
    price: 400,
  },
  {
    name: "Super Metroid",
    image: "https://image-link-of-super-metroid.jpg",
    price: 150,
  },
  {
    name: "Terranigma",
    image: "https://image-link-of-terranigma.jpg",
    price: 350,
  },
];

const Catalog = () => {
  const handleApprove = (orderID) => {
    console.log('Compra aprobada, ID de orden:', orderID);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        overflowX: 'auto', // Scroll horizontal
        padding: 2,
        bgcolor: '#f4f4f4',
        height: '100vh',
      }}
    >
      {games.map((game, index) => (
        <Card
          key={index}
          sx={{
            minWidth: 300,
            maxWidth: 300,
            margin: 2,
            bgcolor: 'white',
          }}
        >
          <CardMedia
            component="img"
            alt={game.name}
            height="250"
            image={game.image} // Asegúrate de tener un enlace válido para la imagen
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {game.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Precio: ${game.price} USD
            </Typography>
          </CardContent>
          <CardActions>
            {/* Botón de PayPal */}
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: game.price.toString(), // Precio del juego
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  handleApprove(details.id);
                  alert(`Compra de ${game.name} aprobada por ${details.payer.name.given_name}!`);
                });
              }}
            />
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default Catalog;
