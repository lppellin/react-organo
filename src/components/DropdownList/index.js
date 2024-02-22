import './DropdownList.css'

const DropdownList = (props) => {
    console.log(props.items)
    return (
        <div className='dropdown-list'>
            <label>{props.label}</label>
            <select className='dropdown-list-select'>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>

    )
}
export default DropdownList
