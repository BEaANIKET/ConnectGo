import { Team, Event } from '../types';

export const mockTeams: Team[] = [
  {
    id: '1',
    name: 'Team Goku',
    color: '#FF6B00',
    description: 'A team of Dragon Ball enthusiasts who love challenges and competitions.',
    memberCount: 7,
    competitions: 10,
    competitionTeams: 8,
    collaborations: 2,
    collaborationTeams: 2,
    upvotes: 45,
    comments: 12
  },
  {
    id: '2',
    name: 'Puzzle Masters',
    color: '#4F46E5',
    description: 'We specialize in solving puzzles and escape rooms in record time.',
    memberCount: 5,
    competitions: 8,
    competitionTeams: 6,
    collaborations: 3,
    collaborationTeams: 3,
    upvotes: 38,
    comments: 9
  },
  {
    id: '3',
    name: 'Urban Explorers',
    color: '#10B981',
    description: 'Exploring the hidden gems of the city and documenting our adventures.',
    memberCount: 6,
    competitions: 4,
    competitionTeams: 4,
    collaborations: 7,
    collaborationTeams: 5,
    upvotes: 52,
    comments: 18
  },
  {
    id: '4',
    name: 'Trivia Titans',
    color: '#8B5CF6',
    description: 'Undefeated champions of trivia nights across the city.',
    memberCount: 8,
    competitions: 15,
    competitionTeams: 10,
    collaborations: 1,
    collaborationTeams: 1,
    upvotes: 63,
    comments: 21
  },
  {
    id: '5',
    name: 'Culinary Creators',
    color: '#EC4899',
    description: 'Food enthusiasts who love cooking competitions and culinary adventures.',
    memberCount: 6,
    competitions: 6,
    competitionTeams: 5,
    collaborations: 8,
    collaborationTeams: 6,
    upvotes: 47,
    comments: 15
  },
  {
    id: '6',
    name: 'Outdoor Adventurers',
    color: '#F59E0B',
    description: 'Hiking, camping, and outdoor challenges are our specialty.',
    memberCount: 9,
    competitions: 7,
    competitionTeams: 6,
    collaborations: 4,
    collaborationTeams: 3,
    upvotes: 41,
    comments: 11
  }
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Speed Puzzle Challenge',
    description: 'Teams compete to solve a series of increasingly difficult puzzles in the shortest time.',
    type: 'Challenge',
    date: '2025-06-15',
    time: '2:00 PM - 5:00 PM',
    location: 'Puzzle Palace, 123 Main St',
    organizer: {
      id: '2',
      name: 'Puzzle Masters',
      color: '#4F46E5'
    },
    status: 'open',
    upvotes: 28,
    comments: 7
  },
  {
    id: '2',
    title: 'Central Park Treasure Hunt',
    description: 'Navigate through Central Park solving clues to find the hidden treasure.',
    type: 'Challenge',
    date: '2025-06-20',
    time: '10:00 AM - 1:00 PM',
    location: 'Central Park, NYC',
    organizer: {
      id: '3',
      name: 'Urban Explorers',
      color: '#10B981'
    },
    status: 'open',
    upvotes: 35,
    comments: 12
  },
  {
    id: '3',
    title: 'Anime Cosplay Collaboration',
    description: 'Teams collaborate to create and showcase amazing anime cosplay costumes.',
    type: 'Collaboration',
    date: '2025-06-25',
    time: '6:00 PM - 9:00 PM',
    location: 'Anime Convention Center',
    organizer: {
      id: '1',
      name: 'Team Goku',
      color: '#FF6B00'
    },
    status: 'open',
    upvotes: 42,
    comments: 15
  },
  {
    id: '4',
    title: 'Ultimate Trivia Night',
    description: 'Test your knowledge across various categories in this competitive trivia night.',
    type: 'Challenge',
    date: '2025-06-18',
    time: '7:00 PM - 10:00 PM',
    location: 'The Knowledge Bar, 456 Elm St',
    organizer: {
      id: '4',
      name: 'Trivia Titans',
      color: '#8B5CF6'
    },
    status: 'open',
    upvotes: 31,
    comments: 9
  },
  {
    id: '5',
    title: 'International Potluck Picnic',
    description: 'Teams bring dishes from different cultures to share in this collaborative food event.',
    type: 'Collaboration',
    date: '2025-06-27',
    time: '12:00 PM - 3:00 PM',
    location: 'Riverside Park',
    organizer: {
      id: '5',
      name: 'Culinary Creators',
      color: '#EC4899'
    },
    status: 'open',
    upvotes: 39,
    comments: 14
  },
  {
    id: '6',
    title: 'Urban Mystery Challenge',
    description: 'Find the best live Jazz music spot in the city based on clues and local knowledge.',
    type: 'Exploration',
    date: '2025-06-22',
    time: '7:00 PM - 11:00 PM',
    location: 'Downtown District',
    organizer: {
      id: '3',
      name: 'Urban Explorers',
      color: '#10B981'
    },
    status: 'open',
    upvotes: 27,
    comments: 8
  },
  {
    id: '7',
    title: 'Team Movie Night: Anime Marathon',
    description: 'Join us for a night of the best anime movies and series with snacks and discussions.',
    type: 'Hangout',
    date: '2025-06-19',
    time: '6:00 PM - 11:00 PM',
    location: 'Community Center Theater',
    organizer: {
      id: '1',
      name: 'Team Goku',
      color: '#FF6B00'
    },
    status: 'open',
    upvotes: 24,
    comments: 6
  },
  {
    id: '8',
    title: 'Hiking Adventure: Mountain Trail',
    description: 'A challenging hike through scenic mountain trails with photography opportunities.',
    type: 'Hangout',
    date: '2025-06-29',
    time: '8:00 AM - 4:00 PM',
    location: 'Mountain State Park',
    organizer: {
      id: '6',
      name: 'Outdoor Adventurers',
      color: '#F59E0B'
    },
    status: 'open',
    upvotes: 33,
    comments: 11
  }
];