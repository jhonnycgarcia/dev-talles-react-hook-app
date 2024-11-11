import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";

/**
 * TODO: estas pruebas no estan pasando
 */
describe('Pruebas en MainApp', () => {

    test('debe de renderizar el componente HomePage', () => {
        render(
            <MemoryRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
            {/* // <MemoryRouter initialEntries={["/"]}> */}
                <MainApp />
            </MemoryRouter>
        );
        // screen.debug();
        expect(screen.getByText('Home Page')).toBeTruthy();
    });

    test('debe de mostrar el componente LoginPage', () => {
        render(
            <MemoryRouter 
                future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
                initialEntries={["/login"]}
            >
                <MainApp />
            </MemoryRouter>
        );
        expect(screen.getByText('Login Page')).toBeTruthy();
    });


});