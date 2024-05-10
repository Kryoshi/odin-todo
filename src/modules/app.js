import { Project } from './project';
import { storageAvailable } from './storage';

export { App };

class App {

    projects = [];

    add (project) {
        this.projects.push(project);
    }

    delete (project) {
        let index = this.projects.indexOf(project);
        if (index !== -1) {
            this.projects.splice(index, 1);
        }
    }

    load () {

        if (storageAvailable('localStorage')) {

            const loadArray = JSON.parse(localStorage.getItem('projects'));
            if (loadArray) {

                for (let project of loadArray) {
                    
                    let projectInstance = new Project(project);

                    this.add(projectInstance);

                }
                
            }

        }

    }

    save () {

        if (storageAvailable('localStorage')) {

            const projectString = JSON.stringify(this.projects);
            localStorage.setItem('projects', projectString);

        }

    }

}