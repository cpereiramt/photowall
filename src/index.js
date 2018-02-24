import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//const tasks = ['Take out the trash','Shove the Driveway','walk the dog'];
//sem jsx, somente javascript + react
/* const element = React.createElement('ol', null, 
tasks.map((task,index)=> React.createElement('li', {key:index}, task)));
 */

 //com jsx

/* const element = 
           <div>
            <h1>Lista de Tarefas </h1>
               <ol>
     {tasks.map((task, index)=> <li key = {index} > {task} </li>)}
               
               </ol>
            </div> */


class List extends Component{
render(){
return ( <ol>
    {this.props.tasks.map((task, index)=> <li key = {index} > {task} </li>)}
              
              </ol>)
}
}

class Title extends Component{
render(){
return(
    <h1>{this.props.title} </h1> 
)
}
}
class Main extends Component{
render(){
return <div>
    <Title title="Todo List"/>
    <List tasks ={['Test1','Test2']}/>
    <List tasks={['Test3', 'Test4']}/>
    <List tasks={['Test3', 'Test4']}/>
  

</div>

}

}
ReactDOM.render(<Main/>, document.getElementById('root'));

