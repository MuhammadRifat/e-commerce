import { useEffect, useState } from 'react';

type StatusType = 'idle' | 'pending' | 'success' | 'error';
const useAsync = <T>(asyncFunction: () => Promise<T>) => {
    const [data, setData] = useState<T | null>(null);
    const [status, setStatus] = useState<StatusType>('idle');
    const [error, setError] = useState<string | null>(null);

    // call api
    useEffect(() => {
        setStatus('pending');
        setData(null);
        setError(null);

        asyncFunction()
            .then(res => {
                setData(res);
                setStatus('success');
                setError(null);
            })
            .catch(error => {
                setError(error);
                setStatus('error');
                setData(null);
            })
    }, []);

    console.log(asyncFunction);

    return (
        {
            data,
            isLoading: status === 'pending',
            isSuccess: status === 'success',
            isError: status === 'error'
        }
    );
};

export default useAsync;