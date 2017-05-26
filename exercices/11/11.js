Vue.component('tasks', {
    template: '#tasks-template'
    ,
    data: function () {
        return {
            list: []
        };
    }
    ,
    created: function () {
        this.fetchTasks();
    }
    ,
    methods: {

        fetchTasks: function () {
            var that = this;
            this.$http.get('http://localhost:8080/tasks-server/task').then(
                response => {that.list = response.body;},
                response => {console.log(JSON.stringify(response));}
            );
        },

        deleteTask: function (task) {
            this.list.$remove(task);
        }
    }
});

new Vue({
    el: "#app"
});
