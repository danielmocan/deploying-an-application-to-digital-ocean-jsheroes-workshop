const url = "http://localhost:3000/eggs";

const addEgg = async ( data ) => {
    try {
        const response = await fetch( url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(data) 
        });
        const result = await response.json();
        console.log("result", result );
        return result;
    } catch (error){
        console.log( "There was an error", error )
        return;
    }
    
}

const getEggs = async ( ) => {
    try {
        const response = await fetch( url, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
            },
            mode: 'cors',
        });
        const result = await response.json();
        console.log("result", result );
        return result;
    } catch (error){
        console.log( "There was an error", error )
        return [];
    }
}

export {
    addEgg,
    getEggs,
}