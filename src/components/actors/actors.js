import React, { Component, Fragment } from 'react';
import ApiService from '../../ApiService';

export default class Actors extends Component {

    apiService = new ApiService();

    state = {
        actorsList: [],
        text: ''
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

    handleChange = (e) => {
        this.setState({ text: e.target.value });
    }

    render() {
        const { actorsList } = this.state;
        const actors = this.renderActors(actorsList);

        return (
            <Fragment>
                <form>
                <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.text}
                />
                <button>add</button>
                </form>
                
                {actors}
            </Fragment>
        )
    }
}
