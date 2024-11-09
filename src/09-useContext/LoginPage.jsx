import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
    const { user, setUser } = useContext(UserContext);

    return (
        <>
            <h1>Login Page</h1>
            <hr />
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <button 
                className="btn btn-outline-primary"
                onClick={() => setUser({ name: 'John Doe', email: 'johndoe@example.com' })}
            >
                Establecer usuario
            </button>
        </>
    )
}
