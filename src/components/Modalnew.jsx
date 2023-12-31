import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Button from './Button';

export default function MyModal(props) {
  const { open, handleClose, title, onClick, btnText, header } = props;
  function closeModal() {
    handleClose(false)
  }

  function openModal() {
    handleClose(true)
  }

  return (
    <>
    {/* To use */}
    {/* <Button onClick={()=>setIsOpen(!isOpen)}>Open Modal</Button>
                <Modalnew open={isOpen} handleClose={setIsOpen} /> */}
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {header}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {title}
                    </p>
                  </div>

                  <div className="mt-4 flex whitespace-nowrap gap-10">
                    <Button onClick={closeModal}>Close</Button>
                    {onClick && <Button onClick={onClick}>{btnText}</Button>}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
