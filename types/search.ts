import type { User } from './user.ts';

export interface Search {
    objects: {
        package: Package;
    }[];
    total: number;
}

interface Package {
    date: string;
    description?: string;
    keywords?: string[];
    name: string;
    publisher: User;
    version: string;
}
