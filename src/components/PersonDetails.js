import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../custom_hooks/useFetch';

const PersonDetails = () => {

    const { data } = useFetch('https://RandomUsers.me/api?results=20');
    const { results } = data;
    const { id } = useParams();
    

    // const [person, setPerson] = useState({})

    useEffect(() => { 
        console.log(data)
        console.log(results?.find(person => console.log(person.login.uuid === id)))
        // setPerson(newPerson)
    }, [data])

    return (
        <div className='h-screen w-full flex items-center justify-center'>
            { id }
        </div>
    )
}

export default PersonDetails
