import './TextBox.css';

const TextBox = (props) => {

    const modifiedPlaceholder = `${props.placeholder}...`

    const onTyping = (eventO) => {
        props.onChanging(eventO.target.value)
    }

    return (
        <div className='textbox'>
            <label className='textbox-label'>{props.label}</label>
            <input value={props.valor} onChange={onTyping} required={props.required} className='textbox-input' placeholder={props.modifiedPlaceholder}></input>
        </div>
    )
}
export default TextBox
