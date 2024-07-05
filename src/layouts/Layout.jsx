import { Outlet } from 'react-router-dom'
import Modal from 'react-modal'
import Sidebar from '../components/Sidebar'
import Resumen from '../components/Resumen'
import ModalProducto from '../components/ModalProducto'
import useQuiosco from '../hooks/useQuiosco'

export default function Layout() {

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  Modal.setAppElement('#root');

  const { modal, handleClickModal } = useQuiosco();
  console.log(modal)

  return (
    <>
      <div className='md:flex'>
      <Sidebar />

      <main className='flex-1 h-screen overflow-y-scroll bg-gray-100 p-3'>
        <Outlet />
      </main>

      <Resumen />
    </div>

      <Modal isOpen={modal} style={customStyles}>
        <ModalProducto />   
      </Modal>
    

    </>
  )
}
