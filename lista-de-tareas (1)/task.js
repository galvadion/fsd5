class Task{
    constructor(task,priority){
        this.task = task,
        this.priority = priority
    }

    priorityOrder(){
        if(this.priority == 'prioridad-baja'){
            return 1
        }else if (this.priority == 'prioridad-media'){
            return 2
        }else return 3
    }
}