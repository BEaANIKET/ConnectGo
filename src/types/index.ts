export interface Team {
  id: string;
  name: string;
  color: string;
  description: string;
  memberCount: number;
  competitions: number;
  competitionTeams: number;
  collaborations: number;
  collaborationTeams: number;
  upvotes: number;
  comments: number;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  type: 'Challenge' | 'Collaboration' | 'Exploration' | 'Hangout';
  date: string;
  time: string;
  location: string;
  organizer: {
    id: string;
    name: string;
    color: string;
  };
  status: 'open' | 'full' | 'completed';
  upvotes: number;
  comments: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  teams: string[];
}