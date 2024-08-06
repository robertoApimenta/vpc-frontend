import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { useTheme } from "@mui/material/styles";

import {
    Alert,
    Container,
    TextField,
    Button,
    Link as MuiLink,
    Typography,
    Box,
    CssBaseline,
    Grid,
    Paper,
    Divider,
    FormHelperText,
    Checkbox,
    Snackbar,
    LinearProgress,
} from "@mui/material";

import logo from "../../assets/logo-register.png";

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
            maxWidth="xs"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
            }}
        >
            <CssBaseline />
            <Paper
                elevation={3}
                sx={{
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    maxWidth: "400px",
                    width: "100%",
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>

                    <Box
                        component="img"
                        src={logo}
                        alt="Logo"
                        sx={{
                            width: 100,
                            height: 100,
                            mb: 2,
                            borderRadius: '50%', // Torna a imagem redonda
                        }}
                    />

                    <Typography component="h1" variant="h5" align="center">
                        Selecione seu plano
                    </Typography>
                    <Box sx={{ width: '100%', mt: 2 }}>
                        <Card
                            sx={{
                                width: 300,
                                height: 300,
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
                                    variant="outlined"
                                    color="primary"
                                    onClick={() => handleSelectPlan(12)}
                                >
                                    Assine o plano bronze
                                </Button>
                            </CardActions>
                        </Card>

                        <Card
                            sx={{
                                width: 300,
                                height: 300,
                                margin: 2,
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: '#f0f0f0',
                                border: '2px solid #f0f0f0'
                            }}
                        >
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <WorkspacePremiumIcon sx={{ fontSize: 60, color: '#c0c0c0' }} /> {/* Medalha de ouro */}
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
                                    color="primary"
                                    onClick={() => handleSelectPlan(24)}
                                >
                                    Assine o plano prata
                                </Button>
                            </CardActions>
                        </Card>


                    </Box>
                </Box>
            </Paper>
        </Container>
    );
};

export default RegisterStepOne;
