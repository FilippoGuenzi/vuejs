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
        this.resource = this.$resource('http://localhost:8080/tasks-server/task{/id}');
        this.getTaskById();
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

        getTaskById: function(){
            this.resource.get({id:3}).then(response => {
                console.log(response.body);
            });
        },

        deleteTask: function (task) {
            this.list.$remove(task);
        }
    }
});

new Vue({
    el: "#app"
});
