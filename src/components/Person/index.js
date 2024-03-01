import './Person.css'

const Person = ({nome, imagem, cargo}) => {
    return (<div className='person' >
        <div className='cabecalho'>
            <img src={imagem} alt={nome} />
        </div>
        <div className='rodape'>
            <h4> {nome} </h4>
            <h5> {cargo} </h5>
        </div>
    </div >)
}

export default Person