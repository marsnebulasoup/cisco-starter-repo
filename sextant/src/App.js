import './App.css';
import { Banner } from './components/Banner';
import { Card } from './components/Card';
import { Exhibit } from './components/Exhibit';
import { getIPv4, getIPv6 } from './utils/ip';

function App() {
  return (
    <div class="app">
      <Banner />
      <Exhibit>
        <Card title="IPv4" content={getIPv4} />
        <Card title="IPv6" content={getIPv6} />
      </Exhibit>
    </div>
  );
}

export default App;
