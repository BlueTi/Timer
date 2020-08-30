import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ActionCreators from '../actions';


const Name = () => {
    const dispatch = useDispatch();
    const name = useSelector(state => state.name);

    return <View>
        <Text>{name}</Text>
        <TextInput onChangeText={(text) => dispatch(ActionCreators.reName(text))} />
    </View>
}


export default Name;