
const Modal = ({Header, children, onClose, likes, onLike, onDislike} ) => {
    return(
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={onClose}>&times;</span>
                    <h4>{Header}</h4>
                </div>
                <div className="modal-body">
                    {children}
                </div> 
                
            </div>
        </div>
    )
}

export default Modal;