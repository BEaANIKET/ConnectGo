import React from "react";
import EventCard from "./EventCard";
import { Event } from "../../types";
import { useNavigate } from "react-router-dom";

interface EventListProps {
  events: Event[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <EventCard
          onclick={() => navigate(`/events/${event.id}`)}
          key={event.id}
          event={event}
        />
      ))}
    </div>
  );
};

export default EventList;
