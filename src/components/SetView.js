import React, {useState } from 'react';
import { TextInput, View, TouchableOpacity, Alert } from 'react-native';
import ActionCreators from '../actions';
import { useDispatch } from 'react-redux';
import { styles } from '../styles';
import { HourglassIcon, RestIcon,StartIcon } from './Icons';


const SetView = () => {
    const dispatch = useDispatch();
    const [work_time, set_work_time] = useState(25);
    const [rest_time, set_rest_time] = useState(5);

    function press_button() {        
        if (work_time == undefined || isNaN(Number(work_time)) || work_time == 0) {
            Alert.alert('Check value', 'only input number or please input number',
                [{ text: 'OK' }]
            );
            return
        }
        if (rest_time == undefined || isNaN(Number(rest_time)) || rest_time == 0) {
            Alert.alert('Check value', 'only input number or please input number',
                [{ text: 'OK' }]
            );
            return
        }
        dispatch(ActionCreators.setStartOptions({ work_minute: work_time*1, rest_minute: rest_time*1 }));
    }

    return <View style={styles.setContainer}>
        <View style={styles.viewLine}>
            <HourglassIcon />
            <TextInput style={styles.textInput} onChangeText={text => { set_work_time(text) }} keyboardType="number-pad"  placeholder={"25"} />

        </View>
        <View style={styles.viewLine}>
            <RestIcon />
            <TextInput style={styles.textInput} onChangeText={text => { set_rest_time(text) }} keyboardType="number-pad" placeholder={"5"} />
        </View>
        <TouchableOpacity style={styles.TouchableOpacity} onPress={press_button}><StartIcon /></TouchableOpacity>
    </View>
}




export default SetView;
