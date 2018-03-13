// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/*global $*/
$(document).ready(function(){
   $("#submit").click(function(){
    var searchTerm = $("#srch-term").val();
    giphy(searchTerm);
   });
   
 
  
});  

function giphy(searchterm){
    $.ajax({
      url: "https://api.giphy.com/v1/stickers/search?q="+searchterm+"&api_key=dc6zaTOxFJmzC",
      method: "GET",
      success: function(response) {
           // Log the whole response to the console
           
           // Log the first image of the data to the console
           
           // Log the "type" property of the first image object to the console
           
           console.log(response.data[0].type);
           
           // Log the "title" property of the first image object to the console
           
           console.log(response.data[0].title);
           
           console.log(response.data[0].images.original.url);
           $("#gifs").empty();
           for(var i=0; i<6;i++){
               $("#gifs").append('<div class="col-md-1"></div><div border-style="solid" border-radius="10px" class="col-md-3"><img height="200px" src='+ response.data[i].images.original.url +'></div>');
               //$("#gifs").append('<div class="col-sm-4"></div><div class="col-sm-4"><img class="thumbnail" src='+ response.data[0].images.original.url +'></div><div class="col-sm-4"></div>');
           }
           
      },
    }); 
}

