const ground = {
    color:"green",
    width: 340,
    height: 60,
    draw(){
        eCtx.fillStyle = this.color;
        eCtx.fillRect(0,450,this.width,this.height)
    }
}