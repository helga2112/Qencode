import './SimpleButton.scss'

interface SimpleButtonProps {
    title: string
}

function SimpleButton({title}:SimpleButtonProps) {

    return (
        <button className='SimpleButton'>
            {title}
        </button>

    );
}

export default SimpleButton;
