import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = {
    field: {
        margin: 100,
        marginTop: 19
    },

}
class InfoPersonnel extends Component {

    disabled = () => {
        this.continue()
    }

    continue = e => {
        e.preventDefault();
        const isValid = this.props.validate();
        if (isValid) {
            console.log(this.state)
        }


        this.props.prochainEtap();
    }
    precedent = e => {
        e.preventDefault();
        this.props.EtapPrecedente();
    }
    render() {
        const { values, hundelChange } = this.props

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
                            label="Nom"
                            value={values.nom}
                            onChange={hundelChange('nom')}
                            margin="normal"
                        />
                        <br />
                        <TextField
                            id="standard-prenom"
                            label="Prenom"
                            value={values.prenom}
                            onChange={hundelChange('prenom')}
                            margin="normal"
                        />
                        <br />
                        <TextField
                            id="standard-email"
                            label="Email"
                            value={values.email}
                            onChange={hundelChange('email')}
                            margin="normal"
                            required
                            type="email"
                        />
                        <div style={{ color: 'red' }}> {values.emailError}</div>
                        <br />
                        <TextField
                            id="standard-adress"
                            label="Adress"
                            value={values.adress}
                            onChange={hundelChange('adress')}
                            margin="normal"
                        />
                    </div>
                    <Button variant="contained" style={styles.field}
                        onClick={this.precedent}
                        color="secondary">
                        Precedent
                    </Button>
                    <Button variant="contained" style={styles.field}
                        onClick={this.continue}
                        disabled={values.emailError}
                    >
                        Continue
      </Button>

                </React.Fragment>
            </MuiThemeProvider>)
    }
}
export default InfoPersonnel