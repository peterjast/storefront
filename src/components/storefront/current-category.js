import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import './storefront.css';

const ActiveCategory = props => {
  return(
    <div class="category-title">
      <h1>{props.activeCategory}</h1>
      <Typography gutterBottom variant="h5" color="textSecondary" component="h3" className="description">
        {props.categories.map((category) => {
          if(category.name === props.activeCategory) {
            return (
              category.description
            )
          }
        })
      }
      </Typography>
    </div>
  )  
}

const mapStateToProps = state => ({
  activeCategory: state.category.activeCategory,
  categories: state.category.categories
})

export default connect(mapStateToProps)(ActiveCategory);
