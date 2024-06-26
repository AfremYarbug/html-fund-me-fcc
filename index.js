  import { ethers } from "./ethers-5.6.esm.min.js"

  const connectButton = document.getElementById("connectButton") 
  const fundButton = document.getElementById("fundButton")
  connectButton.onclick = connect
  fundButton.onclick = fund

  // if we refresh page it will not ask if you will connect to metamask

  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        // connect to metamask
        await ethereum.request({ method: "eth_requestAccounts" })
      } catch (error) {
        console.log(error)
      }
      connectButton.innerHTML = "Connected"
      const accounts = await ethereum.request({ method: "eth_accounts" })
      console.log(accounts)
    } else {
      connectButton.innerHTML = "Please install MetaMask"
    }
  }

// fund function

async function fund(ethAmount) {
    console.log(`Funding with ${ethAmount}...`)
    if (typeof window.ethereum !== "undefined") {
        // What we always need when we send a transaction
        // provider / connection to the blockchain
        // signer / wallet / someone with gas

        // contract that we interacting with
        // ABI & Adress
    }
}

// withdraw function