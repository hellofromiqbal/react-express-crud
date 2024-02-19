/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5173/products')
      .then((res) => res.json())
      .then((data) => setAllProducts(data.data))
      .catch((err) => console.log(err));
  }, []);
  const handleDeleteProduct = async (id) => {
    const deleteConfirmation = confirm('Are you sure?');
    if(deleteConfirmation) {
      const res = await fetch(`http://localhost:5173/products/${id}`, { method: 'DELETE' });
      if(!res.ok) {
        const result = await res.json();
        throw new Error(result.message);
      } else {
        const result = await res.json();
        alert(result.message);
        window.location.reload();
      };
    } else {
      return;
    };
  };

  return(
    <div className="main">
      <Link to="/tambah" className="btn btn-primary">Tamah Produk</Link>
      <div className="search">
        <input type="text" placeholder="Masukan kata kunci..."/>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th className="text-right">Price</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {allProducts.map((product, index) => (
            <tr key={product?._id}>
              <td>{index + 1}</td>
              <td>{product?.name}</td>
              <td className="text-right">{product?.price?.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
              <td className="text-center">
                <Link to={`/detail/${product?._id}`} className="btn btn-sm btn-info">Detail</Link>
                <Link to={`/edit/${product?._id}`} className="btn btn-sm btn-warning">Edit</Link>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDeleteProduct(product?._id)}
                >Delete</button>
              </td>
            </tr>  
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home