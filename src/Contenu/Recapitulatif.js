import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
    field: {
        margin: 100,
        marginTop: 19
    },

}
class Recapitulatif extends Component {

    continue = e => {
        e.preventDefault();
        this.props.prochainEtap();

    }
    precedent = e => {
        e.preventDefault();
        this.props.EtapPrecedente();
    }
    render() {
        const { values:{nuits,nom,prenom,email,adress} } = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar position="static" color="default">
                        <Typography variant="h6" style={{ padding: 10 }}>
                        récapitulatif de la commande
          </Typography>

                    </AppBar>
                   
                        <List>
                        <ListItem>
                            <ListItemText
                            primary="Nuits"
                            secondary={nuits}
                            />
                            <ListItemText
                            primary="Nom"
                            secondary={nom}
                            />
                             <ListItemText
                            primary="Prenom"
                            secondary={prenom}
                            />
                             <ListItemText
                            primary="Email"
                            secondary={email}
                            />
                            <ListItemText
                            primary="Adresse"
                            secondary={adress}
                            />

                        </ListItem>
                        </List>
                   
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
export default Recapitulatif