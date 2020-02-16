// app/components/InputBox.js

import React from 'react';
import {TextInput,StyleSheet} from 'react-native';

const Input = ({value,changeText,addTodo}) =>(
    <TextInput
        value={value}
        placeholder={"할일을 입력해주세요"}
        maxLength={30}
        onChangeText={changeText}
        onEndEditing={addTodo}
        returnKeyType="done"/>

);

const style = StyleSheet.create({
    input: {
        fontSize: 25,
        paddingTop: 15,
    }
})

export default Input;