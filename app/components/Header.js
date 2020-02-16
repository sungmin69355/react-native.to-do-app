//Myapp/app/components/Header.js
import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
const Header = () => (
    <View>
    <Text style={styles.headerText}>오늘의 일정</Text>
    </View>
);

const styles = StyleSheet.create({
    headerText: {
    marginTop:70,
    marginBottom:40,
    fontSize:26,
    fontWeight:'bold',
    color:'#3f4e66',
},
})

export default Header;