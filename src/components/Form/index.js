import Button from '../Button';
import DropdownList from '../DropdownList';
import TextBox from '../TextBox';
import './form.css';


const Form = () => {

    const teams = [
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const saveForm = (submit) => {
        submit.preventDefault()
        console.log("form submetido")
    }

    return (
        <section className='form-section'>
            <form className='form-form' onSubmit={saveForm}>
                <h2>Preencha os dados para criar a card do colaborador.</h2>
                <TextBox required={true} label="Nome" input placeholder="Digite seu nome" />
                <TextBox required={true} label="Cargo" input placeholder="Digite seu cargo" />
                <TextBox label="Imagem" input placeholder="Digite o endereço da imagem" />
                <DropdownList label="Time" items={teams} />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}
export default Form
