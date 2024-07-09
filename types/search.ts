import type { User } from './user.ts'

export interface Search {
    objects: {
        package: Package;
    }[];
    total: number;
}

interface Package {
    name: string;
    version: string;
    description: string;
    date: string;
    links: Links;
    author?: User;
    publisher: User;
    mantainers: User[];
}

interface Links {
    npm: string;
    homepage: string;
    repository: string;
    bugs: string;
}
