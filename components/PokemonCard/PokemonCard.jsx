import './PokemonCard.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { CatchButtonContainer } from '../../containers/CatchButtonContainer'

export function PokemonCard(props) {
        const { id, name, img } = props;
        const pokemonPage = `/pokemon/${id}`;
        return (
                <section className="gallery-item">
                    <Link to={pokemonPage}><img className="gallery-image" src={img}/></Link>
                    <div className="gallery-item-info">
                        <Link to={pokemonPage}><span>name: { name }</span></Link>
                        <CatchButtonContainer id={id} name={name} img={img}/>
                    </div>
                </section>
        )
}
