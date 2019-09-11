import React, { Component, Fragment } from 'react';
import ApiService from '../../ApiService';

class ActorsList extends Component{

    apiService = new ApiService();

    state = {
        actorsList: [],
        text: '',
    }

    componentDidMount() {
        this.apiService.getActors().then((actorsList) => {
            this.setState({
                actorsList
            })
        })
    }

    renderActors(arr) {
        return arr.map(({ name, url }) => {
            return (
                <li key={url}>
                    {name}
                    <button onClick={() => this.props.onDelActor(url)}>del</button>
                </li>
            )
        })
    };

    handleChange = (e) => {
        this.setState({ text: e.target.value });
    };

    
    addActor = (text) => {
        const newItem = {
            name: text,
            url: this.maxId++
        };

        this.setState(({actorsList})=>{
            const newActorList = [
                ...actorsList,
                newItem
            ];

            return {
                actorsList: newActorList
            }
        });
        console.log(2)
    }

    render() {
        const { actorsList, text, } = this.state;
        const actors = this.renderActors(actorsList);

        return(
            <ul>
                {actors}
            </ul>
        )
    }
}

export default class Actors extends Component {
    maxId =100;

    state={
        actorsList: []
    }
    
    delActor = (url) => {
        this.setState(({ actorsList }) => {
            const idx = actorsList.findIndex((el) => el.url === url);
            console.log(idx);
            console.log(this);
            console.log(this.state.actorsList)
            const newArr = [
                ...actorsList.slice(0, idx),
                ...actorsList.slice(idx + 1)
            ]
            return {
                actorsList: newArr
            }

        })
        console.log(this.state.actorsList)

    };

    render() {

        return (
            <Fragment>
                <input
                    type="text"
                    onChange={this.handleChange}
                />
                <button onClick={this.addActor}>add</button>

                <ActorsList onDelActor={this.delActor}/>

            </Fragment>
        )
    }
}
