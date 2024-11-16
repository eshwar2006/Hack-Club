// Ensure that the window has the required Ethereum provider (MetaMask or similar)
if (typeof window.ethereum === 'undefined') {
    alert("MetaMask or a similar Ethereum wallet is required to interact with this dApp.");
}

// Check balance for an Ethereum address
async function checkBalance() {
    const address = document.getElementById("addressInput").value.trim(); // Get Ethereum address

    // Validate that the address is correct
    if (!ethers.utils.isAddress(address)) {
        alert("Please enter a valid Ethereum address.");
        return;
    }

    try {
        // Initialize the Ethereum provider (MetaMask)
        const provider = new ethers.BrowserProvider(window.ethereum);

        // Connect to Sepolia network (MetaMask is already connected to Sepolia in this case)
        const web3MetaMaskProvider = new ethers.BrowserProvider(window.ethereum);

        // Get the balance in wei (the smallest unit of ether)
        const balanceInWei = await web3MetaMaskProvider.getBalance(address);

        // Convert balance from wei to ether
        const balanceInEther = ethers.formatEther(balanceInWei); // Convert from wei to ether

        // Display the balance on the webpage
        document.getElementById("balanceDisplay").innerHTML = `Balance: <span>${balanceInEther} ETH</span>`;
    } catch (error) {
        console.error("Error fetching balance:", error);
        alert("Failed to fetch balance. Please try again.");
    }
}
