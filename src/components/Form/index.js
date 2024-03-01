import { useState } from 'react';
import Button from '../Button';
import DropdownList from '../DropdownList';
import TextBox from '../TextBox';
import './form.css';


const Form = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')



    const saveForm = (eventO) => {
        eventO.preventDefault()
        props.addedPerson({
            nome,
            cargo,
            imagem,
            time,
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')

    }

    return (
        <section className='form-section'>
            <form className='form-form' onSubmit={saveForm}>
                <h2>Preencha os dados para criar a card do colaborador.</h2>
                <TextBox
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    onChanging={valor => setNome(valor)} />
                <TextBox
                    required={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    onChanging={valor => setCargo(valor)} />
                <TextBox
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    onChanging={valor => setImagem(valor)} />
                <DropdownList
                    label="Time"
                    items={props.teams}
                    valor={time}
                    onChanging={valor => setTime(valor)} />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}
export default Form
