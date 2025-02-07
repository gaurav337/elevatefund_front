export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  endDate: string;
  fundingGoal: number;
  currentFunding: number;
  image: string;
  status: 'active' | 'completed' | 'upcoming';
  progress: number;
  progressPercentage: number;
  stage: string;
  risk: string;
  location: string;
  teamSize: number;
  daysLeft: number;
  creator: {
    name: string;
    avatar: string;
  };
  stats: {
    investors: number;
    raised: number;
    remaining: number;
  };
  tags: string[];
}

export interface ProjectCardProps {
  project: Project;
  className?: string;
  onLearnMore?: (project: Project) => void;
} 