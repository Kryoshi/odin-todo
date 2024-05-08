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

    }

    save () {

    }

}