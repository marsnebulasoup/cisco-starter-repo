import './App.css';
import { Banner } from './components/Banner';
import { Card } from './components/Card';
import { Exhibit } from './components/Exhibit';
import { getIPv4, getIPv6 } from './utils/ip';
import { useEffect, useState } from 'react';
import { watchLatency } from './utils/latency';

function App() {
  const [ipV4, setIpV4] = useState("Loading...");
  const [ipV6, setIpV6] = useState("Loading...");
  const [latency, setLatency] = useState("Loading...");


  useEffect(() => {
    getIPv4().then(setIpV4);
    getIPv6().then(setIpV6);
    watchLatency(setLatency);
  }, []);


  return (
    <div class="app">
      <Banner />
      <Exhibit>
        <Card title="IPv4" content={ipV4} />
        <Card title="IPv6" content={ipV6} />
        <Card title="Latency (ms)" content={latency} />
      </Exhibit>
    </div>
  );
}

export default App;
