import Button from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Select";

import '../styles/demo.css'

export default function Demo() {
    return(
        <main className="demo-content">
            <Button type="primary">Кнопка</Button>
            <Input />
            <Select />
        </main>
    );
};