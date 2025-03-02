import React from 'react';
import LeaderboardTable from '../components/leaderboard/LeaderboardTable';
import { mockTeams } from '../data/mockData';
import { Trophy, Calendar, Users, Star } from 'lucide-react';

const LeaderboardPage: React.FC = () => {
  // Sort teams by total engagements
  const sortedTeams = [...mockTeams].sort((a, b) => {
    const totalEngagementsA = a.competitions + a.collaborations;
    const totalEngagementsB = b.competitions + b.collaborations;
    return totalEngagementsB - totalEngagementsA;
  });
  
  // Get top 3 teams
  const topTeams = sortedTeams.slice(0, 3);

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Team Leaderboard</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Rankings of the most active and engaged teams in our community.
          </p>
        </div>
        
        {/* Top Teams Podium */}
        <div className="mb-12">
          <h2 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">Top Teams This Month</h2>
          <div className="flex flex-col items-end justify-center space-y-4 md:flex-row md:items-end md:space-x-4 md:space-y-0">
            {/* 2nd Place */}
            {topTeams.length > 1 && (
              <div className="flex w-full flex-col items-center md:w-1/3">
                <div 
                  className="flex h-16 w-16 items-center justify-center rounded-full" 
                  style={{ backgroundColor: topTeams[1].color }}
                >
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="mt-2 text-center">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">{topTeams[1].name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{topTeams[1].competitions + topTeams[1].collaborations} engagements</div>
                </div>
                <div className="mt-2 flex h-32 w-full items-end justify-center rounded-t-lg bg-gray-200 dark:bg-gray-700">
                  <div className="flex h-24 w-20 items-center justify-center rounded-t-lg bg-silver text-center text-2xl font-bold text-white">2</div>
                </div>
              </div>
            )}
            
            {/* 1st Place */}
            {topTeams.length > 0 && (
              <div className="flex w-full flex-col items-center md:w-1/3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <div 
                  className="mt-2 flex h-16 w-16 items-center justify-center rounded-full" 
                  style={{ backgroundColor: topTeams[0].color }}
                >
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="mt-2 text-center">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">{topTeams[0].name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{topTeams[0].competitions + topTeams[0].collaborations} engagements</div>
                </div>
                <div className="mt-2 flex h-40 w-full items-end justify-center rounded-t-lg bg-gray-200 dark:bg-gray-700">
                  <div className="flex h-32 w-20 items-center justify-center rounded-t-lg bg-gold text-center text-2xl font-bold text-white" style={{ backgroundColor: '#FFD700' }}>1</div>
                </div>
              </div>
            )}
            
            {/* 3rd Place */}
            {topTeams.length > 2 && (
              <div className="flex w-full flex-col items-center md:w-1/3">
                <div 
                  className="flex h-16 w-16 items-center justify-center rounded-full" 
                  style={{ backgroundColor: topTeams[2].color }}
                >
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="mt-2 text-center">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">{topTeams[2].name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{topTeams[2].competitions + topTeams[2].collaborations} engagements</div>
                </div>
                <div className="mt-2 flex h-24 w-full items-end justify-center rounded-t-lg bg-gray-200 dark:bg-gray-700">
                  <div className="flex h-16 w-20 items-center justify-center rounded-t-lg bg-bronze text-center text-2xl font-bold text-white" style={{ backgroundColor: '#CD7F32' }}>3</div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Total Teams</div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{mockTeams.length}</div>
              </div>
              <div className="rounded-full bg-red-100 p-3 text-red-600 dark:bg-red-900 dark:text-red-300">
                <Users className="h-6 w-6" />
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Total Challenges</div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {mockTeams.reduce((sum, team) => sum + team.competitions, 0)}
                </div>
              </div>
              <div className="rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                <Trophy className="h-6 w-6" />
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Total Collaborations</div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {mockTeams.reduce((sum, team) => sum + team.collaborations, 0)}
                </div>
              </div>
              <div className="rounded-full bg-green-100 p-3 text-green-600 dark:bg-green-900 dark:text-green-300">
                <Calendar className="h-6 w-6" />
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Avg. Engagement</div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {(mockTeams.reduce((sum, team) => sum + team.competitions + team.collaborations, 0) / mockTeams.length).toFixed(1)}
                </div>
              </div>
              <div className="rounded-full bg-purple-100 p-3 text-purple-600 dark:bg-purple-900 dark:text-purple-300">
                <Star className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-6 rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">How Rankings Work</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Teams are ranked based on their total engagements, which include competitions and collaborations with other teams. 
            The more active a team is in the community, the higher they rank on the leaderboard.
          </p>
        </div>
        
        <LeaderboardTable teams={sortedTeams} />
      </div>
    </div>
  );
};

export default LeaderboardPage;