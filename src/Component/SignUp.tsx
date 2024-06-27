import React, { Component } from 'react'
import { Box, TextField, Typography, Stack, Button } from '@mui/material';
type Form = {
    username: string;
    email: string;
    password: string;
}
type State = {
    form: Form;
    Data: Form[];
    submit: boolean;
}
const storedata = (): Form[] => {
    const save = localStorage.getItem('save');
    if (save) {
        return JSON.parse(save)
    }
    return []
}
export default class SignUp extends Component<{}, State> {
    constructor(Props: {}) {
        super(Props);
        this.state = {
            form: { username: '', email: '', password: '' },
            Data: storedata(),
            submit: false
        }
    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState((b) => ({
            form: { ...b.form, [name]: value },
        }));
    };
    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { form, Data } = this.state;
        const match = Data.some((data) => data.email===form.email)
        if (match) {
            alert('email matched');
        }
        else {
            alert('email not matched');
        }
        this.setState({
            form: { username: '', email: '', password: '' },
            submit: true,
        })
    }
    render() {
        const { form } = this.state
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <Typography variant="h5" component="h5">
                        Sign up page
                    </Typography>
                    <Box
                        sx={{
                            width: 500,
                            margin: 5,
                            maxWidth: '100%',
                        }}
                    >
                        <TextField

                            fullWidth
                            value={form.username}
                            onChange={this.handleChange}
                            name="username"
                            type="text"
                            label="username"
                        // required

                        />
                        <TextField
                            onChange={this.handleChange}
                            fullWidth
                            value={form.email}
                            name="email"
                            type="email"
                            label="email"
                        // required

                        />
                        <TextField

                            sx={{ marginTop: 3 }}
                            fullWidth
                            name="password"
                            type="password"
                            value={form.password}
                            onChange={this.handleChange}
                            label="Password"
                            id="password"
                        // required
                        />
                        <Stack sx={{ marginTop: 2, marginLeft: 2 }} direction="row" spacing={2}>
                            <Button type="submit" variant="outlined">
                                Submit
                            </Button>
                        </Stack>
                    </Box>

                </form>
            </>
        )
    }
}



