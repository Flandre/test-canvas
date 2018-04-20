const fs = require('fs')
var Canvas = require('canvas')
  , Image = Canvas.Image
  , canvas = new Canvas(200, 200)
  , ctx = canvas.getContext('2d');

ctx.font = '30px DFGirl';
ctx.rotate(.1);
ctx.fillText("芙兰baka！!", 50, 100);

var te = ctx.measureText('芙兰baka！!');
ctx.strokeStyle = 'rgba(0,0,0,0.5)';
ctx.beginPath();
ctx.lineTo(50, 102);
ctx.lineTo(50 + te.width, 102);
ctx.stroke();


var imgData = canvas.toDataURL()
var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
var dataBuffer = new Buffer(base64Data, 'base64');
fs.writeFile("image.png", dataBuffer, function(err) {
  if(err){
    console.log(err)
  }else{
    console.log("保存成功！");
  }
});
