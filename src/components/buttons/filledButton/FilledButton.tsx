import './IconButton.scss'

interface IconButtonProps {
    title: string
    onClick?: () => void
    disabled?: boolean
}

const FilledButton = ({ title, onClick, disabled }: IconButtonProps) => {

    return (
        <button className='FilledButton' onClick={onClick} disabled={disabled}>
            {title}
        </button>

    );
}

export default FilledButton;
