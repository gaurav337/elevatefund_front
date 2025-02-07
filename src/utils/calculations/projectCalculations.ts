import { Project, ProjectFilters } from '../../types/projects';

export const calculateProgress = (currentFunding: number, fundingGoal: number): number => {
    return Math.min((currentFunding / fundingGoal) * 100, 100);
};

export const calculateDaysLeft = (endDate: string): number => {
    const end = new Date(endDate);
    const now = new Date();
    const diffTime = end.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(diffDays, 0);
};

export const filterProjects = (projects: Project[], filters: ProjectFilters): Project[] => {
    return projects.filter(project => {
        const matchesCategory = !filters.category || filters.category === 'All' || project.category === filters.category;
        const matchesSearch = !filters.searchQuery || 
            project.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(filters.searchQuery.toLowerCase());
        
        return matchesCategory && matchesSearch;
    });
};

export const sortProjects = (projects: Project[], sortBy: string): Project[] => {
    return [...projects].sort((a, b) => {
        switch (sortBy) {
            case 'newest':
                return new Date(b.endDate).getTime() - new Date(a.endDate).getTime();
            case 'funding':
                return b.currentFunding - a.currentFunding;
            case 'goal':
                return b.fundingGoal - a.fundingGoal;
            default:
                return 0;
        }
    });
}; 