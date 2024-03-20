import { RankerOption } from '@/types/RankerOption'
import { DoublyLinkedList } from '@/utils/DoublyLinkedList'
import { FunctionComponent, useEffect, useState } from 'react'
import { Comparison } from './Comparison'
import { isAlreadyCompared } from '@/utils/getNewComparison'
import { FinalList } from './FinalList'
import { ProgressBar } from './ProgressBar'
import { shuffle } from '@/utils/shuffle'

export interface ListMakerProps {
    list: RankerOption[],
    listName: string,
    disclaimer?: string
}

export const ListMaker: FunctionComponent<ListMakerProps> = ({ list, listName, disclaimer = null }) => {
        const [activeIndex, setActiveIndex] = useState(1)
        const [madeComparisons, setMadeComparisons] = useState<RankerOption[][]>([])

        const [finalList, setFinalList] = useState(new DoublyLinkedList())
        const [needsComparison, setNeedsComparison] = useState(new DoublyLinkedList())
        const [displayFinalList, setDisplayFinalList] = useState(false)

        const [shuffledList, setShuffledList] = useState(list)
        const [activeComparison, setActiveComparison] = useState<RankerOption[]>([])

        const handleSelection = (preferred: RankerOption, other: RankerOption) => {
            let addToMainComparisons: RankerOption[][] = [[preferred, other]]
            let newComparison = []
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
                } else {
                    let otherNode = finalList.get(other)
                    let preferredNode = finalList.get(preferred)
                    if (!!preferredNode?.previous && isAlreadyCompared([preferredNode?.previous!.value, preferred], madeComparisons)) {
                        addToMainComparisons.push([preferredNode?.previous!.value, other])
                    }
                    if (!!otherNode?.next && isAlreadyCompared([other, otherNode?.next?.value], madeComparisons))
                        addToMainComparisons.push([preferred, otherNode?.next?.value])
                }
            }
            if ((activeIndex + 2) < list.length) {
                newComparison = [shuffledList[activeIndex+1], shuffledList[activeIndex+2]]
            } else if ((activeIndex + 1) < list.length) {
                newComparison = [finalList.last().value, shuffledList[activeIndex+1]]
                finalList.push(shuffledList[activeIndex+1])
            } else {
                if (needsComparison.size() > 0) {
                    newComparison = (needsComparison.toArray().find((comparison) => {
                        if (!isAlreadyCompared(comparison, madeComparisons) && finalList.isNext(comparison[0], comparison[1])) {
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
            setNeedsComparison(needsComparison)
            setFinalList(finalList)
            setActiveIndex(activeIndex + 2)
            setMadeComparisons([...madeComparisons, ...addToMainComparisons])
            setActiveComparison(newComparison)
            if (!newComparison || newComparison.length < 2) {
                setDisplayFinalList(true)
            }
        }

        useEffect(() => {
            setShuffledList(shuffle(list))
            setActiveComparison([shuffledList[0], shuffledList[1]])
        }, [list, shuffledList])

        return (
            <div className='flex flex-col justify-center items-center h-screen'>
                {displayFinalList ? (
                    <FinalList list={finalList.toArray()} listName={listName} disclaimer={disclaimer} />
                ) : (
                    <>
                        <h1 className='text-2xl mt-4'>Which do you prefer?</h1>
                        <Comparison 
                            activeComparison={activeComparison} 
                            handleSelection={handleSelection}
                        />
                        <ProgressBar listLength={list.length} madeComparisonsLength={madeComparisons.length} />
                    </>
                )}
            </div>
        )
}