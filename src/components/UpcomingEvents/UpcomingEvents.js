import React, { useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import "./styles.css"


function UpcomingEvents({ events, fetchMoreData }) {
  const containerRef = useRef(null);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
   
    if (scrollTop === 0) {
     
      fetchMoreData('previous');
    } else if (scrollTop + clientHeight >= scrollHeight-100) {
    
      fetchMoreData('next');
    }
  };
  

  return (
    <div className="upcoming-events" ref={containerRef} onScroll={handleScroll}>
      <h2 className="subtitle">Upcoming Events</h2>
      <InfiniteScroll
        dataLength={events.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        scrollableTarget="upcoming-events" 
      >
        <div className="event-list">
          {events.map((event,index) => {
            const eventdate=event.date.slice(0,10)
            const eventKm=event.distanceKm.slice(0,5)

            // In RecommendationEvents Component images are not renderning so i used this function but still images not rendered
            function convertToDirectLink(link) {
                
                const fileId = link.match(/\/file\/d\/([^/]+)/)[1];
                
                const directLink = `https://drive.google.com/uc?export=download&id=${fileId}`;
                console.log(directLink)
                return directLink;
              }
              
             const imageLink = convertToDirectLink(event.imgUrl);
            return (
            
            <div key={index} className="event-card" style={{
                
                backgroundImage: `url(${imageLink})`,
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
      </InfiniteScroll>
    </div>
  );
}

export default UpcomingEvents;
