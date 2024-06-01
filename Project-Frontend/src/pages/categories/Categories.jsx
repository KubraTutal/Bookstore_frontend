import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryList from '../../components/CategoryList';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      getCategories();
    }, []);
  
    const getCategories = async () => {
      try {
        const response = await axios.get('/category/getAllCategory');
        setCategories(response.data.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    return (
      <>
        <CategoryList categories={categories} />
      </>
    );
};

export default Categories;
