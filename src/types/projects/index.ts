export interface Project {
    id: string;
    title: string;
    description: string;
    category: string;
    endDate: string;
    fundingGoal: number;
    currentFunding: number;
    image: string;
    status: "active" | "completed" | "upcoming";
    progress: number;
    progressPercentage: number;
    stage: "Seed" | "Early" | "Growth" | "Expansion";
    risk: "Low" | "Medium" | "High";
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
    featured?: boolean;
}

export type SortOption = "newest" | "funding" | "goal";

export interface ProjectFilters {
    category?: string;
    stage?: Project["stage"];
    risk?: Project["risk"];
    sort?: SortOption;
    search?: string;
    searchQuery?: string;
    sortBy?: SortOption;
}

export interface ProjectStats {
    totalInvestors: number;
    totalFunding: number;
    averageReturn: number;
    activeProjects: number;
    averageProgress?: number;
    totalProjects?: number;
    successRate?: number;
} 