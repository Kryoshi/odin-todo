import './style.css';

import { App } from './modules/app';
import { Project } from './modules/project';
import { ToDo } from './modules/to-do';

import { UIComponent } from './modules/ui';

const main = (function () {

    const body = document.querySelector('body');

    const appInstance = new App();
    const uiInstance = new UIComponent(appInstance);

    body.append(uiInstance.page);

    uiInstance.page.addEventListener('display-project', (e) => {

        uiInstance.clear(content);

        let project;
        if (e.detail) {

            project = e.detail.project;

        } else {
            
            project = new Project();
            appInstance.add(project);
            uiInstance.projectListInstance.add(project);

        }
        uiInstance.display(project);

    });

    uiInstance.page.addEventListener('delete-project', (e) => {

        const project = e.detail.project;
        if (project) {

            appInstance.delete(project);
            uiInstance.delete(project);

        }

    });

    uiInstance.page.addEventListener('update-project', (e) => {

        if (e.detail.project) {

            const project = e.detail.project;
            const update = {}
            if (e.detail.title !== undefined) {

                update.title = e.detail.title;

            }
            if (e.detail.description !== undefined) {

                update.description = e.detail.description;

            }
            if (e.detail.dueDate !== undefined) {

                update.dueDate = e.detail.dueDate;

            }

            project.update(update);
            uiInstance.projectListInstance.update(project);
            console.log({project})

        }

    });

    uiInstance.content.addEventListener('new-todo', (e) => {

        console.log('new todo');
        if (e.detail.project) {

            const project = e.detail.project;  
            const toDo = new ToDo();
            project.add(toDo);
            uiInstance.projectUIInstance.add(toDo);

        }
        
    });


    
}) ();

