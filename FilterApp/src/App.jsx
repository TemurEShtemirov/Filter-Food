import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Data from './Data';
import Card from './Card';
import Buttons from './Buttons';

export default function App() {
  const [items, setItems] = useState(Data);
  const menuItem = [...new Set(Data.map((val) => val.category))];

  const filterItem = (cat) => {
    const newItems = cat === 'All' ? Data : Data.filter((newVal) => newVal.category === cat);
    setItems(newItems);
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <h1 className='text-center col-12 fw-bold mt-5'>Food Filter</h1>
        <Buttons menuItems={menuItem} filterItem={filterItem} />
        <Card items={items} />
      </div>
    </div>
  );
}