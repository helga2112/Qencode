import './IconButton.scss'

interface IconButtonProps {
    title: string
}

function FilledButton({title}:IconButtonProps) {

    return (
        <button className='FilledButton'>
            {title}
        </button>

    );
}

export default FilledButton;
