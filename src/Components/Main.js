import React, {Component} from 'react';
import List from './List'
import Title from './Title'


class Main extends Component{
render(){
return <div>
    <Title title="Todo List2 "/>
    <List tasks ={['Test1','Test2']}/>
    <List tasks={['Test3', 'Test4']}/>
    <List tasks={['Test3', 'Test4']}/>
  

</div>

}}

export default Main