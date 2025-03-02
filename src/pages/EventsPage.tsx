import React, { useState } from 'react';
import EventFilters from '../components/events/EventFilters';
import EventList from '../components/events/EventList';
import CreateEventForm from '../components/events/CreateEventForm';
import { mockEvents, mockTeams } from '../data/mockData';

const EventsPage: React.FC = () => {
  const [filteredEvents, setFilteredEvents] = useState(mockEvents);
  const [showCreateEvent, setShowCreateEvent] = useState(false);
  
  // For demo purposes, we'll use the first team as the current user's team
  const currentTeam = mockTeams[0];
  
  const handleFilterChange = (filters: any) => {
    console.log('Filters changed:', filters);
    
    // Filter events based on type
    let filtered = [...mockEvents];
    
    if (filters.type && filters.type !== 'all') {
      filtered = filtered.filter(event => event.type === filters.type);
    }
    
    // In a real app, we would also filter by date range
    // For now, we'll just set the filtered events
    setFilteredEvents(filtered);
  };
  
  const handleCreateEventSubmit = (eventData: any) => {
    console.log('Event created:', eventData);
    // In a real app, this would save the event to the database
    setShowCreateEvent(false);
    // Show success message
    alert('Event created successfully!');
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {showCreateEvent ? (
          <div className="mx-auto max-w-4xl">
            <CreateEventForm 
              currentTeam={currentTeam}
              onSubmit={handleCreateEventSubmit}
              onCancel={() => setShowCreateEvent(false)}
            />
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Discover Events</h1>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Find challenges, collaborations, explorations, and team hangouts near you.
              </p>
            </div>
            
            <EventFilters 
              onFilterChange={handleFilterChange} 
              onCreateEvent={() => setShowCreateEvent(true)}
            />
            
            <div className="mb-8 rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
              <div className="flex flex-col items-start space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Popular Event Categories</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Explore trending event types in the community
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800 dark:bg-red-900 dark:text-red-200">
                    Escape Rooms
                  </span>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    Treasure Hunts
                  </span>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                    Cooking Challenges
                  </span>
                  <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                    Trivia Nights
                  </span>
                </div>
              </div>
            </div>
            
            <EventList events={filteredEvents} />
            
            <div className="mt-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-800">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Want to host your own event?</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Create a team event and challenge other teams in your area.
                </p>
                <button 
                  className="mt-4 rounded-md bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700"
                  onClick={() => setShowCreateEvent(true)}
                >
                  Create an Event
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EventsPage;