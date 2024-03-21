import { RankerOption } from '@/types/RankerOption'
import { FunctionComponent } from 'react'
import copy from 'copy-to-clipboard'
import { useRouter } from 'next/router'

export interface FinalListProps {
    list: RankerOption[],
    listName: string,
    disclaimer?: string | null
}

export const FinalList: FunctionComponent<FinalListProps> = ({ list, listName, disclaimer = null }) => {
    const router = useRouter()
    let copyString = `Here's my ${listName} ranking:${'\n\n'}`

    list.forEach((item, index) => {
        copyString += `${index + 1}: ${item.name}${'\n'}`
    })
    copyString += `${'\n'}csmyth12.github.io/list-ranker/${router.pathname}`

    return (
        <div className='p-4'>
            <h2 className='text-4xl'>{`Here's your ${listName} Ranking!`}</h2>

            <ol className='text-xl odd:text-gray-400 even:text-black p-4'>
                {list.map((item, index) => (
                    <li key={item.id}>
                        {index + 1}: <span className='italic'>{item.name}</span>
                    </li>
                ))}
            </ol>
            <div className='flex flex-row items-center justify-between w-full'>
                <button 
                    className='rounded border-2 bg-gray-300 py-4 px-8 hover:bg-gray-500'
                    onClick={() => router.reload()}
                >
                    Start again
                </button>
                <button 
                    className='rounded border-2 bg-rose-300 text-white py-4 px-8 hover:bg-rose-500'
                    onClick={() => copy(copyString)}
                >
                    Copy
                </button>
            </div>
            
            {!!disclaimer && (
                <p className='text-sm text-gray-300 mt-12'>
                    {disclaimer}
                </p>
            )}
        </div>
    )
}
