import React from "react";
import {
  ArrowRight,
  Calendar,
  Users,
  Trophy,
  Lightbulb,
  MapPin,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import EventList from "../components/events/EventList";
import { Card, CardContent } from "../components/ui/Card";
import { mockEvents, mockTeams } from "../data/mockData";

const HomePage: React.FC = () => {
  // Get only the first 3 events for the featured section
  const featuredEvents = mockEvents.slice(0, 3);
  // Get top 3 teams for the featured section
  const topTeams = [...mockTeams]
    .sort(
      (a, b) =>
        b.competitions + b.collaborations - (a.competitions + a.collaborations)
    )
    .slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-900 py-20 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Background"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
              Find Your Team. Join Challenges. Make Connections.
            </h1>
            <p className="mb-8 text-lg text-gray-300">
              ConnectGo brings teams together through challenges,
              collaborations, and shared experiences.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Button size="lg">Find Teams</Button>
              <Button variant="outline" size="lg">
                Create a Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 dark:text-red-400">
                150+
              </div>
              <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Active Teams
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 dark:text-red-400">
                320+
              </div>
              <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Monthly Events
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 dark:text-red-400">
                5,000+
              </div>
              <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Community Members
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 dark:text-red-400">
                12+
              </div>
              <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Cities
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              How ConnectGo Works
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Join teams, participate in challenges, and build community
              together
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                Create a Team
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Form a team with friends or join existing teams that match your
                interests.
              </p>
            </div>
            <div className="rounded-lg p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                Participate in Events
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Join challenges, collaborations, explorations, and team
                hangouts.
              </p>
            </div>
            <div className="rounded-lg p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300">
                <Trophy className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                Climb the Leaderboard
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Earn points through participation and rise in the team rankings.
              </p>
            </div>
            <div className="rounded-lg p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300">
                <Lightbulb className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                Suggest New Ideas
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Propose and vote on new challenge ideas for the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="bg-gray-50 py-16 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Featured Events
            </h2>
            <Link
              to="/events"
              className="flex items-center text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
            >
              <span>View all events</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <EventList events={featuredEvents} />
        </div>
      </section>

      {/* Top Teams Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Top Teams
            </h2>
            <Link
              to="/teams"
              className="flex items-center text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
            >
              <span>View all teams</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {topTeams.map((team) => (
              <Card key={team.id} hover className="overflow-hidden">
                <div
                  className="h-2 w-full"
                  style={{ backgroundColor: team.color }}
                ></div>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center space-x-3">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full"
                      style={{ backgroundColor: team.color }}
                    >
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {team.name}
                      </h3>
                      <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                        <Users className="h-4 w-4" />
                        <span>{team.memberCount} members</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                    {team.description}
                  </div>

                  <div className="flex justify-between">
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {team.competitions + team.collaborations}
                      </span>{" "}
                      total engagements
                    </div>
                    <Link
                      to={`/teams/${team.id}`}
                      className="text-sm font-medium text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                    >
                      View Team
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="bg-white py-16 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Upcoming This Week
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Don't miss out on these exciting team events happening soon
            </p>
          </div>

          <div className="space-y-4">
            {mockEvents.slice(0, 4).map((event) => (
              <div
                key={event.id}
                className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-16 w-16 flex-col items-center justify-center rounded-lg bg-red-50 text-center dark:bg-red-900">
                      <span className="text-xs font-medium uppercase text-red-600 dark:text-red-400">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          month: "short",
                        })}
                      </span>
                      <span className="text-2xl font-bold text-red-600 dark:text-red-400">
                        {new Date(event.date).getDate()}
                      </span>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center">
                        <span
                          className="mr-2 inline-block rounded-full px-2 py-1 text-xs font-medium"
                          style={{
                            backgroundColor:
                              event.type === "Challenge"
                                ? "rgba(239, 68, 68, 0.1)"
                                : event.type === "Collaboration"
                                ? "rgba(16, 185, 129, 0.1)"
                                : event.type === "Exploration"
                                ? "rgba(59, 130, 246, 0.1)"
                                : "rgba(139, 92, 246, 0.1)",
                            color:
                              event.type === "Challenge"
                                ? "rgb(239, 68, 68)"
                                : event.type === "Collaboration"
                                ? "rgb(16, 185, 129)"
                                : event.type === "Exploration"
                                ? "rgb(59, 130, 246)"
                                : "rgb(139, 92, 246)",
                          }}
                        >
                          {event.type}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {event.title}
                      </h3>
                      <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center">
                          <Clock className="mr-1 h-4 w-4 text-gray-400" />
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-1 h-4 w-4 text-gray-400" />
                          {event.location}
                        </div>
                        <div className="flex items-center">
                          <Users className="mr-1 h-4 w-4 text-gray-400" />
                          {event.organizer.name}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      Details
                    </Button>
                    <Button variant="primary" size="sm">
                      {event.type === "Challenge"
                        ? "Accept Challenge"
                        : "Join Event"}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link to="/events">
              <Button variant="outline">View All Events</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-black to-gray-900 py-16 text-white">
        <div className="absolute inset-0 z-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Background"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold">
              Ready to Join the Community?
            </h2>
            <p className="mb-8 text-lg text-white/80">
              Create your profile, join teams, and start participating in
              exciting challenges today.
            </p>
            <Button variant="secondary" size="lg">
              Get Started Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
