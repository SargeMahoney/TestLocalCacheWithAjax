// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$('#callAjaxButton').click(() => {
  
    var myData = getWithExpiry("api/test2");  
    if (myData == null) {
        $.ajax({
            url: 'api/test',          
            success: function (result) {
                myData = result;
                setWithExpiry("api/test2",myData,10000)           
                $('#dataLabel').append(myData);
            }
        });

    } else {
        console.log(myData);
        $('#dataLabel').append(myData.name);
        $('#dataLabel').append(myData.city);
    }
  

});



function setWithExpiry(key, value, ttl) {
    const now = new Date()

    // `item` is an object which contains the original value
    // as well as the time when it's supposed to expire
    const item = {
        value: value,
        expiry: now.getTime() + ttl
    };
    console.log(item);
    localStorage.setItem(key, JSON.stringify(item))
}


function getWithExpiry(key) {
    const itemStr = localStorage.getItem(key)
    console.log(itemStr);
    // if the item doesn't exist, return null
    if (!itemStr) {
        return null
    }
    const item = JSON.parse(itemStr);
    const now = new Date();
    // compare the expiry time of the item with the current time
    if (now.getTime() > item.expiry) {
        // If the item is expired, delete the item from storage
        // and return null
        localStorage.removeItem(key)
        return null
    }
    return item.value
}