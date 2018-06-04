$(document).ready (function() {
  $("#menue-id").on("change", function(data) {
    var selected = $(this).val();
    $(".storied-list").empty();
    $("header").addClass("header-up");
    $(".loading-image").show();
      
    // Built by LucyBot. www.lucybot.com
    var url = "https://api.nytimes.com/svc/topstories/v2/" + selected + ".json";
    url += '?' + $.param({
      'api-key': "c547b52b46854c03b45433b1b9a777c1"
    });
    $.ajax({
      url: url,
      method: 'GET',
    })

    .done(function(data) {

      var filterResult = data.results.filter(function(index) {
        return index.multimedia.length;
      }).slice(0,12);

      $.each(filterResult, function(key, value) {

        var articleLink = value.url;
        var image = value.multimedia[4].url;
        var text = value.abstract;
        var html = '';

        html += '<a href=' + articleLink + '>';
        html += '<li>';
        html += '<div class="image-wrapper" style="background-image:url(' + image + ')">';
        html += '<div class="text">';
        html += '<p>' + text + '</p></div></div>';
        html += '</li>';
        html += '</a>';

        $(".storied-list").append(html);

        $(".loading-image").hide();
                
      });

    })
    
    .fail(function() {
      alert("Sorry, an unexpected error occured. Please, try again later")
    });

  })

});