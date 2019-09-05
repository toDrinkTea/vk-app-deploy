VK.init(function() { 
    // API initialization succeeded 
    // Your code here 
    VK.api("fave.get",{"extended": "0", "item_type": "post", "tag_id": "0", "offset": "0", "count": "50", "fields": "first-name", "is_from_snackbar": "0", "v": "5.101"}, function(data) {
        console.log(data);
    })
 }, function() { 
    // API initialization failed 
    // Can reload page here 
}, '5.101'); 