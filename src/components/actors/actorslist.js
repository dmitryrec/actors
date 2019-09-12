import React from 'react';

const ActorsList = ({ ...props }) => {
    return props.actorsList.map(({ name, url }) =>
        <li key={url}>
            {name}
            <button onClick={() => props.onDelActor(url)}>del</button>
        </li>)

}
export default ActorsList;