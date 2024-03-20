'use client'

import type { Metadata } from 'next';
import '@fontsource-variable/nunito';
import '../app/globals.css';

export const metadata: Metadata = {
  title: 'Harry Potter Ranker',
  description: 'Rank your favourite Harry Potter Film',
};

import { ListMaker } from '@/components/ListMaker';
import { PubsOfDublin } from '@/lists/DublinPubs';

const DublinPubs = () => {
    
    return (
        <>
            <ListMaker 
                list={PubsOfDublin}
                listName='Dublin Pubs'
                disclaimer='Pubs taken from the fitzwilliam hotels list of best traditional dublin pubs.'
            />
        </>
    )
}

export default DublinPubs