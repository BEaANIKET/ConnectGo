import React, { useState } from "react";
import { useParams } from "react-router-dom";
import TeamDetail from "../components/teams/TeamDetail";
import CreateEventForm from "../components/events/CreateEventForm";
import { mockTeams, mockEvents } from "../data/mockData";

const TeamDetailPage: React.FC = () => {
  const { teamId } = useParams<{ teamId: string }>();
  const [showCreateEvent, setShowCreateEvent] = useState(false);

  // Find the team from mock data
  const team = mockTeams.find((t) => t.id === teamId);

  // Find events organized by this team
  const teamEvents = mockEvents.filter(
    (event) => event.organizer.id === teamId
  );

  const handleCreateEventSubmit = (eventData: any) => {
    console.log("Event created:", eventData);
    // In a real app, this would save the event to the database
    setShowCreateEvent(false);
    // Show success message
    alert("Event created successfully!");
  };

  if (!team) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="rounded-lg border border-gray-200 bg-white p-6 text-center dark:border-gray-800 dark:bg-gray-900">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Team not found
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            The team you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {showCreateEvent ? (
        <div className="mx-auto max-w-4xl">
          <CreateEventForm
            currentTeam={team}
            onSubmit={handleCreateEventSubmit}
            onCancel={() => setShowCreateEvent(false)}
          />
        </div>
      ) : (
        <TeamDetail team={team} teamEvents={teamEvents} />
      )}
    </div>
  );
};

export default TeamDetailPage;
