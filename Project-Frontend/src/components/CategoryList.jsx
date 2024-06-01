import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './categoryList/CategoryList.module.css';

const CategoryList = ({ categories }) => {
  return (
    <Grid container spacing={2} justifyContent="center" className={styles.container}>
      {categories.map((category) => (
        <Grid item key={category.categoryID} xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card className={styles.card}>
            <Link to={`/kitaplar/${category.categoryID}`}>
              <img
                src={category.img}
                alt={category.title}
                className={styles['card-img']}  
              />
            </Link>
            <CardContent className={styles['card-content']}>
              <Typography variant="h6" className={styles['card-title']}>
                {category.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CategoryList;
