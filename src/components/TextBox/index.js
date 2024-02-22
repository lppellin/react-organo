import './TextBox.css';

const TextBox = (props) => {
    return (
        <div className='textbox'>
            <label className='textbox-label'>{props.label}</label>
            <input required={props.required} className='textbox-input' placeholder={props.placeholder}></input>
        </div>
    )
}
export default TextBox
