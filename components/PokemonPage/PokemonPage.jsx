import React from 'react';

import './PokemonPage.scss';
import { CaptureDateContainer } from '../../containers/CaptureDateContainer';
import {CatchButtonContainer} from '../../containers/CatchButtonContainer'

export function PokemonPage(props) {
    const {id, name, img } = props;
    return(
        <section className="pokemon">
            <img src={img} className="pokemon_image" />
            <h2>Покемон {name}</h2>
            <div className="pokemon_info">
                 <span>ID: {id}</span>
                <CaptureDateContainer id={id}/>
                <CatchButtonContainer id={id} name={name} img={img}/>
            </div>
        </section>
    )
}
