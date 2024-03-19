import { RankerOption } from '@/types/RankerOption'
import { DoublyLinkedList } from '@/utils/DoublyLinkedList'
import { FunctionComponent, useEffect, useState } from 'react'
import { Comparison } from './Comparison'
import { isAlreadyCompared } from '@/utils/getNewComparison'
import { FinalList } from './FinalList'

export interface ListMakerProps {
    list: RankerOption[]
}

export const ListMaker: FunctionComponent<ListMakerProps> = ({list}) => {
        const [activeIndex, setActiveIndex] = useState(1)
        const [activeComparison, setActiveComparison] = useState([list[0], list[1]])
        const [madeComparisons, setMadeComparisons] = useState<RankerOption[][]>([])

        const [finalList, setFinalList] = useState(new DoublyLinkedList())
        const [needsComparison, setNeedsComparison] = useState(new DoublyLinkedList())
        const [displayFinalList, setDisplayFinalList] = useState(false)

        const handleSelection = (preferred: RankerOption, other: RankerOption) => {
            debugger
            if  (activeIndex < list.length) {
                if (finalList.size() > 0) {
                    needsComparison.push([finalList.last().value, preferred])
                }
                finalList.push(preferred)
                finalList.push(other)
            } else {
                if (activeComparison[0] === other) {
                    finalList.swap(other, preferred)

                    let otherNode = finalList.get(other)
                    let preferredNode = finalList.get(preferred)
                    if (!!otherNode?.next) {
                        needsComparison.push([other, otherNode?.next!.value])
                    }
                    if (!!preferredNode?.previous) {
                        needsComparison.push([preferredNode.previous.value, preferred])
                    }
                }
            }
            setActiveComparison([])
            if ((activeIndex + 2) < list.length) {
                setActiveComparison([list[activeIndex+1], list[activeIndex+2]])
            } else {
                if (needsComparison.size() > 0) {
                    setActiveComparison(needsComparison.toArray().find((comparison) => {
                        if (!isAlreadyCompared(comparison, madeComparisons)) {
                            needsComparison.pop(needsComparison.get(comparison)!)
                            return comparison
                        } else {
                            needsComparison.pop(needsComparison.get(comparison)!)
                        }
                    }))
                } else {
                    setFinalList(finalList)
                    setDisplayFinalList(true)
                }
            }
            if (activeComparison.length < 2) {
                setDisplayFinalList(true)
            }
            setNeedsComparison(needsComparison)
            setFinalList(finalList)
            setActiveIndex(activeIndex + 2)
            setMadeComparisons([...madeComparisons, [preferred, other]])
        }

        useEffect(() => {
            if ((needsComparison.size() === 0 && finalList.size() === list.length) || madeComparisons.length === 66) {
                setDisplayFinalList(true)
            }
        }, [finalList, list.length, madeComparisons, needsComparison])

        return (
            <div className='flex flex-col justify-center items-center h-screen'>
                {displayFinalList ? (
                    <FinalList list={finalList.toArray()} />
                ) : (
                    <>
                        <h1 className='text-2xl mt-4'>Which do you prefer?</h1>
                        <Comparison 
                            activeComparison={activeComparison} 
                            handleSelection={handleSelection}
                        />
                    </>
                )}
            </div>
        )
}