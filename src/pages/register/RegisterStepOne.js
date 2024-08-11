import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { useTheme } from "@mui/material/styles";

import {
    Container,
    Button,
    Typography,
    Box,
    CssBaseline,
} from "@mui/material";

import logo from "../../assets/logo-new.png";

const RegisterStepOne = () => {
    const navigate = useNavigate();
    const theme = useTheme();

    const handleSelectPlan = (plan) => {
        localStorage.setItem('selectedPlan', plan);
        navigate('/register-step-two');
    };

    return (
        <Container
            component="main"
            sx={{
                width: "360px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <CssBaseline />
            <Box
                component="img"
                src={logo}
                alt="Logo"
                sx={{
                    width: 100,
                    height: 100,
                    mb: 2,
                    mt: 5,
                    borderRadius: '50%', // Torna a imagem redonda
                }}
            />

            <Box>
                <Typography variant="h7" component="div" sx={{ mt: 2 }} align="center">
                    Escolha o plano de formação da sua reserva financeira.
                </Typography>
                <Typography variant="h7" component="div" align="center">
                    Você pode trocar por um mais longo a qualquer momento.
                </Typography>
            </Box>

            <Box sx={{ width: '100%', mt: 2 }}>
                <Card
                    sx={{
                        margin: 2,
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #ccc'
                    }}
                >
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <WorkspacePremiumIcon sx={{ fontSize: 60, color: '#cd7f32' }} /> {/* Medalha de ouro */}
                        <Typography variant="h6" component="div" sx={{ mt: 2 }}>
                            Bronze
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Plano de 12 meses
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#E67E22',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: '#FF4500',
                                }
                            }}
                            onClick={() => handleSelectPlan(12)}
                        >
                            Assine o plano bronze
                        </Button>
                    </CardActions>
                </Card>

                <Card
                    sx={{
                        margin: 2,
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px solid #FF4500', // Borda laranja
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Elevação
                        transition: 'transform 0.3s ease-in-out', // Suavidade na animação
                        '&:hover': {
                            transform: 'scale(1.05)', // Leve aumento ao passar o mouse
                        },
                    }}
                >
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <WorkspacePremiumIcon sx={{ fontSize: 60, color: '#c0c0c0' }} />
                        <Typography variant="h6" component="div" sx={{ mt: 2 }}>
                            Prata
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Plano de 24 meses
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#FF4500',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: '#E67E22',
                                }
                            }}
                            onClick={() => handleSelectPlan(24)}
                        >
                            Assine o plano prata
                        </Button>
                    </CardActions>
                </Card>

                <Card
                    sx={{
                        margin: 2,
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #ccc'
                    }}
                >
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <WorkspacePremiumIcon sx={{ fontSize: 60, color: '#DAA520' }} /> {/* Medalha de ouro */}
                        <Typography variant="h6" component="div" sx={{ mt: 2 }}>
                            Ouro
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Plano de 36 meses
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#E67E22',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: '#FF4500',
                                }
                            }}
                            onClick={() => handleSelectPlan(24)}
                        >
                            Assine o plano Ouro
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </Container >
    );
};

export default RegisterStepOne;
