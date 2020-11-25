import React from 'react';
import SetView from './SetView';
import { View } from 'react-native';
import { useSelector, } from 'react-redux';
import TimerView from './TimerView';
import {styles} from '../styles';

const MainView = () => {
    const { work_flag, rest_flag } = useSelector(state => state.options);

    return <View style={styles.main}>
        {work_flag ? <View><TimerView /></View> : rest_flag ? <TimerView /> : <SetView />}
    </View>
}



export default MainView;
