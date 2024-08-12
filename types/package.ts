import type { User } from './user.ts';

export interface General {
    pkg: string;
    tags: Entries;
    versions: Entries[];
}

export interface NPMGeneral {
    ['dist-tags']: Entries;
    time: Entries;
    versions: Entries;
}

export interface Version {
    author?: User;
    contributors?: User[];
    dependencies: Entries;
    description?: string;
    devDependencies: Entries;
    homepage?: string;
    keywords?: string[];
    license?: string;
    maintainers?: User[];
    name: string;
    scripts?: Entries;
    types?: string;
    version: string;
}

export interface Code {
    code: FileEntries;
    pkg: string;
    version: string;
}

export interface File {
    file: string;
    pkg: string;
    pkg_file: string;
    version: string;
}

export interface NPMCode {
    files: FileEntries;
}

export interface Entries {
    [x: string]: string;
}

export interface FileEntries {
    [x: string]: FileInfo;
}

interface FileInfo {
    contentType: string;
    hex: string;
    path: string;
    size: number;
    type: string;
}
