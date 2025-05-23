import React from "react";

const History = () => {
  const orders = [
    { id: 1, name: "Cơm sườn", date: "2025-05-10" },
    { id: 2, name: "Cơm gà", date: "2025-05-12" },
  ];

  return (
    <div>
      <h2>Lịch sử đơn hàng</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            {order.name} - {order.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;