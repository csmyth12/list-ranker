import { RankerOption } from '@/types/RankerOption'
import { FunctionComponent } from 'react'

export interface OptionProps {
    option: RankerOption
    onSelect: (arg0: RankerOption) => void
}

export const OptionButton: FunctionComponent<OptionProps> = ({ option, onSelect }) => (
    <button 
        className={
            'w-[80%] lg:w-1/2 h-[80%] flex flex-col rounded-xl'
            + ' justify-center items-center border-2 border-rose-400 mx-1 lg:mx-24 my-4'
            + ' transition ease-in-out duration-100 hover:scale-105 hover:bg-rose-300'
            + ' active:scale-105 active:bg-rose-500 focus:scale-105 focus:bg-rose-300'
        }

        onClick={(e) => {
            onSelect(option)
            e.currentTarget.blur()
        }}
    >
        <h3 className='h-8 w-full text-2xl my-4'>{option.name}</h3>
        <img 
            src={option.image}
            alt={`${option.name} picture`}
            className='max-w-full max-h-[90%] min-w-[40%] min-h-[71%] m-2 lg:mx-16 rounded-lg'
        />
    </button>
)
