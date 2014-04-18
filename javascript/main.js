/* CURRENTLY IN: javascript/main.js */

$.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: "https://api.instagram.com/v1/users/3364414/media/recent/?access_token=3364414.691e182.dc90822dd2c34d5aaf4cccae7bbf4974",
        success: function(data) {...}
    });
});