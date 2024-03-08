import { AiFillCloseCircle } from "react-icons/ai";
import './Person.css'

const Person = ({nome, imagem, cargo, bgColor, onDelete}) => {
    return (<div className='person' >
        <AiFillCloseCircle size={25} className="delete" onClick={onDelete}/>
        <div className='cabecalho' style={{backgroundColor: bgColor}}>
            <img src={imagem} alt={nome} />
        </div>
        <div className='rodape'>
            <h4> {nome} </h4>
            <h5> {cargo} </h5>
        </div>
    </div >)
}

export default Person