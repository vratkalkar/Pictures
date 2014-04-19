/* CURRENTLY IN: javascript/main.js */

              $(function() {
                  $.ajax({
                      type: "GET",
                        dataType: "jsonp",
                        cache: false,
                        url: "https://api.instagram.com/v1/users/3364414/media/recent/?access_token=3364414.691e182.dc90822dd2c34d5aaf4cccae7bbf4974",
                        success: function(data) {
                          for (var i = 0; i < 4; i++) {
                            $("#instafeed").append("<div class='instaframe'>
                                        <a target='_blank' href='" + data.data[i].link +"'>
                                        <img src='" + data.data[i].images.standard_resolution.url +"' /></a></div>"
                            );   
                          }
                        }
                    });
              });
            