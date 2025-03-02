import React, { useState } from "react";

type CreateTeamFormProps = {
  setCreateTeamFormOpen: (open: boolean) => void;
};

const CreateTeamForm = ({ setCreateTeamFormOpen }: CreateTeamFormProps) => {
  const [team, setTeam] = useState({
    name: "",
    color: "#FF6B00",
    description: "",
    memberCount: 0,
    competitions: 0,
    competitionTeams: 0,
    collaborations: 0,
    collaborationTeams: 0,
    upvotes: 0,
    comments: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTeam((prev) => ({
      ...prev,
      [name]:
        name === "memberCount" ||
        name === "competitions" ||
        name === "competitionTeams" ||
        name === "collaborations" ||
        name === "collaborationTeams" ||
        name === "upvotes" ||
        name === "comments"
          ? parseInt(value) || 0
          : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Created Team:", team);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-gray-800">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Create a Team
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Fill out the form below to create a new team.
          </p>
          <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white">
                Team Name
              </label>
              <input
                type="text"
                name="name"
                value={team.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white">
                Description
              </label>
              <textarea
                name="description"
                rows={3}
                value={team.description}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white">
                Team Color
              </label>
              <input
                type="color"
                name="color"
                value={team.color}
                onChange={handleChange}
                className="mt-1 block w-16 h-10 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white">
                  Member Count
                </label>
                <input
                  type="text"
                  name="memberCount"
                  value={team.memberCount}
                  onChange={handleChange}
                  min="0"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white">
                  Competitions
                </label>
                <input
                  type="text"
                  name="competitions"
                  value={team.competitions}
                  onChange={handleChange}
                  min="0"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white">
                  Competition Teams
                </label>
                <input
                  type="text"
                  name="competitionTeams"
                  value={team.competitionTeams}
                  onChange={handleChange}
                  min="0"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white">
                  Collaborations
                </label>
                <input
                  type="text"
                  name="collaborations"
                  value={team.collaborations}
                  onChange={handleChange}
                  min="0"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white">
                  Collaboration Teams
                </label>
                <input
                  type="text"
                  name="collaborationTeams"
                  value={team.collaborationTeams}
                  onChange={handleChange}
                  min="0"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white">
                  Upvotes
                </label>
                <input
                  type="text"
                  name="upvotes"
                  value={team.upvotes}
                  onChange={handleChange}
                  min="0"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white">
                  Comments
                </label>
                <input
                  type="text"
                  name="comments"
                  value={team.comments}
                  onChange={handleChange}
                  min="0"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:text-white"
                />
              </div>
            </div>

            <div className=" w-full flex justify-between ">
              <button
                type="submit"
                className="rounded-md bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700"
              >
                Create Team
              </button>

              <button
                type="submit"
                onClick={() => setCreateTeamFormOpen(false)}
                className="rounded-md bg-gray-600 px-4 py-2 font-medium text-white hover:bg-red-700"
              >
                Cencel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTeamForm;
