import type { User } from './user.ts';

export interface General {
    ['dist-tags']: Entries;
    versions: Entries;
    time: Entries;
}

export interface Version {
    name: string;
    version: string;
    description?: string;
    author?: User;
    contributors?: User[];
    license?: string;
    maintainers?: User[];
    types?: string;
    scripts?: Entries;
    dependencies: Entries;
    devDependencies: Entries;
}

export interface Code {
    fileCount: number;
    files: FileEntries;
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

interface FileEntries {
    [x: string]: FileInfo;
}
