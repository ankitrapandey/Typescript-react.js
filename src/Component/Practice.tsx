// import { RestaurantMenuRounded } from '@mui/icons-material';
// import React, { Component } from 'react'
// type Form = {
//   username: String;
//   email: String;
//   password: String;
// }
// type State = {
//   form: Form
//   Data: Form[]

// }
// const local =():Form[]=>{
//   const form=localStorage.getItem('form');
//   if(form){
//     return JSON.parse(form)
//   }
//   return []
// }
// export default class Practice extends Component<{}, State> {
//   constructor(Props: State) {
//     super(Props)
//     this.state={
//       form:{username:''}
//     }
//   }

//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }
import { Component } from 'react';

interface Showpop {
    show: boolean;
    poppup: boolean;
    hide: boolean;
    message: string;
}

export default class ToastMessage extends Component<{}, Showpop> {
    constructor(props: {}) {
        super(props);
        this.state = {
            show: false,
            message: '',
            poppup: false,
            hide: false
        };
    }

    handlepop = () => {
        this.setState((prevState) => ({
            hide: !prevState.hide,
            poppup: true
        }));
    };

    handleconfirm = () => {
        this.setState({ show: true, poppup: true, message: 'confirm' });
        console.log('confirm');
        setTimeout(() => {
            this.setState({ show: false });
        }, 5000);
    };

    handlecancel = () => {
        this.setState({ show: true, poppup: true, message: 'cancel' });
        setTimeout(() => {
            this.setState({ show: false });
        }, 5000);
    };

    render() {
        const { show, message, poppup, hide } = this.state;
        return (
            <div>
                <div className='h-[60vh] w-[50vw] bg-red-300 rounded-md'>
                   <h1 className='text-3xl text-center'>Toast Message</h1>

                    <p>Notification Message on a piece of information displayed above the page content</p>
                    <button onClick={this.handlepop} className='h-[5vh] w-[7vw] rounded-md bg-green-300'>
                        {hide ? 'Hide' : 'Show'}
                    </button>

                    <div className='h-[20vh] w-[30vh] bg-sky-400 m-auto'>
                        {poppup && (
                            <div>
                                {hide &&
                                <div>
                                    <h1>Toast title</h1>
                                    <p>long details to go here after the title long details go here after the title</p>
                                    <button onClick={this.handleconfirm} className='h-[5vh] w-[7vw] ml-4 rounded-md bg-red-500'>
                                        Confirm
                                    </button>
                                    <button onClick={this.handlecancel} className='h-[5vh] w-[7vw] ml-4 rounded-md bg-red-500 '>
                                        Cancel
                                    </button>
                                </div>
    }
                            </div>
                        )}

                        {show && <div>{message}</div>}
                    </div>
                </div>
            </div>
        );
    }
}

