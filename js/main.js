$(function() {
  $('select').selectric();

  var $articleList = $('.articleList');
  $('.loadingImage').hide();

  $('select').change('click', function () {
    $articleList.empty();

    $('.loadingImage').show();
    $('.panel').removeClass('panel').addClass('panel-resize');
    $('.logo').removeClass('logo').addClass('logo-resize');

    var url = 'https://api.nytimes.com/svc/topstories/v2/';
    url += this.value;
    url += '.json';
    url += '?' + $.param({'api-key': 'c547b52b46854c03b45433b1b9a777c1'});

    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(data) {
      var resultData = ''

    var $dataSet = data.results.filter(function (item) {
      return item.multimedia.length;
    }).slice(0, 12);

  
    $.each($dataSet, function(key, value) {
      var url = value.url;
      var image = value.multimedia[4].url;
      var title = value.title;
      var caption = value.abstract;

      resultData += '<li class="article-grid" alt="'+ title +'" style="background-image: url(' + image + ');"> <a href=';
      resultData += url;
      resultData += '>';
      resultData += ' </a> <p class="caption">';
      resultData += caption;
      resultData += '</p> </li>';
    });

    $('.loadingImage').hide();
    $('.articleList').append(resultData);
    }).fail(function() {
      $('.loadingImage').append('p').text('Oops. Well...this is embarrassing!');
    })
    .always(function() {
      $('.loadingImage').hide();
    })
  });
});
