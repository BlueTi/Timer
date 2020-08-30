import React, { useEffect, useState } from 'react';
import SetView from './SetView';
import { View, Text } from 'react-native';
import { useSelector, shallowEqual } from 'react-redux';

const MainView = () => {
    const {work_flag,rest_flag} = useSelector(state=>({
        work_flag: state.work_flag,
        rest_flag: state.rest_flag,
        }),
        shallowEqual
    );

    useEffect(()=>{
        console.log("create "+work_flag+" : "+rest_flag);
    });

    return <View>
        <Text>{work_flag?"true":"false"}</Text>
        {work_flag?<View><Text>hi</Text></View>:<SetView/>}
    </View>
}


export default MainView;
