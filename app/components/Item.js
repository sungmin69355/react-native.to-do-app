// app/components/Item.js

import React from 'react'
    import {View,Text,StyleSheet,Dimensions, TouchableOpacity} from 'react-native'
import {AntDesign,FontAwesome} from "@expo/vector-icons"
import { DepthDataAccuracy } from 'expo/build/AR';

const Item= ({text,isComplete,changeComplete,deleteItem}) =>(
    <View style={styles.TodoContainer}>
        <View style={styles.makerow}>
        <TouchableOpacity
        onPress={changeComplete}>
            <FontAwesome name={isComplete?"circle-o":"check-circle"} size={20} style={styles.checkbtn}/>
        </TouchableOpacity>
            <Text style= {styles.Todoitem}>{text}</Text>
            <TouchableOpacity
            onPress={deleteItem}>
                <AntDesign name="close" size={20} style={styles.checkbtn}/>
            </TouchableOpacity>

        </View>
        </View>

);

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    TodoContainer:{
        padding:5,
        marginTop:20,
        borderBottomWidth:1,
        width: width-40,
    },
    Todoitem:{
        fontSize:20,
    },
    lineContainer:{
        flexDirection:'row',
        justifyContent:'space-between', //가로 정렬하는데 compo사이를 균등하게 space로 구분
        alignItems:'center', 
    },
    checkbtn:{
        marginRight:20,
    },
    makerow:{
        flexDirection:'row',
    },
})

export default Item;