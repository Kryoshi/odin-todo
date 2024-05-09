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
        const newProject = createButton('new');

        this.projectListInstance = new ProjectListUIComponent(app);

        // Set attributes
        this.page.setAttribute('id', 'page');
        this.nav.setAttribute('id', 'nav');
        this.content.setAttribute('id', 'content');

        pageTitle.className = 'page-title';
        pageTitle.textContent = APPNAME;

        newProject.classList.add('project-li');

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

        const header = document.createElement('div');

        const titleWrapper = document.createElement('div');
        this.title = document.createElement('textarea');

        const descriptionWrapper = document.createElement('div');
        this.description = document.createElement('textarea');

        const newToDo = createButton('new');

        this.#content = document.createElement('div');

        for (let toDo of this.#project.list) {

            this.add (toDo);

        }


        // Set attributes
        this.window.className = 'project';

        header.className = 'header';

        this.title.className = 'title';
        this.title.rows = '1';
        this.title.placeholder = UNTITLED.project;
        this.title.value = this.#project.title;
        titleWrapper.className = 'input-wrapper title';
        titleWrapper.dataset.copiedValue = this.title.value;

        this.description.placeholder = UNTITLED.description;
        this.description.value = this.#project.description;
        descriptionWrapper.className = 'input-wrapper description';
        descriptionWrapper.dataset.copiedValue = this.description.value;

        // Append elements
        titleWrapper.append(this.title);
        descriptionWrapper.append(this.description);
        header.append(titleWrapper, descriptionWrapper, newToDo)
        this.window.append(header, this.#content);

        // Add listeners
        this.window.addEventListener('condense', (e) => {

            for (let toDoComponent of this.#toDoComponents) {

                toDoComponent.condense();

            }

        });

        this.title.addEventListener('input', (e) => {

            titleWrapper.dataset.copiedValue = this.title.value;
            
            const event = new CustomEvent('update-project',
            { 
                detail: { project, title: this.title.value },
                bubbles: true

            });

            this.window.dispatchEvent(event);

        });

        this.description.addEventListener('input', (e) => {
            
            descriptionWrapper.dataset.copiedValue = this.description.value;

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

    toggleEdit () {

        this.title.disabled = !(this.title.disabled);
        this.description.disabled = !(this.description.disabled);

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

function createButton (className) {

    const button = document.createElement('button');
    const icon = document.createElement('div');

    button.className = className;
    icon.className = 'icon';

    button.append(icon);

    return button;

}

class ToDoUIComponent {

    #toDo;
    element;
    title;
    #expandButton;
    #editButton;
    description;
    #descriptionWrapper;
    complete;

    constructor (toDo) {

        this.#toDo = toDo;

        // Create elements
        this.element = document.createElement('div');

        const mini = document.createElement('div');
        this.complete = document.createElement('input');
        const titleWrapper = document.createElement('div');
        this.title = document.createElement('textarea');

        this.#expandButton = createButton('expand');
        this.#editButton = createButton('edit')
        const deleteButton = createButton('delete')

        this.#descriptionWrapper = document.createElement('div');
        this.description = document.createElement('textarea');

        // Set attributes
        this.element.className = 'todo';

        mini.className = 'mini';

        this.complete.className = 'status';
        this.complete.type = 'checkbox';
        this.complete.checked = this.#toDo.complete;

        this.title.className = 'title';
        this.title.placeholder = UNTITLED.todo;
        this.title.rows = '1';
        this.title.value = this.#toDo.title;
        titleWrapper.className = 'input-wrapper title';
        titleWrapper.dataset.copiedValue = this.title.value;

        this.description.placeholder = UNTITLED.description;
        this.description.value = this.#toDo.description;
        this.#descriptionWrapper.className = 'input-wrapper description';
        this.#descriptionWrapper.dataset.copiedValue = this.description.value;

        this.condense();

        // Append elements
        titleWrapper.append(this.title);
        mini.append(titleWrapper, this.#expandButton, this.#editButton, deleteButton);

        this.#descriptionWrapper.append(this.description);
        this.element.append(this.complete, mini, this.#descriptionWrapper);

        // Add event listeners

        this.complete.addEventListener('input', (e) => {

            const event = new CustomEvent('update-todo',
            { 
                detail: { toDo: this.#toDo, complete: this.complete.checked },
                bubbles: true
            });

            this.element.dispatchEvent(event);

        });

        this.title.addEventListener('input', (e) => {

            titleWrapper.dataset.copiedValue = this.title.value;

            const event = new CustomEvent('update-todo',
            { 
                detail: { toDo: this.#toDo, title: this.title.value },
                bubbles: true
            });

            this.element.dispatchEvent(event);

        });

        this.description.addEventListener('input', (e) => {

            this.#descriptionWrapper.dataset.copiedValue = this.description.value;

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

        this.#editButton.addEventListener('click', (e) => {

            this.toggleEdit();

        });

        this.#expandButton.addEventListener('click', (e) => {

            if (!(this.#descriptionWrapper.classList.contains('hidden'))) {

                this.condense();

            } else {

                const event = new Event('condense', { bubbles: true });
                this.element.dispatchEvent(event);
    
                this.expand();

            }

        });

    }

    expand () {

        this.#descriptionWrapper.classList.remove('hidden');
        this.#expandButton.classList.add('expanded');

    }

    condense () {

        this.#descriptionWrapper.classList.add('hidden');
        this.#expandButton.classList.remove('expanded');

    }

    toggleEdit () {

        this.title.disabled = !(this.title.disabled);
        this.description.disabled = !(this.description.disabled);

        if (this.title.disabled) {

            this.#editButton.classList.add('locked');

        } else {

            this.#editButton.classList.remove('locked');

        }

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
        this.element.className = 'project-ul';

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
        const deleteButton = createButton('delete');

        // Set attributes
        this.element.className = 'project-li';

        this.#title.className = 'title'
        this.#status.className = 'status';

        this.update();

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

        if (this.#project.status < 0.5) {

            this.#status.classList.remove('complete', 'in-progress');
            this.#status.classList.add('incomplete');

        } else if (this.#project.status < 1) {

            this.#status.classList.remove('complete', 'incomplete');
            this.#status.classList.add('in-progress');

        } else {

            this.#status.classList.remove('in-progress', 'incomplete');
            this.#status.classList.add('complete');

        }

        this.#status.textContent = `${Math.floor(this.#project.status * 100)}%`;

    }

    getProject () {

        return this.#project;

    }

}