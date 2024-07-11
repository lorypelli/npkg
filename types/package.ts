import type { User } from './user.ts';

export interface General {
    readme: string;
    contributors?: User[];
    license?: string;
    maintainers?: User[];
    homepage?: string;
    bugs?: {
        url: string;
    };
}

export interface Version {
    name: string;
    version: string;
    description?: string;
    types?: string;
    scripts?: Entries;
    dependencies: Entries;
    devDependencies: Entries;
}

export interface Code {
    fileCount: number;
    files: {
        [x: string]: FileInfo
    }
}

interface FileInfo {
    contentType: string;
    hex: string;
    path: string;
    size: number;
    type: string;
}

interface Entries {
    [x: string]: string;
}
