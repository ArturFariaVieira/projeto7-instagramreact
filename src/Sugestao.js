export default function Sugestao() {
    const sugestao = [
        { imagem: "/img/bad.vibes.memes.svg", nome: "bad.vibes.memes", razao: "Segue você" },
        { imagem: "/img/chibirdart.svg", nome: "chibidart", razao: "Segue você" },
        { imagem: "/img/razoesparaacreditar.svg", nome: "razoesparaacreditar", razao: "Novo no Instagram" },
        { imagem: "/img/adorable_animals.svg", nome: "adorable_animals", razao: "Segue você" },
        { imagem: "/img/smallcutecats.svg", nome: "smallcutecats", razao: "Segue você" },
    ]

    return (
        sugestao.map((sug) =>
            <div class="sugestao">
                <div class="usuario">
                    <img src={sug.imagem} />
                    <div class="texto">
                        <div class="nome">{sug.nome}</div>
                        <div class="razao">{sug.razao}</div>
                    </div>
                </div>
                <div class="seguir">Seguir</div>
        
            </div>)
            )

}