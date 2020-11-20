import React, { useCallback, useState } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import ActionCreators from '../actions';
import { useDispatch } from 'react-redux';

const SetView = () => {
    const dispatch = useDispatch();
    const [work_time,set_work_time] = useState();
    const [rest_time,set_rest_time] = useState();


    function press_button(){
        if(work_time != undefined && rest_time != undefined && !isNaN(Number(work_time)) && !isNaN(Number(rest_time))){
            
        }
        else{
            Alert.alert(
                'Check value',
                'only input number or please input number',
                [
                  { text: 'OK'}
                ]
              );
        }

        console.log(work_time+" "+rest_time);
    }

    return <View style={styles.setContainer}>
        <View style={styles.viewLine}>
            <Text style={styles.text}>Work</Text>
            <TextInput style={styles.textInput} onChangeText={text=>{set_work_time(text)}} keyboardType="number-pad"/>
        </View>
        <View style={styles.viewLine}>
            <Text style={styles.text}>Rest</Text>
            <TextInput style={styles.textInput} onChangeText={text=>{set_rest_time(text)}} keyboardType="number-pad"/>
        </View>
        <TouchableOpacity style={styles.TouchableOpacity} onPress={press_button}><Text>button</Text></TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    setContainer:{
        flex: 1,
        marginTop: "50%",
        flexDirection: 'column'
    },
    viewLine:{
        flexDirection:"row",
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    textInput:{
        flex: 1,
        borderColor: "red",
        borderWidth: 3,
        marginLeft:-50,
        marginRight:30,
        height:38,
        textAlign:"center",
    },
    text:{
        flex: 1,
        marginLeft: 70
    },
    TouchableOpacity:{
        marginLeft:"10%",
        width:"80%",
        height: 30,
        alignItems:"center",
        marginTop: 10,
        backgroundColor:"red"
    }
});



export default SetView;
