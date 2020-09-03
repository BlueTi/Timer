import React, { useEffect } from 'react';
import SetView from './SetView';
import { View, Text } from 'react-native';
import { useSelector, shallowEqual } from 'react-redux';

const MainView = () => {
    const {work_flag,rest_flag} = useSelector(state => state.options);

    useEffect(()=>{
        console.log();
    });

    return <View>
        <Text>{work_flag?"true":"false"}</Text>
        {work_flag?<View><Text>hi</Text></View>:rest_flag?<View><Text>hi2</Text></View>:<SetView/>}
    </View>
}


export default MainView;
