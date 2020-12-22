import React, { useState } from 'react';

import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import TodoFilter from './TodoFilter';


const initialList = [
  { id: 'id1', text: '學會React', done: true },
  { id: 'id2', text: '學會Webpack', done: false },
  { id: 'id3', text: '年薪百萬', done: false },
];
export default function TodoList() {

  const [list, setList] = useState(initialList);
  const [filterType, setFilterType] = useState('all');

  // TODO 2
  const atAddItem = (text) => {
    const item:TodoType = {
      id: new Date().getTime().toString(),
      text,
      done: false,
    };
    setList(list.concat(item));
  };

  // TODO 3
  const atToggleItem = (id:string) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return {
          id: item.id,
          text: item.text,
          done: !item.done,
        };
      }
      return item;
    });
    setList(newList);
  };

  // TODO 4
  const atFilterChange = (type) => {
    setFilterType(type);
  };

  // TODO 5
  const filtersList = list.filter((todo) => {
    if (filterType === 'completed') {
      return todo.done;
    }
    if (filterType === 'active') {
      return !todo.done;
    }
    return true;
  });
  return (
    <section className="todo-list" data-name="TodoList.js">
      <TodoForm onAddItem={atAddItem} />
      <TodoFilter
        filterType={filterType}
        onFilterChange={atFilterChange}
      />
      <ul className="todo-items">
      {
          filtersList.map((item) => (
            <TodoItem
              key={item.id}
              id={item.id}
              done={item.done}
              onToggleItem={atToggleItem}
            >
              {item.text}
            </TodoItem>
          ))
        }
      </ul>

    </section>
  );
}
