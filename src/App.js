import React, { useState, useEffect } from 'react';
import Main from './components/Main';
import data from './services/hpdata';
import './index.css';
import  MyContext  from './context/mycontext';

function App() {
  const [chars, setChars] = useState([]);
  const [charId, setCharId] = useState([0]);
  const [clickedChar, setClickedChar] = useState([chars[0]])
  const [filterChar, setFilterChar] = useState(['']);
  const [filteredChars,setFilteredChars] = useState([])
  const [loading, setLoading] = useState([false])


  useEffect(() => {
    async function  getresult() {
      setLoading(true)
      const response = await data();
      setChars(response)
      setFilteredChars(response)
      setLoading(false)
    }
    getresult()
  },[]);

  useEffect(() => {
    submitSeach();
  },[filterChar]);

   function filterChars ({target:{value}}) {
    setFilterChar(value);
    submitSeach();
  }

  
  function handleClick(event, char, index){
    setCharId(index)
    const charDetails = chars.filter((completeChar) => {
      return completeChar.name === char
    })
    console.log(char)
    console.log(charId)
   setClickedChar(charDetails)
  }


  function submitSeach () {
    // valor a ser buscado
   const myCharFiltered = filteredChars.filter((char) => {
     return char.name.match(filterChar)
   })
   filterChar === '' ? setFilteredChars(chars) : setFilteredChars(myCharFiltered)
  }

  function reset () {
    setFilteredChars(chars)
  }
  
  const contextState = {
    filteredChars,
    handleClick,
    setFilteredChars,
  }
  return (
    <MyContext.Provider value={contextState}> 
    <label forHtml='search-char-home'>
      {`Search Harry Potter Chars  `}
    <input id='search-char-home' value={filterChar} onChange={filterChars}/>
    </label>
    <button 
    type='button' 
    onClick={submitSeach}
    > 
    Search
    </button>
    <button 
    type='button' 
    onClick={reset}
    > 
    Reset
    </button>
    {loading === true ? <div>...loading</div> : <Main /> }
      
    </MyContext.Provider>
)
 }

export default App;
