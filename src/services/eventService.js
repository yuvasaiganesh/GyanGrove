export async function fetchRecommendedEvents() {
    const response = await fetch(`https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco`);
    const data = await response.json();
    console.log(data.events)
    return data;
  }
  

export async function fetchUpcomingEvents(page) {
    const response = await fetch(`https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page}&type=upcoming`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch upcoming events');
    }
  
    const data = await response.json();
    console.log(data.events)
   
    return data;
  }
  
  