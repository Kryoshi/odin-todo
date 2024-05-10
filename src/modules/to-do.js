export { ToDo };

class ToDo {

    #project;
    title = "";
    description = "";
    complete = false;

    dueDate;


    constructor (
        project, {
        title = this.title,
        description = this.description,
        complete = this.complete,
        dueDate = this.dueDate
    } = {}) {

        this.#project = project;

        this.title = title;
        this.description = description;
        this.complete = complete;

        this.dueDate = dueDate;

    }

    update ({
        title = this.title, 
        description = this.description, 
        dueDate = this.dueDate, 
        complete = this.complete
    } = {}) {
        
        this.title = title;
        this.description = description;
        this.complete = complete;
        
        this.dueDate = dueDate;

    }

    getProject () {
        return this.#project;
    }

}