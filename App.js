
import React from 'react';
import { StyleSheet, Text, View, FlatList,AsyncStorage } from 'react-native';
import Header from './app/components/Header';
//default로 내보낸 것을 Header라는 이름으로 가져옵니다.
import SubTitle from './app/components/SubTitle';
import Input from './app/components/InputBox';
import Item from './app/components/Item';
import { render } from 'react-dom';
import { DepthDataAccuracy } from 'expo/build/AR';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      inputValue:"",
      todos:[
      ]
    }
  }
  componentWillMount(){
    this.getDate()
  }

  storeDate=()=>{
    AsyncStorage.setItem('@todo:state', JSON.stringify(this.state));
  }
  getDate =() =>{
    AsyncStorage.getItem('@todo:state').then((state)=>{
      if(state !==NULL){
        this.setState(JSON.parse(state));
      }
    });
  }

  _makeTodoItem = ({ item, index }) => {
    return (
    <Item
    text={item.title}
    isComplete={item.isComplete}
    changeComplete={() => {
    const newTodo = [...this.state.todos];
    newTodo[index].isComplete = !newTodo[index].isComplete;
    this.setState({todos:newTodo});
    }}
    deleteItem={() => {
      const newTodo = [...this.state.todos];
      newTodo.splice(index,1);
      this.setState({todos:newTodo});
      }} />
    );
}


  _changeText = (value) => {
    this.setState({inputValue: value});
  }

  _addTodoItem = () => {
    if(this.state.inputValue != ''){
      const prevTodo = this.state.todos; //현재의 todos를 prevTodo에 넣습니다.
      const newTodo = { title: this.state.inputValue, isComplete: false}; //현재 input창에 있는 값을 새로운 할일로 등록
      this.setState({
      inputValue: '', //TodoItem이 추가되면 입력창은 비어야하므로
      todos: prevTodo.concat(newTodo) // 이전의 TodoItem에 새 Todo를 이어붙여 todos값으로 변경
    }, this.storeDate);
  }
 }
    
    
  render(){
  return (
  <View style={styles.container}>
    <View style={styles.headercentered}>
    <Header/>
  </View>
    <View style={styles.inputContainer}>
    <SubTitle title="해야할 일 입력"/>
    <Input
    value = {this.state.inputValue}
    changeText={this._changeText} //입력할때마다 글자가 별하니 _changeText를 실행시켜줌
    addTodo={this._addTodoItem}/> 

    </View>
  <View style={styles.TodoContainer}>
      <Text></Text>
      <SubTitle title="List"/>
      <FlatList
      data={this.state.todos}
      renderItem={this._makeTodoItem} //_makeTodoItem은 우리가 Item을 render하는 방법에 대해 나타내고 후에 작성해줍니다
      keyExtractor={(item, index) => { return '${index}'}}/>
  </View>
</View>
  );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    },
    headercentered : {
    alignItems : 'center',
    },
    subContainer: {
    marginLeft:20, //Q) SubTitle Component에서 설정해주면되지 왜 여기서 해주나요?
    },
  });