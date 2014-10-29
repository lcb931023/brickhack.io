$(document).ready(function () {

  function setSchool(data) {
    $('#participant_school_id').val(Math.floor(Math.random() * 10000));
  }

  $('#participant_school').autocomplete({
      source: function( request, response ) {
        $.ajax({
          url: 'http://gd.geobytes.com/AutoCompleteCity',
          dataType: 'jsonp',
          data: {
            q: request.term
          },
          success: function( data ) {
            response( data );
          }
        });
      },
      minLength: 3,
      select: function( event, ui ) {
        setSchool(ui.item);
      },
      open: function() {
        $( this ).removeClass('ui-corner-all').addClass('ui-corner-top');
      },
      close: function() {
        $( this ).removeClass('ui-corner-top').addClass('ui-corner-all');
      }
    });

});
