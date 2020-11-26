import React, { useState, useEffect } from 'react';
import { Animated, Text, TouchableOpacity, View, Easing, Platform } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useSelector, useDispatch } from 'react-redux';
import ActionCreators from '../actions';
import Notification from '../Notification';
import {styles,colors} from '../styles';
import {StopIcon} from './Icons';

const TimerView = () => {
    const dispatch = useDispatch();
    function press_button() {
        dispatch(ActionCreators.stop());
        Notification.cancel();
    }
    return <View style={styles.container}>
        <TimerAnimation />
        <TouchableOpacity style={styles.TouchableOpacity} onPress={() => { press_button(); }}><StopIcon/></TouchableOpacity>
    </View>
}

const TimerAnimation = () => {
    const dispatch = useDispatch();
    const { work_minute, rest_minute, work_flag, rest_flag} = useSelector(state => state.options);
    
    var start = Date.now();
    const TimeView = () => {
        const [ti, setTi] = useState((work_flag ? work_minute : rest_minute));
        useEffect(() => {
            const tti = setInterval(() => {
                clearInterval(tti);
                var gap = parseInt((Date.now() - start) / 1000);
                setTi((work_flag ? work_minute : rest_minute) - gap);
            }, 1000);
            return () => {
                clearInterval(tti);
            }
        }, [ti]);
        return <Text style={{color:"white", fontSize: 40 }}>{parseInt(ti / 60)}:{ti % 60}</Text>
    }

    const _completeHandle = () => {
        if (work_flag) {
            Notification.register({message:"🛑",time:rest_minute});
            dispatch(ActionCreators.endWork());
        }
        else if(rest_flag) {
            dispatch(ActionCreators.endRest());
        }
    }

    return <AnimatedCircularProgress
            size={300}
            width={40}
            fill={100}
            rotation={work_flag ? 210 : -330}
            tintColor={(work_flag ? colors.green : colors.red)}
            tintColorSecondary={(work_flag ? colors.red : colors.green)}
            duration={((work_flag ? work_minute : rest_minute) * 1000)}
            backgroundColor="#3d5875"
            lineCap="round"
            arcSweepAngle={work_flag ? 300 : 300}
            easing = {Easing.linear}
            onAnimationComplete={_completeHandle}
        >
            {(fill) => (<TimeView />)}
        </AnimatedCircularProgress>
}

export default TimerView;