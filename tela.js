const tela= {
   largura: 800 ,
   altura: 400 ,
   cor: "green" , 
   desenhar(){
        dCtx.fillStyle = this.cor;
       dCtx.fillRect(0,60,this.largura,this.altura);
   }
}
   tela.desenhar()
