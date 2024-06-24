
import { Component } from "react";

type FormData = {
    username: string;
    email: string;
    password: string;

};

type State = {
    formdata: FormData;
    Data: FormData[];
    submitted: boolean
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
            formdata: { username: '', email: '', password: '', },
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
                formdata: { username: '', email: '', password: '' },
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
                    <div>
                        <input
                            value={formdata.username}
                            onChange={this.handleChange}
                            name="username"
                            type="text"
                            placeholder="Username"
                        />
                        <input
                            value={formdata.email}
                            onChange={this.handleChange}
                            name="email"
                            type="email"
                            placeholder="Email"
                        />
                        <input
                            value={formdata.password}
                            onChange={this.handleChange}
                            name="password"
                            type="password"
                            placeholder="Password"
                        />
                        <button type="submit">Submit</button>
                        summitted data
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
                        </div>
                </form>
                

            </>
        );
    }
}



