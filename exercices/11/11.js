Vue.component('tasks', {
    template: '#tasks-template'
    ,
    data: function () {
        return {
            list: []
        };
    }
    ,
    created: function(){
        this.fetchTasks();
    }
    ,
    methods: {
        fetchTasks : function(){
            this.$http.get('http://localhost:8080/tasks-server/task', function(data){
                this.list = data;
            }.bind(this));
        },
        deleteTask : function(task){
            this.list.$remove(task);
        }
    }
});
new Vue({
    el: "#app"
});
