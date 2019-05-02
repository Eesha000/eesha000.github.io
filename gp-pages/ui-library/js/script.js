
	function myFunction() {
      var x = document.getElementById("myTopnav");

      if (x.className === "menu70") {
          x.className += "responsive";
      } else {
          x.className = "menu70";
      }

  }

$(document).ready(function() {

	$('#myTopnav').show();

	$('#i').click(function(){
		$('#myDropdown').click(function() {
			$('#myTopnav').hide();
		});
		$('#myTopnav').show();
	});

	$('#i').click(function(){
		$('#intro').click(function() {
			$('#myTopnav').hide();
		});
		$('#myTopnav').show();
	});


	// Navigation bar

	$('.dropbtn').click(function() {
		$(this).toggleClass('active');
	});

	$('.dropbtn').click(function(e) {
		$('#myDropdown').toggle();
		e.stopPropagation();
	});

	$('#myDropdown').click(function(e) {
		$('#myDropdown').hide();
		e.stopPropagation();
	});

	$(document).click(function() {
		$('.dropbtn').removeClass('active');
		$('#myDropdown').hide();
	});



	// Button

	var btn = {
		a: '#btn1',
		b: '#btn2',
		c: '#btn3',
		d: '#btn4',
		e: '#btn5'
	};

	function button(a, b, c,d, e) {
		$(a).show();
		$(b).hide();
		$(c).hide();
		$(d).hide();
		$(e).hide();
	}

	$('#bt1').click(function(){
		button(btn.a, btn.b, btn.c, btn.d, btn.e);
	});

	$('#bt2').click(function(){
		button(btn.b, btn.a, btn.c, btn.d, btn.e);
	});

	$('#bt3').click(function(){
		button(btn.c, btn.b, btn.a, btn.d, btn.e);
	});

	$('#bt4').click(function(){
		button(btn.d, btn.b, btn.c, btn.a, btn.e);
	});

	$('#bt5').click(function(){
		button(btn.e, btn.b, btn.c, btn.d, btn.a);
	});

	var btl = {
		a: '#btnl1',
		b: '#btnl2',
		c: '#btnl3',
		d: '#btnl4',
		e: '#btnl5'
	};

	function button(a, b, c,d, e) {
		$(a).show();
		$(b).hide();
		$(c).hide();
		$(d).hide();
		$(e).hide();
	}
	// with outline
	$('#btl1').click(function(){
		button(btl.a, btl.b, btl.c, btl.d, btl.e);
	});

	$('#btl2').click(function(){
		button(btl.b, btl.a, btl.c, btl.d, btl.e);
	});

	$('#btl3').click(function(){
		button(btl.c, btl.b, btl.a, btl.d, btl.e);
	});

	$('#btl4').click(function(){
		button(btl.d, btl.b, btl.c, btl.a, btl.e);
	});

	$('#btl5').click(function(){
		button(btl.e, btl.b, btl.c, btl.d, btl.a);
	});

	// Table

	var tbl = {
		a: '#tbl1',
		b: '#tbl2',
	};

	function table(a, b) {
		$(a).show();
		$(b).hide();
	}

	$('.table-1').click(function(){
		table(tbl.a, tbl.b);
	});

	$('.table-2').click(function(){
		table(tbl.b, tbl.a);
	});

  // Add smooth scrolling to all links
  $(".nav-link").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
   });
});
