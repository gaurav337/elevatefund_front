import { Project } from '../types/project.types';

export const calculateProgress = (current: number, goal: number): number => {
    return (current / goal) * 100;
};

export const calculateDaysLeft = (endDate: string): number => {
    const days = Math.ceil((new Date(endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
    return days > 0 ? days : 0;
};

export const sortProjects = (projects: Project[], sortBy: string): Project[] => {
    switch (sortBy) {
        case 'newest':
            return [...projects].sort((a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime());
        case 'funding':
            return [...projects].sort((a, b) => (b.currentFunding / b.fundingGoal) - (a.currentFunding / a.fundingGoal));
        case 'goal':
            return [...projects].sort((a, b) => b.fundingGoal - a.fundingGoal);
        default:
            return projects;
    }
};

export const filterProjects = (
    projects: Project[],
    category: string,
    searchQuery: string
): Project[] => {
    return projects.filter(project => {
        const matchesCategory = category === "All" || project.category === category;
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });
}; 