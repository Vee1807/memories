
function Navbar(props) {
    return(
    <nav 
        className={props.darkMode ? "dark": ""}
    >
        <h1 className="nav-title">Memories</h1>
        <div 
            className="toggler" 
        >
        <button onClick={props.toggleDarkMode} className="toggler">
           { !props.darkMode ? 
           <i className='bx bx-toggle-left toggle-btn' ></i> : 
           <i className='bx bxs-toggle-right toggle-btn'></i>
           }
        </button>
        </div>
    </nav>)
}

export default Navbar