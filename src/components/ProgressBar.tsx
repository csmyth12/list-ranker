import { combinations } from 'mathjs'
import { FunctionComponent, useEffect, useState } from 'react'

export interface ProgressBarProps {
    listLength: number,
    madeComparisonsLength: number
}

export const ProgressBar: FunctionComponent<ProgressBarProps> = ({ listLength, madeComparisonsLength }) => {
    const totalComparisons = combinations(listLength, 2)
    const[completedWidth, setCompletedWidth] = useState(0)

    useEffect(() => {
        setCompletedWidth((madeComparisonsLength / totalComparisons) * 100)
        console.log(completedWidth)
    }, [completedWidth, madeComparisonsLength, totalComparisons])

    return (<div className='w-[80%] rounded-2xl flex flex-row'>
        <div className='p-4 bg-rose-300 rounded-l-2xl' style={{width: `${completedWidth}%`}} />
        <div className='p-4 bg-gray-300 rounded-r-2xl' style={{width: `${100-completedWidth}%`}} />
    </div>)
}