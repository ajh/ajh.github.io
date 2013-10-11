var tableOfContents = {
  init: function( settings ) {
    $('section header').append("<h4 class='toc'>Contents:</h4><ul id='toc'></ul>");

    // TODO: skip the first h1
    $('article h1').each(function() {
      var text = $(this).text();
      var name = text.replace(/[^a-zA-z_]/g, '')
      $(this).prepend("<a name=" + name + "></a>")
      $("#toc").append("<li><a href='#" + name + "'>" + text + "</a>, ");
    })
  },
};

$(document).ready(tableOfContents.init);

