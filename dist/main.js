console.log('main.js pass');
var btn = document.getElementById('cool-button');

VK.init(function() { 
    // API initialization succeeded 
    // Your code here 
    VK.callMethod("showSettingsBox", 0);
    console.log('access check worked');
    
    VK.addCallback('onSettingsChanged', function(e){
        console.log(e);
        console.log('this worked');
        VK.api("fave.get",{"extended": "0", "item_type": "post", "tag_id": "", "offset": "0", "count": "50", "fields": "", "is_from_snackbar": "0", "v": "5.101"}), function(data){
            console.log('callback worked');
            console.log(data);
        }
    });
    
    // This didn't work
    // btn.addEventListener("click",function() {
    // console.log("event listener worked");
    // });



 }, function() { 
    // API initialization failed 
    // Can reload page here 
}, '5.101'); 


