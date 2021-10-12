import { AsyncStorage } from "react-native";

const DECKS_STORAGE_KEY = "MobileFlashcards:Decks"

export function saveDeckTitle(deck)
{
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck))
}

export function addCardToDeck(card, id)
{
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((results)=>{
        const data = JSON.parse(results)
        data[id] =
        {
            ...data[id],
            questions: [...data[id].questions, card]
        }
        AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
    })
}   

export function getDeck(id)
{
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((results)=> {
        const data = JSON.parse(results)
        return data[id]
    })
}


export function getDecks()
{
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((results)=> JSON.parse(results))
}