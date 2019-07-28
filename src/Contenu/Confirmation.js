import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
class Confirmation extends Component {
    end = e => {
        e.preventDefault();

        this.props.EndEtap();
    }

    render() {

        const styles = {
            field: {
                margin: 100,
                marginTop: 19
            },

        }
        return (

            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar position="static" color="default">
                        <Typography variant="h6" style={{ padding: 10 }}>
                            Confirmation
          </Typography>

                    </AppBar>
                    <Card style={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography style={{ fontSize: 14 }} color="textSecondary" gutterBottom>
                                Réussi
        </Typography>
                            <br />
                            <Typography variant="body2" component="p" size="small">
                                VOTRE DEMANDE A BIEN ETE PRISE EN COMPTE
          <br />

                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Typography variant="body2" component="p">
                                Merci pour votre vesite
          <br />

                            </Typography>

                        </CardActions>
                    </Card>

                    <Button variant="contained" style={styles.field}
                        onClick={this.end}

                    >
                        Terminé
      </Button>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
export default Confirmation