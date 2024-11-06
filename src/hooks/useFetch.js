import { useEffect, useState } from "react"

export const useFetch = () => {

    const [state, setState] = useState({
        data: null,
        loading: true,
        hasError: false,
        error: null,
    });

    const getFetch = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
        const data = await response.json();

        console.log(data);
    }

    useEffect(() => {
        getFetch();
    }, []);

    return {
        data: state.data,
        loading: state.loading,
        hasError: state.hasError,
    }
}
