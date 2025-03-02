import React from 'react';
import { Link } from 'react-router-dom';
import { ThumbsUp, MessageSquare, Users, Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/Card';
import Button from '../ui/Button';
import { Team } from '../../types';

interface TeamCardProps {
  team: Team;
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  return (
    <Card hover className="h-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div 
              className="flex h-12 w-12 items-center justify-center rounded-full" 
              style={{ backgroundColor: team.color }}
            >
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <CardTitle>{team.name}</CardTitle>
              <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                <Users className="h-4 w-4" />
                <span>{team.memberCount} members</span>
              </div>
            </div>
          </div>
          <div className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
            {team.competitions + team.collaborations} engagements
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 dark:text-gray-400">{team.description}</p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="flex items-center space-x-2 rounded-md bg-gray-50 p-2 dark:bg-gray-800">
            <Calendar className="h-4 w-4 text-red-500" />
            <div className="text-sm">
              <span className="font-medium text-gray-900 dark:text-white">{team.competitions}</span>
              <span className="text-gray-500 dark:text-gray-400"> challenges</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 rounded-md bg-gray-50 p-2 dark:bg-gray-800">
            <Users className="h-4 w-4 text-blue-500" />
            <div className="text-sm">
              <span className="font-medium text-gray-900 dark:text-white">{team.collaborations}</span>
              <span className="text-gray-500 dark:text-gray-400"> collabs</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t border-gray-100 pt-4 dark:border-gray-800">
        <div className="flex space-x-4">
          <button className="flex items-center space-x-1 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400">
            <ThumbsUp className="h-4 w-4" />
            <span className="text-sm">{team.upvotes}</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
            <MessageSquare className="h-4 w-4" />
            <span className="text-sm">{team.comments}</span>
          </button>
        </div>
        <Link to={`/teams/${team.id}`} className="flex items-center text-sm font-medium text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">
          View Team
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TeamCard;