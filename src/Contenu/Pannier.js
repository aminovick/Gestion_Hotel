import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

function Pannier(props) {
  const { carts, hotels } = props;
  let total = 0;
  return (<MuiThemeProvider >
    <React.Fragment>
      <AppBar position="static" color="default">
        <Typography variant="h6" style={{ padding: 10 }}>
          PANNIER
      </Typography>

      </AppBar>
      <List style={{ backgroundColor: '#f5f5f5' }}>
        {

          Object.keys(carts).map((hotelId) => {
            const qte = carts[hotelId];
            total += hotels[hotelId].prix * qte;
            return (
              <div>
                <ListItem alignItems="flex-start">

                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={hotels[hotelId].image}
                      style={{
                        margin: 15,
                        width: 70,
                        height: 70,
                      }} />

                  </ListItemAvatar>
                  <ListItemText

                    style={{ marginTop: '30px', backgroundColor: '#fafafa' }}
                    primary={hotels[hotelId].prix + "€"}
                    secondary={
                      <React.Fragment>
                        {" prix /nuit"}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <ListItem alignItems="flex-start">
                  <Divider variant="inset" component="li" />
                  <ListItemText

                    style={{ marginTop: '20px', backgroundColor: '#64dd17', position: 'relative', left: '5px' }}
                    primary={`Total: ${total}`}
                    secondary={
                      <React.Fragment>

                      </React.Fragment>
                    }
                  />
                </ListItem>
              </div>
            );
          })}
      </List>
    </React.Fragment>
  </ MuiThemeProvider>
  )

}
const mapStateToProps = ({ CART, Hotel }) => {
  return {
    carts: CART.data,
    hotels: Hotel.data
  };
};

export default connect(mapStateToProps)(Pannier);