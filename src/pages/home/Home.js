import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    Box,
    Typography,
    Button
} from "@mui/material";

import home from "../../assets/home.png";

const Home = () => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/register-step-one');
    };

    return (
        <Container
            component="main"
            maxWidth="xs"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                textAlign: "center",
                padding: 2
            }}
        >
            <Box
                component="img"
                src={home}
                alt="Logo"
                sx={{
                    width: 300,
                    height: 300,
                    mb: 2,
                    borderRadius: '50%', // Torna a imagem redonda
                }}
            />
            <Typography variant="h4" component="h1" gutterBottom>
                O que faltava para
                realizar seus sonhos.
            </Typography>
            <Typography variant="subtitle1" component="p" gutterBottom>
                Você paga suas contas em dia e ganha dinheiro com isso! Veja como é fácil!
            </Typography>
            <Button
                variant="contained"
                sx={{
                    marginTop: 2,
                    backgroundColor: '#FF4500',
                    '&:hover': {
                        backgroundColor: '#E67E22',
                    }
                }}
                onClick={handleButtonClick}
            >
                Criar minha conta grátis
            </Button>
        </Container>
    );
};

export default Home;
