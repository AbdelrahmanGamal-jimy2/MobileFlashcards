import { AsyncStorage } from "react-native";
import { Notifications, Permissions } from "expo";

const DECKS_STORAGE_KEY = "MobileFlashcards:Decks"

const NOTIFICATION_STUDY_REMINDER_KEY = "MobileFlashcards::NotificationsReminder";




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
export function removeDeck(id)
{
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((results)=> {
        const data = JSON.parse(results)
        data[id] = undefined
        delete data[id]
        AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))


    }
    )
}
export function clearLocalNotification()
{
    return AsyncStorage.removeItem(NOTIFICATION_STUDY_REMINDER_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}
export function setLocalNotification()
{
    AsyncStorage.getItem(NOTIFICATION_STUDY_REMINDER_KEY)
    .then(JSON.parse)
    .then((data) => {
        if (data === null)
        {
            Notifications.requestPermissionsAsync(null)
            .then(({ status }) => {
                if (status === "granted")
                    Notifications.cancelAllScheduledNotificationsAsync()

                let tomorrow = new Date()
                tomorrow.setDate(tomorrow.getDate() + 1)
                tomorrow.setHours(20)
                tomorrow.setMinutes(0)

                Notifications.setNotificationHandler({
                  handleNotification: async () => ({
                    shouldShowAlert: true,
                    shouldPlaySound: true,
                    shouldSetBadge: false,
                  }),
                });

                Notifications.scheduleNotificationAsync(
                    {
                    content: {
                        title: "You haven't studied today",
                        body: "Don't forget to study today , come learn and take a quiz!"
                    }, 
                    trigger: {
                        hour: 20,
                        minute: 0,
                        repeats: true
                    }
                })

                AsyncStorage.setItem(NOTIFICATION_STUDY_REMINDER_KEY, JSON.stringify(true))
            })
        }
    })
}