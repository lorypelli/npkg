import type { User } from './user.ts';

export interface Search {
    objects: {
        package: Package;
    }[];
    total: number;
}

interface Package {
    name: string;
    version: string;
    description?: string;
    keywords?: string[];
    date: string;
    publisher: User;
}
