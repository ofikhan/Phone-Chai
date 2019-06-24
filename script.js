// For showing current date and time

function today(){
	var today = new Date();
	
	var date = today.getDate();
	var month = today.getMonth() + 1;
	var year = today.getFullYear();
	var hours = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();
	
	$("#today").text("Today is " + date + "/" + month + "/" + year + " and the time now is " + hours + ":" + minutes + ":" + seconds);
}

setInterval(today, 1000);

// Auto slideshow

var imageDataSlide1 = ["images/huawei/y9.jpg", "images/infinix/hot 6 pro.jpg", "images/infinix/hot s3.jpg", "images/infinix/note 5.jpg", "images/xiaomi/mi a1.jpg"];
var index = 0;

function changeImage1(){
	var mainImage = document.getElementById("mainImage1");
	mainImage.setAttribute("src", imageDataSlide1[index]);
	index++;
	if(index>=imageDataSlide1.length){
		index=0;
	}
}

setInterval(changeImage1, 1500);

var imageDataSlide2 = ["images/apple/iphone se.jpg", "images/huawei/nova 3e.jpg", "images/samsung/galaxy a6.jpg", "images/samsung/galaxy a7.jpg", "images/samsung/galaxy j7 pro.jpg"];
var index = 0;

function changeImage2(){
	var mainImage = document.getElementById("mainImage2");
	mainImage.setAttribute("src", imageDataSlide2[index]);
	index++;
	if(index>=imageDataSlide2.length){
		index=0;
	}
}

setInterval(changeImage2, 1500);

var imageDataSlide3 = ["images/apple/iphone 6s plus.jpg", "images/huawei/p10 plus.jpg", "images/samsung/galaxy s8 plus.jpg", "images/samsung/galaxy s9 plus.jpg", "images/xiaomi/mi mix 2.jpg"];
var index = 0;

function changeImage3(){
	var mainImage = document.getElementById("mainImage3");
	mainImage.setAttribute("src", imageDataSlide3[index]);
	index++;
	if(index>=imageDataSlide3.length){
		index=0;
	}
}

setInterval(changeImage3, 1500);

// For going from menu click to specific part

$("#apple").click(function(){
	$("html, body").animate({
		scrollTop: $("#applePage").offset().top
	}, 1000);
});
$("#huawei").click(function(){
	$("html, body").animate({
		scrollTop: $("#huaweiPage").offset().top
	}, 2000);
});
$("#infinix").click(function(){
	$("html, body").animate({
		scrollTop: $("#infinixPage").offset().top
	}, 3000);
});
$("#samsung").click(function(){
	$("html, body").animate({
		scrollTop: $("#samsungPage").offset().top
	}, 4000);
});
$("#xiaomi").click(function(){
	$("html, body").animate({
		scrollTop: $("#xiaomiPage").offset().top
	}, 5000);
});

// For advertisement slide on click

var currentIndex;

$(".slider-img:first").fadeIn();
$(".bullets").click(function(){
	$(".bullets").removeClass("selected");
	$(this).addClass("selected");
	currentIndex = $(this).index()+1;
	$(".slider-img").fadeOut(0);
	$(".slider-img:nth-child("+currentIndex+")").fadeIn();
});

// For viewing each photo on click

$("#imgSmallse1").click(function(){$("#mainImagese").attr("src", $("#imgSmallse1").attr("src"));});
$("#imgSmallse2").click(function(){$("#mainImagese").attr("src", $("#imgSmallse2").attr("src"));});
$("#imgSmallse3").click(function(){$("#mainImagese").attr("src", $("#imgSmallse3").attr("src"));});
$("#imgSmallse4").click(function(){$("#mainImagese").attr("src", $("#imgSmallse4").attr("src"));});

$("#imgSmallplus1").click(function(){$("#mainImageplus").attr("src", $("#imgSmallplus1").attr("src"));});
$("#imgSmallplus2").click(function(){$("#mainImageplus").attr("src", $("#imgSmallplus2").attr("src"));});
$("#imgSmallplus3").click(function(){$("#mainImageplus").attr("src", $("#imgSmallplus3").attr("src"));});
$("#imgSmallplus4").click(function(){$("#mainImageplus").attr("src", $("#imgSmallplus4").attr("src"));});

$("#imgSmallp1").click(function(){$("#mainImagep").attr("src", $("#imgSmallp1").attr("src"));});
$("#imgSmallp2").click(function(){$("#mainImagep").attr("src", $("#imgSmallp2").attr("src"));});
$("#imgSmallp3").click(function(){$("#mainImagep").attr("src", $("#imgSmallp3").attr("src"));});
$("#imgSmallp4").click(function(){$("#mainImagep").attr("src", $("#imgSmallp4").attr("src"));});

$("#imgSmall3e1").click(function(){$("#mainImage3e").attr("src", $("#imgSmall3e1").attr("src"));});
$("#imgSmall3e2").click(function(){$("#mainImage3e").attr("src", $("#imgSmall3e2").attr("src"));});
$("#imgSmall3e3").click(function(){$("#mainImage3e").attr("src", $("#imgSmall3e3").attr("src"));});
$("#imgSmall3e4").click(function(){$("#mainImage3e").attr("src", $("#imgSmall3e4").attr("src"));});

$("#imgSmally91").click(function(){$("#mainImagey9").attr("src", $("#imgSmally91").attr("src"));});
$("#imgSmally92").click(function(){$("#mainImagey9").attr("src", $("#imgSmally92").attr("src"));});
$("#imgSmally93").click(function(){$("#mainImagey9").attr("src", $("#imgSmally93").attr("src"));});
$("#imgSmally94").click(function(){$("#mainImagey9").attr("src", $("#imgSmally94").attr("src"));});

$("#imgSmallhot1").click(function(){$("#mainImagehot").attr("src", $("#imgSmallhot1").attr("src"));});
$("#imgSmallhot2").click(function(){$("#mainImagehot").attr("src", $("#imgSmallhot2").attr("src"));});
$("#imgSmallhot3").click(function(){$("#mainImagehot").attr("src", $("#imgSmallhot3").attr("src"));});
$("#imgSmallhot4").click(function(){$("#mainImagehot").attr("src", $("#imgSmallhot4").attr("src"));});

$("#imgSmalls31").click(function(){$("#mainImages3").attr("src", $("#imgSmalls31").attr("src"));});
$("#imgSmalls32").click(function(){$("#mainImages3").attr("src", $("#imgSmalls32").attr("src"));});
$("#imgSmalls33").click(function(){$("#mainImages3").attr("src", $("#imgSmalls33").attr("src"));});
$("#imgSmalls34").click(function(){$("#mainImages3").attr("src", $("#imgSmalls34").attr("src"));});

$("#imgSmallnote1").click(function(){$("#mainImagenote").attr("src", $("#imgSmallnote1").attr("src"));});
$("#imgSmallnote2").click(function(){$("#mainImagenote").attr("src", $("#imgSmallnote2").attr("src"));});
$("#imgSmallnote3").click(function(){$("#mainImagenote").attr("src", $("#imgSmallnote3").attr("src"));});
$("#imgSmallnote4").click(function(){$("#mainImagenote").attr("src", $("#imgSmallnote4").attr("src"));});

$("#imgSmalla11").click(function(){$("#mainImagea1").attr("src", $("#imgSmalla11").attr("src"));});
$("#imgSmalla12").click(function(){$("#mainImagea1").attr("src", $("#imgSmalla12").attr("src"));});
$("#imgSmalla13").click(function(){$("#mainImagea1").attr("src", $("#imgSmalla13").attr("src"));});
$("#imgSmalla14").click(function(){$("#mainImagea1").attr("src", $("#imgSmalla14").attr("src"));});

$("#imgSmallmix1").click(function(){$("#mainImagemix").attr("src", $("#imgSmallmix1").attr("src"));});
$("#imgSmallmix2").click(function(){$("#mainImagemix").attr("src", $("#imgSmallmix2").attr("src"));});
$("#imgSmallmix3").click(function(){$("#mainImagemix").attr("src", $("#imgSmallmix3").attr("src"));});
$("#imgSmallmix4").click(function(){$("#mainImagemix").attr("src", $("#imgSmallmix4").attr("src"));});

$("#imgSmalla61").click(function(){$("#mainImagea6").attr("src", $("#imgSmalla61").attr("src"));});
$("#imgSmalla62").click(function(){$("#mainImagea6").attr("src", $("#imgSmalla62").attr("src"));});
$("#imgSmalla63").click(function(){$("#mainImagea6").attr("src", $("#imgSmalla63").attr("src"));});
$("#imgSmalla64").click(function(){$("#mainImagea6").attr("src", $("#imgSmalla64").attr("src"));});

$("#imgSmalla71").click(function(){$("#mainImagea7").attr("src", $("#imgSmalla71").attr("src"));});
$("#imgSmalla72").click(function(){$("#mainImagea7").attr("src", $("#imgSmalla72").attr("src"));});
$("#imgSmalla73").click(function(){$("#mainImagea7").attr("src", $("#imgSmalla73").attr("src"));});
$("#imgSmalla74").click(function(){$("#mainImagea7").attr("src", $("#imgSmalla74").attr("src"));});

$("#imgSmalls91").click(function(){$("#mainImages9").attr("src", $("#imgSmalls91").attr("src"));});
$("#imgSmalls92").click(function(){$("#mainImages9").attr("src", $("#imgSmalls92").attr("src"));});
$("#imgSmalls93").click(function(){$("#mainImages9").attr("src", $("#imgSmalls93").attr("src"));});
$("#imgSmalls94").click(function(){$("#mainImages9").attr("src", $("#imgSmalls94").attr("src"));});

// Form validation

function checkFirstName(){
	$("#firstName").keyup(function(){
		var firstName = $("#firstName").val();
		var regex = /^[a-zA-Z -.]{2,10}$/;
		if(regex.test(firstName)){
			$("#firstNameError").text("");
			return true;
		}else{
			$("#firstNameError").text("First name must be 2-10 characters");
			return false;
		}
	});
}

$("#firstName").keyup(function(){
	checkFirstName();
});

$("#firstName").blur(function(){
	checkFirstName();
});

function checkLastName(){
	$("#lastName").keyup(function(){
		var lastName = $("#lastName").val();
		var regex = /^[a-zA-Z -.]{2,10}$/;
		if(regex.test(lastName)){
			$("#lastNameError").text("");
			return true;
		}else{
			$("#lastNameError").text("Last name must be 2-10 characters");
			return false;
		}
	});
}

$("#lastName").keyup(function(){
	checkLastName();
});

$("#lastName").blur(function(){
	checkLastName();
});

function checkEmailAddress(){
	var emailAddress = $("#emailAddress").val();
	var regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
	if(regex.test(emailAddress)){
		$("#emailAddressError").text("");
		return true;
	}else{
		$("#emailAddressError").text("Email Address is invalid");
		return false;
	}
}

$("#emailAddress").keyup(function(){
	checkEmailAddress();
});

$("#emailAddress").blur(function(){
	checkEmailAddress();
});

function checkPhoneNumber(){
	var phoneNumber = $("#phoneNumber").val();
	var regex = /^[0-9]{11}$/;
	if(regex.test(phoneNumber)){
		$("#phoneNumberError").text("");
		return true;
	}else{
		$("#phoneNumberError").text("Phone Number is invalid");
		return false;
	}
}

$("#phoneNumber").keyup(function(){
	checkPhoneNumber();
});

$("#phoneNumber").blur(function(){
	checkPhoneNumber();
});

function checkPassword(){
	$("#password").keyup(function(){
		var password = $("#password").val();
		var regex = /^[a-zA-Z0-9_\-\.]{8,15}$/;
		if(regex.test(password)){
			$("#passwordError").text("");
			return true;
		}else{
			$("#passwordError").text("Password must be 8-15 characters");
			return false;
		}
	});
};

$("#password").keyup(function(){
	checkPassword();
});

$("#password").blur(function(){
	checkPassword();
});

function checkConfirmPassword(){
	var confirmPassword = $("#confirmPassword").val();
	var password = $("#password").val();
	
	if(confirmPassword == password){
		$("#confirmPasswordError").text("");
		return true;
	}else{
		$("#confirmPasswordError").text("Password did not match");
		return false;
	}
}

$("#confirmPassword").keyup(function(){
	checkConfirmPassword();
});

$("#password").blur(function(){
	checkConfirmPassword();
});

$("#showPassword").click(function(){
	var attrValue = $("#password").attr("type");
	if(attrValue == "password"){
		$("#password").attr("type", "text");
	}else{
		$("#password").attr("type", "password");
	}
});

function checkDeliveryAddress(){
	var deliveryAddress = $("#deliveryAddress").val();
	var regex = /^[a-zA-Z0-9,# \-\.]{15,50}$/;
	if(regex.test(deliveryAddress)){
		$("#deliveryAddressError").text("");
		return true;
	}else{
		$("#deliveryAddressError").text("Delivery Address must be between 15 to 50 characters");
		return false;
	}
}

$("#deliveryAddress").keyup(function(){
	checkDeliveryAddress();
});

$("#deliveryAddress").blur(function(){
	checkDeliveryAddress();
});

$("#form").submit(function(){
	if(checkFirstName() == true && checkLastName() == true && checkEmailAddress() == true && checkPhoneNumber == true && checkPassword() == true && checkConfirmPassword() == true && checkDeliveryAddress() == true){
		return true;
	}else{
		return false;
	}
});

$("#btnCart").click(function(){
	alert("Thank You!\nYour order is successfully placed.\nWe will contact you for further process.");
});