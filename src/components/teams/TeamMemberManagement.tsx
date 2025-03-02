import React, { useState } from 'react';
import { UserPlus, UserMinus, Percent, Search, X } from 'lucide-react';
import Button from '../ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { User } from '../../types';

interface TeamMemberManagementProps {
  teamId: string;
  members: User[];
  onInviteMember: (userId: string) => void;
  onRemoveMember: (userId: string) => void;
}

const TeamMemberManagement: React.FC<TeamMemberManagementProps> = ({
  teamId,
  members,
  onInviteMember,
  onRemoveMember
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showInvitePanel, setShowInvitePanel] = useState(false);

  // Mock potential members with match percentages
  const potentialMembers: (User & { matchPercentage: number })[] = [
    {
      id: 'p1',
      name: 'Alex Johnson',
      email: 'alex@example.com',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      teams: [],
      matchPercentage: 92
    },
    {
      id: 'p2',
      name: 'Jamie Smith',
      email: 'jamie@example.com',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      teams: ['3'],
      matchPercentage: 87
    },
    {
      id: 'p3',
      name: 'Taylor Wilson',
      email: 'taylor@example.com',
      avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      teams: ['5'],
      matchPercentage: 76
    },
    {
      id: 'p4',
      name: 'Morgan Lee',
      email: 'morgan@example.com',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      teams: ['2', '4'],
      matchPercentage: 65
    },
    {
      id: 'p5',
      name: 'Casey Brown',
      email: 'casey@example.com',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      teams: [],
      matchPercentage: 94
    }
  ];

  const filteredPotentialMembers = potentialMembers.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Team Members</h2>
        <Button 
          variant="primary" 
          className="flex items-center space-x-2"
          onClick={() => setShowInvitePanel(!showInvitePanel)}
        >
          <UserPlus className="h-4 w-4" />
          <span>Invite Members</span>
        </Button>
      </div>

      {/* Current Members List */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {members.map(member => (
          <Card key={member.id} hover className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">{member.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{member.email}</div>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-red-600 hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:hover:bg-red-900/20 dark:hover:text-red-300"
                  onClick={() => onRemoveMember(member.id)}
                >
                  <UserMinus className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Invite Panel */}
      {showInvitePanel && (
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Invite New Members</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Find users to invite to your team. Higher match percentages indicate better team compatibility.
              </p>
            </div>
            <button 
              onClick={() => setShowInvitePanel(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="mb-4 relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search users by name or email..."
              className="w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-4 text-gray-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-red-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="space-y-3">
            {filteredPotentialMembers.map(user => (
              <div 
                key={user.id} 
                className="flex items-center justify-between rounded-lg border border-gray-200 p-4 transition-all hover:shadow-sm dark:border-gray-700"
              >
                <div className="flex items-center space-x-3">
                  <img 
                    src={user.avatar} 
                    alt={user.name} 
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">{user.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Percent className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span className={`text-sm font-medium ${
                      user.matchPercentage >= 90 ? 'text-green-600 dark:text-green-400' : 
                      user.matchPercentage >= 75 ? 'text-blue-600 dark:text-blue-400' :
                      'text-gray-600 dark:text-gray-400'
                    }`}>
                      {user.matchPercentage}% match
                    </span>
                  </div>
                  <Button 
                    variant="primary" 
                    size="sm"
                    onClick={() => onInviteMember(user.id)}
                  >
                    Invite
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamMemberManagement;