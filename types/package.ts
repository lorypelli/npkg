import type { User } from './user.ts';

export interface General {
    pkg: string;
    tags: Entries;
    time: Entries;
}

export interface NPMGeneral {
    ['dist-tags']: Entries;
    time: Entries;
}

export interface Version {
    author?: User;
    contributors?: User[];
    dependencies: Entries;
    description?: string;
    devDependencies: Entries;
    license?: string;
    maintainers?: User[];
    name: string;
    scripts?: Entries;
    types?: string;
    version: string;
}

export interface Code {
    fileCount: number;
    files: FileEntries;
}

export interface Entries {
    [x: string]: string;
}

interface FileInfo {
    contentType: string;
    hex: string;
    path: string;
    size: number;
    type: string;
}

interface FileEntries {
    [x: string]: FileInfo;
}
