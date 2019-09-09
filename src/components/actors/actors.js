import React, { Component, Fragment } from 'react';
import ApiService from '../../ApiService';

export default class Actors extends Component {

    apiService = new ApiService();

    state = {
        actorsList: []
    }

    componentDidMount() {
        this.apiService.getActors().then((actorsList) => {
            this.setState({
                actorsList
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

        return (
            <Fragment>
                {actors}
            </Fragment>
        )
    }
}
