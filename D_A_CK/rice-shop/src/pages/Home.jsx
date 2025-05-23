import React, { useState } from "react";
import FoodItem from "../components/FoodItem";

const Home = () => {
  const foodList = [
    { id: 1, name: "Cơm sườn", price: "25-30k", img: "/images/com-suon.jpg" },
    { id: 2, name: "Cơm gà", price: "30k", img: "/images/com-ga.jpg" },
    { id: 3, name: "Cơm cá", price: "25k", img: "/images/com-ca.jpg" },
    { id: 4, name: "Cơm thập cẩm", price: "20-25-30k", img: "/images/com-thap-cam.jpg" },
    { id: 5, name: "Cơm chiên", price: "25k", img: "/images/com-chien.jpg" },
    { id: 6, name: "Cơm chay", price: "20-25-30k", img: "/images/com-chay.jpg" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState(foodList);

  const handleSearch = () => {
    const keyword = removeVietnameseTones(searchTerm.toLowerCase());
    const filtered = foodList.filter((food) =>
      removeVietnameseTones(food.name.toLowerCase()).includes(keyword)
    );
    setFilteredList(filtered);
  };

  const removeVietnameseTones = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
  };

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Tìm kiếm</button>
      </div>

      <div className="food-list">
        {filteredList.length > 0 ? (
          filteredList.map((item) => <FoodItem key={item.id} {...item} />)
        ) : (
          <p>Không tìm thấy sản phẩm phù hợp.</p>
        )}
      </div>
    </div>
  );
};

export default Home;