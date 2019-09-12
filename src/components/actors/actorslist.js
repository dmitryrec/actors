import React from 'react';

const ActorsList = ({ ...props }) => {
    return props.actorsList.map(({ name, url }) =>
        <li key={url} className="actorItem">
              <span className="actorName">{name}</span> 
            <button onClick={() => props.onDelActor(url)} className="actorButton">del</button>
        </li>)

}
export default ActorsList;