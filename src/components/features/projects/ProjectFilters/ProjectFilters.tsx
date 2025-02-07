import React from 'react';
import { ProjectFilters as ProjectFiltersType } from '../../../../types/projects';
import { PROJECT_CATEGORIES } from '../../../../constants/projects';
import styles from './styles.module.css';

interface ProjectFiltersProps {
    filters: ProjectFiltersType;
    onFilterChange: (filters: ProjectFiltersType) => void;
}

export const ProjectFilters: React.FC<ProjectFiltersProps> = ({ filters, onFilterChange }) => {
    const handleCategoryChange = (category: string) => {
        onFilterChange({ ...filters, category });
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onFilterChange({ ...filters, searchQuery: event.target.value });
    };

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onFilterChange({ ...filters, sortBy: event.target.value as any });
    };

    const categoryValues = Object.values(PROJECT_CATEGORIES);

    return (
        <div className={styles.filters}>
            <div className={styles.searchBar}>
                <input
                    type="text"
                    placeholder="Search projects..."
                    value={filters.searchQuery}
                    onChange={handleSearchChange}
                    className={styles.searchInput}
                />
            </div>

            <div className={styles.categories}>
                {categoryValues.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`${styles.categoryButton} ${filters.category === category ? styles.active : ''
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className={styles.sortBy}>
                <select
                    value={filters.sortBy}
                    onChange={handleSortChange}
                    className={styles.sortSelect}
                >
                    <option value="newest">Newest</option>
                    <option value="funding">Most Funded</option>
                    <option value="goal">Highest Goal</option>
                </select>
            </div>
        </div>
    );
}; 