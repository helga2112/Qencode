import './IconButton.scss'

interface IconButtonProps {
    title: string
    imgSource: string
}

function IconButton({title, imgSource}:IconButtonProps) {

    return (
        <button className='LoginButton'>
            <img src={imgSource} alt='' />
            {title}
        </button>

    );
}

export default IconButton;
