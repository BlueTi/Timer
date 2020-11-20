import React, { useEffect } from 'react';
import SetView from './SetView';
import { View, Text } from 'react-native';
import { useSelector, } from 'react-redux';
import TimerView from './TimerView';

const MainView = () => {
    const {work_flag,rest_flag,work_minute,rest_minute} = useSelector(state => state.options);

    useEffect(()=>{
        console.log(work_flag+" : "+rest_flag+"="+work_minute+" : "+rest_minute);
    })

    return <View>
        {work_flag?<View><TimerView /></View>:rest_flag?<View><Text>hi2</Text></View>:<SetView/>}
    </View>
}


export default MainView;
