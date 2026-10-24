import { Service } from '@angular/core';
import { onValue, ref, remove, set, update } from 'firebase/database';
import { Observable } from 'rxjs';
import { db } from './config';

@Service()
export class Fire {

    //LEER
    getPokemons(): Observable<any> {
        let pokemons: any
        const starCountRef = ref(db, 'pokemons/' );
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            pokemons= data
        });
        return pokemons
    }


    //GUARDAR
    postPokemon(pokemon: any) {
        set(ref(db, 'pokemons/' + pokemon.nombre), {
            danio: pokemon.danio,
            tipo: pokemon.tipo
        });
    }

    //ELIMINAR
     deletePokemon(id: string) {
        remove(ref(db, 'pokemons/' + id), );
    }

    //EDITAR
    editarPokemon(pokemon: any) {
        update(ref(db, 'pokemons/' + pokemon.nombre), {
            danio: pokemon.danio,
            tipo: pokemon.tipo
        });
    }
    
}
