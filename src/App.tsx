import React from 'react'
import './App.css';
import { ToDoList } from './todo-list'
import { Query } from 'mobx-orm'
import { observer } from 'mobx-react'
import { action, runInAction } from 'mobx';



@observer
export default class App extends React.Component<any> {

  query: Query<ToDoList>|any
  
  constructor(props: any) {
    super(props)
    this.randomChange= this.randomChange.bind(this);
    console.log('created')
    let i 
    i = new ToDoList({name: 'test1'}); i.save();
    i = new ToDoList({name: 'test2'}); i.save();
    i = new ToDoList({name: 'test3'}); i.save();
    i = new ToDoList({name: 'test4'}); i.save();
    i = new ToDoList({name: 'test5'}); i.save();
    this.query = ToDoList.load()
  }

  async createItem() {
    console.log('create item')
    let i = new ToDoList({name: 'testX'}); await i.save()
  }

  randomChange() {
    console.log('random change')
    runInAction(() => {
      for(let i of this.query.items) {
        i.name = i.name + 'XXX'
      }
    })
  }

  render() {
    return (
      <div className="home">
        <div>
          <button onClick={this.createItem}>Create</button>
          <button onClick={this.randomChange}>Random Change</button>
          <div>{ this.query.items.length }</div>
          <ul>
          {this.query.items.map(function(item: ToDoList){
            return <li key={item.id}>{ item.id } { item.name }</li>
          })}
          </ul>
        </div>
      </div>
    );

  }
}

