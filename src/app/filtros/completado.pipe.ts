import { Pipe, PipeTransform } from "@angular/core";
import { Todo } from "../todo/model/todo.model";
import { filtrosValidos } from '../todo/actions/filtro.actions';

@Pipe({
  name: "filtroCompletado"
})
export class CompletadoPipe implements PipeTransform {
  transform(todos: Todo[], completado: filtrosValidos): Todo[] {
    let ret = todos;
    if(completado === 'completados'){
      ret = todos.filter(todo => todo.completado === true)
    }else if(completado === 'pendientes'){
      ret = todos.filter(todo => todo.completado === false)
    }
    return ret;
  }
}
