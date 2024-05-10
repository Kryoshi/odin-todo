import { ToDo } from "./to-do";

export { Project };

class Project {

    title = '';
    description = '';
    status = 0;

    list = [];

    dueDate;


    constructor ({

        title = this.title, 
        description = this.description, 
        status = this.status, 
        list = this.list,
        dueDate = this.dueDate

    } = {}) {

        this.title = title;
        this.description = description;
        this.status = status;

        for (let todo of list) {

            this.add(new ToDo(this, todo));

        }

        this.dueDate = dueDate;

    }

    update ({
        
        title = this.title, 
        description = this.description, 
        dueDate = this.dueDate

    } = {}) {
        
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        
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

    }

    remove (toDo) {

        let index = this.list.indexOf(toDo);
        if (index !== -1) {
            this.list.splice(index, 1);
        }

    }
}