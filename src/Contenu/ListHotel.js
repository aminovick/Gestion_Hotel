import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import * as Action from './store/Actions'
import Box from '@material-ui/core/Box';
class ListHotel extends Component {

  constructor(props) {
    super(props);
  }

  continue = (e, hotel) => {
    e.preventDefault();
    this.props.prochainEtap();
    this.props.addToCart(hotel);
  }
  componentDidMount() {
    this.props.getHotels();
    this.props.getClient()
  }

  render() {
    console.log(this.props.hotels);
    const useStyles = {
      root: {
        width: '100%',
        maxWidth: 360,

      },
      inline: {
        display: 'inline',
      },

    }
    const { values: { nuits, nom, prenom, email, adress, selectedIndex } } = this.props
    const { values, hundelChange } = this.props

    return (
      <MuiThemeProvider>
        <React.Fragment>

          <List className={useStyles.root} style={{ backgroundColor: '#bdbdbd' }}>

            {
              Object.keys(this.props.hotels.data).map((key) => {
                const hotel = this.props.hotels.data[key];
                return (<div>
                  <Box borderRadius={16} clone>
                    <ListItem alignItems="flex-start"
                      button
                      selected={selectedIndex === 0}

                      onChange={hundelChange('selectedIndex')}
                      value={values.selectedIndex}
                      onClick={event => this.continue(event, key)}
                    >
                      <ListItemAvatar style={{ backgroundColor: '#fafafa' }}>
                        <Avatar alt="Remy Sharp" src={hotel.image}
                          style={{
                            margin: 10,
                            width: 227,
                            height: 231,
                          }} />
                      </ListItemAvatar>

                      <ListItemText

                        style={{ backgroundColor: '#fafafa', marginTop: "7px" }}

                        primary={hotel.nom}
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body4"
                              className={useStyles.inline}
                              color="textPrimary"
                            >

                              <div style={{ textAlign: 'right' }}
                              >
                                {hotel.prix}€ <br /> prix /nuit
                      </div>


                            </Typography>
                            <p>{hotel.discription}
                            </p>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  </Box>
                  <br />
                  <Divider variant="inset" component="li" />
                </div>)
                  ;

              }
              )
            }

          </List>


        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = ({ Hotel, Client }) => {
  return {
    hotels: Hotel,
    client: Client
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (hotel) => dispatch(Action.addHotelToCart(hotel)),
    getHotels: () => dispatch(Action.getHotel()),
    getClient: () => (Action.getClient())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListHotel);