function Header({ onShow, valueBtn }) {
    return (
        <div className="header">
            <h1>Task List</h1>
            <button className="btn" onClick={onShow}>
                {valueBtn}
            </button>
        </div>
    );
}

export default Header;
