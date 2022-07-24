import { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import './App.css';
import './main';

function App() {
    const [items, setItems] = useState([]);
    const [showAdd, setShowAdd] = useState(false);

    useEffect(() => {
        const getTasks = async () => {
            const tasksServer = await fetchTasks();
            setItems(tasksServer);
        };
        getTasks();
    }, []);
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks');
        const data = await res.json();

        return data;
    };
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`);
        const data = await res.json();

        return data;
    };
    const setShow = () => setShowAdd(!showAdd);
    const addList = async (task) => {
        await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(task),
        });
        const tasksServer = await fetchTasks();
        setItems(tasksServer);
    };
    const handleToggle = async (id) => {
        let updItems = await fetchTask(id);
        updItems = { ...updItems, check: !updItems.check };
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updItems),
        });
        const tasksServer = await fetchTasks();
        setItems(tasksServer);
    };
    const handleClear = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE',
        });
        document.querySelectorAll('.clear-btn').forEach((item) =>
            item.addEventListener('click', (e) => {
                e.target.closest('.task').classList.add('hide-item');
                setTimeout(() => {
                    e.target.closest('.task').classList.remove('hide-item');
                }, 500);
            }),
        );
        setTimeout(() => {
            res.status === 200 ? setItems(items.filter((item) => item.id !== id)) : alert('Error Deleting This Task');
        }, 500);
    };
    return (
        <div className="App">
            {/* HEADER */}
            <Header onShow={setShow} valueBtn={showAdd ? 'Close' : 'Add'} />

            {/* ADD ITEM */}
            {showAdd && <AddTask onClick={addList} />}

            {/* lIST */}
            {items.length > 0 ? (
                <Tasks items={items} handleToggle={handleToggle} handleClear={handleClear} />
            ) : (
                'No task to do'
            )}

            {/* FOOTER */}
        </div>
    );
}

export default App;
