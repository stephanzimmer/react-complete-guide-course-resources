import { useRef, useContext, forwardRef } from 'react';
import { createPortal } from 'react-dom';
import { ProjectContext } from '../store/projects-context';

const Modal = forwardRef(function Modal({handleClose, children, ...props}, ref) {
 

  function onClose() {
    // const userInput = inputRef.current.value
    // addProject(userInput)
    // inputRef.current.value = ""
    handleClose();
    ref.current.close();
  }

  function onCancel() {
    ref.current.close();
  }

  function handleChange(value) {
    console.log("handleChange " + value)
    setUserInput(value)
  }

  return (
    <dialog className="modal" ref={ref}>
      <div>
        {/* <input 
          ref={inputRef}
          id="name"
          required                     
          {...props}>                
            </input> */}
        {children}
        <span>
          <button onClick={onClose}>Ok</button>
          <button onClick={onCancel}>Cancel</button>
        </span>
      </div>
    </dialog>
  )
});


export default Modal;