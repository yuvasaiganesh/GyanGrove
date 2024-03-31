import React from 'react';
import "./styles.css"

function RecommendedEvents({ events }) {
  if (!events || events.length === 0) {
    return null; 
  }

  return (
    <div className="recommended-events">
      <h2 className="subtitle">Recommended Events</h2>
      <div className="event-list">
        <div className="horizontal-scroll">
        {events.map((event,index) => {
            const eventdate=event.date.slice(0,10)
            const eventKm=event.distanceKm.slice(0,5)
            
            
            //In this component images are not rendering 
            return (
            
            <div key={index} className="event-card" style={{
                
                backgroundImage: `url(${event.imgUrl})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                
              }}>

                <div className="details"> 
              <h3>{event.eventName}</h3>
              <p className="eventdesc">{eventdate}</p>
              
              </div>
              <div className="details">
              <p className="eventdesc">{event.cityName}</p>
              <p className="eventdesc">{event.weather}</p>
              <p className="eventdesc">{eventKm} km</p>
             
              </div>
            </div>)
          })}
        </div>
      </div>
    </div>
  );
}

export default RecommendedEvents;
