const firstname = document.querySelector('#First-Name');
const lastname = document.querySelector('#Last-Name');
const email = document.querySelector('#Email-4');
const password = document.querySelector('#Paswword');
const form = document.querySelector('#wf-form-signup-form-2');
const recaptcha_sitekey = document.querySelector('#recaptcha-sitekey');
const referral_code = document.querySelector('#referral-code');

let captchatoken;

function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,7})?$/;
  return emailReg.test( $email );
}



form.addEventListener('submit', (e) => {
	e.preventDefault();

	if( !validateEmail(email.value)) { 
		Notification('error', 'Invalid Email', 'Please enter a valid email address.');
		return false;
	}

	grecaptcha.ready(() => {

		captchatoken = grecaptcha.getResponse();

		if(captchatoken.length == 0) { 
			Notification('error', 'Invalid Captcha', 'Please solve the Captcha first.');
			return false;
		}

		const postData = new FormData();
		postData.append('firstname', firstname.value);
		postData.append('lastname', lastname.value)
		postData.append('email', email.value);
		postData.append('password', password.value);
		postData.append('g-recaptcha-response', captchatoken);
		postData.append('referral_code', referral_code.value);

		fetch('', {
			method: 'POST',
			body: postData,
		}).then((res) => {
			res.json().then((data) => {

				if(data.success === 'true')
				{
					window.location.href = '/dashboard';
				} else {
					grecaptcha.reset();

		           	if(data.email == 'already_exists'){
	            		Notification('error', 'Already Exists', 'This email is already registered with us.');
	            	} else if(data.password == 'empty_password'){
	            		Notification('error', 'Empty Password', 'Please enter a valid password.');
	            	} else if(data.firstname == 'empty_firstname'){
	            		Notification('error', 'Empty Firstname', 'Please enter a valid firstname.');
	            	} else if(data.lastname == 'empty_lastname'){
	            		Notification('error', 'Empty Lastname', 'Please enter a valid lastname.');
	            	} else if(data.firstname == 'invalid_name'){
	            		Notification('error', 'Invalid Firstname', 'Please enter a valid firstname.');
	            	} else if(data.lastname == 'invalid_name'){
	            		Notification('error', 'Empty Lastname', 'Please enter a valid lastname.');
	            	} else if(data.email == 'invalid_email'){
	            		Notification('error', 'Invalid Email', 'Please enter a valid email address.');
	            	} else if(data.email == 'empty_email'){
	            		Notification('error', 'Empty Email', 'Please enter a valid email address.');
	            	} else if(data.valid_captcha == 'false'){
	            		Notification('error', 'Invalid Captcha', 'Please solve the Captcha first.');
	            	} else {
	            		Notification('error', 'Something went wrong', 'Contact support');
	            	}
		        }
			});
		});
	});
});