import type { Project } from '../types/projects';
import { PROJECT_CATEGORIES, PROJECT_STAGES, RISK_LEVELS } from '../constants/projects';
import { enrichProjectData } from '../services/projects';

const rawProjects = [
    {
        id: "1",
        title: "Sustainable Agriculture Tech",
        description: "Revolutionary farming technology for sustainable agriculture",
        category: "Agriculture",
        fundingGoal: 5000000,
        currentFunding: 2500000,
        location: "Maharashtra, India",
        image: "https://images.unsplash.com/photo-1486475554424-2fa50cd59f18?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["AgriTech", "Sustainability", "Innovation"],
        endDate: "2024-12-31",
        teamSize: 15,
        risk: "Medium" as const,
        stage: "Growth" as const,
        progress: 50,
        status: "active" as const,
        creator: {
            name: "John Doe",
            avatar: "https://example.com/avatar.jpg"
        },
        stats: {
            investors: 100,
            raised: 2500000,
            remaining: 2500000
        }
    },
    {
        id: "2",
        title: "MediCare Plus Healthcare Platform",
        description: "Digital healthcare platform connecting patients with healthcare providers through telemedicine.",
        category: PROJECT_CATEGORIES.HEALTHCARE,
        fundingGoal: 750000,
        currentFunding: 425000,
        location: "London, UK",
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["HealthTech", "Telemedicine", "AI"],
        endDate: "2024-07-15",
        teamSize: 8,
        risk: RISK_LEVELS.LOW,
        stage: PROJECT_STAGES.EARLY,
        progress: 56,
        status: "active" as const,
        creator: {
            name: "Sarah Johnson",
            avatar: "https://example.com/avatar2.jpg"
        },
        stats: {
            investors: 85,
            raised: 425000,
            remaining: 325000
        }
    },
    {
        id: "3",
        title: "EduReach Learning Platform",
        description: "Advanced learning platform with AI-powered personalized education paths.",
        category: PROJECT_CATEGORIES.EDUCATION,
        fundingGoal: 300000,
        currentFunding: 150000,
        location: "Toronto, Canada",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["EdTech", "AI", "E-learning"],
        endDate: "2024-09-20",
        teamSize: 6,
        risk: RISK_LEVELS.LOW,
        stage: PROJECT_STAGES.SEED,
        progress: 50,
        status: "upcoming" as const,
        creator: {
            name: "Mike Brown",
            avatar: "https://example.com/avatar3.jpg"
        },
        stats: {
            investors: 0,
            raised: 0,
            remaining: 300000
        }
    },
    {
        id: "4",
        title: "Sustainable Housing Development",
        description: "Eco-friendly affordable housing project using sustainable materials and solar energy.",
        category: PROJECT_CATEGORIES.REAL_ESTATE,
        fundingGoal: 2000000,
        currentFunding: 1200000,
        location: "Melbourne, Australia",
        image: "https://images.unsplash.com/photo-1543071293-d91175a68672?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
        tags: ["RealEstate", "Sustainability", "Green"],
        endDate: "2024-12-01",
        teamSize: 15,
        risk: RISK_LEVELS.MEDIUM,
        stage: PROJECT_STAGES.EXPANSION,
        progress: 60,
        status: "active" as const,
        creator: {
            name: "Emma Wilson",
            avatar: "https://example.com/avatar4.jpg"
        },
        stats: {
            investors: 150,
            raised: 1200000,
            remaining: 800000
        }
    },
    {
        id: "5",
        title: "BlockChain Payment Solution",
        description: "Next-generation payment infrastructure using blockchain technology for instant cross-border transactions.",
        category: PROJECT_CATEGORIES.FINTECH,
        fundingGoal: 1500000,
        currentFunding: 900000,
        location: "Singapore",
        image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["Blockchain", "Fintech", "Payments"],
        endDate: "2024-10-15",
        teamSize: 10,
        risk: RISK_LEVELS.HIGH,
        stage: PROJECT_STAGES.GROWTH,
        progress: 60,
        status: "active" as const,
        creator: {
            name: "Alex Chen",
            avatar: "https://example.com/avatar5.jpg"
        },
        stats: {
            investors: 200,
            raised: 900000,
            remaining: 600000
        }
    },
    {
        id: "6",
        title: "AI-Powered Marketing Platform",
        description: "Marketing automation platform using artificial intelligence for predictive analytics and personalization.",
        category: PROJECT_CATEGORIES.TECHNOLOGY,
        fundingGoal: 800000,
        currentFunding: 600000,
        location: "Berlin, Germany",
        image: "https://images.unsplash.com/photo-1525338078858-d762b5e32f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["AI", "Marketing", "SaaS"],
        endDate: "2024-09-30",
        teamSize: 8,
        risk: RISK_LEVELS.MEDIUM,
        stage: PROJECT_STAGES.EARLY,
        progress: 75,
        status: "active" as const,
        creator: {
            name: "Lisa Schmidt",
            avatar: "https://example.com/avatar6.jpg"
        },
        stats: {
            investors: 120,
            raised: 600000,
            remaining: 200000
        }
    }
];

export const mockProjects: Project[] = rawProjects.map(project => enrichProjectData(project)); 