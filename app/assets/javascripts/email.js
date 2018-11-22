# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
<script>
$('#sub_form').submit(function(e) {
  e.preventDefault();
}).validate({
  rules: {
    email: {
      required: true,
      email: true
    },
  },
  submitHandler: function (form) {
    $.ajax({
      type: 'POST',
      url: '/subscribe',
      dataType: 'json',
      async: true,
      data: {
        csrfmiddlewaretoken: '{{csrf_token}}',
        sub_email: $('#sub_email').val(),
      },
      success: function (json) {
        $('#sub_output').html(json.message);
        $("#sub_email").prop('disabled', true);
      }
    });

    return false;
  }
});
</script>
