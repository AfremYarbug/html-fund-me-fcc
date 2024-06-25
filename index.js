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