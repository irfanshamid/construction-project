import * as angular from 'angular';
import 'angular-route';

import { configureRoutes } from './app.config';
import { ProjectService } from './services/project.service';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';

import '../assets/styles.css';

angular.module('app', ['ngRoute'])
    .config(configureRoutes)
    .service('ProjectService', ProjectService)
    .component('projectList', {
        template: ProjectListComponent.template,
        controller: ProjectListComponent.controller
    })
    .component('projectDetail', {
        template: ProjectDetailComponent.template,
        controller: ProjectDetailComponent.controller
    });
