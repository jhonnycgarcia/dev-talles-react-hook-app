import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Pruebas en LoginPage', () => {

    const user = { name: 'John Doe', email: 'johndoe@example.com' };
    const setUserMock = jest.fn();

    test('debe de renderizar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage />
            </UserContext.Provider>
        );
        // screen.debug();
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
    });

    test('debe de llamar el setUser cuando se hace click en el botón', () => {
        render(
            <UserContext.Provider value={{user: null, setUser: setUserMock}}>
                <LoginPage />
            </UserContext.Provider>
        );
        // screen.debug();
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(setUserMock).toHaveBeenCalledWith(user);
    });

});