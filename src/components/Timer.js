import React from 'react';
import { View } from 'react-native';
import ProgressCircle from 'react-native-progress-circle'


const Timer = () => {
    return <View>
        <ProgressCircle
            percent={30}
            radius={50}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
        ></ProgressCircle>
    </View>
}

export default Timer;