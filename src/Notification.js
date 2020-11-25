import PushNotification from "react-native-push-notification";

const Notification = (values) => {
    PushNotification.cancelAllLocalNotifications();
    PushNotification.localNotification({
        autoCancel: true,
        Title: values.title,
        message: values.message,
        vibrate: true,
        vibration: 3000,
    });
}

export default Notification;