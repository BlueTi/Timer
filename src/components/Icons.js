import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {styles} from '../styles';

export const StartIcon = () => {
    return <MaterialIcon name="exit-run" size={30} color="white" />
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
    return <AntIcon name="clockcircleo" size={50} style={styles.icon}/>
}