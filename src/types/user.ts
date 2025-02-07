export interface User {
    id: string;
    email: string;
    name: string;
    userType: "entrepreneur" | "investor";
    profile: {
        firstName?: string;
        lastName?: string;
        phoneNumber?: string;
        company?: string;
        position?: string;
        bio?: string;
        avatar?: string;
    };
    createdAt: string;
    updatedAt: string;
} 