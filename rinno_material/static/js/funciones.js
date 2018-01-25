/*if(!$){
	$ = django.jQuery;
}

$(document).ready(function(){	*/
	 /**/

$(document).ready(function(){

	   $('.select-wrapper select').material_select();
	   $('.related-widget-wrapper select').material_select('destroy'); 

	$(".listabilio li").click(function(){
		$(".listabilio li").removeClass("checked");
		$(this).addClass("checked");
	});
	/*$(".listabilio li").hover(function(){
		
		$(this).find(".acciones").fadeToggle("fast");
	});*/

    $("#iconmenu i").click(function(){


		$("#moresetting i").removeClass("rota180");
		$(this).toggleClass("rota180");
		//$(".cempresa").click();
	});
	$("#moresetting i").click(function(){
		console.log(".Rota2");
		$("#iconmenu i").removeClass("rota180");
		$(this).toggleClass("rota180");
			//$("#menuopciones").appendTo("#slide-out2");
			//$('.button-collapse').sideNav('hide');
	});
	/*
	$('.mod .card-image').hover(function(){
		$(this).removeClass("fadeIn");
		$(this).toggleClass("bounce");
	})
*/
	$('.button-collapse').sideNav({
		closeOnClick: false,
		draggable: true,
		//menuWidth:300,
		onOpen: function(el) {
			//$('.drag-target').click();
			console.log(".Entra 1");
			$("#iconmenu").addClass("open");
			$('#moresetting.open').click();
			$("#slide-out").addClass("abierto");
			if($("#slide-out").hasClass("abierto")){
				$("#iconmenu i").addClass("rota180");
			}
			$(".cempresa.active").click();
			//$(".cempresa").click();
	    },
	    onClose: function(el) {
	    	console.log(".Entra 2");
			$("#iconmenu i").removeClass("rota180");
			$("#slide-out").removeClass("abierto");
			$("#iconmenu").removeClass("open");
			//$(".cempresa").click();

	    }	
	});

	$('.drag-target.slide-out2').click(function(){
		$("#moresetting").click();
	});


	$('.card-image, .card-content').click(function(){
		$(this).parent().addClass("mostrar");
	});

	$('.card-title').click(function(){
		$(this).parents(".card").removeClass("mostrar");
	});


	$('.modal').modal();
	//$('.fixed-action-btn.toolbar').openFAB();

	$('.dhover').dropdown({
		inDuration: 300,
		outDuration: 225,
		constrainWidth: false, // Does not change width of dropdown to that of the activator
		hover:true, // Activate on hover
		gutter: 0, // Spacing from edge
		belowOrigin: true, // Displays dropdown below the button
		alignment: 'left', // Displays dropdown with edge aligned to the left of button
		stopPropagation: false // Stops event propagation	
	});

	$('.cempresa').dropdown({
		inDuration: 300,
		outDuration: 225,
		constrainWidth: false, // Does not change width of dropdown to that of the activator
		hover:false, // Activate on hover
		gutter: 0, // Spacing from edge
		belowOrigin: true, // Displays dropdown below the button
		alignment: 'left', // Displays dropdown with edge aligned to the left of button
		stopPropagation: false // Stops event propagation	
	});

	$('.dhover').hover(function(){
		$(".cempresa.active").click();
	});



	
$(".button-collapse2").sideNav({
		closeOnClick: false,
		draggable:false,
		//menuWidth:65,
		edge: 'right',
	    onOpen: function(el) {
			//$('.drag-target').click();
			//$('.drag-target').css("width","80%");
			console.log("Entra 1");
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
	    	console.log("Entra 2");
			$("#moresetting i").removeClass("rota180");
			$("#slide-out").removeClass("abierto");
			$("#moresetting").removeClass("open");
			//$("#sidenav-overlay").removeClass("overleft")
			$(".overleft").remove();
			//$(".dropdown-content").hide();
	    }

	});
    //desplazamiento de segundo menu en el dom 
	var mediaquery = window.matchMedia("(min-width:920px)");
	function handleOrientationChange(mediaquery) {
		if (mediaquery.matches) {
			//globalmenudesktop(0);		
			$("#menuopciones").appendTo(".boxmenuopciones");
			$('.button-collapse').sideNav('hide');


			
		} else {
			
			$(".menutitle").click(function(){
				$(".acord").slideToggle("fast");
			});	
		}
	}
	mediaquery.addListener(handleOrientationChange);





    // $("#loading").hide();

	$("#contenido").fadeIn("fast");

	

	 
})

        
	 


	     

 //}); 
 //end document.ready
	
 $(window).on('load', function () {
	//$("#loading").hide();
	//$("#contenido").fadeIn("fast");
	//$("#contenido2").fadeIn("fast");
	
  $('.fixed-action-btn > .btn-floating').click();



	
	
 	
 });




  