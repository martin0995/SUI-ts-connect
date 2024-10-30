import './App.css';
import WormholeConnect, { WormholeConnectConfig } from '@wormhole-foundation/wormhole-connect';

function App() {
	const config: WormholeConnectConfig = {
		network: 'Testnet',

		chains: ['Sui', 'Avalanche'],

		ui: {
			title: 'SUI Connect TS Demo',
		},
	};

	return <WormholeConnect config={config} />;
}

export default App;
