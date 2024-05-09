export { UIComponent };
export { ProjectUIComponent };

const APPNAME = 'Noteify';
const UNTITLED = {
    project: 'Untitled Project',
    todo: 'New To Do',
    description: 'Description...'
}

class UIComponent {

    page;
    nav;
    content;
    projectUIInstance;
    projectListInstance;

    constructor (app) {

        // Create elements
        this.page = document.createElement('div');
        this.nav = document.createElement('div');
        this.content = document.createElement('div');
        
        const pageTitle = document.createElement('h1');
        const newProject = document.createElement('button');

        this.projectListInstance = new ProjectListUIComponent(app);

        // Set attributes
        this.page.setAttribute('id', 'page');
        this.nav.setAttribute('id', 'nav');
        this.content.setAttribute('id', 'content');

        pageTitle.textContent = APPNAME;

        newProject.setAttribute('class', 'project-li new');
        newProject.textContent = '+ New Project'

        // Append elements
        this.nav.append(pageTitle, newProject, this.projectListInstance.element);

        this.page.append(this.nav, this.content);

        // Add listeners
        newProject.addEventListener('click', (e) => {
            const event = new CustomEvent('display-project', {
                bubbles: true,
            });
            newProject.dispatchEvent(event);
        });



    }

    clear (element) {

        if (element instanceof Element) {
            
            let child = element.lastElementChild;
            while (child) {
                element.removeChild(child);
                child = element.lastElementChild;
            }

        }
    }

    display (project) {

        this.projectUIInstance = new ProjectUIComponent(project);
        this.content.append(this.projectUIInstance.window);

    }

    delete (project) {

        if (this.projectUIInstance.getProject() === project) {

            this.clear(this.content);

        }
        this.projectListInstance.remove(project);

        
    }

}

class ProjectUIComponent {

    #project;
    window;
    title;
    description;
    #content;
    #toDoComponents = [];

    constructor (project) {

        this.#project = project;

        // Create elements
        this.window = document.createElement('div');
        this.title = document.createElement('input');
        this.description = document.createElement('input');
        this.#content = document.createElement('div');

        for (let toDo of this.#project.list) {

            this.add (toDo);

        }

        const newToDo = document.createElement('button');

        // Set ettributes
        this.window.className = 'project';

        this.title.maxLength = 50;
        this.title.placeholder = UNTITLED.project;
        this.title.value = this.#project.title;

        this.description.placeholder = UNTITLED.description;
        this.description.value = this.#project.description;
        
        newToDo.textContent = '+';

        // Append elements
        this.window.append(this.title, this.description, this.#content, newToDo);

        // Add listeners
        this.window.addEventListener('condense', (e) => {

            for (let toDoComponent of this.#toDoComponents) {

                toDoComponent.condense();

            }

        });

        this.title.addEventListener('input', (e) => {
            
            const event = new CustomEvent('update-project',
            { 
                detail: { project, title: this.title.value },
                bubbles: true

            });

            this.window.dispatchEvent(event);

        });

        this.description.addEventListener('input', (e) => {
            
            const event = new CustomEvent('update-project',
            { 
                detail: { project, description: this.description.value },
                bubbles: true

            });

            this.window.dispatchEvent(event);

        });

        newToDo.addEventListener('click', (e) => {

            const event = new CustomEvent('new-todo', 
            {

                detail: { project: this.#project },
                bubbles: true 

            });
            this.window.dispatchEvent(event);

        });

    }

    getProject () {

        return this.#project;

    }

    add (toDo) {

        const toDoComponent = new ToDoUIComponent(toDo)
        this.#content.append(toDoComponent.element);
        this.#toDoComponents.push(toDoComponent);

    }

    remove (toDo) {

        let index = 0;
        for (let toDoComponent of this.#toDoComponents) {

            if (toDoComponent.getToDo() === toDo) {
                toDoComponent.element.remove();
                this.#toDoComponents.splice(index, 1);
                return;
            }
            index++;

        }

    }

}

class ToDoUIComponent {

    #toDo;
    element;
    title;
    description;
    complete;

    constructor (toDo) {

        this.#toDo = toDo;

        // Create elements
        this.element = document.createElement('div');

        const mini = document.createElement('div');
        this.complete = document.createElement('input');
        this.title = document.createElement('input');
        const editButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        this.description = document.createElement('input');

        // Set attributes
        this.element.className = 'todo';

        mini.className = 'mini';

        this.complete.className = 'status';
        this.complete.type = 'checkbox';
        this.complete.checked = this.#toDo.complete;

        this.title.className = 'title';
        this.title.placeholder = UNTITLED.todo;
        this.title.value = this.#toDo.title;

        editButton.className = 'edit';
        deleteButton.className = 'delete';

        this.description.className = 'description';
        this.description.placeholder = UNTITLED.description;
        this.description.value = this.#toDo.description;

        this.condense();

        // Append elements
        mini.append(this.title, editButton, deleteButton);

        this.element.append(this.complete, mini, this.description);

        // Add event listeners
        mini.addEventListener('click', (e) => {

            const event = new Event('condense', { bubbles: true });
            this.element.dispatchEvent(event);

            this.expand();

        });

        this.complete.addEventListener('input', (e) => {

            const event = new CustomEvent('update-todo',
            { 
                detail: { toDo: this.#toDo, complete: this.complete.checked },
                bubbles: true
            });

            this.element.dispatchEvent(event);

        });

        this.title.addEventListener('input', (e) => {

            const event = new CustomEvent('update-todo',
            { 
                detail: { toDo: this.#toDo, title: this.title.value },
                bubbles: true
            });

            this.element.dispatchEvent(event);

        });

        this.description.addEventListener('input', (e) => {

            const event = new CustomEvent('update-todo',
            { 
                detail: { toDo: this.#toDo, description: this.description.value },
                bubbles: true
            });

            this.element.dispatchEvent(event);

        });

        deleteButton.addEventListener('click', (e) => {

            const event = new CustomEvent('delete-todo',
            { 
                detail: { toDo: this.#toDo },
                bubbles: true
            });
            
            this.element.dispatchEvent(event);

        });

    }

    expand() {

        this.description.hidden = false;

    }

    condense() {

        this.description.hidden = true;

    }

    getToDo () {

        return this.#toDo;

    }

}

class ProjectListUIComponent {

    element;
    #projectListItems = [];

    constructor (app) {

        this.element = document.createElement('ul')

        if (app.projects[0]) {

            for (let project of app.projects) {

                this.add(project);

            }

        }

    }

    add (project) {

        const projectListItem = new ProjectListUIItem(project)
        this.element.append(projectListItem.element);
        this.#projectListItems.push(projectListItem);

    }

    update (project) {

        for (let listItem of this.#projectListItems) {

            if (listItem.getProject() === project) {

                listItem.update();

            }

        }

    }

    remove (project) {
        
        let index = 0;
        for (let listItem of this.#projectListItems) {

            if (listItem.getProject() === project) {
                listItem.element.remove();
                this.#projectListItems.splice(index, 1);
                return;
            }
            index++;

        }

    }

}

class ProjectListUIItem {

    element;
    #title;
    #status;
    #project;

    constructor (project) {
        
        this.#project = project;

        // Create elements
        this.element = document.createElement('li');

        this.#title = document.createElement('button');
        this.#status = document.createElement('span');
        const deleteButton = document.createElement('button');

        // Set attributes
        this.element.className = 'project-li';

        this.#title.className = 'title'
        if (this.#project.title.trim() !== "") {

            this.#title.textContent = this.#project.title;

        } else this.#title.textContent = UNTITLED.project;

        this.#status.className = 'status';
        this.#status.textContent = `${Math.floor(this.#project.status * 100)}%`;

        deleteButton.className = 'delete';
        // Append elements
        this.element.append(this.#title, this.#status, deleteButton);

        // Add listeners
        this.#title.addEventListener('click', (e) => {

            const event = new CustomEvent('display-project',
            { 
                detail: { project: this.#project },
                bubbles: true
            });

            this.element.dispatchEvent(event);

        });

        deleteButton.addEventListener('click', (e) => {

            const event = new CustomEvent('delete-project',
            { 
                detail: { project: this.#project },
                bubbles: true
            });

            this.element.dispatchEvent(event);

        });

    }

    update () {

        if (this.#project.title.trim() !== "") {

            this.#title.textContent = this.#project.title;

        } else this.#title.textContent = UNTITLED.project;
        this.#status.textContent = `${Math.floor(this.#project.status * 100)}%`;

    }

    getProject () {

        return this.#project;

    }

}