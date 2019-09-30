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

            $('#list_game').click(function(){
                $.ajax({
                    url: "./page_game_list.html",
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
