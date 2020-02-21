import React, { useEffect } from 'react';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import './AppContainer.scss';

export function AppContainer(props) {
    const { pokemons, onScroll } = props;


    const handleScroll = () => {
        if(typeof onScroll === 'function' && window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight){
            onScroll();
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
      <main>
        <section className="container">
        <section className="gallery">
            {pokemons.map(pokemon => <PokemonCard key={pokemon.id} id={pokemon.id} name={pokemon.name} img={pokemon.img}/>) }
        </section>
        </section>
      </main>
    );
}
