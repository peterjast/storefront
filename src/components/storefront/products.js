import React, { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import './storefront.css';
import * as actions from '../../store/actions.js'

import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const Products = props => {

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140, 
    },  
  })
  
  const classes = useStyles();

  const fetchData = (e) => {
    e && e.preventDefault();
    props.get();
  }

  useEffect(() => {
    fetchData();
  }, []);

  return(
    <section className="products">
      <Grid container>
        {props.products.map(product => {
          if(product.inventory > 0){
            return (
            <Card className={classes.root} key={product._id} id="card">
               <CardActionArea>
                 <CardMedia
                  className={classes.media}
                  image={product.image}
                  title={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {product.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={() => props.addToCart(product._id, product)}>
                  ADD TO CART
                </Button>
                <Button size="small" color="primary">
                  VIEW DETAILS
                </Button>
              </CardActions>
            </Card>
            )
          }
        })}
      </Grid>
    </section>
  )
}

const mapDispatchToProps = (dispatch, getState) => ({
  get: () => dispatch(actions.getRemoteData()),
  addToCart: (id, product) => dispatch(actions.putRemoteData(id, product))
})

const mapStateToProps = state => ({
  products: state.category.products,
  activeCategory: state.category.activeCategory
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);
