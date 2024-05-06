export {ToDo};

class ToDo {

    title;
    description = "";

    creationDate;
    modificationDate;
    dueDate;

    status = false;

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

}