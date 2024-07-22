import Button from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Select";

import '../styles/demo.css'



export default function Demo() {
    const select_items = [{ value: '1', name: 'one' }, { value: '2', name: 'two' }, { value: '3', name: 'three' }]
    return(
        <main className="demo-content">
            <Button type="primary">Кнопка</Button>
            <Input />
            <Select items={select_items} />
        </main>
    );
};