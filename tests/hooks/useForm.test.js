import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('Pruebas en custom hook useForm', () => {
    const initialForm = {
        username: 'johndoe',
        email: 'johndoe@example.com',
    };

    test('debe de retornar los valores iniciales', () => {
        const { result } = renderHook(() => useForm(initialForm));
        // const { formState, onInputChange, onReset } = result.current;

        // expect(formState).toEqual(initialForm);
        // expect(onInputChange).toBeInstanceOf(Function);
        // expect(onReset).toBeInstanceOf(Function);
        expect(result.current).toEqual({
            username: initialForm.username,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onReset: expect.any(Function),
        })
    });

    test('debe de cambiar el username del formulario', () => {
        const newValue = 'johndoe2';
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;
        act(() => onInputChange({ target: { name: 'username', value: newValue } }));
        expect(result.current.formState.username).toBe(newValue);
        expect(result.current.username).toBe(newValue);
    });

    test('debe de realizar el reset del formulario', () => {
        const newValue = 'johndoe2';
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onReset } = result.current;
        act(() => {
            onInputChange({ target: { name: 'username', value: newValue } })
            onReset();
        });
        expect(result.current.formState).toEqual(initialForm);
    });

});