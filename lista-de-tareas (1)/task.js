class Task{
    constructor(description,priority){
        this.description = description,
        this.priority = priority,
        this.id = sequencer
        sequencer++
    }

    priorityOrder(){
        return map.get(this.priority)
    }
}
let sequencer = 1;

const map = new Map()

map.set('prioridad-baja',1)
map.set('prioridad-media',2)
map.set('prioridad-alta',3)