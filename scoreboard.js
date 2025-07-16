
const scoreboard = {
    color:"blue",
    colorText:"green",
    width: 340,
    height: 60,
    name:"Flappy Bird",
    draw(){
        eCtx.fillStyle = this.color;
        eCtx.fillRect(0,0,this.width,this.height)
        eCtx.fillStyle = this.colorText;
        eCtx.font= "20px Fantasy"
        eCtx.textBaseline = "middle"
        eCtx.textAlign = "center"
        eCtx.fillText(this.name, 160,25);
    }
}