const placar = {
     largura:800,
     altura:60,
     corFundo:"black",
     corTexto:"white",
     nome:"Cobrona",
     recorde: 0,
     Score: 0,
     desenhar(){
        dCtx.fillStyle=this.corFundo;
        dCtx.fillRect(0,0,this.largura,this.altura);
        dCtx.fillStyle=this.corTexto;
        dCtx.font = '20px Fantasy';
        dCtx.textAlign = 'center'
        dCtx.textBaseline = 'middle'
        dCtx.fillText(this.nome,400,30)
        dCtx.font = '14px Fantasy';
        dCtx.textAlign = 'right'
        dCtx.textBaseline = 'bottom'
        dCtx.fillText("Recorde: "+this.recorde,785,25)
        dCtx.textBaseline = 'top'
        dCtx.fillText("Vida ",780,35)
        dCtx.textAlign = 'left'
        dCtx.textBaseline = 'bottom'
        dCtx.fillText("Pontuação: "+this.Score,15,25)
     }
}
placar.desenhar();
