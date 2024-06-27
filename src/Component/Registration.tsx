// import React, { Component } from 'react'
// import { Typography, TextField, Button, Box, Stack } from '@mui/material'
// type Form = {
//     username: string,
//     email: string,
//     password: string,
// }
// type State = {
//     form: Form;
//     Data: Form[];
//     submitted: boolean;
//     error: {
//         username: string;
//         email: string;
//         password: string;
//     }
// }

// const storedata = (): Form[] => {
//     const save = localStorage.getItem('save');
//     if (save) {
//         console.log(JSON.parse(save));
//         return JSON.parse(save);
//     }
//     return [];
// }
// export default class Registration extends Component<{}, State> {
//     constructor(Props: {}) {
//         super(Props);
//         this.state = {
//             form: { username: '', email: '', password: '' },
//             Data: storedata(),
//             submitted: false,
//             error: { username: '', email: '', password: '' }
//         }
//     }
//     handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         this.setState((b) => ({
//             form: { ...b.form, [name]: value },
//             error: { ...b.error, [name]: '' }
//         }));
//     }
//     handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const { form, Data } = this.state;

//         const errors = {
//             username: form.username.trim() === '',
//             email: form.email.trim() === '',
//             password: form.password.trim() === '',
//         };

//         if (Object.values(errors).some(Boolean)) {
//             this.setState({
//                 error: {
//                     username: errors.username ? 'Please fill username field' : '',
//                     email: errors.email ? 'Please fill email field' : '',
//                     password: errors.password ? 'Please fill password field' : '',
//                 },
//             });
//             return
//         }

//         const Email = Data.some((data) => data.email === form.email);
//         if (Email) {
//             this.setState({
//                 error: {
//                     ...this.state.error,
//                     email: 'Email already present',
//                 },
//             });
//             return;
//         }
//         this.setState(
//             (b) => ({
//                 Data: [...b.Data, b.form],
//                 submitted: true,
//                 form: { username: '', email: '', password: '' },
//                 error: { username: '', email: '', password: '' },
//             }),
//             () => localStorage.setItem('data save on local storage', JSON.stringify(this.state.Data))
//         );
//     };


//     render() {
//         const { form, Data, submitted, error } = this.state;
//         return (
//             <>

//                 <form onSubmit={this.handleSubmit}>
//                     <Typography variant="h5" component="h5">
//                     Registration form
//                     </Typography>
//                     <Box
//                         sx={{
//                             width: 500,
//                             margin: 5,
//                             maxWidth: '100%',
//                         }}
//                     >
//                         <TextField
//                             onChange={this.handleChange}
//                             fullWidth
//                             value={form.username}
//                             name="username"
//                             type="text"
//                             label="username"
//                         // required

//                         />
//                         {error.username && <Typography style={{ color: 'red' }}>{error.username}</Typography>}
//                         <TextField
//                             onChange={this.handleChange}
//                             fullWidth
//                             value={form.email}
//                             name="email"
//                             type="email"
//                             label="email"
//                         // required

//                         />
//                         {error.email && <Typography style={{ color: 'red' }}>{error.email}</Typography>}
//                         <TextField
//                             onChange={this.handleChange}
//                             sx={{ marginTop: 3 }}
//                             fullWidth
//                             name="password"
//                             type="password"
//                             value={form.password}
//                             label="Password"
//                             id="password"
//                         // required
//                         />
//                         {error.password && <Typography style={{ color: 'red' }}>{error.password}</Typography>}
//                         <Stack sx={{ marginTop: 2, marginLeft: 2 }} direction="row" spacing={2}>
//                             <Button type="submit" variant="outlined">
//                                 Submit
//                             </Button>
//                         </Stack>
//                     </Box>
//                     {submitted && (
//                         <Box sx={{ marginTop: 3 }}>
//                             {Data.map((data, index) => (
//                                 <Box sx={{ marginTop: 3 }}>
//                                     <Typography key={index} variant="h6" component="h6">
//                                         Submitted Data:
//                                     </Typography>
//                                     <Typography>UserName: {data.username}</Typography>
//                                     <Typography>Email: {data.email}</Typography>
//                                     <Typography>Password: {data.password}</Typography>
//                                 </Box>
//                             ))}
//                         </Box>
//                     )}
//                 </form>
//                 <a href="/forgetpassword">Forget Password</a>
//             </>
//         )
//     }
// }



import { Button, Box, TextField } from "@mui/material";
import { Component } from "react";
type FormData = {
    username: string;
    email: string;
    password: string;

};
type State = {
    formdata: FormData;
    Data: FormData[];
    submitted: boolean;

};

const LocalStorage = (): FormData[] => {
    const formdata = localStorage.getItem('formdata');
    if (formdata) {
        return JSON.parse(formdata);
    }
    return [];
};

export default class LoginPage extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            formdata: { username: '', email: '', password: '' },
            Data: LocalStorage(),
            submitted: false,
        };
    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            formdata: { ...prevState.formdata, [name]: value },
        }));
    };

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState(
            (prevState) => ({
                Data: [...prevState.Data, prevState.formdata],
                formdata: {
                    username: '', email: '', password: ''
                },
            }),
            () => localStorage.setItem('formdata', JSON.stringify(this.state.Data))
        );
    };

    componentDidMount(): void {
        const data = LocalStorage();
        if (data) {
            this.setState({ Data: data, submitted: true });
        }
    }
    render() {
        const { formdata, Data, submitted } = this.state;
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <Box>
                        <TextField
                            fullWidth
                            value={formdata.username}
                            onChange={this.handleChange}
                            name="username"
                            label='userName'
                            type="text"
                        >
                        </TextField>

                        <TextField
                            fullWidth
                            value={formdata.email}
                            onChange={this.handleChange}
                            label='Email'
                            name="email"
                            type="email"
                        >
                        </TextField>

                        <TextField
                            fullWidth
                            value={formdata.password}
                            onChange={this.handleChange}
                            name="password"
                            type="password"
                            label='password'
                        >
                        </TextField>


                        <Button type="submit">Submit</Button>

                        {submitted && (
                            <div>
                                {Data.map((data, index) => (

                                    <div key={index}>
                                        <h2>UserName: {data.username}</h2>
                                        <h2> Email: {data.email}</h2>
                                        <h2> Password: {data.password}</h2>

                                    </div>
                                ))}

                            </div>
                        )}
                    </Box>

                </form>
                <a href="/forgetpassword">Forget Password</a>

            </>
        );
    }
}



