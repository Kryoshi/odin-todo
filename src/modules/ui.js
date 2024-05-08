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

    constructor () {

        // Create elements
        this.page = document.createElement('div');
        this.nav = document.createElement('div');
        this.content = document.createElement('div');
        
        const newProject = document.createElement('button');
        const pageTitle = document.createElement('h1');

        // Set attributes
        this.page.setAttribute('id', 'page');
        this.nav.setAttribute('id', 'nav');
        this.content.setAttribute('id', 'content');

        pageTitle.textContent = APPNAME;

        newProject.setAttribute('class', 'project-li new');
        newProject.textContent = '+ New Project'

        // Append elements
        this.nav.append(pageTitle, newProject);

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
        this.description = document.createElement('textarea');
        this.#content = document.createElement('div');

        for (let toDo in project.list) {

            this.add (toDo);

        }

        const newToDo = document.createElement('button');

        // Set ettributes
        this.window.className = 'project';

        this.title.placeholder = UNTITLED.project;
        this.description.placeholder = UNTITLED.description;
        this.title.value = this.#project.title;
        this.description.value = this.#project.description;
        
        newToDo.textContent = '+';

        // Append elements
        this.window.append(this.title, this.description, this.#content, newToDo);

        // Add listeners
        newToDo.addEventListener('click', (e) => {

            const event = new CustomEvent('new-todo', 
            {

                detail: { project: this.#project },
                bubbles: true 

            });
            this.window.dispatchEvent(event);

        });

        this.window.addEventListener('condense', (e) => {

            for (let toDoComponent of this.#toDoComponents) {

                toDoComponent.condense();

            }

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

}

class ToDoUIComponent {

    element;
    title;
    description;
    status;

    constructor (toDo) {

        // Create elements
        this.element = document.createElement('div');

        const mini = document.createElement('div');
        this.status = document.createElement('input');
        this.title = document.createElement('input');
        const editButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        this.description = document.createElement('textarea');

        // Set attributes
        this.element.className = 'todo';

        mini.className = 'mini';

        this.status.className = 'status';
        this.status.type = 'checkbox';
        this.status.checked = toDo.status;

        this.title.className = 'title';
        this.title.placeholder = UNTITLED.todo;
        this.title.textContent = toDo.title;

        editButton.className = 'edit';
        deleteButton.className = 'delete';

        this.description.className = 'description';
        this.description.placeholder = UNTITLED.description;
        this.condense();

        // Append elements
        mini.append(this.title, editButton, deleteButton);

        this.element.append(this.status, mini, this.description);

        // Add event listeners
        mini.addEventListener('click', (e) => {

            const event = new Event('condense', { bubbles: true });
            this.element.dispatchEvent(event);

            this.expand();

        });

        this.status.addEventListener('input', (e) => {

            const event = new CustomEvent('update-status',
            { 
                detail: { toDo, status: this.status.checked },
                bubbles: true
            });

            this.element.dispatchEvent(event);

        });

        this.title.addEventListener('input', (e) => {

            const event = new CustomEvent('update-todo-title',
            { 
                detail: { toDo, title: this.title.value },
                bubbles: true
            });

            this.element.dispatchEvent(event);

        });

        deleteButton.addEventListener('click', (e) => {

            const event = new CustomEvent('delete-todo',
            { 
                detail: { toDo },
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

}

class ProjectListUIComponent {

    element;
    #projectListItems;

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

    remove (project) {
        
        this.#projectListItems

    }

}

class ProjectListUIItem {

    element;
    #title;
    #project;

    constructor (project) {
        
        this.#project = project;

        // Create elements
        this.element = document.createElement('li');

        this.title = document.createElement('h6');
        const deleteButton = document.createElement('button');

        // Set attributes
        this.element.className = 'project-li';

        this.#title.className = 'title'
        this.#title.textContent = this.#project.title;

        // Append elements


        // Add listeners
        deleteButton.addEventListener('click', (e) => {

            const event = new CustomEvent('delete-project',
            { 
                detail: { project: this.#project },
                bubbles: true
            });

            this.element.dispatchEvent(event);

        });

    }

}