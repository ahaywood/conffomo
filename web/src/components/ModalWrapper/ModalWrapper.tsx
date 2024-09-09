const ModalWrapper = ({ children }) => {
  return (
    <div className="center fixed inset-0 h-screen w-screen">{children}</div>
  )
}

export default ModalWrapper
