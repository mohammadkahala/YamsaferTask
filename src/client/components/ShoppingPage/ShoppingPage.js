import React, { useState } from 'react';
import {connect} from 'react-redux';

import status from '../../../constants';
import ProductsContainer from "./ProductsContainer";
import Basket from "./Basket";

export const ShoppingContext = React.createContext({});
export const ShoppingProvider = ShoppingContext.Provider;

const getItemFromList = (list, item) => {
  for (let itemList of list)
    if (itemList.name === item.name)
      return item;
  return null;
};

const ShoppingPage = ({ history, registrationStatus}) => {
  if (registrationStatus === status.LOGGED_OUT)
    history.push('/');

  const [ basketItems, setBasketItems ] = useState([]);

  const removeItem = itemToRemove => {
    setBasketItems(prevState => {
      const item = getItemFromList(prevState, itemToRemove);

      if (item && item.quantity !== 1){
        return prevState.map(item =>
          item.name === itemToRemove.name
            ? {...item, quantity: item.quantity - 1}
            : item
        );
      }else if(item){
        return prevState.filter(item => item.name !== itemToRemove.name);
      }else {
        return [...prevState, {...itemToRemove, quantity: 1}];
      }
    });
  };

  const addItem = itemToAdd => {
    setBasketItems(prevState => {
      const item = getItemFromList(prevState, itemToAdd);

      if (item){
        return prevState.map(item =>
          item.name === itemToAdd.name
            ? {...item, quantity: item.quantity + 1}
            : item
        );
      }

      return [...prevState, {...itemToAdd, quantity: 1}];
    });
  };

  return (
    <ShoppingProvider value={{addItem, removeItem}}>
      <div className="shopping-screen">
        <ProductsContainer />
        <Basket basketList={basketItems} />
      </div>
    </ShoppingProvider>
  );
};

const mapStateToProps = (state) => {
  return { registrationStatus: state.loggedIn };
};

export default connect(mapStateToProps)(ShoppingPage);