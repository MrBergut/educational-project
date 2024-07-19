import '../styles/select.css'

export default function Select(type = '') {
    return(
        <select className={`select ${type}`}>
            <option value='one'>1</option>
            <option value='two'>2</option>
            <option value='three'>3</option>
        </select>
    )
}