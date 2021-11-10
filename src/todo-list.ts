import { computed } from 'mobx'
import {  Model, model, id, field, local } from 'mobx-orm'


@local()
@model
export class ToDoList extends Model {
    @id    id       ?: number 
    @field name     ?: string
    @field desc     ?: string
}
