const email = document.querySelector('#reset-email');
const form = document.querySelector('#email-form');
const recaptcha_sitekey = document.querySelector('#recaptcha-sitekey');

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
		postData.append('email', email.value);
		postData.append('g-recaptcha-response', captchatoken);

		fetch('', {
			method: 'POST',
			body: postData,
		}).then((res) => {
			res.json().then((data) => {
				
				if(data.success === 'true')
				{
					window.location.href = '/reset-password/'+data.code;
				} else {
		           	if(data.error == 'not_exist'){
	            		Notification('error', 'Email Does Not Exist', 'This email is not registered with us.');
	            	} else if(data.error == 'invalid_captcha'){
	            		Notification('error', 'Invalid Captcha', 'Please solve the Captcha first.');
	            	}
		        }
			});
		});
	});
});