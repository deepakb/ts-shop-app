import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { withStyles, Theme } from '@material-ui/core/styles';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import ShowMoreText from 'react-show-more-text';
import { ProductType } from './Product.types';
import { useStyles } from './Product.styles';

interface ProductProps {
  product: ProductType
}

const ColorButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText("#3f51b5"),
    backgroundColor: "#3f51b5",
    '&:hover': {
      backgroundColor: "#3f51b5",
    },
  },
}))(Button);

const Product: React.FC<ProductProps> = ({ product }): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid item xs={4}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={product.image}
          title={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <ShowMoreText
                lines={3}
                more="view details"
                less="Show less"
                className="content-css"
                anchorClass="my-anchor-css-class"
                //onClick={this.executeOnClick}
                expanded={false}
                width={280}
            >{product.description}</ShowMoreText>
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.actionContainer}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <ColorButton
            variant="contained"
            color="default"
            startIcon={<LocalGroceryStoreIcon />}
          >
            ADD TO CART
          </ColorButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
