import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/Stylesheet.css'
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'
import App from './Components/App'

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
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



ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'));

