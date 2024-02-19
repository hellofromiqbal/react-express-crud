/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './index.scss'

const Detail = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5173/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProductDetail(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="main">
      <Link to="/" className="btn btn-primary">Kembali</Link>

      <table className="table">
        <tbody>
          <tr>
            <td>ID</td>
            <td>: {productDetail?._id}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>: {productDetail?.name}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>: {productDetail?.price?.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
          </tr>
          <tr>
            <td>Stock</td>
            <td>: {productDetail?.stock}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Detail