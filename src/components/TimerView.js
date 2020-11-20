import React, {useState, useEffect } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View, Easing } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useSelector, useDispatch } from 'react-redux';
import ActionCreators from '../actions';

const TimerView = () => {
    const { work_flag, rest_flag } = useSelector(state => state.options);
    const dispatch = useDispatch();

    function press_button() {
        dispatch(ActionCreators.setWorkFlag(false));
    }

    return <View>
        <TouchableOpacity style={styles.TouchableOpacity} onPress={() => { press_button(); }}><Text>button</Text></TouchableOpacity>
        <TimerAnimation />
    </View>
}

const TimerAnimation = () => {
    const { work_minute } = useSelector(state => state.options);
    const time = new Animated.Value(0);
    useEffect(() => {
        console.log(work_minute);
        Animated.timing(time, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, [])

    var start = Date.now();
    const TimeView = () => {
        const [ti,setTi] = useState(work_minute);
        useEffect(()=>{
            const tti = setInterval(()=>{
                clearInterval(tti);
                var gap = parseInt((Date.now()-start)/1000);
                setTi(work_minute-gap);
            },1000);
            return ()=>{
                clearInterval(tti);
            }
        },[ti]);
        return <Text>{parseInt(ti/60)}:{ti%60}</Text>
    }

    return <View>
        <AnimatedCircularProgress
        size={300}
        width={50}
        fill={100}
        rotation={360}
        tintColor="#fff"
        duration={(work_minute * 60000)}
        backgroundColor={"#00d068"}
        easing={Easing.linear}
        // onAnimationComplete={_completeHandle}
      >
        {(fill) => (<TimeView />)}
      </AnimatedCircularProgress>
    </View>
}

const styles = StyleSheet.create({
    setContainer: {
        flex: 1,
        marginTop: "50%",
        flexDirection: 'column'
    },
    viewLine: {
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    textInput: {
        flex: 1,
        borderColor: "red",
        borderWidth: 3,
        marginLeft: -60,
        marginRight: 30
    },
    text: {
        flex: 1,
        marginLeft: 70
    },
    TouchableOpacity: {
        marginLeft: "10%",
        width: "80%",
        height: 30,
        alignItems: "center",
        marginTop: 10,
        backgroundColor: "red"
    }
});
export default TimerView;