import React from 'react';
import MyContext from '../context/mycontext';

class MyChild extends React.Component {
    render() {
        return(
        <MyContext.Consumer>
            {
                value => <div>{`Eu tenho: ${value.money}`}</div>
                
            }
        </MyContext.Consumer>)
    }
}

export default MyChild;