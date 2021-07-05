console.log("Let's get this THANG started!");

$('#submitButton').on('click', function(event){
    event.preventDefault();
    let userSearch = $('#inputText').val();
    makeRequest(userSearch);
})

async function makeRequest(userSearch){
    let gifNum = getRandomNum();
    let res = await axios.get('https://api.giphy.com/v1/gifs/search', {params: {q: userSearch, api_key : 'ilHZI8sgkaQwE99S8Bz6mLpnEw6R3ehx'}})
    imgUrl = res.data.data[gifNum].images.original.webp
    $('#divCollector').append(`<img src='${imgUrl}'></img>`)
    $('#inputText').val('')
}

// searches for a random number between 1 and 50
function getRandomNum(){
    return (Math.floor(Math.random() * 51))
}

$('#removeButton').on('click', function(event){
    event.preventDefault();
    $('#divCollector').text('');
})