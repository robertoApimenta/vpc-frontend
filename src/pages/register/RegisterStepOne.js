import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Slider from 'react-slick';

const RegisterStepOne = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const navigate = useNavigate();

    const handleSelectPlan = (plan) => {
        setSelectedPlan(plan);
    };

    const handleProceed = () => {
        if (selectedPlan) {
            localStorage.setItem('selectedPlan', selectedPlan);
            navigate('/register-step-two');
        } else {
            alert("Please select a plan.");
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '20px',
    };

    return (
        <Container maxWidth="md">
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Choose a Plan
                </Typography>
                <Slider {...settings} style={{ width: '100%' }}>
                    <Card
                        sx={{
                            maxWidth: 345,
                            margin: 2,
                            cursor: 'pointer',
                            backgroundColor: selectedPlan === 12 ? '#f0f0f0' : 'white'
                        }}
                        onClick={() => handleSelectPlan(12)}
                    >
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Plano Bronze
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Description for Plano Bronze.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card
                        sx={{
                            maxWidth: 345,
                            margin: 2,
                            cursor: 'pointer',
                            backgroundColor: selectedPlan === 24 ? '#f0f0f0' : 'white'
                        }}
                        onClick={() => handleSelectPlan(24)}
                    >
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Plano Prata
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Description for Plano Prata.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card
                        sx={{
                            maxWidth: 345,
                            margin: 2,
                            cursor: 'pointer',
                            backgroundColor: selectedPlan === 36 ? '#f0f0f0' : 'white'
                        }}
                        onClick={() => handleSelectPlan(36)}
                    >
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Plano Ouro
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Description for Plano Ouro.
                            </Typography>
                        </CardContent>
                    </Card>
                </Slider>
                <CardActions>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleProceed}
                        sx={{ mt: 2 }}
                    >
                        Next
                    </Button>
                </CardActions>
            </Box>
        </Container>
    );
};

export default RegisterStepOne;
