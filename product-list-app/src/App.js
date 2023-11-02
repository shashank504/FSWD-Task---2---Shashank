import React, { useState } from 'react';
import ProductList from './components/ProductList';
import FilterSort from './components/FilterSort';
import Pagination from './components/Pagination';

import './App.css';

const products = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Description for Product 1',
    price: 50,
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/278/112/979/silhouette-of-tree-during-nighttime-wallpaper-preview.jpg"
  },



    {
      id: 2,
      title: 'Product 2',
      description: 'Description for Product 2',
      price: 60,
      imageUrl: 'https://m.timesofindia.com/photo/100067475/100067475.jpg'
    },
    {
      id: 3,
      title: 'Product 3',
      description: 'Description for Product 3',
      price: 70,
      imageUrl: 'https://png.pngtree.com/background/20230519/original/pngtree-watermelon-cut-in-half-on-wooden-board-with-black-background-picture-image_2666597.jpg'
    },
   
  ];

  
  
  const App = () => {
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4;
  
    const handleFilter = (category) => {
      if (category === 'all') {
        setFilteredProducts(products);
      } else {
        const filtered = products.filter(product => product.category === category);
        setFilteredProducts(filtered);
      }
    };
  
    const handleSort = (sortBy) => {
      const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === 'priceAsc') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
      setFilteredProducts(sortedProducts);
    };
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  
    return (
      <div className="App">
        <h1>Product List</h1>
        <FilterSort handleFilter={handleFilter} handleSort={handleSort} />
        <ProductList products={currentProducts} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>
    );
  };
  
  
export default App;
