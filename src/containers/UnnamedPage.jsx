
import monsert from '../assets/photo_2024-07-19_16-27-11.jpg'

import { Link } from 'react-router-dom'

import '../styles/unnamedpage.css'


export default function UnnamedPage() {
    return (
        <main className="UnnamedPage">
            <h3>У этой страницы пока нет названия. Потому что ещё не определено направление проекта</h3>
            <img src={monsert} alt='monsert' width='200px'/>
            <Link to='demo'>На демо страницу</Link>
        </main>
    )
}