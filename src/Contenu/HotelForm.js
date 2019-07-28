import React, { Component } from 'react';
import InfoPersonnel from './InfoPersonnel'
import Nuits from './Nuits';
import Recapitulatif from './Recapitulatif'
import Confirmation from './Confirmation'
import * as Actions from './store/Actions';
import ListHotel from './ListHotel'
class HotelForm extends Component {
    state = {

        etap: 1,
        id: '',
        qte: '1',
        nuitsError: '',
        nom: '',
        prenom: '',
        email: '',
        emailError: 'empty',
        adress: '',
        selectedIndex: '',

    }

    // ^prochaine etape
    prochainEtap = () => {
        const { etap } = this.state;
        this.setState({
            etap: etap + 1
        })
        Actions.saveClient(this.state);
    }
    // ^ etape precedente
    precedEtap = () => {
        const { etap } = this.state
        this.setState({
            etap: etap - 1
        })
    }
    //HandelChange
    HandelChange = input => e => {
        this.setState({ [input]: e.target.value })

        if (input == 'email') {
            this.validate()
        }
    }
    // dernnier Etap
    EndEtap = () => {
        const { etap } = this.state
        this.setState({
            etap: etap - 4
        })
        Actions.saveClient(this.state);
    }
    // rerquire Email
    validate = () => {
        let emailError = ''
        if (!this.state.email.includes("@")) {
            emailError = "invalid email";
        }

        this.setState({ emailError });

    }



    render() {

        const { etap } = this.state
        const { qte, nom, prenom, email, adress, nuitsError, emailError, selectedIndex } = this.state
        const values = { qte, nom, prenom, email, adress, nuitsError, emailError, selectedIndex }

        switch (etap) {
            case 1:
                return (
                    <ListHotel
                        prochainEtap={this.prochainEtap}
                        hundelChange={this.HandelChange}
                        values={values}
                    />
                )

            case 2:
                return (
                    <Nuits
                        prochainEtap={this.prochainEtap}
                        EtapPrecedente={this.precedEtap}
                        hundelChange={this.HandelChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <InfoPersonnel
                        prochainEtap={this.prochainEtap}
                        hundelChange={this.HandelChange}
                        EtapPrecedente={this.precedEtap}
                        values={values}
                        validate={this.validate}
                    />
                )
            case 4:
                return (
                    <Recapitulatif
                        prochainEtap={this.prochainEtap}
                        EtapPrecedente={this.precedEtap}
                        values={values}
                    />
                )
            case 5:
                return (
                    <h1>
                        <Confirmation
                            EndEtap={this.EndEtap}
                        />
                    </h1>
                )

        }

    }


}
export default HotelForm