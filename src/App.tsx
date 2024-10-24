import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { wagmiAdapter } from "./wagmi";

const queryClient = new QueryClient();

function App() {
    return (
        <>
            <WagmiProvider config={wagmiAdapter.wagmiConfig}>
                <QueryClientProvider client={queryClient}>
                    <div>
                        connect?
                        <w3m-button />
                    </div>
                </QueryClientProvider>
            </WagmiProvider>
        </>
    );
}

export default App;
