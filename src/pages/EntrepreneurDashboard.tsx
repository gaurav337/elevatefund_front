import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, Users, DollarSign, TrendingUp, Plus, AlertCircle } from "lucide-react";
import Button from "../components/Button";
import { useAuth } from "../contexts/AuthContext";
import { entrepreneursAPI } from "../services/api";
import './EntrepreneurDashboard.css';

interface Project {
  id: string;
  name: string;
  description: string;
  fundingGoal: number;
  fundingRaised: number;
  status: 'draft' | 'active' | 'funded' | 'closed';
  createdAt: string;
}

interface PaginationState {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

const LoadingSkeleton = () => (
  <div className="loading-skeleton">
    <div className="stats-grid">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="stat-card">
          <div className="stat-header">
            <div className="skeleton-bg h-12 w-12 rounded-full"></div>
            <div className="skeleton-bg h-4 w-16"></div>
          </div>
          <div className="skeleton-bg h-6 mb-2"></div>
          <div className="skeleton-bg h-4 w-3/4"></div>
        </div>
      ))}
    </div>
    <div className="projects-section">
      <div className="projects-header border-b border-gray-200">
        <div className="skeleton-bg h-6 w-1/4"></div>
      </div>
      <div className="p-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="mb-4 last:mb-0">
            <div className="skeleton-bg h-4 w-3/4 mb-2"></div>
            <div className="skeleton-bg h-4 w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const EntrepreneurDashboard = () => {
  const { user } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 10
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      if (user?.id) {
        try {
          setIsLoading(true);
          setError(null);
          const response = await entrepreneursAPI.getProjects(user.id);
          setProjects(response.data.data);
          setPagination(response.data.pagination);
        } catch (error: any) {
          console.error('Failed to fetch projects:', error);
          setError(error.response?.data?.message || 'Failed to load projects. Please try again.');
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchProjects();
  }, [user?.id]);

  const stats = [
    {
      title: "Total Projects",
      value: pagination.totalItems,
      icon: BarChart3,
      trend: "+12.5%",
      color: "blue",
      bgColor: "blue",
    },
    {
      title: "Active Investors",
      value: "24",
      icon: Users,
      trend: "+8.2%",
      color: "emerald",
      bgColor: "emerald",
    },
    {
      title: "Total Funding",
      value: "₹12.5L",
      icon: DollarSign,
      trend: "+15.3%",
      color: "purple",
      bgColor: "purple",
    },
    {
      title: "Growth Rate",
      value: "18.2%",
      icon: TrendingUp,
      trend: "+4.1%",
      color: "amber",
      bgColor: "amber",
    },
  ];

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Entrepreneur Dashboard</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          New Project
        </Button>
      </div>

      {error && (
        <div className="error-message">
          <AlertCircle className="w-5 h-5 mr-2" />
          <span>{error}</span>
        </div>
      )}

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="stat-card"
          >
            <div className="stat-header">
              <div className={`stat-icon-container ${stat.bgColor}`}>
                <stat.icon className={`stat-icon ${stat.color}`} />
              </div>
              <span className="stat-trend">{stat.trend}</span>
            </div>
            <h3 className="stat-value">{stat.value}</h3>
            <p className="stat-title">{stat.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Projects List */}
      <div className="projects-section">
        <div className="projects-header">
          <h3 className="projects-title">Active Projects</h3>
        </div>
        {projects.length === 0 ? (
          <div className="empty-projects">
            <div className="mb-4">
              <Plus className="empty-icon" />
            </div>
            <h3 className="empty-title">No projects yet</h3>
            <p className="empty-description">Get started by creating your first project</p>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Project
            </Button>
          </div>
        ) : (
          <ul className="projects-list">
            {projects.map((project, index) => (
              <motion.li
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="project-item"
              >
                <div className="project-content">
                  <div className="project-info">
                    <h4 className="project-name">{project.name}</h4>
                    <p className="project-description">{project.description}</p>
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
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default EntrepreneurDashboard;
