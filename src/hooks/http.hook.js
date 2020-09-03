import {useState, useCallback} from 'react';

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true);

        try{
            headers['Content-type'] = 'application/json';
            const options = {
                method,
                headers,
            }
            if(body){
                options.body = JSON.stringify(body)
            }
            const response = await fetch(url, options);
            const data = await response.json();

            if(!response.ok){
                throw new Error(data.message || 'Something went wrong')
            }
            setLoading(false);

            if(data.errors && data.errors.length) {
                setError( data.errors.map((errorData) => errorData.msg).join('<br>') );
            }

            return data
        }catch (e) {
            console.log('Handled an Error ', e)
            setLoading(false)
            setError(e.message)
        }
    }, [])

    const clearError = useCallback(() => {
        setError(null);
    }, [])

    return {
        loading,
        request,
        error,
        clearError,
    }
}
