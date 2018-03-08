import React,{Component} from 'react'



class Single extends Component{
render(){
    const {match, posts} = this.props
const id = Number(match.params.id) 
const post = posts.find((post) => post.id === id)  
console.log(post)

return <div className='single-photo'>
       
       
       </div>


}


}

export default Single 