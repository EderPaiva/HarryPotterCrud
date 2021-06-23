
import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import MyContext from '../context/mycontext';


 function Main () {

  return (
    <main>
    <MyContext.Consumer>{
      value => {
        const { filteredChars, handleClick } = value;     
        return (
          filteredChars.map((char, i) => {
              return (<div className='box-char-home'> 
              <p>{char.name}</p>
              <img className='home'  src={char.image} alt={char.name}/>
              <Button 
              className='btn-home'
              onClick={(event) => handleClick(event, char.name,i)}>{char.name}
              </Button>
              </div>
                )
            }) 
        )
      } 
      }
    </MyContext.Consumer>
    </main>
  )

}

export default Main;