import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import Button from '../ui/Button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/Card';
import { Team } from '../../types';

interface CreateEventFormProps {
  currentTeam: Team;
  onSubmit: (eventData: any) => void;
  onCancel: () => void;
}

const CreateEventForm: React.FC<CreateEventFormProps> = ({ currentTeam, onSubmit, onCancel }) => {
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    type: 'Challenge',
    date: '',
    time: '',
    location: '',
    status: 'open'
  });

  const [step, setStep] = useState<'details' | 'teams'>('details');
  
  // Mock teams to challenge
  const teamsToChallenge = [
    {
      id: '2',
      name: 'Puzzle Masters',
      color: '#4F46E5',
      memberCount: 5
    },
    {
      id: '3',
      name: 'Urban Explorers',
      color: '#10B981',
      memberCount: 6
    },
    {
      id: '4',
      name: 'Trivia Titans',
      color: '#8B5CF6',
      memberCount: 8
    },
    {
      id: '5',
      name: 'Culinary Creators',
      color: '#EC4899',
      memberCount: 6
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEventData(prev => ({ ...prev, [name]: value }));
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('teams');
  };

  const handleFinalSubmit = (teamId: string, action: 'challenge' | 'collaborate' | 'hangout') => {
    const finalData = {
      ...eventData,
      targetTeamId: teamId,
      action
    };
    onSubmit(finalData);
  };

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>
          {step === 'details' ? 'Create New Team Event' : 'Select Teams to Invite'}
        </CardTitle>
      </CardHeader>
      
      {step === 'details' ? (
        <form onSubmit={handleDetailsSubmit}>
          <CardContent className="space-y-4">
            <div>
              <label htmlFor="title" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Event Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={eventData.title}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-purple-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="description" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={eventData.description}
                onChange={handleChange}
                rows={3}
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-purple-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="type" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Event Type
              </label>
              <select
                id="type"
                name="type"
                value={eventData.type}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-purple-500"
                required
              >
                <option value="Challenge">Challenge</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Exploration">Exploration</option>
                <option value="Hangout">Hangout</option>
              </select>
            </div>
            
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="date" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Date
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={eventData.date}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-4 text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-purple-500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="time" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Time
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Clock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="time"
                    name="time"
                    placeholder="e.g., 2:00 PM - 5:00 PM"
                    value={eventData.time}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-4 text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-purple-500"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="location" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Location
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={eventData.location}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-4 text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-purple-500"
                  required
                />
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="flex justify-between">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Continue
            </Button>
          </CardFooter>
        </form>
      ) : (
        <CardContent className="space-y-6">
          <div>
            <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">Event Summary</h3>
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <div className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{eventData.title}</div>
              <div className="mb-2 text-sm text-gray-600 dark:text-gray-400">{eventData.description}</div>
              <div className="grid grid-cols-1 gap-2 text-sm text-gray-600 dark:text-gray-400 md:grid-cols-3">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  {eventData.date}
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  {eventData.time}
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  {eventData.location}
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">Select Teams to Invite</h3>
            <div className="space-y-3">
              {teamsToChallenge.map(team => (
                <div 
                  key={team.id} 
                  className="flex flex-col justify-between rounded-lg border border-gray-200 p-4 dark:border-gray-700 sm:flex-row sm:items-center"
                >
                  <div className="flex items-center space-x-3">
                    <div 
                      className="flex h-10 w-10 items-center justify-center rounded-full" 
                      style={{ backgroundColor: team.color }}
                    >
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">{team.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{team.memberCount} members</div>
                    </div>
                  </div>
                  <div className="mt-4 flex space-x-2 sm:mt-0">
                    {eventData.type === 'Challenge' && (
                      <Button 
                        variant="primary" 
                        size="sm"
                        onClick={() => handleFinalSubmit(team.id, 'challenge')}
                      >
                        Challenge Team
                      </Button>
                    )}
                    {eventData.type === 'Collaboration' && (
                      <Button 
                        variant="primary" 
                        size="sm"
                        onClick={() => handleFinalSubmit(team.id, 'collaborate')}
                      >
                        Request Collaboration
                      </Button>
                    )}
                    {(eventData.type === 'Exploration' || eventData.type === 'Hangout') && (
                      <Button 
                        variant="primary" 
                        size="sm"
                        onClick={() => handleFinalSubmit(team.id, 'hangout')}
                      >
                        Invite Team
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between pt-4">
            <Button variant="outline" onClick={() => setStep('details')}>
              Back to Details
            </Button>
            <Button variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default CreateEventForm;