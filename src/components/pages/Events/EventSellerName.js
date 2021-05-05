import React from 'react';
import useFetch from '../Commons/useFetch';

const EventSellerName=(props)=>{
    const{data:name}=useFetch("http://localhost:8080/eventsellername/"+props.eventId)

    return(
        <div>

            {name && <p>An exclusive event by {name[0].name}</p>}
        </div>
    )
}

export default EventSellerName;