import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: "plars",
        email: "johndoe@example.com",
    });
    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    useEffect(() => {
        // console.log('formState changed', formState);
    }, [formState])

    useEffect(() => {
        // console.log('email changed', email);
    }, [email])
    
    return (
        <>
            <h1>Simple Form</h1>
            <hr />
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="example@email.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            { username === "plars" && <Message /> }

        </>
    )
}
