import { useEffect, useState } from 'react';
import { Search, DollarSign, TrendingUp, Users, Activity } from 'lucide-react';
import { Button, Input } from '../components/ui';
import { investorsAPI } from '../services/api';
import type { Project } from '../types/api';
import './InvestorHub.css';

interface Stats {
  title: string;
  value: string;
  trend: string;
  icon: React.ElementType;
}

const stats: Stats[] = [
  {
    title: 'Total Investment',
    value: '₹25.6Cr',
    trend: '+12% from last month',
    icon: DollarSign
  },
  {
    title: 'Active Deals',
    value: '38',
    trend: '+8% from last month',
    icon: Activity
  },
  {
    title: 'Investor Network',
    value: '156',
    trend: '+15% from last month',
    icon: Users
  },
  {
    title: 'Success Rate',
    value: '92%',
    trend: '+5% from last month',
    icon: TrendingUp
  }
];

const InvestorHub = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sector, setSector] = useState('Healthcare');
  const [investmentRange, setInvestmentRange] = useState('');
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const response = await investorsAPI.getAvailableProjects();
        setProjects(response.data.data);
      } catch (error: any) {
        console.error('Failed to fetch projects:', error);
        setError(error.response?.data?.message || 'Failed to load projects');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (error) {
    return (
      <div className="error-message">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="investor-hub">
      <h1 className="investor-title">
        Investor Hub
      </h1>

      {/* Search Section */}
      <div className="search-section">
        <div className="search-form">
          <Input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <select
            value={sector}
            onChange={(e) => setSector(e.target.value)}
            className="search-select"
          >
            <option value="Healthcare">Healthcare</option>
            <option value="Technology">Technology</option>
            <option value="Finance">Finance</option>
          </select>
          <select
            value={investmentRange}
            onChange={(e) => setInvestmentRange(e.target.value)}
            className="search-select"
          >
            <option value="">Investment Range</option>
            <option value="50-200">₹50L - ₹2Cr</option>
            <option value="200-1M">₹2Cr - ₹10Cr</option>
            <option value="1M+">₹10Cr+</option>
          </select>
          <Button variant="primary">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat) => {
          const IconComponent = stat.icon;
          return (
            <div key={stat.title} className="stat-card">
              <div className="stat-header">
                <IconComponent className="stat-icon" />
                <h3 className="stat-title">{stat.title}</h3>
              </div>
              <p className="stat-value">{stat.value}</p>
              <p className="stat-trend">{stat.trend}</p>
            </div>
          );
        })}
      </div>

      {/* Projects List */}
      <div className="projects-section">
        <div className="projects-header">
          <h3 className="projects-title">
            Available Projects
          </h3>
        </div>
        {isLoading ? (
          <div className="loading-message">Loading projects...</div>
        ) : projects.length === 0 ? (
          <div className="empty-message">
            No projects found matching your criteria.
          </div>
        ) : (
          <ul className="projects-list">
            {projects.map((project) => (
              <li
                key={project.id}
                className="project-item"
              >
                <div className="project-content">
                  <div className="project-info">
                    <h4 className="project-name">
                      {project.name}
                    </h4>
                    <p className="project-description">
                      {project.description}
                    </p>
                    <div className="project-funding">
                      <div className="funding-stats">
                        <span>Goal: ₹{project.fundingGoal.toLocaleString()}</span>
                        <span>
                          {((project.fundingRaised / project.fundingGoal) * 100).toFixed(1)}% Funded
                        </span>
                      </div>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{
                            width: `${Math.min(
                              (project.fundingRaised / project.fundingGoal) * 100,
                              100
                            )}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="project-status">
                    {project.status}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default InvestorHub; 