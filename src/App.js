import React from "react"
import ListItems from "./Listitems"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import InputForm from "./InputForm";

library.add(faTrash);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: '',
        title: ''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
  }
  handleTitle(e) {
    let state = this.state
    state.currentItem.title = e.target.value
    this.setState(state)
  }
  handleInput(e) {
    let state = this.state
    state.currentItem.text = e.target.value
    state.currentItem.key = Date.now()
    this.setState(state)
  }
  
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: '',
          title: ''
        }
      })
    }
  }
   deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })
  }
  render() {
    return (
      
      <div className="App">
        <div className="border">
          <InputForm addItem={this.addItem} handleInput={this.handleInput} handleTitle={this.handleTitle} currentItem={this.state.currentItem }/>
      <div className="Pinboard">
        <ListItems items={this.state.items}
          deleteItem={this.deleteItem}
            />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
