export default function Stories() {
    const stories = [
        { usuario: "9gag", url: "/img/9gag.svg" },
        { usuario: "meowed", url: "/img/meowed.svg" },
        { usuario: "barked", url: "/img/barked.svg" },
        { usuario: "nathanwpylestrangeplanet", url: "/img/nathanwpylestrangeplanet.svg" },
        { usuario: "wawawicomics", url: "/img/wawawicomics.svg" }, 
        { usuario: "respondeai", url: "/img/respondeai.svg" }, 
        { usuario: "filomoderna", url: "/img/filomoderna.svg" }, 
        { usuario: "memeriagourmet", url: "/img/memeriagourmet.svg" }
    ]

    return (
        stories.map((user)=> 
    <div class="story">
        <div class="imagem">
            <img src={user.url} />
        </div>
        <div class="usuario">
            {user.usuario}
        </div>
    </div>
        
    ))


}