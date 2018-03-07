import React, {Component} from 'react';
import Photowall from './Photowall';
import Title from './Title';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom';
import { connect } from "react-redux";
import {removePost} from '../redux/actions'


class Main extends Component{
    constructor(){
    super()
    
       
console.log('constructor')
    }


    

componentDidUpdate(prevProps,prevState){


}

render(){
    console.log(this.props)
    
return <div>  
              <Route exact path="/" render={() =>(
                   <div>
                         <Title title="Photowall"/>
                          {/* passing the parament posts to a class calling Photowall */}
                          <Photowall {...this.props}/>
                   </div> 

              )}/>
              
      
               <Route path="/AddPhoto" render={({history}) =>(
                      <AddPhoto {...this.props} onHistory={history}/>
                    

               )}/> 
            
      
</div>

}
}

/* function mapStateToProps(state){
    return{
    posts:state
    
    }
*/    

export default Main 






 /* url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.eot?#iefix") format('embedded-opentype'), 
 url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.woff") format('woff'), 
 url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.ttf") format('truetype'), 
 url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.svg#billabongregular") format('svg');  */

 //url("https://image.flaticon.com/icons/svg/60/60740.svg") center no-repeat;