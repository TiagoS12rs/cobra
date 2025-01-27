const cobra = {
    cor: "white",
    comprimento: 1,
    x:400,
    y:260,
    tamanho:10,
    largura:10,
    desenhar(){
        dCtx.fillStyle = this.cor;
        dCtx.fillRect(this.x,this.y,this.tamanho,this.largura);



    }
}
cobra.desenhar();
