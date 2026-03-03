import * as angular from 'angular';
import { Project } from '../models/project.interface';

export class ProjectService {
    static $inject = ['$q', '$timeout'];

    private projects: Project[] = [
        {
            "id": "p-1001",
            "project_name": "North Bridge Redevelopment",
            "company": "ABC Construction",
            "area": "Manchester",
            "project_start": "2026-01-01T00:00:00",
            "project_end": "2027-01-10T00:00:00",
            "project_value": 1250000,
            "description": "Redevelopment of bridge and surrounding access roads."
        },
        {
            "id": "p-1002",
            "project_name": "City Centre Office Complex",
            "company": "BuildRight Ltd",
            "area": "London",
            "project_start": "2025-06-15T09:00:00",
            "project_end": "2028-12-20T17:00:00",
            "project_value": 45000000,
            "description": "New 20-story office complex with retail space."
        },
        {
            "id": "p-1003",
            "project_name": "Riverside Apartments",
            "company": "ABC Construction",
            "area": "London",
            "project_start": "2026-03-01T00:00:00",
            "project_end": "2027-08-30T00:00:00",
            "project_value": 8500000,
            "description": "Luxury apartment complex overlooking the Thames."
        },
        {
            "id": "p-1004",
            "project_name": "West End Hospital Extension",
            "company": "HealthBuild",
            "area": "Manchester",
            "project_start": "2025-11-01T00:00:00",
            "project_end": "2026-11-01T00:00:00",
            "project_value": 2200000,
            "description": "Extension to the existing hospital wing."
        },
        {
            "id": "p-1005",
            "project_name": "Community Park Renovation",
            "company": "GreenSpaces",
            "area": "Leeds",
            "project_start": "2026-05-01T00:00:00",
            "project_end": "2026-09-30T00:00:00",
            "project_value": 450000,
            "description": "Renovation of the city park including new playground equipment."
        }
    ];

    constructor(private $q: angular.IQService, private $timeout: angular.ITimeoutService) {}

    getProjects(): angular.IPromise<Project[]> {
        const deferred = this.$q.defer<Project[]>();
        
        // Simulate network delay
        this.$timeout(() => {
            deferred.resolve(this.projects);
        }, 500);

        return deferred.promise;
    }

    getProjectById(id: string): angular.IPromise<Project | null> {
        const deferred = this.$q.defer<Project | null>();

        this.$timeout(() => {
            const project = this.projects.find(p => p.id === id);
            deferred.resolve(project || null);
        }, 300);

        return deferred.promise;
    }
}
