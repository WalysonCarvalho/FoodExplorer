import React, { createContext, useState, useContext } from "react";

// Criando o contexto
const OrderContext = createContext();

// Criando o provider
export function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]); // Lista de pedidos
  const [orderCount, setOrderCount] = useState(0); // Contador total de pedidos

  const addOrder = (newOrder) => {
    setOrders((prevOrders) => [...prevOrders, newOrder]); // Adiciona novo pedido
    setOrderCount((prevCount) => prevCount + newOrder.quantity); // Atualiza o contador
  };

  return (
    <OrderContext.Provider value={{ orders, orderCount, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

// Criando o hook para usar o contexto de forma mais simples
export function useOrder() {
  return useContext(OrderContext);
}
