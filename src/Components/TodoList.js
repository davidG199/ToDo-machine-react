import "../styles/index.css";

function TodoList({ children }) {
    return (
        <ul className='list'>
            {children}
        </ul>
    );
}

export { TodoList };