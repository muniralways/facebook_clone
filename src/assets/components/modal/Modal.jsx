
import { FaTimes } from "react-icons/fa"
import "./Modal.scss";


const Modal = ({children, hide}) => {
  return (
    <div className="modal-blur-area">
     <div className="modal-container">
      <div className="modal-head">
       <div className="modal-header-content">
        <h2>Sign Up</h2>
        <p>Its quick and essy</p>
       </div>
        <button className="crossbtn" onClick={()=> hide(false)}><FaTimes /></button>
      </div>
      <div className="modal-body">{children}</div>
     </div>
     </div>
  )
}

export default Modal