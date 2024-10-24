import { createAppKit, Metadata } from "@reown/appkit/react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { AppKitNetwork, berachainTestnetbArtio } from "@reown/appkit/networks";

const metadata: Metadata = {
    name: "AppKit",
    description: "AppKit Example",
    url: "localhost:3000",
    icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

const PROJECT_ID = import.meta.env.VITE_WC_PROJECT_ID;

export const networks: [AppKitNetwork, ...AppKitNetwork[]] = [
    berachainTestnetbArtio,
];

export const wagmiAdapter = new WagmiAdapter({
    networks,
    projectId: PROJECT_ID,
    ssr: true,
    batch: {
        multicall: {
            batchSize: 1024 * 10,
            wait: 30,
        },
    },
});

export const modal = createAppKit({
    adapters: [wagmiAdapter],
    networks,
    projectId: PROJECT_ID,
    metadata,
    features: {
        analytics: true,
        email: false,
        socials: false,
        allWallets: true,
        swaps: false,
    },
    showWallets: true,
    coinbasePreference: "eoaOnly",
});
