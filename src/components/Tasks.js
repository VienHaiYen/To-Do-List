import Task from './Task';
function Tasks({ items = [], handleToggle, handleClear }) {
    return (
        <div className="tasks">
            {items.map((item, index) => (
                <Task key={index} data={item} onDelete={handleClear} onDoubleClick={handleToggle} />
            ))}
        </div>
    );
}

export default Tasks;
