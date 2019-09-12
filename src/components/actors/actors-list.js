import React, { Component, Fragment } from 'react';
import ActorsList from "./actors";
import ApiService from '../../ApiService';

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


    addActor = (text) => {

        const newItem = {
            name: text,
            url: this.maxId++
        };

        this.setState(({ actorsList }) => {
            const newActorList = [
                ...actorsList,
                newItem
            ];

            return {
                actorsList: newActorList
            }
        });

    }
    delActor = (url) => {
        this.setState(({ actorsList }) => {
            const idx = actorsList.findIndex((el) => el.url === url);
            console.log(idx);
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

    onSubmit = (e) => {
        e.preventDefault();
        const { text } = this.state;
        this.setState({ text: '' });
        const cb = this.onItemAdded || (() => { });
        cb(text);
    };

    handleChange = (e) => {
        this.setState({ text: e.target.value });
    };

    onItemAdded = (name) => {
        this.setState((state) => {
            const item = this.createActor(name);
            return { actorsList: [...state.actorsList, item] };
        })
    };

    createActor(name) {
        return {
            id: ++this.maxId,
            name: name
        };
    }



    render() {
        const { actorsList } = this.state;
        return (
            <form
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}>
                <input
                    type="text"
                    onChange={this.handleChange}
                />
                <button type="submit">add</button>
                <ul>
                    {actorsList.map(({ name, url }) => {
                        return (
                            <ActorsList name={name} url={url} onDelActor={this.delActor} />

                        )
                    })}
                </ul>
            </form>
        )
    }
}
