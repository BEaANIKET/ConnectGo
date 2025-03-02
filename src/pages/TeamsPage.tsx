import React, { useState } from "react";
import TeamFilters from "../components/teams/TeamFilters";
import TeamList from "../components/teams/TeamList";
import { mockTeams } from "../data/mockData";
import CreateTeamForm from "../components/CreateTeam";

const TeamsPage: React.FC = () => {
  const [filteredTeams, setFilteredTeams] = useState(mockTeams);
  const [createTeamFormOpen, setCreateTeamFormOpen] = useState(false);

  const handleFilterChange = (filters: any) => {
    console.log("Filters changed:", filters);
    // In a real app, this would filter the teams based on the selected filters
    // For now, we'll just simulate filtering
    if (filters.sort === "popular") {
      setFilteredTeams([...mockTeams].sort((a, b) => b.upvotes - a.upvotes));
    } else if (filters.sort === "active") {
      setFilteredTeams(
        [...mockTeams].sort(
          (a, b) =>
            b.competitions +
            b.collaborations -
            (a.competitions + a.collaborations)
        )
      );
    } else if (filters.sort === "newest") {
      // In a real app, we would sort by creation date
      // For now, just randomize the order
      setFilteredTeams([...mockTeams].sort(() => Math.random() - 0.5));
    } else {
      setFilteredTeams(mockTeams);
    }
  };

  const handleOpenCreateForm = () => {
    setCreateTeamFormOpen(true);
  };

  return (
    <>
      {createTeamFormOpen ? (
        <CreateTeamForm setCreateTeamFormOpen={setCreateTeamFormOpen} />
      ) : (
        <div className="bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Find Teams
              </h1>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Discover teams, challenge them to competitions, or collaborate
                on projects.
              </p>
            </div>

            <TeamFilters
              setCreateTeamFormOpen={setCreateTeamFormOpen}
              onFilterChange={handleFilterChange}
            />
            <TeamList teams={filteredTeams} />

            <div className="mt-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-800">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Can't find what you're looking for?
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Create your own team and start organizing events and
                  challenges.
                </p>
                <button
                  onClick={handleOpenCreateForm}
                  className="mt-4 rounded-md bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700"
                >
                  Create a Team
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TeamsPage;
