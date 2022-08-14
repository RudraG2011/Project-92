var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

function new_image()
{
fabric.Image.fromURL('Birthdayimage.jpg',function(Img){
    object=Img;
    object.scaleToWidth(700);
    object.scaleToHeight(510);
    object.set({
        top:0,left:0
    });
canvas.add(object);

    
});




	


}

function playSound(){
x.play();

}
