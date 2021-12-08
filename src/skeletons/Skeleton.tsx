import React, { useEffect } from 'react';

const Skeleton = () => {
    useEffect(() => {
        fetch('http://localhost/Campus-Mart-Server/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ product: 'HELLO' })
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>

        </div>
    );
};

export default Skeleton;