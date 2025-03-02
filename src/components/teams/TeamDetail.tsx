import React, { useState } from 'react';
import { Users, Calendar, Trophy, MessageSquare, ThumbsUp, Plus, MapPin, Clock, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import TeamMemberManagement from './TeamMemberManagement';
import { Team, User, Event } from '../../types';
import { Link } from 'react-router-dom';

interface TeamDetailProps {
  team: Team;
  teamEvents: Event[];
}

const TeamDetail: React.FC<TeamDetailProps> = ({ team, teamEvents }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'members' | 'events'>('overview');
  
  // Mock team members
  const [teamMembers, setTeamMembers] = useState<User[]>([
    {
      id: 'm1',
      name: 'Jordan Patel',
      email: 'jordan@example.com',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      teams: [team.id]
    },
    {
      id: 'm2',
      name: 'Riley Chen',
      email: 'riley@example.com',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      teams: [team.id]
    },
    {
      id: 'm3',
      name: 'Sam Rodriguez',
      email: 'sam@example.com',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      teams: [team.id]
    }
  ]);

  const handleInviteMember = (userId: string) => {
    // In a real app, this would send an invitation to the user
    console.log(`Invited user ${userId} to team ${team.id}`);
    // For demo purposes, we'll just show a success message
    alert(`Invitation sent to user!`);
  };

  const handleRemoveMember = (userId: string) => {
    // In a real app, this would remove the user from the team
    console.log(`Removed user ${userId} from team ${team.id}`);
    // For demo purposes, we'll update the local state
    setTeamMembers(teamMembers.filter(member => member.id !== userId));
  };

  return (
    <div className="space-y-6">
      <div className="rounded-lg bg-white shadow-sm dark:bg-gray-900">
        <div className="relative h-48 overflow-hidden rounded-t-lg bg-gradient-to-r from-gray-700 to-gray-900">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              alt="Team cover" 
              className="h-full w-full object-cover"
            />
          </div>
          <div 
            className="absolute bottom-0 left-0 h-1 w-full" 
            style={{ backgroundColor: team.color }}
          ></div>
        </div>
        
        <div className="relative px-6 pb-6">
          <div className="flex flex-col space-y-4 md:flex-row md:items-end md:justify-between md:space-y-0">
            <div className="flex items-end space-x-4">
              <div 
                className="-mt-12 flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-white shadow-md dark:border-gray-900" 
                style={{ backgroundColor: team.color }}
              >
                <Users className="h-12 w-12 text-white" />
              </div>
              <div className="pb-2">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{team.name}</h1>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Users className="h-4 w-4" />
                  <span>{team.memberCount} members</span>
                  <span>•</span>
                  <span>{team.competitions + team.collaborations} engagements</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-2 pt-4 md:pt-0">
              <Button variant="outline">Edit Team</Button>
              <Button variant="primary">Challenge Team</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
        <div className="flex border-b border-gray-200 dark:border-gray-800">
          <button
            className={`px-4 py-3 text-sm font-medium ${
              activeTab === 'overview'
                ? 'border-b-2 border-red-600 text-red-600 dark:border-red-400 dark:text-red-400'
                : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
            }`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={`px-4 py-3 text-sm font-medium ${
              activeTab === 'members'
                ? 'border-b-2 border-red-600 text-red-600 dark:border-red-400 dark:text-red-400'
                : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
            }`}
            onClick={() => setActiveTab('members')}
          >
            Members
          </button>
          <button
            className={`px-4 py-3 text-sm font-medium ${
              activeTab === 'events'
                ? 'border-b-2 border-red-600 text-red-600 dark:border-red-400 dark:text-red-400'
                : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
            }`}
            onClick={() => setActiveTab('events')}
          >
            Events
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">About</h2>
                <p className="text-gray-600 dark:text-gray-400">{team.description}</p>
              </div>
              
              <div>
                <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Team Stats</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Total Engagements</p>
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">
                            {team.competitions + team.collaborations}
                          </p>
                        </div>
                        <Trophy className="h-8 w-8 text-red-600 dark:text-red-400" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Competitions</p>
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">
                            {team.competitions}
                          </p>
                        </div>
                        <Calendar className="h-8 w-8 text-red-600 dark:text-red-400" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Collaborations</p>
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">
                            {team.collaborations}
                          </p>
                        </div>
                        <Users className="h-8 w-8 text-red-600 dark:text-red-400" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Upvotes</p>
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">
                            {team.upvotes}
                          </p>
                        </div>
                        <ThumbsUp className="h-8 w-8 text-red-600 dark:text-red-400" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Recent Activity</h2>
                  <Link to="#" className="text-sm font-medium text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">
                    View all
                  </Link>
                </div>
                <div className="space-y-4">
                  <div className="rounded-lg border border-gray-200 p-4 transition-all hover:shadow-sm dark:border-gray-800">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-red-600 dark:text-red-400" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          Created a new challenge: "Speed Puzzle Challenge"
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">2 days ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border border-gray-200 p-4 transition-all hover:shadow-sm dark:border-gray-800">
                    <div className="flex items-center space-x-3">
                      <Trophy className="h-5 w-5 text-red-600 dark:text-red-400" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          Completed a challenge with Team Urban Explorers
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">1 week ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border border-gray-200 p-4 transition-all hover:shadow-sm dark:border-gray-800">
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="h-5 w-5 text-red-600 dark:text-red-400" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          Received 5 new comments on "Anime Cosplay Collaboration"
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">2 weeks ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Team Members</h2>
                  <button 
                    className="text-sm font-medium text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                    onClick={() => setActiveTab('members')}
                  >
                    View all
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {teamMembers.slice(0, 3).map(member => (
                    <div key={member.id} className="flex items-center space-x-3 rounded-lg border border-gray-200 p-3 dark:border-gray-800">
                      <img 
                        src={member.avatar} 
                        alt={member.name} 
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">{member.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{member.email}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'members' && (
            <TeamMemberManagement 
              teamId={team.id}
              members={teamMembers}
              onInviteMember={handleInviteMember}
              onRemoveMember={handleRemoveMember}
            />
          )}

          {activeTab === 'events' && (
            <div className="space-y-6">
              <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Team Events</h2>
                <Button variant="primary" className="flex items-center space-x-2">
                  <Plus className="h-4 w-4" />
                  <span>Create New Event</span>
                </Button>
              </div>
              
              {teamEvents.length > 0 ? (
                <div className="space-y-4">
                  {teamEvents.map(event => (
                    <div key={event.id} className="rounded-lg border border-gray-200 p-4 transition-all hover:shadow-md dark:border-gray-800">
                      <div className="flex flex-col space-y-4 sm:flex-row sm:items-start sm:justify-between sm:space-y-0">
                        <div className="flex items-start space-x-4">
                          <div className="flex h-16 w-16 flex-col items-center justify-center rounded-lg bg-gray-50 text-center dark:bg-gray-800">
                            <span className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                              {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                            </span>
                            <span className="text-2xl font-bold text-gray-900 dark:text-white">
                              {new Date(event.date).getDate()}
                            </span>
                          </div>
                          <div>
                            <div className="mb-1 flex items-center">
                              <span 
                                className="mr-2 inline-block rounded-full px-2 py-1 text-xs font-medium"
                                style={{ 
                                  backgroundColor: event.type === 'Challenge' ? 'rgba(239, 68, 68, 0.1)' : 
                                                event.type === 'Collaboration' ? 'rgba(16, 185, 129, 0.1)' : 
                                                event.type === 'Exploration' ? 'rgba(59, 130, 246, 0.1)' : 
                                                'rgba(139, 92, 246, 0.1)',
                                  color: event.type === 'Challenge' ? 'rgb(239, 68, 68)' : 
                                        event.type === 'Collaboration' ? 'rgb(16, 185, 129)' : 
                                        event.type === 'Exploration' ? 'rgb(59, 130, 246)' : 
                                        'rgb(139, 92, 246)'
                                }}
                              >
                                {event.type}
                              </span>
                              {event.status === 'open' && (
                                <span className="inline-block rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                                  Open
                                </span>
                              )}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{event.title}</h3>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{event.description}</p>
                            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-600 dark:text-gray-400">
                              <div className="flex items-center">
                                <Clock className="mr-1 h-4 w-4 text-gray-400" />
                                {event.time}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="mr-1 h-4 w-4 text-gray-400" />
                                {event.location}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="primary" size="sm">Manage</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-lg border border-gray-200 p-6 text-center dark:border-gray-800">
                  <Calendar className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">No events yet</h3>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">Create your first team event to get started.</p>
                  <div className="mt-6">
                    <Button variant="primary">Create Event</Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamDetail;