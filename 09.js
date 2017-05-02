Vue.component('task-list', {
    template: '#task-list-template',
    props: ['list'],
    computed: {
        leftToDo: function () {
            return this.list.filter(this.isLeftToDo).length;
        }
    },
    methods: {
        isCompleted: function (task) {
            return task.completed;
        },
        isLeftToDo: function (task) {
            return !isCompleted(task);
        }
    }
});
new Vue({
    el: "#app",
    data: {
        tasks: [
            {body: 'Go to the bank', completed: false},
            {body: 'Go to the doctor', completed: false},
            {body: 'Go to the grocery', completed: true}
        ]
    }
});
