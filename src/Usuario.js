import React from "react"
export default function Usuario(props){
  let funciona;
  const [imagem, setImagem] = React.useState("/img/catanacomics.svg")
  const [usuario, setUsuario] = React.useState("catanacomics")
  const [nick, setNick] = React.useState("Catana")

  const perfil = {
    url: imagem,
    user: usuario,
    user2: nick
  }
  function mudaImagem(){
    const novaImagem = prompt("Qual a url da imagem que gostaria de usar?")
    checkUrl(novaImagem);
    if(!funciona){
      alert("URL inválido")

    }
    else {setImagem(novaImagem)} ;
  }
  function mudaUsuario(){
    const novoUsuario = prompt ("Qual o nome do usuário?");
    const novoNick = prompt ("Qual o nick gostaria de usar?")
    

    
    setUsuario(novoUsuario);
    setNick(novoNick);
  }
    return (
        <div class="usuario">
          <img src={perfil.url} onClick={mudaImagem} />
          <div class="texto">
            <strong>{perfil.user}</strong>
            <span>
              {perfil.user2}
              <ion-icon name="pencil" onClick={mudaUsuario}></ion-icon>
            </span>
          </div>
        </div>
    )
    function checkUrl(string) {
      try {
       let url = new URL(string)
       funciona = true;
     } catch(err) {
        funciona = false;
     }return funciona;
   }
}
