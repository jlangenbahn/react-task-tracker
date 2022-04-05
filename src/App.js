import logo from './logo.svg';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Dinner',
        day: 'Feb 12th at 3:45pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Insurance Interview',
        day: 'Jan 2th at 1:30pm',
        reminder: true,
    },]
  )
  const name = "Joe"
  const x = false


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
