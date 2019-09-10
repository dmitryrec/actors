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
        console.log(this.state)
    }

    renderActors(arr) {
        return arr.map(({ name }) => {
            return (
                <li key={Math.random()}>
                    {name}
                    <button>del</button>
                </li>
            )
        })
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if(!this.state.length){
            return
        }
        const newActor = {
            text: this.state.text,
            id: Math.random()
        };
        this.setState(({actorsList})=>({
             ...actorsList, newActor
        }))
    }

    render() {
        const { actorsList } = this.state;
        const actors = this.renderActors(actorsList);
        console.log(this.state)

        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
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
