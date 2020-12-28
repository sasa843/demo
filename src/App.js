import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItem';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class App extends React.Component
{
constructor(props)
{
 super(props);
 this.state={
   item:[],
   currentItem:{
     text:'',
     key:''
   }
 }
 this.deleteItems=this.deleteItems.bind(this);
 this.updateItem=this.updateItem.bind(this);
}
  handleInput(e)
  {
    this.setState({
      currentItem:{
        text:e.target.value,
        key: Date.now()
      }
    })
  }

  addItem(e)
  {
    e.preventDefault();

    const newItem= this.state.currentItem;

   

    if(newItem.text!=="")
    {
      const newItems=[...this.state.item,newItem];
      this.setState({
          item:newItems,

          currentItem:{
            text:'',
            key:''
          }
      })
    }

   
  }
  deleteItems(key)
  {
    const filteredItems=this.state.item.filter(item=>item.key!==key);
    this.setState({
      item:filteredItems
    })
  }
  updateItem(value,key)
  {
    const items=this.state.item;
    items.map(item=>
      {
        if(item.key==key)
        {
          item.text=value;
        }
      }
      )
    
      this.setState({
        item:items
      })
  }

  render(){
  return (
    <div className="App">
   <header>
    <form id ="to-do-form" onSubmit={this.addItem.bind(this)}>
      <input type="text" placeholder="Enter Task" value={this.state.currentItem.text} onChange={this.handleInput.bind(this)}></input>
      <button type="submit" >Add</button>
    </form>
   </header>
   <ListItems items={this.state.item} deleteItems={this.deleteItems} updateItem={this.updateItem}></ListItems>
   </div>
  );
  }
}

export default App;
