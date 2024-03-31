import React, { useState, useEffect } from 'react';
import Banner from './Banner/Banner';
import Header from './Header/Header';
import "../App.css"
import RecommendedEvents from './RecommendedEvents/RecommendedEvents';
import UpcomingEvents from './UpcomingEvents/UpcomingEvents';
import { fetchRecommendedEvents, fetchUpcomingEvents } from '../services/eventService';

function Layout() {
  const [recommendedEvents, setRecommendedEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        const recommendedData = await fetchRecommendedEvents();
        const upcomingData = await fetchUpcomingEvents(page);
        setUpcomingEvents(prevEvents => {
            return [...prevEvents, ...upcomingData.events];
        }); 
        setRecommendedEvents(recommendedData.events);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    }
    fetchData();
  }, [page]);

  const fetchMoreData = async (direction) => {
    try {
      if (direction === 'next') {
        setPage(page + 1);
      } else if (direction === 'previous'  && page > 1) {
        setPage(page - 1); 
      }
    } catch (error) {
      console.error('Error fetching more data:', error.message);
    }
  };

  return (
    <div className="layout">
       <Header/>
      <Banner />
      <RecommendedEvents events={recommendedEvents} />
      <UpcomingEvents events={upcomingEvents} fetchMoreData={fetchMoreData} />
    </div>
  );
}

export default Layout;

