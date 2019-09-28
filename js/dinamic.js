 $(document).ready(function(){

            $('#PageGameOneLeft').click(function(){
                $.ajax({
                    url: "./PageGameOneLeft.html",  
                    cache: false,
                    success: function(html){
                        $("#content").html(html);
                    }
                });
            });

            $('#btn2').click(function(){
                $.ajax({
                    url: "page2.html",
                    cache: false,
                    success: function(html){
                        $("#content").html(html);
                    }
                });
            });
              $('#btn3').click(function(){
                $.ajax({
                    url: "monopoly.html",
                    cache: false,
                    success: function(html){
                        $("#content").html(html);
                    }
                });
            });

        });
