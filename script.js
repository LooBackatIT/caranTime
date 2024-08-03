fetchdat()

async function fetchdata() {
    
    try {
        const city = document.getElementById("city")
        const recponse = await fetch(`https://islomapi.uz/api/present/day?region=${city}`);

        if(!recponse.ok){
            throw new Error("Not fount")
        }

        const data = await recponse.json();
        console.log(data);
    }
    catch (error) {
        console.error(error);
    }
}