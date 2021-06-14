import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import superagent from 'superagent';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Grid } from '@material-ui/core';
import './details.css';
import * as actions from '../../store/actions.js'

import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const ProductDetails = props => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    superagent.get(`https://api-server-ps.herokuapp.com/product/${id}`)
    .then(response => {
      setItem(response.body);
      console.log(response.body);
    }).catch(err => console.log(err.message))
    console.log(item);
  }, [id]);

  const useStyles = makeStyles({
    root: {
      maxWidth: 640,
    },
    media: {
      height: 360, 
    },
  });

  const style = {
    maxWidth: 640,
    background: '#3f51b5',
    color: 'white',
  }

  const classes = useStyles();
  
  return (
    <>
    <section className="prod">
      <div id="item-title">
        <Typography gutterBottom variant="h2" component="h3" className="description">
          {item.name}
        </Typography>
        <Typography gutterBottom variant="h5" color="textSecondary" component="h3" className="description">
          {item.description}
        </Typography>
      </div>
      <Card className={classes.root} key={item._id} id="card">
        <CardActionArea>
          <CardMedia
          className={classes.media}
          image={item.image}
          title={item.name}
        />
        <CardContent>
          <Grid container spacing={1}>
            <Grid item>
            <Typography gutterBottom variant="h5" color="textSecondary" component="p">
              In Stock:
            </Typography>
            </Grid>
            <Grid item sm={8}>
            <Typography gutterBottom variant="h5" color="textSecondary" component="p">
              <b>{item.inventory}</b>
            </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5" component="p">
                ${item.price}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>  
          </Grid>
        </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.root} id="card">
        <Button id="buy" style={style} className={classes.button} size="large" fullWidth color="primary" onClick={() => props.addToCart(item._id, item)}>
              ADD TO CART
        </Button>
      </Card>
      <div id="suggestions" className={classes.root}>
        <Typography gutterBottom variant="h4">
          Related Items
        </Typography>
      </div>
      <Card className={classes.root} id="card">
        <Grid container>
          <Grid item sm={4}>
            <Card>
              <Button fullWidth>
                <Typography variant="body1" component="p">
                  Suggestion 1 
                </Typography>
              </Button>
            </Card>
          </Grid>
          <Grid item sm={4}>
            <Card>
              <Button fullWidth>
                <Typography variant="body1" component="p">
                  Suggestion 2 
                </Typography>
              </Button>
            </Card>
          </Grid>
          <Grid item sm={4}>
            <Card>
            <Button fullWidth>
                <Typography variant="body1" component="p">
                  Suggestion 3 
                </Typography>
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Card>
      <div id="details" className={classes.root}>
        <Typography gutterBottom variant="h4">
          Product Details
        </Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Specifications</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Product Specs.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>User Reviews</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A list of reviews ...
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
    </>
  )    
}
  
const mapDispatchToProps = (dispatch, getState) => ({
  addToCart: (id, product) => dispatch(actions.putRemoteData(id, product))
})

const mapStateToProps = state => ({
  products: state.category.products,
})
  
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
