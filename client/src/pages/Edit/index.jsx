/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Input from '../../components/Input'

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    name: '',
    price: 0,
    stock: 0,
    status: true  
  });
  useEffect(() => {
    fetch(`http://localhost:5173/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const result = data.data;
        setFormState({
          name: result.name,
          price: result.price,
          stock: result.stock,
          status: result.status
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5173/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(formState)
      });
      if(!res.ok) {
        const result = await res.json();
        throw new Error(result.message);
      } else {
        const result = await res.json();
        alert(result.message);
        navigate("/");
      };
    } catch (error) {
      alert(error.message);
    };
  };

  return (
    <div className="main">
      <div className="card">
        <h2>Edit Produk</h2>
        <br />
        <form onSubmit={formSubmit}>
          <Input
            name="name"
            type="text"
            placeholder="Nama Produk..."
            label="Nama"
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          />
          <Input
            name="price"
            type="number"
            placeholder="Harga Produk..."
            label="Harga"
            value={formState.price}
            onChange={(e) => setFormState({ ...formState, price: e.target.value })}
          />
          <Input
            name="Stock"
            type="number"
            placeholder="Stock Produk..."
            label="Stock"
            value={formState.stock}
            onChange={(e) => setFormState({ ...formState, stock: e.target.value })}
          />
          <Input
            name="status"
            type="checkbox"
            label="Active"
            checked={formState.status}
            onChange={() => setFormState({ ...formState, status: !formState.status })}
          />
          <button type="submit" className="btn btn-primary">Simpan</button>
        </form>
      </div>
    </div>
  )
}

export default Edit