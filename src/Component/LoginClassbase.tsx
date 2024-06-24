import React, { Component } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Stack, Typography } from '@mui/material';

interface IState {
    user: {
        email: string;
        password: string;
    };
    submitted: boolean;
    errors: {
        email?: string;
        password?: string;
    };
}

class LoginClassbase extends Component<{}, IState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: '',
            },
            submitted: false,
            errors: {},
        };
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            user: {
                ...this.state.user,
                [event.target.name]: event.target.value,
            },
        });
    };

    handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const { email, password } = this.state.user;
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
            console.log(this.state.user);
            this.setState({ submitted: true });
        } else {
            this.setState({ submitted: false });
        }

        this.setState({ errors });
    };

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <Typography variant="h5" component="h5">
                        Login Form
                    </Typography>
                    <Box
                        sx={{
                            width: 500,
                        
                            maxWidth: '100%',
                        }}
                    >
                        <TextField
                            onChange={this.handleChange}
                            fullWidth
                            value={this.state.user.email}
                            name="email"
                            type="email"
                            label="Email"
                            id="email"
                            required
                            error={!!this.state.errors.email}
                            helperText={this.state.errors.email}
                        />
                        <TextField
                            onChange={this.handleChange}
                            sx={{ marginTop: 3 }}
                            fullWidth
                            name="password"
                            type="password"
                            value={this.state.user.password}
                            label="Password"
                            id="password"
                            required
                            error={!!this.state.errors.password}
                            helperText={this.state.errors.password}
                        />
                        <Stack sx={{ marginTop: 2, marginLeft: 2 }} direction="row" spacing={2}>
                            <Button type="submit" variant="outlined">
                                Submit
                            </Button>
                        </Stack>
                    </Box>
                    {this.state.submitted && (
                        <Box sx={{ marginTop: 3 }}>
                            <Typography variant="h6" component="h6">
                                Submitted Data:
                            </Typography>
                            <Typography>Email: {this.state.user.email}</Typography>
                            <Typography>Password: {this.state.user.password}</Typography>
                        </Box>
                    )}
                </form>
            </>
        );
    }
}

export default LoginClassbase;
