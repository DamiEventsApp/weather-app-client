import React, { useState } from 'react';
import Input from '../input/Input.component';

const TodaysEvents = () => {
    const [events, setEvents] = useState({events: []})

    useEffect(() => {
        const fetchData = async() => {
            const result = await Axios.get("")
        }

        fetchData();
    }, [])

    return (
        <div className="todays-events">
            {
               events && events.map((event, index) => <EventCard key={index} event={event}/>)
            }
        </div>
    )
};

export default TodaysEvents;
