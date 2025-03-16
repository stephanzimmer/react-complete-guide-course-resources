import { useRef, useContext } from 'react';
import ProjectList from './ProjectList';
import { ProjectContext } from '../store/projects-context';
import Modal from './Modal';

export default function Sidebar() {
  const { addProject } = useContext(ProjectContext);
  const inputRef = useRef();
  const dlg = useRef();

  function handleAdd() {
    dlg.current.showModal()
  }

  function handleClose() {
    const userInput = inputRef.current.value
    addProject(userInput)
    inputRef.current.value = ""    
  }

  return (
    <>
    <Modal ref={dlg} handleClose={handleClose}>
      <input 
        ref={inputRef}
        id="name"
        required>                
      </input>
    </Modal>

    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <header className='mb-8 font-bold uppercase md:text-xl text-stone-200'>Your Projects</header>
      <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" onClick={handleAdd}>+Add Project</button>
      <ProjectList />
    </aside>
    </>
  );
}