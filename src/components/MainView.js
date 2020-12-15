import React, { useEffect } from 'react';
import SetView from './SetView';
import { View } from 'react-native';
import { useSelector, } from 'react-redux';
import TimerView from './TimerView';
import {styles} from '../styles';
import Notification from '../Notification';

const MainView = () => {
    const { work_flag, rest_flag,stop_flag } = useSelector(state => state.options);

    useEffect(() => {
        if(stop_flag) Notification.cancel();
    },[work_flag,rest_flag]);

    return <View style={styles.main}>
        {work_flag ? <View><TimerView /></View> : rest_flag ? <TimerView /> : <SetView />}
    </View>
}



export default MainView;
