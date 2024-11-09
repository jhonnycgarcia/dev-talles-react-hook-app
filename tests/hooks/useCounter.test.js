import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('Pruebas en custom hook useCounter', () => {

    test('debe de retornar los valores iniciales', () => {
        const { result } = renderHook(() => useCounter(10));
        const { counter, increment, decrement, reset } = result.current;

        expect(counter).toBe(10);
        // expect(increment).toBeInstanceOf(Function);
        expect(decrement).toEqual(expect.any(Function));
        expect(decrement).toBeInstanceOf(Function);
        expect(reset).toBeInstanceOf(Function);
    });

    test('debe de inicializar el contador con el parámetro recibido', () => {
        const initValue = 100;
        const { result } = renderHook(() => useCounter(initValue));
        const { counter } = result.current;

        expect(counter).toBe(initValue);
    });

});