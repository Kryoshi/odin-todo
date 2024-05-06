import { ToDo } from "./to-do";

class Project {

    title;
    description = "";

    list = [];

    creationDate;
    modificationDate;
    dueDate;

    status = 0;

    constructor (title, description, dueDate, status) {

        this.title = title;
        this.description = description;

        this.creationDate = Date.now;
        this.modificationDate = this.creationDate;
        this.dueDate = dueDate;

        this.status = status;

    }

    update (
        title = this.title, 
        description = this.description, 
        dueDate = this.dueDate, 
        status = this.status
    ) {
        
        this.title = title;
        this.description = description;

        this.modificationDate = Date.now;
        this.dueDate = dueDate;
        this.status = status;
        
    }

    add (toDo) {
        this.list.push(toDo);
    }

    remove (toDo) {
        let index = this.list.indexOf(toDo);
        if (index) {
            this.list.splice(index, 1);
        }
    }
}