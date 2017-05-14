Vue.component('task-list', {
    template: '#task-list-template',
    props:['list']
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
