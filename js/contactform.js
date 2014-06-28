$(document).ready(function() {
    var bootstrapValidator;

    $('form').bootstrapValidator ({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                message: 'The name is not valid',
                validators: {
                    notEmpty: {
                        message: 'The name is required and cannot be empty'
                    },
                    stringLength: {
                        min: 3,
                        max: 30,
                        message: 'The name must be more than 3 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[A-Za-z']+( [A-Za-z']+)*$/,
                        message: 'The name can only consist of alphabetical and not starting and/or ending with space(s)'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
            message: {
                validators: {
                    notEmpty: {
                        message: 'The message is required and cannot be empty'
                    },
                    stringLength: {
                        min: 6,
                        message: 'The message must be more than 6 characters long'
                    }
                }
            }
        }
    });
    
    bootstrapValidator = $('form').data('bootstrapValidator');

    $('form button').on('mousedown', function(e) {
        var dataString = $('form').serialize();
        var urlString = 'xhr/contactform.php';
        var successMsg = '<div class="col-lg-8 col-lg-offset-2 text-center">'
                          + '<h3>Thank You</h3>'
                          + '<p>Your message was sent successfully. '
                          + 'You should receive a reply from a me by email. Occasionally, '
                          + 'I receive a very large number of messages and your response may take a little longer. '
                          + 'If this occurs, I appreciate your patience and I assure you that you will receive a response. '
                          + 'Once again, thank you for taking the time to contact me.</p>'
                          + '<p>Have a great day,</p>'
                          + '<p><strong>Franco Haley<strong></p>'
                          + '</div>';
        var errorMsg = '<div id="error-message" class="col-lg-8 col-lg-offset-2 text-center">'
                        +'<h3>My Apologies</h3>'
                        +'<p>There is a slight error on the network and your message has <strong>not</strong> been sent. '
                        +'Please try again in <strong><em><span style="color: #7A8EA7">7</span></em></strong> second(s).</p>'
                        +'</div>';
        
        if(bootstrapValidator.isValid() === true) {
            //console.log('pass validation');
            $.ajax({
                type: 'POST',
                url: urlString,
                data: dataString,
                success: function(data) {
                    //console.log('Inside the ajax success function: '+data);
                    $('#contact-form').html(successMsg);
                }, 
                error: function() {
                    //console.log('error on ajax.');
                    $('#contact-form').html(errorMsg);
                    
                    var sec = $('#error-message span').text()
                    var timer = setInterval(function() { 
                       $('#error-message span').text(--sec);
                       if (sec === 0) {
                            clearInterval(timer);
                            location.reload();
                       } 
                    }, 1000);
                }
            });
        }
        e.preventDefault();
    });
});