import PushNotification from "react-native-push-notification";


const setNotification = (values) => {
    PushNotification.localNotificationSchedule({
        autoCancel: true,
        message: "\t"+values.message,
        vibrate: true,
        vibration: 3000,
        number:1,
        date: new Date((Date.now()+(values.time*1000))),
    });
}


export default {
    register : async (values)=>{
        try{
            setNotification(values);
        } catch(error){
            console.log(error);
        }
    },
    cancel:()=>{
        PushNotification.cancelAllLocalNotifications();
    }
}