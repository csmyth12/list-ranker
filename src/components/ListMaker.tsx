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
        const [choices, setChoices] = useState(0)

        const handleSelection = (preferred: RankerOption, other: RankerOption) => {
            console.log(`${preferred.name} preferred to ${other.name}`)
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
                newComparison = ([list[activeIndex+1], list[activeIndex+2]])
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
            console.log('add to main comparisons: ', addToMainComparisons.map((item) => `${item[0].name} vs ${item[1].name}`))
            setMadeComparisons([...madeComparisons, ...addToMainComparisons])
            setChoices(choices + 1)
            setActiveComparison(newComparison)
            if (!newComparison || newComparison.length < 2) {
                setDisplayFinalList(true)
            }
        }

        useEffect(() => {
            console.log('Comparison n#', choices)
            console.log('madeComparisons: ', madeComparisons.map((item) => `${item[0].name} vs ${item[1].name}`))
            console.log('finalList: ', finalList.toArray().map((item, index) => `${index+1}: ${item.name}`))
            console.log('needsComparison: ', needsComparison.toArray().map((item) => `${item[0].name} vs ${item[1].name}`))
            if(activeComparison && activeComparison.length === 2) {
                console.log('now comparing: ', activeComparison[0].name, 'v', activeComparison[1].name)
            }
        }, [activeComparison, choices, finalList, madeComparisons, needsComparison])

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