import '../styles/input.css'

export default function Input({ appointment = '', placeholder = 'текст-подсказка', type = 'text', value, onChange, name, onBlur, onKeyDown }) {
    return (
        <div>
            <input className={`input ${appointment}`} placeholder={placeholder} onKeyDown={onKeyDown} type={type} value={value} onChange={onChange} name={name} onBlur={onBlur} />
        </div>
    )
}