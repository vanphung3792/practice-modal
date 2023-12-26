import { useState } from "react"
import Modal from "./components/Modal"

function App() {

  const [open, setOpen] = useState<boolean>(false)
  
  return (
    <>
      <div className="flex flex-col w-screen h-screen items-center gap-10 pt-20">
        <h1 className="text-3xl font-semibold">CLICK TO OPEN MODAL</h1>
        <button
          onClick={() => setOpen(true)}
          className="bg-sky-500 px-10 py-2 rounded-lg text-lg text-white font-semibold"
        >
          Open
        </button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-semibold">Modal Title</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias vel possimus eveniet voluptatum suscipit enim quo quisquam? Eveniet quasi, odio fugit explicabo quod recusandae similique tempore sunt excepturi, iusto nisi!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias voluptatum laboriosam, nobis voluptas, similique ad a enim quia eos iste reprehenderit autem dignissimos expedita dolor odio culpa odit tempore amet?</p>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default App
