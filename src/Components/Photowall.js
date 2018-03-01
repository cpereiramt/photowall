import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types'


function Photowall(props){
    return <div className="photogrid">
    {props.posts.map((post, index) => <Photo key={index} post = {post} removePhoto={props.removePhoto}/>)}
    
    </div>

}
Photowall.propTypes ={
posts:PropTypes.array.isRequired,
removePhoto: PropTypes.func.isRequired


}


export default Photowall