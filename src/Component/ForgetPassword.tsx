// import { Box, Button, TextField } from '@mui/material';
// import React, { Component } from 'react'
// type Form = {
//     email: string;
//     otp: string;
//     password: string;
//     conPass: string
// }
// type State = {
//     form: Form;
//     Data: Form[];
//     matchotp: boolean;
//     genrateotp: string;
//     matchpassword: boolean
//     submit: boolean;
// }
// const storedata = (): Form[] => {
//     const save = localStorage.getItem('save');
//     if (save) {
//         console.log(save);
//         return JSON.parse(save);
//     }
//     return []
// }
// export default class ForgetPassword extends Component<{}, State> {
//     constructor(Props: {}) {
//         super(Props)
//         this.state = {
//             form: { email: '', otp: '', password: '', conPass: '' },
//             submit: false,
//             matchotp: false,
//             matchpassword: false,
//             genrateotp: '',
//             Data: storedata(),
//         }
//     }

//     handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         e.preventDefault();
//         const { name, value } = e.target
//         this.setState((b) => ({
//             form: { ...b.form, [name]: value },
//         }))

//     }

//     generateOTP = () => {
//         const nums = '0123456789';
//         let OTP = '';
//         const len = nums.length;
//         for (let i = 0; i < 4; i++) {
//             OTP += nums[Math.floor(Math.random() * len)];
//         }
//         console.log(`get otp ${OTP}`);

//         this.setState((e) => ({
//             genrateotp: OTP,
//             // formData: { ...e.formData, OTP }
//         }));
//     };

//     handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const { form, Data } = this.state
//         const matchemail = Data.some((data) => data.email === form.email);
//         if (matchemail) {
//             this.setState(() => ({
//                 matchotp: true,
//             }))
//             alert('matched email');
//             this.generateOTP();
//         }
//         else {
//             alert('email not matched');
//         }
//     }
//     render() {
//         const { form, submit } = this.state
//         return (
//             <div>
//                 <form action="" onSubmit={this.handleSubmit}>
//                     <Box>
//                         <TextField
//                             fullWidth
//                             label="email"
//                             name='email'
//                             type='email'
//                             value={form.email}
//                             onChange={this.handleChange}
//                         >

//                         </TextField>
//                         <Button type='submit'>submit</Button>
//                     </Box>
//                 </form>
//             </div>
//         )
//     }
// }


import { Component, FormEvent, ChangeEvent } from 'react';
import { TextField, Button, Typography } from '@mui/material';

type FormData = {
  email: string;
  OTP: string;
  password: string;
  confirmPassword: string;
};

type State = {
  formData: FormData;
  Data: FormData[];
  matchOtp: boolean;
  matchPass: boolean;
  generateOTP: string;
 
};

const localStorageData = (): FormData[] => {
  const formData = localStorage.getItem('formdata');
 
  if (formData) {
    return JSON.parse(formData);
  }
  return [];
};

class ForgetPassword extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      formData: { email: '', OTP: '', password: '', confirmPassword: '' },
      Data: localStorageData(),
      matchOtp: false,
      matchPass: false,
      generateOTP: '',
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((b) => ({
      formData: { ...b.formData, [name]: value },
    }));

  };

  generateOTP = () => {
    const digits = '0123456789';
    let OTP = '';
    const len = digits.length;
    for (let i = 0; i < 4; i++) {
      OTP += digits[Math.floor(Math.random() * len)];
    }
    console.log(`get otp: ${OTP}`);

    this.setState((e) => ({
      generateOTP: OTP,
      // formData: { ...prevState.formData, OTP }
    }));
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { formData, Data } = this.state;
    const matchemail = Data.some((data) => data.email === formData.email);
    if (matchemail) {
      this.setState({
        matchOtp: true,
      });
      alert('Email matched.');
      this.generateOTP();
    } else {
      alert('Email not found.');
    }
  };

  handleOtp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { OTP } = this.state.formData;
    const { generateOTP } = this.state;

    if (OTP === generateOTP) {
      alert('OTP matched.');
      this.setState({
        // formData: { ...this.state.formData, },
        matchPass: true,
      });
    } else {
      alert('OTP does not match.');
    }
  };

  handlePassword = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { password, confirmPassword } = this.state.formData;
    if (password === confirmPassword) {
      alert('Passwords match.');
      this.setState({
        matchPass: true,
      },
       () => {
        const { formData,Data } = this.state;
        const newValue = Data && Data.map((ele,index)=>{
          if (ele.email === formData.email ){
            ele.password = formData.password
          }
                return ele
        })
        localStorage.setItem('formdata', JSON.stringify(newValue));
      });
    } else {
      alert('Passwords do not match.');
    }
  };

  render() {
    const { formData, matchOtp, matchPass } = this.state;
    return (
      <div className='h-auto w-[40vw] bg-orange-300 mt-6'>
        <h1>Forget Password</h1>
        <form onSubmit={this.handleSubmit}>
          <TextField
            sx={{ width: '70%' }}
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={this.handleChange}
          />

          <Button
            sx={{ width: '15vw' }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </form>

        {matchOtp && (
          <form onSubmit={this.handleOtp}>
            <Typography variant="h6" component="h2" gutterBottom>
              Enter OTP
            </Typography>
            <TextField
              sx={{ width: '70%' }}
              label="OTP"
              variant="outlined"
              fullWidth
              margin="normal"
              name="OTP"
              value={formData.OTP}
              onChange={this.handleChange}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ marginTop: '10px' }}
            >
              Match OTP
            </Button>
          </form>
        )}

        {matchPass && (
          <form onSubmit={this.handlePassword}>
            <Typography variant="h6" component="h2" gutterBottom>
              New Password
            </Typography>
            <TextField
              sx={{ width: '70%' }}
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              name="password"
              type="password"
              value={formData.password}
              onChange={this.handleChange}
            />
            <Typography variant="h6" component="h2" gutterBottom>
              Confirm Password
            </Typography>
            <TextField
              sx={{ width: '70%' }}
              label="Confirm Password"
              variant="outlined"
              fullWidth
              margin="normal"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={this.handleChange}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ marginTop: '10px' }}
            >
              Match Password
            </Button>
          </form>
        )}
      </div>
    );
  }
}

export default ForgetPassword;
