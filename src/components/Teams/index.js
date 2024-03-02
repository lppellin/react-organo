import Banner from '../Banner'
import Button from '../Button'
import Person from '../Person'
import './Teams.css'

const Teams = (props) => {
    const css = { backgroundColor: props.altColor }

    return (
        props.people.length > 0 && <section className='team' style={css}>
            <h3 style={{ borderColor: props.primaryColor }} >{props.nome}</h3>
            <div className='people'>
                {props.people.map(person => <Person bgColor={props.primaryColor} key={person.nome} nome={person.nome} cargo={person.cargo} imagem={person.imagem} />)}
            </div>
        </section>
    )

}

export default Teams