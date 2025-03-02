import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Users } from 'lucide-react';
import { Team } from '../../types';

interface LeaderboardTableProps {
  teams: Team[];
}

const LeaderboardTable: React.FC<LeaderboardTableProps> = ({ teams }) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Rank
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Team
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Members
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Total Engagements
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Competitions
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Collaborations
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-gray-900">
          {teams.map((team, index) => (
            <tr key={team.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
              <td className="whitespace-nowrap px-6 py-4 text-sm">
                {index < 3 ? (
                  <div className="flex h-6 w-6 items-center justify-center rounded-full" style={{
                    backgroundColor: index === 0 ? '#FFD700' : index === 1 ? '#C0C0C0' : '#CD7F32',
                    color: '#FFF'
                  }}>
                    {index + 1}
                  </div>
                ) : (
                  <span className="font-medium text-gray-900 dark:text-white">{index + 1}</span>
                )}
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div 
                    className="h-10 w-10 flex-shrink-0 rounded-full" 
                    style={{ backgroundColor: team.color }}
                  >
                    <div className="flex h-full w-full items-center justify-center text-white">
                      <Users className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{team.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {team.upvotes} upvotes • {team.comments} comments
                    </div>
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                {team.memberCount}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm">
                <span className="font-medium text-gray-900 dark:text-white">
                  {team.competitions + team.collaborations}
                </span>
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm">
                <div className="flex items-center">
                  <Trophy className="mr-1 h-4 w-4 text-red-500" />
                  <span className="text-gray-500 dark:text-gray-400">
                    {team.competitions} with {team.competitionTeams} teams
                  </span>
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm">
                <div className="flex items-center">
                  <Users className="mr-1 h-4 w-4 text-blue-500" />
                  <span className="text-gray-500 dark:text-gray-400">
                    {team.collaborations} with {team.collaborationTeams} teams
                  </span>
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                <Link 
                  to={`/teams/${team.id}`}
                  className="flex items-center text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                >
                  View
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardTable;