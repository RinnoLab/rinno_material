$(document).ready(function(){	

	$('.button-collapse2').sideNav({
		closeOnClick: false,
		draggable:false,
		//menuWidth:65,
		edge: 'right',
	    onOpen: function(el) {
			//$('.drag-target').click();
			//$('.drag-target').css("width","80%");

			$("#menuopciones").appendTo("#slide-out2");
			$("#slide-out").addClass("abierto");
			$("#sidenav-overlay").addClass("overleft");
			$("#moresetting").addClass("open");
			$("#iconmenu.open").click();
			if($("#slide-out").hasClass("abierto")){
				$("#moresetting i").addClass("rota180");
			}	
	    },
	    onClose: function(el) {
			$("#moresetting i").removeClass("rota180");
			$("#slide-out").removeClass("abierto");
			$("#moresetting").removeClass("open");
			//$("#sidenav-overlay").removeClass("overleft")
			$(".overleft").remove();
			//$(".dropdown-content").hide();
	    }

	});



	});
