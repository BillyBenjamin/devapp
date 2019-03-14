let list = new TaskList();
let tasks = new CompoTaskList({
    element: document.getElementById('tasks'),
    taskList: list
});
let task = new Task('test', null);
let task2 = new Task('test2', null);
let task3 = new Task('test3', null);

list.add(task);
list.add(task2);
list.add(task3);

tasks.render();