import React, { Component } from 'react';

export default class ActorsList extends Component {

    render() {
        const { name, url, onDelActor } = this.props;
        return (
            <li key={url}>
                {name}
                <button onClick={() => onDelActor(url)}>del</button>
            </li>
        )
    }
}

