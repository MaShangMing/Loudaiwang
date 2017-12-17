var CanvasAutoResize = {  
  draw: function() {  
    var ctx = document.getElementById('canvasEdit').getContext('2d');  
    var canvasContainer = document.getElementById('editing_area');  
    ctx.canvas.width  = canvasContainer.offsetWidth-2;  
    ctx.canvas.height = canvasContainer.offsetHeight-2;  
  },  
  
  initialize: function(){  
    var self = CanvasAutoResize;  
    self.draw();  
    $(window).on('resize', function(event){  
      self.draw();  
    });  
  }  
}  
  
$(function(argument) {  
  CanvasAutoResize.initialize();  
});  