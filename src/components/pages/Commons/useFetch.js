import React from 'react';

const useFetch=(url)=>{
    const [data, setData]=React.useState(null);
    const[loading, setLoading]=React.useState(true);
    const [error, setError]=React.useState(null)

    React.useEffect(()=>{
        console.log('useEffect');
        fetch(url)
            .then(res=>{
                if(!res.ok){
                    throw Error('No data at target resources');
                }
                console.log(res)
                return res.json()
            })
            .then(data=>{
                console.log(data)
                setData(data);
                setLoading(false);
                setError(null)
            })
            .catch(err=>{
                setError(err.message);
                setLoading(false);
                setData(null)
            });
    },[url]);
    return{data,loading,error}

}

export default useFetch;