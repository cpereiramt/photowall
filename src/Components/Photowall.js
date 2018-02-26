import React from 'react';
import Photo from './Photo';


function Photowall(props){
    return <div className="photogrid">
    {props.posts.map((post, index) => <Photo key={index} post = {post} removePhoto={props.removePhoto}/>)}
    
    </div>

}



export default Photowall