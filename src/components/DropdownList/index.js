import './DropdownList.css'

const DropdownList = (props) => {
    // console.log(props.items)
    return (
        <div className='dropdown-list'>
            <label>{props.label}</label>
            <select className='dropdown-list-select' onChange={eventO => props.onChanging(eventO.target.value)} required={props.required} value={props.value}>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>

    )
}
export default DropdownList
