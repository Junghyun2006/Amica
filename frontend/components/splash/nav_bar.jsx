import React from 'react';
import { Link } from 'react-router-dom';

class navBar extends React.Component {
    constructor(props){
        super(props);
    }
    
    
    render(){
        const logout = this.props.currentUser ? (
             <Link className="btn" to={'/@me'}>Open Discord</Link>) : 
             (<Link className="btn" to={"/login"}>Login</Link>)

        return(
            <div>
                {logout}
            </div>
        )
    }

}
   
   


export default navBar;