'use client'

import type { Metadata } from 'next';
import '@fontsource-variable/nunito';
import '../app/globals.css';

export const metadata: Metadata = {
  title: 'Harry Potter Ranker',
  description: 'Rank your favourite Harry Potter Film',
};

import { ListMaker } from '@/components/ListMaker';
import { HarryPotterFilms } from '@/lists/HarryPotterFilms';

const HarryPotter = () => {
    
    return (
        <>
            <ListMaker 
                list={HarryPotterFilms}
                listName='Harry Potter films'
            />
        </>
    )
}

export default HarryPotter