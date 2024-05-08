export { ToDo };

class ToDo {

    #project;
    title = "";
    description = "";
    complete = false;

    dueDate;
    creationDate;
    modificationDate;


    constructor (
        project,
        title = this.title,
        description = this.description,
        dueDate = this.dueDate,
        complete = this.complete
    ) {

        this.#project = project;

        this.title = title;
        this.description = description;
        this.complete = complete;

        this.dueDate = dueDate;
        this.creationDate = Date.now();
        this.modificationDate = this.creationDate;

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
        this.modificationDate = Date.now();
        
    }

    getProject () {
        return this.#project;
    }

}