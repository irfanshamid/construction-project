import * as angular from 'angular';
import { Project } from '../../models/project.interface';
import { ProjectService } from '../../services/project.service';

// Import template as a string (handled by webpack asset/source)
import template from './project-list.template.html';

class ProjectListController {
    static $inject = ['ProjectService', '$scope'];

    projects: Project[] = [];
    filteredProjects: Project[] = [];
    areas: string[] = [];
    companies: string[] = [];
    
    searchText: string = '';
    selectedArea: string = '';
    selectedCompany: string = '';
    loading: boolean = true;

    constructor(private projectService: ProjectService, private $scope: angular.IScope) {}

    $onInit() {
        this.projectService.getProjects()
            .then((projects: Project[]) => {
                this.projects = projects;
                this.extractFilters();
                this.loading = false;
            })
            .catch((error) => {
                console.error('Error fetching projects:', error);
                this.loading = false;
            });
    }

    private extractFilters() {
        // Extract unique areas and companies for dropdowns
        const areaSet = new Set<string>();
        const companySet = new Set<string>();

        this.projects.forEach(p => {
            if (p.area) areaSet.add(p.area);
            if (p.company) companySet.add(p.company);
        });

        this.areas = Array.from(areaSet).sort();
        this.companies = Array.from(companySet).sort();
    }
}

export const ProjectListComponent: angular.IComponentOptions = {
    template: template,
    controller: ProjectListController
};
