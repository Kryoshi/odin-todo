import './style.css';

import { App } from './modules/app';
import { Project } from './modules/project';
import { ToDo } from './modules/to-do';

import { UIComponent } from './modules/ui';
import { ProjectUIComponent } from './modules/ui';

const app = (function () {

    const body = document.querySelector('body');

    const appInstance = new App();
    const uiInstance = new UIComponent();

    body.append(uiInstance.page);

    uiInstance.page.addEventListener('display-project', (e) => {

        uiInstance.clear(content);

        let project;
        if (e.detail) {

            project = e.detail;

        } else {
            
            project = new Project();
            appInstance.add(project);

        }

        console.log({projects: appInstance.projects});

        const projectUIInstance = new ProjectUIComponent(project);
        uiInstance.content.append(projectUIInstance.window);

        projectUIInstance.window.addEventListener('display-todo', (e) => {

            let toDo;
            if (e.detail) {

                toDo = e.detail;

            } else {
                
                toDo = new ToDo();
                project.add(toDo);

            }

            projectUIInstance.add(toDo);
            
        });

    });

}) ();

