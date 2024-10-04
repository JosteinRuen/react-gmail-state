import Header from './components/Header'
import initialEmails from './data/emails'
import {useState} from 'react';

import './styles/App.css'

function App() {
  // Use initialEmails for state
  console.log(initialEmails)
  const[emails, setEmails] = useState(initialEmails)

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active">
            <span className="label">Inbox</span>
            <span className="count">{emails.filter(email => !email.read).length}</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">{emails.filter(email => email.starred).length}</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <ul className="email-list">
          {emails.map(email => (
            <li key={email.id} className={`email ${email.read ? 'read' : 'unread'}`}>
              <div className="select">
                <input
                  className="select-checkbox"
                  type="checkbox"
                />
              </div>
              <div className="star">
                <input
                  className="star-checkbox"
                  type="checkbox"
                  checked={email.starred}
                  // onChange={() => {}}
                />
              </div>
              <div className="sender">{email.sender}</div>
              <div className="title">{email.title}</div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App
