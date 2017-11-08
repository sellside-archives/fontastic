/**
 * SETUP
 **/

var app = app || {};

/**
 * MODELS
 **/

/**
 * VIEWS
 **/

app.PostCreateView = Backbone.View.extend({
  el: '#pngDropzone',
  events: {
  },
  initialize: function() {
    Dropzone.options.pngDropzone = {
      init: function() {
        this.on('success', function(file, response) {
          console.log(response);
          $('#status').html('<p>搞定: http://static.wooicon.com/fontcustom/fontcustom/fontcustom.css?' + response.revision + '</p>');
        });

        this.on('uploadprogress', function(file, progress, bytesSent) {
          $('#status').html('<h2>製造字型檔中...</h2>');
        });
      }
    };
  }
});

/**
 * BOOTUP
 **/

$(document).ready(function() {
  app.postCreateView = new app.PostCreateView();
});

