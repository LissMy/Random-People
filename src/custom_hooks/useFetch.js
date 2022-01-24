import axios from "axios";
import { useState, useEffect } from "react"

export const useFetch = (url) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState('')

    // const getData = async() => {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     setData(data);
    //     setLoading(false);
    // }


    // const getData = () => {
    //     setLoading(true)
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(people => setData(people))
    //         .catch(err => setError(err))
    //         .finally(setLoading(false))
    // };

    const getData = () => {
        setLoading(true)
        try {
            axios.get(url)
                .then(response => {
                    setData(response.data);
                    setLoading(false)
                })
          } catch (error) {
            setError(error)
          }
    };
 
    useEffect(() => {
        getData()
    }, [url])

    return {loading, data, error, getData}

}
