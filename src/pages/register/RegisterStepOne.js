import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { useTheme } from "@mui/material/styles";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Divider from '@mui/material/Divider';
import bronze from '../../assets/bronze.png';
import prata from '../../assets/prata.png';
import ouro from '../../assets/gold.png';
import selo from '../../assets/selo.png';
import StarIcon from '@mui/icons-material/Star';

import {
  Container,
  Button,
  Typography,
  Box,
  CssBaseline,
} from "@mui/material";

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
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 5 }}>
        <Box
          sx={{
            width: 74,
            height: 74,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FF7B00',
            borderRadius: '50%',
          }}
        >
          <KeyboardDoubleArrowDownIcon sx={{ color: 'white', fontSize: 48 }} />
        </Box>
        <Box sx={{ ml: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography sx={{
            color: '#494949', fontFamily: '"Sora", sans-serif',
            fontWeight: 700,
            fontSize: '24px',
            lineHeight: 1,
          }}>
            ESCOLHA
            <br />
            SEU PLANO.
          </Typography>
          <Typography sx={{
            color: '#FF5500', fontFamily: '"Sora", sans-serif',
            fontWeight: 700,
            fontSize: '24px',
            lineHeight: 1.2,
          }}>
            É GRATIS!
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          mt: 2,
          position: 'relative',
          height: '2px', // Ajuste a altura da linha conforme necessário
          width: '300px', // Ajuste a largura conforme necessário
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '25%', // Porcentagem da linha que será laranja
            backgroundColor: '#FF7B00',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '25%', // Começo da parte cinza após a parte laranja
            height: '100%',
            width: '75%', // Restante da linha que será cinza
            backgroundColor: 'gray',
          },
        }}
      >
        <Divider
          sx={{
            border: 'none',
            height: '100%',
          }}
        />
      </Box>

      <Box sx={{ maxWidth: '300px' }}>
        <Typography variant="h7" component="div" sx={{ mt: 2 }} align="center">
          Escolha o plano de formação da sua Reserva Financeira e construa um futuro seguro. Você pode mudar <strong>planos mais amplos</strong> quando quiser.
        </Typography>
      </Box>

      <Box sx={{ width: '100%', mt: 2 }}>
        <Card
          sx={{
            margin: 2,
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 4, // Cantos arredondados
            overflow: 'hidden', // Garante que as bordas arredondadas sejam aplicadas em todo o conteúdo
          }}
        >
          {/* Seção superior */}
          <Box
            sx={{
              backgroundImage: 'linear-gradient(to right, #532B00, #C47B2D)', // Degradê de bronze escuro para bronze claro
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 1,
            }}
          >
            <Box>
              <img
                src={bronze}
                alt="Bronze"
                style={{
                  width: '100%', // Ajusta a imagem para preencher o Box
                  height: '100%',
                  objectFit: 'cover', // Mantém a proporção da imagem
                  borderRadius: '50%', // Torna a imagem circular
                }}
              />
            </Box>
            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: 'white' }}>
              BRONZE
            </Typography>
            <Typography variant="body2" color="white">
              Plano de 12 meses
            </Typography>
          </Box>

          <CardContent
            sx={{
              backgroundColor: '#EFF0F2', // Cor da caixa inferior
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: 2,
            }}
          >
            <Typography variant="body1" sx={{ color: '#1A1A1A', mb: 2, textAlign: 'center' }}>
              Comece agora e veja os primeiros resultados em 12 meses. Ideal para quem quer um impulso rápido, porém com capacidade de compra reduzida.
            </Typography>
            <CardActions>
              <Button
                variant="contained"
                sx={{
                  borderRadius: '12px',
                  backgroundColor: '#FF5500',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#FF7B00',
                  },
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)', // Adiciona a sombra
                  '&:hover': {
                    backgroundColor: '#FF7B00',
                    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.8)', // Sombra mais forte ao passar o mouse
                  }
                }}
                onClick={() => handleSelectPlan(12)}
              >
                ESCOLHER PLANO BRONZE
              </Button>
            </CardActions>
          </CardContent>
        </Card>

        <Card
          sx={{
            margin: 2,
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 4, // Cantos arredondados
            overflow: 'hidden', // Garante que as bordas arredondadas sejam aplicadas em todo o conteúdo
          }}
        >
          {/* Seção superior */}

          <Box
            sx={{
              background: 'linear-gradient(to right, #272727, #5D566B)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 1,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <StarIcon sx={{ color: 'gold', fontSize: '1.2rem', mr: 1 }} /> {/* Ajusta o tamanho da estrela */}
              <Typography variant="body1" sx={{ color: 'white', lineHeight: 1 }}>
                MAIS ESCOLHIDO
              </Typography>
            </Box>
            <Box>
              <img
                src={prata}
                alt="Plano prata"
                style={{
                  width: '100%', // Ajusta a imagem para preencher o Box
                  height: '100%',
                  objectFit: 'cover', // Mantém a proporção da imagem
                  borderRadius: '50%', // Torna a imagem circular
                }}
              />
            </Box>
            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: 'white' }}>
              Prata
            </Typography>
            <Typography variant="body2" color="white">
              Plano de 24 meses
            </Typography>
          </Box>

          <CardContent
            sx={{
              backgroundColor: '#EFF0F2', // Cor da caixa inferior
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: 2,
            }}
          >
            <Typography variant="body1" sx={{ color: '#1A1A1A', mb: 2, textAlign: 'center' }}>
              O preferido dos nossos usuários! Construa sua reserva com segurança em 24 meses e aproveite o tempo a seu favor.
            </Typography>
            <CardActions>
              <Button
                variant="contained"
                sx={{
                  borderRadius: '12px',
                  backgroundColor: '#FF5500',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#FF7B00',
                  },
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)', // Adiciona a sombra
                  '&:hover': {
                    backgroundColor: '#FF7B00',
                    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.8)', // Sombra mais forte ao passar o mouse
                  }
                }}
                onClick={() => handleSelectPlan(24)}
              >
                ESCOLHER PLANO PRATA
              </Button>
            </CardActions>
          </CardContent>
        </Card>

        <Card
          sx={{
            margin: 2,
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 4, // Cantos arredondados
            overflow: 'hidden', // Garante que as bordas arredondadas sejam aplicadas em todo o conteúdo
          }}
        >
          {/* Seção superior */}

          <Box
            sx={{
              background: 'linear-gradient(to right, #FFC56D, #644903)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 1,
            }}
          >
            <Box>
              <img
                src={ouro}
                alt="Plano ouro"
                style={{
                  width: '100%', // Ajusta a imagem para preencher o Box
                  height: '100%',
                  objectFit: 'cover', // Mantém a proporção da imagem
                  borderRadius: '50%', // Torna a imagem circular
                }}
              />
            </Box>
            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: 'white' }}>
              OURO
            </Typography>
            <Typography variant="body2" color="white">
              Plano de 36 meses
            </Typography>
          </Box>

          <CardContent
            sx={{
              backgroundColor: '#EFF0F2',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: 2,
            }}
          >
            <Typography variant="body1" sx={{ color: '#1A1A1A', mb: 2, textAlign: 'center' }}>
              Continue firme por mais tempo e acumule o máximo de valor. Quanto mais tempo você dedicar, maior será sua reserva financeira e sua realização.
            </Typography>
            <CardActions>
              <Button
                variant="contained"
                sx={{
                  borderRadius: '12px',
                  backgroundColor: '#FF5500',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#FF7B00',
                  },
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)', // Adiciona a sombra
                  '&:hover': {
                    backgroundColor: '#FF7B00',
                    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.8)', // Sombra mais forte ao passar o mouse
                  }
                }}
                onClick={() => handleSelectPlan(36)}
              >
                ESCOLHER PLANO OURO
              </Button>
            </CardActions>
          </CardContent>
        </Card>

      </Box>
      <Box sx={{ mt: 2 }}>
        <img
          src={selo}
          alt="Logo vai pra conta - rodapé"
        />
      </Box>
    </Container >
  );
};

export default RegisterStepOne;
