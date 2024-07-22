

import '../styles/select.css'


export default function Select({ items, type = '' }) {
    return (
        <div className='select-wrapper'>
            <select className={`select ${type}`}>
                {items.map(item =>
                    <option value={item.value}>{item.name}</option>
                )}
            </select>
        </div>
    );
};