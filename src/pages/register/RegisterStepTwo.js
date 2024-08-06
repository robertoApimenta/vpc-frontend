import React, { useEffect, useState } from 'react';

import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";

import { useTheme } from "@mui/material/styles";

import api from '../../config/axiosConfig';

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

const RegisterStepTwo = () => {
    const theme = useTheme();
    const [fullName, setFullName] = useState("");
    const [fullNameError, setFullNameError] = useState(false);
    const [cpf, setCpf] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [emailError, setEmailError] = React.useState(false);
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [passwordError, setPasswordError] = React.useState(false);
    const [check, setCheck] = React.useState(false);

    const [isFormValid, setIsFormValid] = useState(false);

    const [errorMessage, setErrorMessage] = useState(null);

    const [successMessage, setSuccessMessage] = useState(null);
    const [progress, setProgress] = useState(0);
    const navigate = useNavigate();

    const insurance = localStorage.getItem('selectedPlan');

    useEffect(() => {

        if (fullName && fullName.length <= 10) {
            setFullNameError(true);
        } else {
            setFullNameError(false);
        }
        if (
            fullName &&
            !fullNameError &&
            email &&
            !emailError &&
            password &&
            !passwordError &&
            confirmPassword &&
            !passwordError &&
            check
        )
            setIsFormValid(true);
    }, [
        navigate,
        fullName,
        fullNameError,
        email,
        emailError,
        password,
        passwordError,
        confirmPassword,
        passwordError,
        check,
    ]);

    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    };

    const handleCpfChange = (e) => {
        const formattedCpf = e.target.value.replace(/\D/g, "");

        let maskedCpf = "";
        if (formattedCpf.length <= 3) {
            maskedCpf = formattedCpf.replace(/(\d{0,3})/, "$1");
        } else if (formattedCpf.length <= 6) {
            maskedCpf = formattedCpf.replace(/(\d{0,3})(\d{0,3})/, "$1.$2");
        } else if (formattedCpf.length <= 9) {
            maskedCpf = formattedCpf.replace(
                /(\d{0,3})(\d{0,3})(\d{0,3})/,
                "$1.$2.$3"
            );
        } else {
            maskedCpf = formattedCpf.replace(
                /(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/,
                "$1.$2.$3-$4"
            );
        }
        setCpf(maskedCpf);
    };

    const handleEmailChange = (e) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);

        // Expressão regular para validar email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Verifica se o email digitado tem formato válido
        setEmailError(!emailPattern.test(inputEmail));
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);

        // Verifica se a senha e a senha repetida são iguais
        setPasswordError(newPassword !== confirmPassword && confirmPassword !== "");
    };

    const handleConfirmPasswordChange = (e) => {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);

        // Verifica se a senha e a senha repetida são iguais
        setPasswordError(password !== newConfirmPassword && password !== "");
    };

    const handleCheckChange = () => {
        setCheck(!check);
    };

    console.log(insurance)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isFormValid) {
            return;
        }
        const cleanedCpf = cpf.replace(/[.-]/g, "");
        console.log(insurance)
        try {
            await api.post('/users', {
                fullName,
                cpf,
                email,
                password,
                insurance
            });
            setSuccessMessage(
                "Cadastro realizado com sucesso, você será redirecionado para o login!"
            );
            setProgress(0);
            const interval = setInterval(() => {
                setProgress((prevProgress) => {
                    if (prevProgress >= 100) {
                        clearInterval(interval);
                        navigate("/login");
                    }
                    return prevProgress + 1;
                });
            }, 30); // Adjust the duration to match 3 seconds (100 / 30ms = ~3 seconds)
        } catch (error) {
            if (error.message) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage("Failed to register user");
            }
        }
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
                <Divider sx={{ width: "100%", mb: theme.spacing(2) }} />
                <Typography component="h1" variant="h5" align="center">
                    Register
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{
                        mt: 3,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        maxWidth: "400px",
                        width: "100%",
                    }}
                >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="fullName"
                        label="Nome completo"
                        name="fullName"
                        autoComplete="name"
                        autoFocus
                        value={fullName}
                        onChange={handleFullNameChange}
                        error={fullNameError}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="cpf"
                        label="CPF"
                        name="cpf"
                        autoComplete="cpf"
                        value={cpf}
                        onChange={handleCpfChange}
                        inputProps={{ maxLength: 14 }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={handleEmailChange}
                        error={emailError}
                    />
                    {/* {emailError && <FormHelperText error>Email inválido</FormHelperText>} */}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        value={password}
                        onChange={handlePasswordChange}
                        error={passwordError}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="confirmPassword"
                        label="Repita o Password"
                        name="confirmPassword"
                        type="password"
                        autoComplete="new-password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        error={passwordError}
                    />
                    {/* {passwordError && (
            <FormHelperText error>As senhas não coincidem</FormHelperText>
          )} */}
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Checkbox
                            sx={{ mr: 1 }} // Adiciona margem à direita para separar o Checkbox do texto
                            onChange={handleCheckChange}
                        />
                        <Typography variant="body2">
                            {"Concordo com os "}
                            <MuiLink
                                component="button"
                                variant="body2"
                                onClick={() => navigate("/register")}
                                sx={{
                                    textDecoration: "none",
                                    color: "primary.main",
                                    fontWeight: "bold",
                                }}
                            >
                                Termos e Condições.
                            </MuiLink>
                        </Typography>
                    </Box>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, backgroundColor: theme.palette.primary.main }}
                        disabled={!isFormValid}
                    >
                        Registrar
                    </Button>
                    {errorMessage && (
                        <Typography color="error" align="center" sx={{ mt: 2 }}>
                            {errorMessage}
                        </Typography>
                    )}
                    <Snackbar
                        open={Boolean(successMessage)}
                        onClose={() => setSuccessMessage(null)}
                    >
                        <Alert
                            onClose={() => setSuccessMessage(null)}
                            severity="success"
                            sx={{ width: "100%" }}
                        >
                            {successMessage}
                            <Box sx={{ width: "100%", mt: 1 }}>
                                <LinearProgress variant="determinate" value={progress} />
                            </Box>
                        </Alert>
                    </Snackbar>
                </Box>
            </Paper>
        </Container>
    );
};

export default RegisterStepTwo;
