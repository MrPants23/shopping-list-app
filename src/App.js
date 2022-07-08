import React, { useState } from 'react'
import './App.css';
import ShoppingListItem from './ShoppingListItem';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);

  const addNewItem = (e) => {
    e.preventDefault();
    setItems(items => [...items, {
      itemName: input,
      completed: false,
      quantity: 1,
      uId: uuidv4()
    }]);
    setInput('');
  }

  const updateQuantity = (newQuantity, uId) => {
    setItems(items.map((item) => {
      if (item.uId === uId && item.quantity + newQuantity > 0) {
        return { ...item, quantity: item.quantity + newQuantity };
      }
      return item;
    }));
  }

  const updateCompleted = (uId) => {
    setItems(items.map((item) => {
      if (item.uId === uId) {
        return { ...item, completed: !item.completed };
      }
      return item;
    }));
  }

  return (
    <div className="App">
      <h1>Shopping List</h1> 
      <hr></hr>
      <div className='shopping-list-input'>
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)}></input>
        <button onClick={(e) => addNewItem(e)}>+</button>
      </div>
      <div className='shopping-list-items'>
        {items.map((item, index) => {
          return <ShoppingListItem
            itemName={item.itemName}
            completed={item.completed}
            quantity={item.quantity}
            key={index}
            uId={item.uId}
            updateQuantity={updateQuantity}
            updateCompleted={updateCompleted} />
        })}
      </div>
      <div className='shopping-list-total'>
        Total: {items.reduce((a, v) => a = a + v.quantity, 0)}
      </div>
    </div>
  );
}

export default App;
