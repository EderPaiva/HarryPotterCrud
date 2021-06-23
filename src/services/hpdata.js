//http://hp-api.herokuapp.com/api/characters

const data = async () => {

    const response = await fetch('http://hp-api.herokuapp.com/api/characters',{
        method: 'GET',
     });
    const responseJson = await response.json();
    return responseJson;
}



export default data;