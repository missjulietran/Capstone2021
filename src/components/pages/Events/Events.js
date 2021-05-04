import React from 'react';
import useFetch from '../Commons/useFetch';
import Container from 'react-bootstrap/Container';
import EventsCard from './EventsCard';

const Events=()=>{
    const{data:event,loading,error}=useFetch("http://localhost:8080/events")
    return(
        <Container fluid>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {event && <EventsCard section={event}/>}
        </Container>  
    )
}

export default Events