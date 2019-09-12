import React, { Component } from 'react';

export default class ActorsList extends Component {

    render() {
        const { name, url, onDelActor } = this.props;
        return (
            <li key={Math.random()}>
                {name}
                <button onClick={onDelActor}>del</button>
            </li>
        )
    }
}

