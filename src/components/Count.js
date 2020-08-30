
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ActionCreator from '../actions';


const Count = (props) => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);

  return <View style={s.container}>
    <Text style={{ fontSize: 20 }}>{count}</Text>
    <TouchableOpacity style={s.upButton} onPress={() => dispatch(ActionCreator.countUp(1))}>
      <Text style={{ fontSize: 20 }}>+1</Text>
    </TouchableOpacity>
    <TouchableOpacity style={s.downButton} onPress={() => dispatch(ActionCreator.countDown(1))}>
      <Text style={{ fontSize: 20 }}>-1</Text>
    </TouchableOpacity>
  </View>
}

const s = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  upButton: {
    marginLeft: 20,
    backgroundColor: 'cyan',
    padding: 10,
    borderRadius: 20
  },
  downButton: {
    marginLeft: 20,
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 20
  }
});

export default Count;