import React, { useCallback, useState } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import ActionCreators from '../actions';
import { useDispatch } from 'react-redux';
import {styles} from '../styles';
import Icon from 'react-native-vector-icons/AntDesign';

const SetView = () => {
    const dispatch = useDispatch();
    const [work_time, set_work_time] = useState();
    const [rest_time, set_rest_time] = useState();


    function press_button() {
        if (work_time != undefined && rest_time != undefined && !isNaN(Number(work_time)) && !isNaN(Number(rest_time))) {
            dispatch(ActionCreators.setStartOptions({ work_minute: work_time, rest_minute: rest_time }));
        }
        else {
            Alert.alert('Check value', 'only input number or please input number',
                [{ text: 'OK' }]
            );
        }
    }

    return <View style={styles.setContainer}>
        <View style={styles.viewLine}>
            <Icon name="hourglass" size={50} style={styles.icon} color="white"/>
            <TextInput style={styles.textInput} onChangeText={text => { set_work_time(text) }} keyboardType="number-pad" />
        </View>
        <View style={styles.viewLine}>
            <Icon name="rest" size={50} style={styles.icon} color="white"/>
            <TextInput style={styles.textInput} onChangeText={text => { set_rest_time(text) }} keyboardType="number-pad" />
        </View>
        <TouchableOpacity style={styles.TouchableOpacity} onPress={press_button}><Icon name="play" size={30} color="white"/></TouchableOpacity>
    </View>
}




export default SetView;
