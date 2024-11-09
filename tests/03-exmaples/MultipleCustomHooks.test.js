import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";

describe('Pruebas en MultipleCustomHooks', () => {

    test('debe de mostrar el componente por defecto', () => {
        render(<MultipleCustomHooks />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText('Información de Pókemon'));

        const nextBtn = screen.getByRole('button', { name: 'next-btn' });
        const previousBtn = screen.getByRole('button', { name: 'previous-btn' });
        expect(nextBtn.disabled).toBeTruthy()
        expect(previousBtn.disabled).toBeTruthy()
    });

});