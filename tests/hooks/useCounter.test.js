import { act, renderHook } from "@testing-library/react";
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

    test('debe de incrementar el contador', () => {
        const initValue = 15;
        const { result, } = renderHook(() => useCounter(initValue));
        const { increment } = result.current;
        act(() => increment());
        expect(result.current.counter).toBe(initValue + 1);
    });

    test('debe de decrementar el contador', () => {
        const initValue = 15;
        const { result, } = renderHook(() => useCounter(initValue));
        const { decrement } = result.current;
        act(() => decrement());
        expect(result.current.counter).toBe(initValue - 1);
    });

    test('debe de resetear el contador', () => {
        const initValue = 15;
        const { result, } = renderHook(() => useCounter(initValue));
        const { reset, increment } = result.current;
        act(() => {
            increment(15);
            reset();
        });
        expect(result.current.counter).toBe(initValue);
    });

});