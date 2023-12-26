import { XMarkIcon } from "@heroicons/react/16/solid"
import React from "react"

type ModalProps = {
    open: boolean
    onClose: () => void
    children: React.ReactNode
}

const Modal = ({ open, onClose, children } : ModalProps) => {
  return (
    <div
        className={`
            fixed
            inset-0
            flex
            justify-center
            items-center
            transition-colors
            ${open ? "visible bg-black/20" : "invisible"}
        `}
    >
        <div
            className={`
                flex
                flex-col
                bg-white
                rounded-lg
                shadow
                p-6
                transition-all
                max-w-md
                ${open ? "scale-100 opacity-100" : "scale-110 opacity-0"}
            `}
        >
            <button className="absolute right-2 top-2" onClick={onClose}><XMarkIcon className="w-10 h-10 " /></button>
            {children}
        </div>
    </div>
  )
}
export default Modal