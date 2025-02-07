import { useState, useCallback } from 'react';
import { Project, ProjectFilters } from '../../types/projects';
import { filterProjects, sortProjects } from '../../utils/calculations/projectCalculations';

const defaultFilters: ProjectFilters = {
    category: 'All',
    searchQuery: '',
    sortBy: 'newest'
};

export const useProjectFilters = (initialProjects: Project[]) => {
    const [filters, setFilters] = useState<ProjectFilters>(defaultFilters);
    const [filteredProjects, setFilteredProjects] = useState<Project[]>(initialProjects);

    const handleFilterChange = useCallback((newFilters: Partial<ProjectFilters>) => {
        const updatedFilters = { ...filters, ...newFilters };
        setFilters(updatedFilters);

        let filtered = filterProjects(initialProjects, updatedFilters);
        if (updatedFilters.sortBy) {
            filtered = sortProjects(filtered, updatedFilters.sortBy);
        }
        
        setFilteredProjects(filtered);
    }, [initialProjects, filters]);

    return {
        filters,
        filteredProjects,
        handleFilterChange
    };
}; 