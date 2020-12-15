import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import AwesomIcon from 'react-native-vector-icons/FontAwesome5'
import {styles} from '../styles';

export const StopIcon = () => {
    return <AwesomIcon name="stop-circle" size={30} color="white" />
}

export const ExitIcon = () => {
    return <AntIcon name=""/>
}

export const HourglassIcon = () => {
    return <AntIcon name="hourglass" size={50} style={styles.icon} color="white"/>
}


export const RestIcon = () => {
    return <AntIcon name="rest" size={50} style={styles.icon} color="white"/>
}

export const ClockIcon = () => {
    return <AntIcon name="clockcircleo" size={50} style={styles.icon} color="gray"/>
}

export const StartIcon = () => {
    return <AntIcon name="play" size={30} color="white" />
}