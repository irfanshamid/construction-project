import * as angular from 'angular';
import { Project } from '../../models/project.interface';
import { ProjectService } from '../../services/project.service';
import template from './project-detail.template.html';

interface IRouteParams extends angular.route.IRouteParamsService {
    id: string;
}

class ProjectDetailController {
    static $inject = ['$routeParams', 'ProjectService'];

    project: Project | null = null;
    loading: boolean = true;
    error: string | null = null;

    constructor(
        private $routeParams: IRouteParams,
        private projectService: ProjectService
    ) {}

    $onInit() {
        const projectId = this.$routeParams.id;
        if (!projectId) {
            this.loading = false;
            this.error = 'No project ID provided.';
            return;
        }

        this.projectService.getProjectById(projectId)
            .then((project) => {
                this.project = project;
                this.loading = false;
            })
            .catch((error) => {
                console.error('Error fetching project details:', error);
                this.error = 'Failed to load project details.';
                this.loading = false;
            });
    }
}

export const ProjectDetailComponent: angular.IComponentOptions = {
    template: template,
    controller: ProjectDetailController
};
