import type { User } from './user.ts';

export interface General {
    ["dist-tags"]: {
        latest: string;
    };
    readme: string;
}
export interface Version {
    name: string;
    version: string;
    description?: string;
    author?: User;
    contributors?: User[];
    license?: string;
    maintainers?: User[];
    homepage?: string;
    bugs?: {
        url: string;
    };
    types?: string;
    scripts?: Entries;
    dependencies: Entries;
    devDependencies: Entries;
}

interface Entries {
    [x: string]: string;
}
