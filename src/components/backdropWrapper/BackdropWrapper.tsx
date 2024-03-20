import './BackdropWrapper.scss'

interface BackdropWrapperProps {
  isVisible: boolean
}

const BackdropWrapper = ({ isVisible }: BackdropWrapperProps) => {
  return (
    <div style={{ display: isVisible ? 'contents' : 'none' }}>
      <div className="Loader" />
      <div className="Backdrop"  />
    </div>
  )
}

export default BackdropWrapper