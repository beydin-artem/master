$(() => {
    const PHONE_REGEX = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    const EMAIL_REGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const isValid = {
        isPhoneValid: false,
        isEmailValid: false,
        isPassValid: false,
        isPassConfirmed: false
    }
    const pushingData = () => {
        const object = {
            name: $('#first-name').val(),
            lastName:  $('#last-name').val(),
            phone: $('#phone-number').val(),
            emailAddress: $('#email').val(),
            password: $('#password-value').val(),
            confirmPassword: $('#confirm-password').val()
    }

        const errorMessage = () => {
            let message = '';
            for ( let prop in isValid) {
                if (isValid[prop] === false) {
                    switch (prop) {
                        case 'isPhoneValid':
                        message = 'invalid phone number.'
                            $('#phone-error').html(message);
                        break;
                        case 'isEmailValid':
                                message = 'invalid email address.'
                            $('#email-error').html(message);
                        break;
                        case 'isPassValid':
                                message = 'the password is too short.'
                            $('#pass-error').html(message);
                        break;
                        case 'isPassConfirmed':
                                message = 'passwords are different.'
                            $('#confirm-error').html(message);
                        break;
                    }
                } else for ( let prop in object) {
                    if (object[prop] === '') {
                        message = 'field is empty'
                        switch (prop) {
                            case 'isPhoneValid':
                                $('#phone-error').html(message);
                                break;
                            case 'isEmailValid':
                                $('#email-error').html(message);
                                break;
                            case 'isPassValid':
                                $('#pass-error').html(message);
                                break;
                            case 'isPassConfirmed':
                                $('#confirm-error').html(message);
                                break;
                        }
                    }
                }
            }
        };


    if (object.phone.match(PHONE_REGEX) !== null) {
        isValid.isPhoneValid = true;
        $('#phone-error').html('');
     } else isValid.isPhoneValid = false;
         errorMessage();
        if (object.emailAddress.match(EMAIL_REGEX) !== null) {
            isValid.isEmailValid = true;
            $('#email-error').html('');
        } else isValid.isEmailValid = false;
            errorMessage();
            if (object.password.length >= 6) {
                isValid.isPassValid = true;
                $('#pass-error').html('');
            } else isValid.isPassValid = false;
            errorMessage();
            if (object.password === object.confirmPassword) {
                isValid.isPassConfirmed = true;
                $('#confirm-error').html('');
            } else isValid.isPassConfirmed = false;
            errorMessage();
        if (isValid.isPhoneValid && isValid.isPassConfirmed && isValid.isPassValid && isValid.isEmailValid) {
            alert(`Name ${object.name} \n Last name ${object.lastName} \n Phone number ${object.phone} \n Email ${object.emailAddress} \n Password ${object.password}`)
        }
    }

$('#submit').on('click', (e) => {
    e.preventDefault();
    pushingData();
})
});
