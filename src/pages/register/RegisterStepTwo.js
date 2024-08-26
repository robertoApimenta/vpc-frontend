import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
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
  Modal,
  Checkbox,
  Snackbar,
  LinearProgress,
  InputAdornment,
  IconButton,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";

import api from '../../config/axiosConfig';
import logo from "../../assets/logo-new.png";

const RegisterStepTwo = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState(false);
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [matchError, setMatchError] = useState(false);
  const [check, setCheck] = useState(false);

  const [isFormValid, setIsFormValid] = useState(false);

  const [errorMessage, setErrorMessage] = useState(null);

  const [successMessage, setSuccessMessage] = useState(null);
  const [progress, setProgress] = useState(0);

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
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }

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

  const handlePhoneChange = (e) => {
    let input = e.target.value.replace(/\D/g, "");
    let previousValue = phone.replace(/\D/g, "");

    // Verifica se o usuário está tentando apagar
    if (input.length < previousValue.length) {
      setPhone(e.target.value);
      return;
    }

    if (input.length > 10) {
      input = input.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
    } else if (input.length > 5) {
      input = input.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
    } else if (input.length > 2) {
      input = input.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
    } else if (input.length > 0) {
      input = input.replace(/^(\d{0,2})/, "($1");
    }

    setPhone(input);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);

    // Validação de força da senha
    const strength = getPasswordStrength(value);
    setPasswordStrength(strength);

    // Validação se as senhas são iguais
    setMatchError(value !== confirmPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);

    // Validação se as senhas são iguais
    setMatchError(value !== password);
  };

  const getPasswordStrength = (password) => {
    if (password.length < 6) return "Fraca";
    if (password.match(/(?=.*[!@#$%^&*])/)) return "Forte";
    if (password.match(/(?=.*[A-Z])/)) return "Média";
    return "Fraca";
  };

  const getPasswordStrengthColor = (strength) => {
    switch (strength) {
      case "Fraca":
        return "red";
      case "Média":
        return "orange";
      case "Forte":
        return "green";
      default:
        return "";
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCheckChange = () => {
    setCheck(!check);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      return;
    }
    const cleanedCpf = cpf.replace(/[.-]/g, "");

    try {
      await api.post('/users', {
        fullName,
        cpf: cleanedCpf,
        email,
        phone,
        password,
        insurance: Number(insurance)
      });
      setSuccessMessage(
        "Cadastro realizado com sucesso, você será redirecionado para o login!"
      );
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            window.location.href = "https://link-to.app/vai-pra-conta";
          }
          return prevProgress + 1;
        });
      }, 30); // Adjust the duration to match 3 seconds (100 / 30ms = ~3 seconds)
    } catch (error) {
      console.log(error)
      if (error) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Failed to register user");
      }
    }
  };

  const getPlanText = (insurance) => {
    const insuranceNumber = parseInt(insurance, 10); // Converte para número
    switch (insuranceNumber) {
      case 12:
        return "Bronze";
      case 24:
        return "Prata";
      case 36:
        return "Ouro";
      default:
        return "Plano desconhecido"; // Texto padrão para valores não esperados
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
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }} noValidate autoComplete="off">
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
            Registre-se
            <br></br>
            <span style={{ fontSize: "12px" }}>Plano selecionado: {getPlanText(insurance)}</span>
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
              autoComplete='off'
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
              value={email}
              onChange={handleEmailChange}
              error={emailError}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Telefone"
              name="phone"
              value={phone}
              onChange={handlePhoneChange}
              inputProps={{ maxLength: 15 }}
            />
            {/* {emailError && <FormHelperText error>Email inválido</FormHelperText>} */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              error={passwordError || matchError}
              helperText={
                passwordStrength && (
                  <Typography component='span' style={{ color: getPasswordStrengthColor(passwordStrength) }}>
                    Força da senha: {passwordStrength}
                  </Typography>
                )
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={toggleShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="confirmPassword"
              label="Repita o Password"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              error={matchError}
              helperText={matchError && "As senhas não são iguais"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={toggleShowConfirmPassword}>
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
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
                  onClick={handleOpen}
                  sx={{
                    textDecoration: "none",
                    color: "primary.main",
                    fontWeight: "bold",
                  }}
                >
                  Termos e Condições.
                </MuiLink>
              </Typography>

              {/* Modal para os Termos e Condições */}
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="terms-and-conditions-title"
                aria-describedby="terms-and-conditions-description"
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                    textAlign: "center", // Centraliza o conteúdo do Box
                  }}
                >
                  <Typography
                    id="terms-and-conditions-title"
                    variant="h6"
                    component="h2"
                    sx={{ textAlign: "center" }} // Centraliza o título
                  >
                    Termos e Condições
                  </Typography>
                  <Typography
                    id="terms-and-conditions-description"
                    sx={{
                      mt: 2,
                      textAlign: "justify", // Justifica os parágrafos
                    }}
                  >
                    <strong>Seja Bem-vindo à VaiPraConta!</strong><br />
                    <span>Esperamos que você tenha uma agradável experiência navegando por nossa Plataforma!</span><br />
                    <span>Como você já sabe, a VaiPraConta preza pela praticidade, segurança e transparência para auxiliar
                      na administração do bem-estar financeiro de seus Usuários. Assim, os nossos Termos e Condições de Uso
                      não poderiam ser diferentes. Este documento tem o objetivo de transmitir, de forma clara e acessível,
                      todas as questões necessárias que os Usuários precisam ter ciência para a utilização da Plataforma
                      VaiPraConta.</span><br />
                    <span>Portanto, este é um documento importante para que você compreenda todos os seus e os nossos direitos
                      e deveres e você poderá utilizar o sumário como ferramenta para facilitar a leitura e encontrar as informações
                      desejadas sempre que precisar.
                      Caso surja qualquer dúvida após a leitura, não deixe de entrar em contato conosco por meio do e-mail
                      atendimento@vaipraconta.com.br.</span>
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center", // Centraliza o botão
                      mt: 2,
                    }}
                  >
                    <Button onClick={handleClose} variant="contained" color="primary">
                      Fechar
                    </Button>
                  </Box>
                </Box>
              </Modal>

            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: '#FF4500',
                '&:hover': {
                  backgroundColor: '#E67E22',
                }
              }}
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
        </Box>
      </Paper>
    </Container>
  );
};

export default RegisterStepTwo;
