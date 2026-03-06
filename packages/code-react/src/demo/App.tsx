import React, { useState } from 'react';
import { Button, Badge, Card, Input } from '../index';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [lastClicked, setLastClicked] = useState('');
  const [username, setUsername] = useState('');

  const handleLoad = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="container">
      <h1>⚛️ @uwckit/code-react</h1>
      <p className="subtitle">React wrappers for UWCKit Lit components</p>

      <section>
        <h2>Buttons</h2>
        <div className="row">
          <Button variant="primary" onClick={() => setLastClicked('primary')}>Primary</Button>
          <Button variant="secondary" onClick={() => setLastClicked('secondary')}>Secondary</Button>
          <Button variant="danger" onClick={() => setLastClicked('danger')}>Danger</Button>
          <Button variant="ghost" onClick={() => setLastClicked('ghost')}>Ghost</Button>
        </div>
        <div className="row">
          <Button loading={isLoading} onClick={handleLoad}>
            {isLoading ? 'Loading...' : 'Click to Load'}
          </Button>
          <Button disabled>Disabled</Button>
        </div>
        {lastClicked && <p className="event-log">Last clicked: {lastClicked}</p>}
      </section>

      <section>
        <h2>Badges</h2>
        <div className="row">
          <Badge variant="default">Default</Badge>
          <Badge variant="success" dot>Success</Badge>
          <Badge variant="warning" dot>Warning</Badge>
          <Badge variant="error" dot>Error</Badge>
          <Badge variant="info" dot>Info</Badge>
        </div>
      </section>

      <section>
        <h2>Cards</h2>
        <div className="grid">
          <Card
            hoverable
            header="React Card"
            footer={<Button size="sm">Footer Action</Button>}
          >
            Card body managed by React. Slot-based layout using web components.
          </Card>
          <Card header="Status Card">
            <Badge variant="success" dot>Active</Badge>
            <p style={{ marginTop: '0.5rem' }}>All systems go.</p>
          </Card>
        </div>
      </section>

      <section>
        <h2>Input (controlled)</h2>
        <div className="form">
          <Input
            label="Username"
            value={username}
            placeholder="Enter username"
            hint="Controlled React input via onChange"
            name="username"
            onChange={setUsername}
          />
          <p>Value: <strong>{username}</strong></p>
        </div>
      </section>
    </div>
  );
}
