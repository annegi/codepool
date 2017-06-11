//Learning to listen to the events when a change occur in input field
document.getElementById('inputField').addEventListener('input', function () {
   console.log(this.value);
});



// This is the json p callback cb
function cb(data)
{
    console.log('I got called because of jsonp request');
    console.log(data);
}



//Learning to use session and local Storage

if( typeof  localStorage === 'undefined'){
    alert('local storage is unavailable');
}
else{
    localStorage.setItem('Name','Anupam');
    //alert(localStorage.getItem('Name'));

}

