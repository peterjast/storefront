import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import './storefront.css';

import { connect } from 'react-redux';
import * as actions from '../../store/actions.js'

const Categories = props => {
  return(
    <section className="breadcrumbs">
      <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" onClick={() => props.get()}>ALL</Link>    
      <Link color="inherit" onClick={() => props.food()}>FOOD</Link>
      <Link color="inherit" onClick={() => props.electronics()}>ELECTRONICS</Link>
      </Breadcrumbs>
    </section>
  )
}  

const mapStateToProps = state => ({
  state
})

const mapDispatchToProps = (dispatch, getState) => ({
  get: () => dispatch(actions.getRemoteData()),
  food: () => dispatch(actions.getFood()),
  electronics: () => dispatch(actions.getElectronics())
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories);