import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        loading: true,
        hasError: false,
        error: null,
    });

    const setLoadingState = () => {
        setState({
            data: null,
            loading: true,
            hasError: false,
            error: null,
        });
    }

    const getFetch = async () => {
        const response = await fetch(url);

        // sleep
        await new Promise(resolve => setTimeout(resolve, 1500));

        if(!response.ok) {
            setState({
                data: null,
                loading: false,
                hasError: true,
                error: {
                    code: response.status,
                    message: response.statusText,
                }
            });
            return;
        }

        const data = await response.json();
        setState({
            data,
            loading: false,
            hasError: false,
            error: null,
        });

        // Manejo del cache
    }

    useEffect(() => {
        setLoadingState();
        getFetch();
    }, [ url ]);

    return {
        data: state.data,
        isLoading: state.loading,
        hasError: state.hasError,
    }
}
