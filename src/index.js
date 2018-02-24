import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main'
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



ReactDOM.render(<Main/>, document.getElementById('root'));

