// calling the rapid api with fetch will test out with axios later 

export const exerciseOptions = {
    
        method: 'GET',
        
        headers: {
          
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
          'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY
        }
}
// make env folder to hide key
// env has to be in the project folder cannot go along side the src

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data
}