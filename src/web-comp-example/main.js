class TaskItem extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});

        const wrapper = document.createElement('p');
        //const text = this.getAttribute('data-text');
        wrapper.innerText = this.getAttribute('data-text') ? this.getAttribute('data-text') : "default text";
        
        this.shadowRoot.append(wrapper);
    }
}
customElements.define('task-item', TaskItem);
