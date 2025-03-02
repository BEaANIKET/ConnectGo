import React from "react";
import {
  Calendar,
  MapPin,
  Clock,
  ThumbsUp,
  MessageSquare,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/Card";
import Button from "../ui/Button";
import { Event } from "../../types";

interface EventCardProps {
  event: Event;
  onclick: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onclick }) => {
  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return (
    <Card hover className="h-full overflow-hidden">
      <div className="relative">
        <div
          className="h-2 w-full"
          style={{ backgroundColor: getEventTypeColor(event.type).accent }}
        ></div>
        <div className="absolute left-6 top-0 flex h-16 w-16 flex-col items-center justify-center rounded-b-lg bg-white text-center shadow-md dark:bg-gray-800">
          <span className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
            {eventDate.toLocaleDateString("en-US", { month: "short" })}
          </span>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            {eventDate.getDate()}
          </span>
        </div>
      </div>

      <CardHeader className="pt-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="mb-1 flex items-center">
              <span
                className="mr-2 inline-block rounded-full px-2 py-1 text-xs font-medium"
                style={{
                  backgroundColor: getEventTypeColor(event.type).bg,
                  color: getEventTypeColor(event.type).text,
                }}
              >
                {event.type}
              </span>
              {event.status === "open" && (
                <span className="inline-block rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                  Open
                </span>
              )}
            </div>
            <CardTitle onclick={onclick}>{event.title}</CardTitle>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
          {event.description}
        </p>

        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <Clock className="mr-2 h-4 w-4 text-gray-400" />
            {event.time}
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <MapPin className="mr-2 h-4 w-4 text-gray-400" />
            {event.location}
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <Users className="mr-2 h-4 w-4 text-gray-400" />
            Hosted by:
            <div
              className="ml-2 h-5 w-5 rounded-full"
              style={{ backgroundColor: event.organizer.color }}
            >
              <div className="flex h-full w-full items-center justify-center text-white text-xs">
                {event.organizer.name.charAt(0)}
              </div>
            </div>
            <span className="ml-1 font-medium">{event.organizer.name}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between border-t border-gray-100 pt-4 dark:border-gray-800">
        <div className="flex space-x-4">
          <button className="flex items-center space-x-1 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400">
            <ThumbsUp className="h-4 w-4" />
            <span className="text-sm">{event.upvotes}</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
            <MessageSquare className="h-4 w-4" />
            <span className="text-sm">{event.comments}</span>
          </button>
        </div>
        {event.status === "open" ? (
          <Button variant="primary" size="sm">
            {event.type === "Challenge" ? "Accept Challenge" : "Join Event"}
          </Button>
        ) : (
          <Button variant="outline" size="sm" disabled>
            {event.status}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

function getEventTypeColor(type: string) {
  switch (type) {
    case "Challenge":
      return {
        bg: "rgba(239, 68, 68, 0.1)",
        text: "rgb(239, 68, 68)",
        accent: "#EF4444",
      };
    case "Collaboration":
      return {
        bg: "rgba(16, 185, 129, 0.1)",
        text: "rgb(16, 185, 129)",
        accent: "#10B981",
      };
    case "Exploration":
      return {
        bg: "rgba(59, 130, 246, 0.1)",
        text: "rgb(59, 130, 246)",
        accent: "#3B82F6",
      };
    case "Hangout":
      return {
        bg: "rgba(139, 92, 246, 0.1)",
        text: "rgb(139, 92, 246)",
        accent: "#8B5CF6",
      };
    default:
      return {
        bg: "rgba(107, 114, 128, 0.1)",
        text: "rgb(107, 114, 128)",
        accent: "#6B7280",
      };
  }
}

export default EventCard;
