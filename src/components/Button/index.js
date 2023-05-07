import './style.css'

export const Button = ({ texto, onClick }) => {
    return (
        <div>
            <button className='botao' onClick={onClick}>{texto}</button>
        </div>
    )
}
