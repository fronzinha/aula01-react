import './style.css'

export const Title = ({ texto }) => {
    return (
        <div>
            <h1 className="titulo">{texto}</h1>
        </div>
    )
}