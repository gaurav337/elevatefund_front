import React from 'react';
import { motion } from 'framer-motion';
import { ProjectFilters as Filters, SortOption } from '../../types/project.types';

interface ProjectFiltersProps {
    filters: Filters;
    categories: string[];
    onFilterChange: (filters: Partial<Filters>) => void;
}

export const ProjectFilters: React.FC<ProjectFiltersProps> = ({
    filters,
    categories,
    onFilterChange,
}) => {
    return (
        <motion.div
            className="filters-section"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
        >
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search projects..."
                    value={filters.searchQuery}
                    onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
                />
            </div>

            <div className="filter-controls">
                <div className="categories">
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            className={`category-btn ${filters.category === category ? 'active' : ''}`}
                            onClick={() => onFilterChange({ category })}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>

                <div className="sort-options">
                    <select
                        value={filters.sortBy}
                        onChange={(e) => onFilterChange({ sortBy: e.target.value as SortOption })}
                        className="sort-select"
                    >
                        <option value="newest">Newest First</option>
                        <option value="funding">Funding Progress</option>
                        <option value="goal">Funding Goal</option>
                    </select>
                </div>
            </div>
        </motion.div>
    );
}; 