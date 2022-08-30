function clicar(){
    let res = document.querySelector('div#res')
    let rad = document.getElementsByName('rad')

    if(rad[0].checked){
        res.innerHTML= `Você pode acessar o meu <a href= "https://gustavoguanabara.github.io/html-css/" target="_blank" rel="external">repositório público no github</a>`
    } if(rad[1].checked){
        res.innerHTML= `Você também pode acessar o meu canal gratuito no YouTube <a href="https://www.youtube.com/c/CursoemV%C3%ADdeo" target="_blank" rel="external"><input type="button" value="ir para o canal do Curso em vídeo"></input></a>`
    }
    if(rad[2].checked){
        res.innerHTML= `Você também pode acessar a segunda página do site: <a href="pag002.html" target="_blank" rel= "next"><input type="button" value = "ir para 2º página"></input></a>`
    }
    if(rad[3].checked){
        res.innerHTML= `Esta página é um oferecimento da Hostnet <a href="http://www.hostnet.com.br" target= "_blank" rel= "_nofollow"><input type="button" value= "Acessar"></input></a>`
    } if (rad[4].checked){
        res.innerHTML=`Acesse também nossa <a href="Notícias/pag003.html" target="_self">página de notícias</a> `
    } if (rad[5].checked){
        res.innerHTML= `<ul><li>Baixar o livro em PDF: <a href="livro/livroo.pdf" download="livroo.pdf"> A sutil arte de ligar o fod@-se</a></li></ul>
        <br><ul><li>Baixar o livro em PDF: <a href="livro/livroo.pdf" download="livroo.pdf" type= "application/pdf"> A sutil arte de ligar o fod@-se</a></li></ul>`
        
    }
}