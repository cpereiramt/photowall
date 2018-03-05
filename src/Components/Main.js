import React, {Component} from 'react';
import Photowall from './Photowall';
import Title from './Title';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom';

class Main extends Component{
    constructor(){
    super()
    
       
console.log('constructor')
    }


    

componentDidUpdate(prevProps,prevState){


}
render(){
  
return <div>  
              <Route exact path="/" render={() =>(
                   <div>
                         <Title title="Photowall"/>
                          {/* passing the parament posts to a class calling Photowall */}
{/*                           <Photowall posts ={this.state.posts} removePhoto={this.removePhoto} navigate={this.navigate}/>
 */}                   </div> 

              )}/>
              
    {/* 
               <Route path="/AddPhoto" render={({history}) =>(
                      <AddPhoto onAddPhoto={(addedPost) =>{
                     this.addPhoto(addedPost)
                    history.push('/')
                       } }/>
                    

               )}/> */}
            
      
</div>

}
}



export default Main






 /* url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.eot?#iefix") format('embedded-opentype'), 
 url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.woff") format('woff'), 
 url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.ttf") format('truetype'), 
 url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.svg#billabongregular") format('svg');  */

 //url("https://image.flaticon.com/icons/svg/60/60740.svg") center no-repeat;