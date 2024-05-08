export { App };

class App {

    projects = [];

    add (project) {
        this.projects.push(project);
    }

    delete (project) {
        let index = this.list.indexOf(project);
        if (index) {
            this.projects.splice(index, 1);
        }
    }

    load () {

    }

    save () {

    }

}