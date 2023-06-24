const api_url ="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";
// Defining async function
async function getapi(url) {
   
    // Storing response
    let response = await fetch(url);
   
    // Storing data in form of JSON
    let data = await response.json();

    //calling displayData function to initially display data
    displayData(data);
    

    //creating eventlistner for sort by market cap button
    let mkt = document.getElementById("button1");
    mkt.addEventListener("click",()=>{
        document.getElementById("tableContainer").innerHTML = "";
        let sortedData = [...data];
        sortedData.sort((a,b)=>{
            return a.market_cap - b.market_cap;
        })

        let rowData = '';
        for(let i in sortedData){
        rowData += `<tr>
        <td colspan="1"><img src="${sortedData[i]['image']}" alt="coin image" width="30px" height="30px"></td>
        <td>${sortedData[i]['name']} </td>
        <td>${sortedData[i]['symbol']}</td>
        <td>$${sortedData[i]['current_price']}</td>
        <td>$${sortedData[i]['total_volume']}</td>
        <td>${sortedData[i]['price_change_percentage_24h']}%</td> 
        <td>Mkt Cap: $${sortedData[i]['market_cap']}</td>      
        </tr>`;
    }

    document.getElementById("tableContainer").innerHTML = rowData;
        
    });


    //creating eventlistner for sort by percentage
    let pct = document.getElementById("button2");
    pct.addEventListener("click",()=>{
        document.getElementById("tableContainer").innerHTML = "";
        let sortedData = [...data];
        sortedData.sort((a,b)=>{
            return a.price_change_percentage_24h - b.price_change_percentage_24h;
        })

        let rowData = '';
        for(let i in sortedData){
        rowData += `<tr>
        <td colspan="1"><img src="${sortedData[i]['image']}" alt="coin image" width="30px" height="30px"></td>
        <td>${sortedData[i]['name']} </td>
        <td>${sortedData[i]['symbol']}</td>
        <td>$${sortedData[i]['current_price']}</td>
        <td>$${sortedData[i]['total_volume']}</td>
        <td>${sortedData[i]['price_change_percentage_24h']}%</td> 
        <td>Mkt Cap: $${sortedData[i]['market_cap']}</td>      
        </tr>`;
    }

    document.getElementById("tableContainer").innerHTML = rowData;
    })
}



//calling getapi method
getapi(api_url);


//function to initially display data when you open app
function displayData(cryptoData) {
    let rowData = '';
    for(let i in cryptoData){
        rowData += `<tr>
    <td colspan="1"><img src="${cryptoData[i]['image']}" alt="coin image" width="30px" height="30px"></td>
    <td>${cryptoData[i]['name']} </td>
    <td>${cryptoData[i]['symbol']}</td>
    <td>$${cryptoData[i]['current_price']}</td>
    <td>$${cryptoData[i]['total_volume']}</td>
    <td>${cryptoData[i]['price_change_percentage_24h']}%</td> 
    <td>Mkt Cap: $${cryptoData[i]['market_cap']}</td>      
</tr>`;
    }
    document.getElementById("tableContainer").innerHTML = rowData;
}




