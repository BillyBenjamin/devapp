class CompoTaskList {
    /**
     * @class
     * @summary Composant qui affiche une liste de tâches
     * getElement, retourne l'élément
     * @param {*} param Objet de paramétrage 
     * @example 
     * let tasks = new CompoTaskList({
     * element: document.getElementById('tasks'),
     * taskList: list
});
     */
    constructor(param) {
        this.param = param;
    }
    /** Retourne la liste */
    getTaskList() {
        return this.param.taskList;
    }
    /** Retourne l'élément */
    getElement() {
        return this.param.element;
    }
    /**Permet d'afficher toute les tâches de la liste */
    render() {
        let children = [];
        if (this.param.taskList) {
            console.log(this.param.taskList);
            for (let i = 0; i < this.param.taskList.getTasks().length; i++) {
                let item = document.createElement('div');
                this.param.element.appendChild(item);
                new CompoTask({
                    task: this.param.taskList.getTasks()[i],
                    element: item
                }).render();
            }
        }
    }
}