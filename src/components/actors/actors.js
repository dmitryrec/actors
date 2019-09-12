import React, { Component } from 'react';
import ActorsList from "./actorslist";
import ApiService from '../../ApiService';
import './actors.css';

export default class Actors extends Component {
    maxId = 100;

    state = {
        actorsList: [],
        text: ''
    }
    apiService = new ApiService();

    componentDidMount() {
        this.apiService.getActors().then((actorsList) => {
            this.setState({
                actorsList
            })
        })
    }
    onDelete = (url) => {
        this.setState(({ actorsList }) => {
            const items = actorsList.filter((item) => item.url !== url);
            return { actorsList: items };
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { text } = this.state;
        this.setState({ text: '' });
        this.onActorAdded(text)

    };

    handleChange = (e) => {
        this.setState({ text: e.target.value });
    };

    onActorAdded = (name) => {
        this.setState((state) => {
            const item = this.createActor(name);
            if(this.state.text===''){
                return;
            }
            return { actorsList: [...state.actorsList, item] };
        })
    };

    createActor(name) {
        return {
            url: ++this.maxId,
            name: name
        };
    }

    render() {
        const { actorsList } = this.state;
        return (
            <form className="form"
                onSubmit={this.onSubmit}>
                <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.text}
                    
                />
                <button type="submit">add</button>
                <ul>
                    {/* {actorsList.map(({ name, url }) => {
                        return ( */}
                    <ActorsList actorsList={actorsList} onDelActor={this.onDelete} />
                    {/* 
                        )
                    })} */}
                </ul>
            </form>
        )
    }
}
