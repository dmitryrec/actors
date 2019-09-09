import React, { Component, Fragment } from 'react';
import ApiService from '../../ApiService';

export default class Actors extends Component {

    apiService = new ApiService();

    state = {
        actorsList: []
    }

    componentDidMount() {
        this.apiService.getActors().then((actorsL) => {
            this.setState({
                actorsList: actorsL
            })
        })
    }

    renderActors(arr) {
        return arr.map(({ name }) => {
            return (
                <li key={Math.random()}>
                    {name}
                </li>
            )
        })
    }

    render() {
        const { actorsList } = this.state;
        const actors = this.renderActors(actorsList);
        console.log(this.state)
        return (
            <Fragment>
                {actors}
            </Fragment>
        )
    }
}
