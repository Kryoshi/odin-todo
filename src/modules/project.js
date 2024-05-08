export { Project };

class Project {

    title = '';
    description = '';
    status = 0;

    list = [];

    dueDate;
    creationDate;
    modificationDate;


    constructor (

        title = this.title, 
        description = this.description, 
        status = this.status, 
        dueDate = this.dueDate

    ) {

        this.title = title;
        this.description = description;
        this.status = status;
        this.dueDate = dueDate;

        this.creationDate = Date.now;
        this.modificationDate = this.creationDate;
        
    }

    update (

        title = this.title, 
        description = this.description, 
        status = this.status, 
        dueDate = this.dueDate

    ) {
        
        this.title = title;
        this.description = description;
        this.status = status;
        this.dueDate = dueDate;

        this.modificationDate = Date.now;
        
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