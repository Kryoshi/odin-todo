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

    update ({
        
        title = this.title, 
        description = this.description, 
        dueDate = this.dueDate

    } = {}) {
        
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;

        this.modificationDate = Date.now();
        
    }

    checkStatus () {

        if (this.list[0]) {
            
            let count = 0;
            let complete = 0;
            for (let toDo of this.list) {

                count++;
                if (toDo.complete === true) {

                    complete++;

                }

            }
            this.status = complete / count;

        }

    }

    add (toDo) {

        this.list.push(toDo);

        this.modificationDate = Date.now();

    }

    remove (toDo) {

        let index = this.list.indexOf(toDo);
        if (index !== -1) {
            this.list.splice(index, 1);
        }

    }
}