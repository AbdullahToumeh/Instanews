$("#menue-id").on("change", function() {
var selected = $(this).val();
$("#articles").empty();
$("header").addClass("header-up");
$(".loading-image").show();

// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/topstories/v2/" + selected + ".json";
url +=
 '?' + 
 $.param({
  'api-key': "c547b52b46854c03b45433b1b9a777c1"
});
$.ajax({
  url: url,
  method: 'GET',
})
.done(function(data) {
  console.log(data);
    var results = data.results;
    var filterResults = data.results.filter(function(index){ 
      return index.multimedia.length;
    }).slice(0,12);
    console.log(results);


$.each(results, function(arrayIndex, object) {
// TODO, see what's in the value to add e.g. the description, image, link
console.log(object.abstract);
console.log(object.multimedia[4].url);
console.log(object.url);

return 

$("#articles").append("<li class='article-item' style='background: url(" + object.multimedia[4].url + ")'>" + object.title + "</li>");

$(".loading-image").hide();

})//End of $.each

})//End of done

.fail(function(err) {
$('.results').append('<p>Sorry, it appears there is a problem with the page.</p>');
});
}); // change event & function