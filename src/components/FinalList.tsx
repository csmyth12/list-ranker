import { RankerOption } from '@/types/RankerOption'
import { FunctionComponent } from 'react'
import copy from 'copy-to-clipboard'

export interface FinalListProps {
    list: RankerOption[],
    listName: string
}

export const FinalList: FunctionComponent<FinalListProps> = ({ list, listName }) => {
    const copyString = `Here's my ${listName} ranking:

        ${list.map((item, index) => `${index+1}: ${item.name}
        
        `)}

        https://csmyth12.github.io/list-ranker/Starwars
    `

    return (
        <div>
            <h2 className='text-4xl'>{`Here's your ${listName} Ranking!`}</h2>

            <ol className='text-xl odd:text-gray-400 even:text-black p-4'>
                {list.map((item, index) => (
                    <li key={item.id}>
                        {index + 1}: <span className='italic'>{item.name}</span>
                    </li>
                ))}
            </ol>
            <div className='flex flex-row items-end justify-end w-full'>
                <button className='rounded border-2 bg-rose-300 text-white py-4 px-8 hover:bg-rose-500' onClick={() => copy(copyString)}>Copy</button>
            </div>
        </div>
    )
}
