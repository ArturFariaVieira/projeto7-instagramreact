import React from "react"
export default function Post(){
  let [curtidas1, setCurtidas1] = React.useState(101523);
  let [curtidas2, setCurtidas2] = React.useState(99159);
  const [like1, setLike1] = React.useState(false)
  const [like2, setLike2] = React.useState(false)
  const [salvo1, setSalvo1] = React.useState(false)
  const [salvo2, setSalvo2] = React.useState(false)
  function mudaLike(props){
   let funcaoaserexecutada = props.funcao;
    funcaoaserexecutada();
    
  }
  function mudaLike1(){
    if(like1===true){
      setCurtidas1(curtidas1-1)
    }else{setCurtidas1(curtidas1+1)}
    setLike1(!like1)
    
  }
  function mudaLike2(){
    if(like2===true){
      setCurtidas2(curtidas2-1)
    }else{setCurtidas2(curtidas2+1)}
    setLike2(!like2)
    
  }
  function mudaSalvo(props){
    props.funcaosalvo()

  }
  function mudaSalvo1(){
    
    setSalvo1(!salvo1)
    
  }
  function mudaSalvo2(){
   
    setSalvo2(!salvo2)
    
  }
  
    const posts = [
        {
        usuario: "meowed",
        imagem: "/img/meowed.svg", 
        conteudo:"img/gato-telefone.svg", 
        imagemcurtido: "/img/respondeai.svg", 
        textocurtidas: "respondeai",
        curtidas: curtidas1,
        curtido: like1,
        salvo: salvo1,
        funcao: mudaLike1,
        funcaosalvo: mudaSalvo1
        
        },
        {
        usuario: "barked",
        imagem: "/img/barked.svg", 
        conteudo:"img/dog.svg", 
        imagemcurtido: "/img/adorable_animals.svg", 
        textocurtidas: "adorable_animals", 
        curtidas: curtidas2,
        curtido: like2,
        salvo: salvo2,
        funcao: mudaLike2,
        funcaosalvo: mudaSalvo2
        }

    ]
   

    return (
        posts.map((user) => <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={user.imagem} />
            {user.usuario}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src={user.conteudo} />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              {(user.curtido === false)?<ion-icon name="heart-outline" onClick={() => mudaLike(user)}></ion-icon> : <ion-icon name="heart" class="preenchido" onClick={() => mudaLike(user)}></ion-icon> }
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              {(user.salvo === false)? <ion-icon name="bookmark-outline" onClick={() => mudaSalvo(user)}></ion-icon> : <ion-icon name="bookmark" onClick={() => mudaSalvo(user)}></ion-icon>}
            </div>
          </div>

          <div class="curtidas">
            <img src={user.imagemcurtido} />
            <div class="texto">
              Curtido por <strong>{user.textocurtidas}</strong> e <strong> outras {user.curtidas} pessoas</strong>
            </div>
          </div>
        </div>
      </div> )
    )
}