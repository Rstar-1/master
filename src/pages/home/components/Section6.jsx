import React, { useState } from "react";

const Secton6 = () => {
  const [datass, setDatas] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("")
  const newdf = [
    { id: 12, name: "dsa" },
    { id: 23, name: "fdsfd" },
    { id: 23, name: "fdfds" },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id || isNaN(parseInt(id)) || !name.trim()) {
      alert("Please enter a valid ID and Name");
      return;
    }

    const newData = { id: parseInt(id, 10), name };
    setDatas((prevDatas) => {
      const updatedData = [...prevDatas, newData];
      setTextAreaValue(JSON.stringify(updatedData, null, 2));
      return updatedData;
    });

    setId("");
    setName("");
  };

  return (
    <div className="grid-cols-3">
      <textarea
        value={textAreaValue}
        onChange={(e) => setTextAreaValue(e.target.value)}
        rows={10}
        cols={30}
      />
      <pre>{JSON.stringify(newdf, null, 2)}</pre>
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
      <ul>
        {datass.map((item, index) => (
          <li key={index}>
            ID: {item.id}, Name: {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Secton6;
