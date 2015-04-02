$(document).ready(function(){
	//Smooth scroll powered by: http://www.rolftjassens.com/blog/smooth-page-scroll-to-an-anchor
	$(".scroll").click(function(event){
		event.preventDefault();
		$('html,body').animate( { scrollTop:$(this.hash).offset().top} , 1000);
	})
});

/*

  //when mouse is over, save initial value and replace with newText
  function hover_in(newText, $this){
    $this.data('initialText', $this.text());
    $this.text(newText);
  }

  //when mouse is over, replace with initial value
  function hover_out($this){
    $this.text($this.data('initialText'));
  }

  $('#a-about span').hover(
    function(){
      hover_in("About", $(this));
    }, 
    function() {
      hover_out($(this));
  });

  $('#l-projects span').hover(
    function(){
      hover_in("Projects", $(this));
    }, 
    function() {
      hover_out($(this));
  });

  $('#c-contacts span').hover(
    function(){
      hover_in("Contacts", $(this));
    }, 
    function() {
      hover_out($(this));
  });
*/
