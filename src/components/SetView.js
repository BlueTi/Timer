import React from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import ActionCreators from '../actions';
import { useDispatch } from 'react-redux';

const SetView = () => {
    const dispatch = useDispatch();
    function press_button(){
        dispatch(ActionCreators.setRestFlag(true));
        dispatch(ActionCreators.setWorkFlag(true));
        console.log('Press');
    }

    return <View style={styles.setContainer}>
        <View style={styles.viewLine}><Text style={styles.text}>Work</Text><TextInput style={styles.textInput}/></View>
        <View style={styles.viewLine}><Text style={styles.text}>Rest</Text><TextInput style={styles.textInput}/></View>
        <TouchableOpacity style={styles.TouchableOpacity} onPress={()=>{press_button();}}><Text>button</Text></TouchableOpacity>
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
        marginLeft:-60,
        marginRight:30
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
