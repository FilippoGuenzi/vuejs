new Vue({
    el: "#app",
    data: {
        something : true,
        tasks: [
            {body: 'Go to the bank', completed: false},
            {body: 'Go to the doctor', completed: false},
            {body: 'Go to the grocery', completed: true}
        ]
    }
});
