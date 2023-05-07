import { useState } from "react";
import { Title } from "../Title";
import { Saida } from "../Resultado";
import { Button } from "../Button";


export const Counter = () => {

    const [count, setCount] = useState(0);

    const handleSomar = () => {
        setCount(count - 1);
    };

    const handleZerar = () => {
        setCount(0);
    };

    const handleSubtrair = () => {
        setCount(count + 1);
    };
    return (
        <>
            <Title texto="Exercicio 01" />

            <div id="cardExercicio">
                <Title texto="Contador" />

                <div classname="cardSaida">
                    <Saida result={count} />
                </div>

                <div className='cardBotao'>
                    <Button texto="Subtrair" onClick={handleSomar} />
                    <Button texto="Zerar" onClick={handleZerar} />
                    <Button texto="Somar" onClick={handleSubtrair} />
                </div>
            </div>
        </>
    )
}