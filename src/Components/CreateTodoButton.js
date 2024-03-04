
function CreateTodoButton({setOpenModal}) {
  return (
    <button
      className="btn"
      onClick={
        () => {
          setOpenModal(state => !state)
        }
      }
    >
      +
    </button>
  );
}

export { CreateTodoButton };
