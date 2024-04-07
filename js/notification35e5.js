let timeout;
function Notification(type, title, msg ){
$('.notification-icon').hide()
if($('.notification:visible')){
$('.notification:visible').slideUp(50);
clearTimeout(timeout);
}

const currentNotification = $("#notification");
currentNotification.find("#"+type+"-icon").show();
currentNotification.find('.notification-title').text(title);
currentNotification.find('.notification-description').text(msg);
currentNotification.slideDown(300);
timeout = setTimeout(function(){
currentNotification.slideUp(300);
},2000)
}


function slideInFromBottom(element) {
  setTimeout(() => {
    element.style.bottom = '8px'; // Adjust the position to bring the element into the viewport
  }, 3);
}

function scaleToOriginal(element) {
  setTimeout(() => {
    element.style.transform = 'scale(1)'; // Adjust the position to bring the element into the viewport
  }, 3);
}

function scaleToInitial(element, scale=0.8) {
  setTimeout(() => {
    element.style.transform = 'scale('+scale+')'; // Adjust the position to bring the element into the viewport
  }, 3);
}




$('body').on('mouseover', '.has-popup', function(event) {
	//console.log(event.target.querySelector('.has-popup'))
	custompopup = $(event.target).find(".custom-popup");
	if(custompopup[0]) {
		custompopup.show();
	    setTimeout(() => {
	      scaleToOriginal(custompopup[0]);
	    }, 5);
	}
}).on('mouseleave', '.has-popup', function(event) {

	if(event.target.classList.contains("custom-popup")){
		custompopup = event.target;
	} else {
		custompopup = event.target.querySelector(".custom-popup");
	}


	custompopup = event.target.querySelector(".custom-popup");
	if(custompopup) {
		scaleToInitial(custompopup);
		console.log(custompopup);

		$(custompopup).hide();
		// setTimeout(() => {
	 //    $(custompopup).hide();
		// }, 200);
	}
}).on('mouseover', '.custom-popup', function(event) {
	scaleToOriginal(this);
}).on('mouseleave', '.custom-popup', function(event) {
	$(".custom-popup").hide();
});



NProgress.configure({ easing: 'ease', speed: 500 });
NProgress.configure({ showSpinner: false });
NProgress.start();
NProgress.done();


$('body').append(`<div id="notification" class="notification" onclick="$(this).fadeOut(300)" style="display:none;z-index:999999999;"><div class="notifiation-wrapper"><div class="icon-wrapper"><div id="success-icon" class="notification-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M38.4096 6.59039C29.6224 -2.19682 15.3757 -2.19683 6.5903 6.59056C-2.19682 15.3777 -2.19683 29.6243 6.59065 38.4097C15.3757 47.1968 29.6224 47.1968 38.4096 38.4095C47.1968 29.6243 47.1968 15.3777 38.4096 6.59039ZM35.7581 35.7578C28.4352 43.0806 16.5632 43.0806 9.24231 35.7581C1.91944 28.4369 1.91944 16.5648 9.24213 9.24213C16.5632 1.91935 28.4352 1.91935 35.7579 9.24213C43.0806 16.5649 43.0806 28.4369 35.7581 35.7578Z" fill="#6ECE40"></path>
<path d="M32.4241 13.6747L20.625 25.4738L14.4508 19.2996C13.7186 18.5674 12.5314 18.5674 11.7992 19.2996C11.0669 20.0319 11.0669 21.2191 11.7992 21.9513L19.2991 29.4513C20.0313 30.1835 21.2186 30.1835 21.9508 29.4513L35.0758 16.3263C35.808 15.5941 35.808 14.4069 35.0758 13.6747C34.3435 12.9424 33.1563 12.9424 32.4241 13.6747Z" fill="#6ECE40"></path>
</svg></div><div id="error-icon" class="notification-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.6331 45.1456C28.4264 45.0902 34.1614 42.6845 38.2858 38.5996C43.1845 33.7469 45.7067 26.5684 44.8272 19.7151C43.3189 7.96969 33.6869 0 22.4883 0C13.9811 0 5.71168 5.33474 2.0844 13.0704C-0.692449 18.9925 -0.697148 26.1428 2.0844 32.0761C5.68537 39.7573 13.8195 45.0638 22.3436 45.1456C22.4404 45.1465 22.5363 45.1465 22.6331 45.1456ZM22.3681 41.3839C13.7152 41.3003 5.64214 34.5926 4.03618 25.9933C2.90476 19.9303 5.04167 13.3702 9.4912 9.06445C14.6878 4.037 22.8539 2.3521 29.6433 5.20224C35.7195 7.75262 40.2658 13.6728 41.104 20.1953C41.822 25.7857 39.8204 31.6448 35.8877 35.6818C32.4371 39.2217 27.5994 41.3351 22.6086 41.3839C22.5287 41.3839 22.4479 41.3839 22.3681 41.3839ZM10.7326 31.7143L19.8797 22.5672L10.7232 13.4106L13.3581 10.7766L22.5147 19.9332L31.9851 10.4627L34.6238 13.1005L25.1534 22.5719L34.6426 32.0611L32.0086 34.696L22.5184 25.2059L13.3713 34.353L10.7326 31.7143Z" fill="#DF1B1B"></path>
</svg></div><div id="info-icon" class="notification-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 3.46154C11.9854 3.46154 3.46154 11.9854 3.46154 22.5C3.46154 33.0147 11.9853 41.5385 22.5 41.5385C33.0147 41.5385 41.5385 33.0147 41.5385 22.5C41.5385 11.9853 33.0147 3.46154 22.5 3.46154ZM0 22.5C0 10.0736 10.0736 0 22.5 0C34.9265 0 45 10.0736 45 22.5C45 34.9265 34.9265 45 22.5 45C10.0736 45 0 34.9265 0 22.5ZM22.5 9.23081C23.4559 9.23081 24.2308 10.0057 24.2308 10.9616V10.9846C24.2308 11.9405 23.4559 12.7154 22.5 12.7154C21.5441 12.7154 20.7692 11.9405 20.7692 10.9846V10.9616C20.7692 10.0057 21.5441 9.23081 22.5 9.23081ZM22.5 16.1538C23.4559 16.1538 24.2308 16.9287 24.2308 17.8846V34.0385C24.2308 34.9943 23.4559 35.7692 22.5 35.7692C21.5441 35.7692 20.7692 34.9943 20.7692 34.0385V17.8846C20.7692 16.9287 21.5441 16.1538 22.5 16.1538Z" fill="#2BB1EB"></path>
</svg></div><div id="warn-icon" class="notification-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 41.5385C33.0146 41.5385 41.5385 33.0146 41.5385 22.5C41.5385 11.9853 33.0147 3.46154 22.5 3.46153C11.9853 3.46153 3.46154 11.9853 3.46154 22.5C3.46154 33.0146 11.9853 41.5385 22.5 41.5385ZM45 22.5C45 34.9264 34.9264 45 22.5 45C10.0735 45 -1.28001e-06 34.9264 -1.93656e-07 22.5C8.92703e-07 10.0735 10.0735 -5.21404e-06 22.5 -4.12768e-06C34.9264 -3.04133e-06 45 10.0735 45 22.5ZM22.5 35.7692C21.5441 35.7692 20.7692 34.9943 20.7692 34.0384L20.7692 34.0154C20.7692 33.0595 21.5441 32.2846 22.5 32.2846C23.4559 32.2846 24.2308 33.0595 24.2308 34.0154L24.2308 34.0384C24.2308 34.9943 23.4559 35.7692 22.5 35.7692ZM22.5 28.8462C21.5441 28.8462 20.7692 28.0713 20.7692 27.1154L20.7692 10.9615C20.7692 10.0057 21.5441 9.23077 22.5 9.23077C23.4559 9.23077 24.2308 10.0057 24.2308 10.9615L24.2308 27.1154C24.2308 28.0713 23.4559 28.8462 22.5 28.8462Z" fill="#EFB112"></path>
</svg></div></div><div><div class="notification-title">This is some text inside of a div block.</div><p class="notification-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p></div></div></div>`);


