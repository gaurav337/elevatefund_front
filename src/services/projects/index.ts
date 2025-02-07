import { Project, ProjectStats } from '../../types/projects';
import { calculateProgress, calculateDaysLeft } from '../../utils/calculations/projectCalculations';

type RawProject = Omit<Project, 'progressPercentage' | 'daysLeft'>;

export const enrichProjectData = (project: RawProject): Project => {
    try {
        const progressPercentage = calculateProgress(project.currentFunding, project.fundingGoal);
        const daysLeft = calculateDaysLeft(project.endDate);

        return {
            ...project,
            progressPercentage,
            daysLeft,
        };
    } catch (error) {
        console.error('Error enriching project data:', error);
        return {
            ...project,
            progressPercentage: 0,
            daysLeft: 0,
        };
    }
};

export const calculateProjectStats = (projects: Project[]): ProjectStats => {
    if (!projects.length) {
        return {
            totalInvestors: 0,
            totalFunding: 0,
            averageReturn: 0,
            activeProjects: 0,
            averageProgress: 0,
            totalProjects: 0,
            successRate: 0,
        };
    }

    try {
        const totalFunding = projects.reduce((sum, project) => sum + project.currentFunding, 0);
        const totalProjects = projects.length;
        const averageProgress = projects.reduce((sum, project) => sum + project.progressPercentage, 0) / totalProjects;
        const successfulProjects = projects.filter(project => project.progressPercentage >= 100).length;
        const successRate = (successfulProjects / totalProjects) * 100;

        return {
            totalInvestors: 5000,
            totalFunding: totalFunding,
            averageReturn: 25,
            activeProjects: 150,
            averageProgress: averageProgress,
            totalProjects: totalProjects,
            successRate: successRate
        };
    } catch (error) {
        console.error('Error calculating project stats:', error);
        return {
            totalInvestors: 0,
            totalFunding: 0,
            averageReturn: 0,
            activeProjects: 0,
            averageProgress: 0,
            totalProjects: projects.length,
            successRate: 0,
        };
    }
}; 