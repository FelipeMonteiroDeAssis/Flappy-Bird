const sky = {
    color:"orange",
    width: 340,
    height: 440,
    draw(){
        eCtx.fillStyle = this.color;
        eCtx.fillRect(0,50,this.width,this.height)
    }
}