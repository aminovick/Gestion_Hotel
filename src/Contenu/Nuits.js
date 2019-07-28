import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import * as Actions from './store/Actions';

const styles = {
    field: {
        margin: 80,
        marginTop: 19
    },
}
class Nuits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qte: 1
        }
    }
    HandelChange = input => e => {

        console.log(input);
        this.setState({ [input]: e.target.value })
    }

    continue = e => {
        const { selectedHotel } = this.props;
        const { qte } = this.props.values;
        e.preventDefault();
        this.props.prochainEtap();
        this.props.addQte(selectedHotel, qte);
    }
    precedent = e => {
        e.preventDefault();
        this.props.EtapPrecedente();
    }
    render() {
        const { hundelChange, values } = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar position="static" color="default">
                        <Typography variant="h6" style={{ padding: 10 }}>
                            informations personnelles
          </Typography>

                    </AppBar>
                    <div className="flex" style={styles.field} >
                        <TextField
                            id="standard-name"
                            label="Nuits"
                            value={values.qte}
                            onChange={hundelChange('qte')}
                            margin="normal"
                            type="number"
                            onInput={(e) => {
                                e.target.value = Math.max(1, parseInt(e.target.value)).toString().slice(0, 5555)
                            }}
                            min={1}
                        />
                    </div>
                    <Button variant="contained" style={styles.field}
                        onClick={this.precedent}
                        color="secondary">
                        Precedent
      </Button>
                    <Button variant="contained" style={styles.field}
                        onClick={this.continue} >
                        Continue
      </Button>
                </React.Fragment>
            </MuiThemeProvider>)
    }
}

const mapStateToProps = ({ Hotel }) => ({
    selectedHotel: Hotel.selectedHotel
});

const mapDispatchToProps = (dispatch) => ({
    addQte: (hotelId, qte) => dispatch(Actions.addQteHotel(hotelId, qte))
});

export default connect(mapStateToProps, mapDispatchToProps)(Nuits);