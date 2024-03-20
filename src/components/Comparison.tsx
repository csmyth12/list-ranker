import { RankerOption } from '@/types/RankerOption'
import { FunctionComponent, useState } from 'react'
import { OptionButton } from './OptionButton'

export interface ComparisonProps {
    activeComparison: RankerOption[],
    handleSelection: (args0: RankerOption, args1: RankerOption) => void
}

export const Comparison: FunctionComponent<ComparisonProps> = ({ activeComparison, handleSelection }) => {    
    const onSelect = (preferred: RankerOption) => {
        if (preferred.id === activeComparison[0].id) {
            handleSelection(preferred, activeComparison[1])
        } else {
            handleSelection(preferred, activeComparison[0])
        }
    }

    if (!activeComparison || activeComparison.length < 2) {
        return <></>
    }

    return (
        <div className='flex w-screen h-[70%] flex-row p-4 lg:h-[80%] items-center'>
            <OptionButton 
                option={activeComparison[0]} 
                onSelect={onSelect}
            />
            <OptionButton option={activeComparison[1]}
                onSelect={onSelect}
            />
        </div>

    )
}