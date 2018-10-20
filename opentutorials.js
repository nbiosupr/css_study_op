$(document).ready(function() {
  $('#button_changeColor').click(function() {
    $input = $(this);
    $header = $('#header');
    $input.prop('value', '0');

    if($input.prop('value')===0){
      console.log('[#]change from blue to black');
      $header.css('background-color', 'black');
      $input.prop('value',1);
      } else {
      console.log('[#]change from black to blue');
      $header.css('background-color', '#333399');
      $input.prop('value',0);
    }
  });
});
