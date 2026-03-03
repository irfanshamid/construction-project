export interface Project {
    id: string;
    project_name: string;
    company: string;
    area: string;
    project_start: string; // ISO 8601 or similar string format
    project_end: string;
    project_value: number; // GBP
    description: string;
}
