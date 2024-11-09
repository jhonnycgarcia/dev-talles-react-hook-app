import { describe, test, expect, jest, beforeEach } from '@jest/globals';
import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

const pokemonMock = {
    id: 1,
    name: 'bulbasaur',
    sprites: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png'
    ],
}

describe('Pruebas en MultipleCustomHooks', () => {

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement,
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('debe de mostrar el componente por defecto', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: false,
            error: null,
        });

        render(<MultipleCustomHooks />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText('Información de Pókemon'));

        const nextBtn = screen.getByRole('button', { name: 'next-btn' });
        const previousBtn = screen.getByRole('button', { name: 'previous-btn' });
        expect(nextBtn.disabled).toBeTruthy();
        expect(previousBtn.disabled).toBeTruthy();
    });

    test('debe de mostrar un pókemon', () => { 
        useFetch.mockReturnValue({
            data: pokemonMock,
            isLoading: false,
            hasError: false,
            error: null,
        });
        render(<MultipleCustomHooks />);

        expect(screen.getByText(`#${pokemonMock.id} - ${pokemonMock.name}`));
        const nextBtn = screen.getByRole('button', { name: 'next-btn' });
        expect(nextBtn.disabled).toBeFalsy();
        // screen.debug();
     });

     test('debe de llamar la función de incrementar', () => {
        useFetch.mockReturnValue({
            data: pokemonMock,
            isLoading: false,
            hasError: false,
            error: null,
        });

        
        render(<MultipleCustomHooks />);

        const nextBtn = screen.getByRole('button', { name: 'next-btn' });
        fireEvent.click(nextBtn);

        expect( mockIncrement ).toBeCalled();
     });

});