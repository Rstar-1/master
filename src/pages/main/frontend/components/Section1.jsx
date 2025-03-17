
import React, { useEffect, useState } from "react";

const Home = () => {
  const [datass, setDatas] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id || isNaN(parseInt(id)) || !name.trim()) {
      alert("Please enter a valid ID and Name");
      return;
    }
    const newData = { id: parseInt(id, 10), name };
    setDatas((prevDatas) => [...prevDatas, newData]);
    setId("");
    setName("");
  };

  const combinedDataString = datass
    .map((item) => JSON.stringify(item, null, 2))
    .join(",\n");


  return (
    <div className="grid-cols-3">
      <textarea value={combinedDataString} readOnly rows={10} cols={30} />

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">ID:</label>
          <input
            type="number"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
          {combinedDataString}
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Item</button>
      </form>

      <h2>Data List:</h2>
      <ul>
        {datass.map((item, index) => (
          <li key={index}>
            {" "}
            ID: {item.id}, Name: {item.name}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

export const HtmlContent = (combinedDataString) => {
  return JSON.stringify(combinedDataString, null, 2);
};
