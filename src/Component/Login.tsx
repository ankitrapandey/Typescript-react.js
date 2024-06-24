import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Stack, Typography } from '@mui/material';

interface IState {
    user: {
        email: string;
        password: string;
    };
}

const Login: React.FC = () => {
    const [state, setState] = useState<IState>({
        user: {
            email: '',
            password: '',
        },
    });

    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            user: {
                ...state.user,
                [event.target.name]: event.target.value,
            },
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const { email, password } = state.user;
        let valid = true;
        let errors = {};

        if (!email) {
            errors = { ...errors, email: 'Email is required' };
            valid = false;
        }
        if (!password) {
            errors = { ...errors, password: 'Password is required' };
            valid = false;
        }

        if (valid) {
            console.log(state.user);
            setSubmitted(true);
        } else {
            setSubmitted(false);
        }

        setErrors(errors);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Typography variant="h5" component="h5">
                    Login Form
                </Typography>
                <Box
                    sx={{
                        width: 500,
                        margin: 5,
                        maxWidth: '100%',
                    }}
                >
                    <TextField
                        onChange={handleChange}
                        fullWidth
                        value={state.user.email}
                        name="email"
                        type="email"
                        label="Email"
                        id="email"
                        required
                        error={!!errors.email}
                        helperText={errors.email}
                    />
                    <TextField
                        onChange={handleChange}
                        sx={{ marginTop: 3 }}
                        fullWidth
                        name="password"
                        type="password"
                        value={state.user.password}
                        label="Password"
                        id="password"
                        required
                        error={!!errors.password}
                        helperText={errors.password}
                    />
                    <Stack sx={{ marginTop: 2, marginLeft: 2 }} direction="row" spacing={2}>
                        <Button type="submit" variant="outlined">
                            Submit
                        </Button>
                    </Stack>
                </Box>
                {submitted && (
                    <Box sx={{ marginTop: 3 }}>
                        <Typography variant="h6" component="h6">
                            Submitted Data:
                        </Typography>
                        <Typography>Email: {state.user.email}</Typography>
                        <Typography>Password: {state.user.password}</Typography>
                    </Box>
                )}
            </form>
        </>
    );
};

export default Login;








