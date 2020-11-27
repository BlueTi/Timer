import React, { useRef, useState } from 'react';
import { TextInput, View, TouchableOpacity, Alert } from 'react-native';
import ActionCreators from '../actions';
import { useDispatch } from 'react-redux';
import { styles } from '../styles';
import { HourglassIcon, RestIcon, StartIcon } from './Icons';
import Notification from '../Notification';


const SetView = () => {
    const dispatch = useDispatch();
    const [work_time, set_work_time] = useState(25);
    const [rest_time, set_rest_time] = useState(5);
    const [work_input_borderColor, set_work_input_borderColor] = useState("white");
    const [rest_input_borderColor, set_rest_input_borderColor] = useState("white");

    function press_button() {
        set_work_input_borderColor("white");
        set_rest_input_borderColor("white");
        if (work_time == undefined || isNaN(Number(work_time)) || work_time == 0) {
            set_work_input_borderColor("red");
            return;
        }
        if (rest_time == undefined || isNaN(Number(rest_time)) || rest_time == 0) {
            set_rest_input_borderColor("red");
            return;
        }

        Notification.register({ message: "\u231B \u2705", time: work_time * 60 });
        dispatch(ActionCreators.setStartOptions({ work_minute: work_time * 60, rest_minute: rest_time * 60 }));
    }

    return <View style={styles.setContainer}>
        <View style={styles.viewLine}>
            <HourglassIcon />
            <TextInput style={{ ...styles.textInput, borderColor: work_input_borderColor }} onChangeText={text => { set_work_time(text) }} keyboardType="number-pad" placeholder={"25"} />

        </View>
        <View style={styles.viewLine}>
            <RestIcon />
            <TextInput style={{ ...styles.textInput, borderColor: rest_input_borderColor }} onChangeText={text => { set_rest_time(text) }} keyboardType="number-pad" placeholder={"5"} />
        </View>
        <TouchableOpacity style={styles.TouchableOpacity} onPress={press_button}><StartIcon /></TouchableOpacity>
    </View>
}




export default SetView;
