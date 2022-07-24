import { useState, useRef } from 'react';
function AddTask({ onClick }) {
    const [name, setName] = useState('');
    const [time, setTime] = useState('');
    const [check, setCheck] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();
        if (name.trim() === '') return;
        onClick({ name, time, check });
        setName('');
        setTime('');
        setCheck(false);
        inputRef.current.focus();
    };
    const inputRef = useRef();
    return (
        <form className="task-form" onSubmit={onSubmit}>
            <div className="mb-1">
                <label htmlFor="taskName" className="form-label">
                    Task Name
                </label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    ref={inputRef}
                    className="form-control"
                    id="taskName"
                />
            </div>
            <div className="mb-1">
                <label htmlFor="taskTime" className="form-label">
                    Time
                </label>
                <input value={time} onChange={(e) => setTime(e.target.value)} className="form-control" id="taskTime" />
            </div>
            <div className="mb-3 form-check">
                <input
                    type="checkbox"
                    checked={check}
                    onChange={(e) => {
                        setCheck(e.target.checked);
                    }}
                    className="form-check-input"
                    id="checkReminder"
                />
                <label className="form-check-label" htmlFor="checkReminder">
                    Reminder Me !
                </label>
            </div>
            <button type="submit btn" className="btn">
                Submit
            </button>
        </form>
    );
}

export default AddTask;
