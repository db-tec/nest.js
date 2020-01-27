import { Injectable } from '@nestjs/common';
import { Task } from './task';

@Injectable()
export class TaskService {
    tasks: Task[] = [
        {id: 1, description: 'tarefa 1', completed: false},
        {id: 2, description: 'tarefa 2', completed: false},
        {id: 3, description: 'tarefa 3', completed: true},
        {id: 4, description: 'tarefa 4', completed: false},
        {id: 5, description: 'tarefa 5', completed: false},
        {id: 6, description: 'tarefa 6', completed: false},
        {id: 7, description: 'tarefa 7', completed: false},
        {id: 8, description: 'tarefa 8', completed: true},
        {id: 9, description: 'tarefa 9', completed: false},
        {id: 10, description: 'tarefa 10', completed: false},        
    ]; 

    getAll(){
        return this.tasks;
    }

    getById(id: number){
        const task = this.tasks.find((value) => value.id == id);
        return task;
    }

    /*
    // Lucas
    getById(id: number): Promise<Task>{
        return new Promise((resolve, reject) => {
            const task = this.tasks.find((value) => value.id == id);
            resolve(task);
        })
    } */

    create(task: Task){

    }

    udate(task: Task){

    }


}
