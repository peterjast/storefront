import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import './storefront.css';

import { connect } from 'react-redux';
import { food, electronics, reset } from '../../store/categories';

const Categories = props => {
  return(
    <section className="breadcrumbs">
      <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" onClick={() => props.reset()}>ALL</Link>    
      <Link color="inherit" onClick={() => props.food('FOOD')}>FOOD</Link>
      <Link color="inherit" onClick={() => props.electronics('ELECTRONICS')}>ELECTRONICS</Link>
      </Breadcrumbs>
    </section>
  )
}  

const mapStateToProps = state => ({
  state
})

const mapDispatchToProps = { food, electronics, reset }

export default connect(mapStateToProps, mapDispatchToProps)(Categories);