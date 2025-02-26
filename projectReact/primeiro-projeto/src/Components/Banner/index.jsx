import "./style.css"

export default function(props){

    /*O children permite que você passe e renderize conteúdo dinâmico dentro de um componente
      O props cria propriedades no componentes
    */

    return(
        <div className="bannerStyle">
            {props.children}
        </div>
    )
}