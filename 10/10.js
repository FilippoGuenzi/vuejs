Vue.component('tasks', {
    template: '#tasks-template'
    ,
    props: ['list']
    //,
    //data: function () {
    //    return {list: []};
    //}
    // ,
    //created: function(){
    //    this.fetchTasks();
    //}
    // ,
    //methods: {
    //    fetchTasks : function(){
    //        this.$http.get('http://localhost:12345/tasks-server/task', function(tasks){
    //            console.log(tasks);
    //        })
    //    }
    //}
});
new Vue({
    el: "#app",
    data: {
        tasks: [
            {"id": 0, "content": "Voilà ma tâche 0", "completed": false},
            {"id": 1, "content": "Voilà ma tâche 1", "completed": false},
            {"id": 2, "content": "Voilà ma tâche 2", "completed": true},
            {"id": 3, "content": "Voilà ma tâche 3", "completed": true},
            {"id": 4, "content": "Voilà ma tâche 4", "completed": true},
            {"id": 5, "content": "Voilà ma tâche 5", "completed": true}
        ]
    }


});
