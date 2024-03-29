'use client'

import type { Metadata } from 'next';
import '@fontsource-variable/nunito';
import '../app/globals.css';

export const metadata: Metadata = {
  title: 'Star Wars Ranker',
  description: 'Rank your favourite Star Wars Film',
};

import { StarWarsFilms } from '@/lists/StarwarsFilms'
import { ListMaker } from '@/components/ListMaker';

const Starwars = () => {
    
    return (
        <>
            <ListMaker 
                list={StarWarsFilms}
                listName='Star Wars films'
            />
        </>
    )
}

export default Starwars 