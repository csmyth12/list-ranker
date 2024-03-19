import { RankerOption } from '@/types/RankerOption'
import { FunctionComponent } from 'react'

export interface FinalListProps {
    list: RankerOption[]
}

export const FinalList: FunctionComponent<FinalListProps> = ({ list }) => (
    <div>
        <h2>{'Here\'s your Star Wars Ranking!'}</h2>

        <ol>
            {list.map((item, index) => (
                <li key={item.id}>
                    {index + 1}: {item.name}
                </li>
            ))}
        </ol>
    </div>
)