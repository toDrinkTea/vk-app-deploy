console.log('main.js pass');

VK.init(function() { 
    // API initialization succeeded 
    // Your code here 
    VK.api("fave.get",{"extended": "0", "item_type": "post", "tag_id": "", "offset": "0", "count": "50", "fields": "", "is_from_snackbar": "0", "v": "5.101"}, function(data) {
        console.log('callback worked');
        console.log(data);
    })
 }, function() { 
    // API initialization failed 
    // Can reload page here 
}, '5.101'); 