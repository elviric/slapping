import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { ABI, contract, signs } from "../public/contract";
import slapIcon from "../public/assets/images/slapLogo.png";
import metmaskIcon from "../public/assets/images/MetamaskIcon.png";
import RedArrow from "../public/assets/images/RedArrow.png";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [state, setState] = useState();
  const [assign, setAssign] = useState();
  const [showIcon, setShowIcon] = useState(true);
  const [showToken, setShowToken] = useState(false);
  // const [selectedTab, setSelectedTab] = useState([slaptoken, tokenomics]);

  async function init() {
    console.log("starting up");
    //console.log("WalletConnectProvider is", WalletConnectProvider);
    //console.log("Fortmatic is", Fortmatic);

    const providerOptions = {
      metamask: {},
    };

    const web3Modal = new Web3Modal({
      //network: "mainnet", // optional
      cacheProvider: false, // optional
      //disableInjectedProvider: false,
      providerOptions,
      theme: "light", // required
    });

    const provider = await web3Modal.connect();
    //console.log(provider);

    const web3 = new ethers.providers.Web3Provider(provider);
    const signer = web3.getSigner();
    console.log(signer);

    const address = await signer.getAddress();

    const networkId = await web3.getNetwork();
    if (networkId.chainId !== 97) {
      alert("Switch to bsc network");
      web3Modal.clearCachedProvider();
      web3Modal.resetState();
      return;
    }
    const balance = await web3.getBalance(address);

    console.log(address);

    var bal = ethers.utils.formatEther(balance);
    console.log(bal);
    /**/
    //  console.log(networkId)
    setState({
      web3,
      provider,
      connected: true,
      address,
      bal,
      web3Modal,
      networkId,
      signer,
    });
    // window.provider = provider;
    await subscribeProvider(provider);
  }

  const subscribeProvider = async (provider) => {
    if (!provider.on) {
      return;
    }
    // provider.on("close", () => this.resetApp());
    provider.on("accountsChanged", async (accounts) => {
      //if(state !== undefined && state.web3 !== undefined)
      //  console.log(state);
      //setProviderData({ address: accounts[0] });
      //setState({ address: accounts[0] });
      init();
    });
    provider.on("chainChanged", async (chainId) => {
      // const { web3 } = this.state;
      //const networkId = await web3.eth.net.getId();
      // setState({ chainId, networkId });
      //setProviderData({ chainId, networkId });
      init();
    });
    provider.on("networkChanged", async (networkId) => {
      //const { web3 } = this.state;
      //const chainId = await web3.eth.chainId();
      //  await this.setState({ chainId, networkId });
      //setProviderData({ chainId, networkId });
      init();
    });
    provider.on("open", () => {
      console.log("open");
    });

    // Subscribe to session disconnection/close
    provider.on("close", (code, reason) => {
      console.log(code, reason);
    });
  };

  const onConnect = async () => {
    try {
      await init();
    } catch (err) {
      console.log(err);
      alert("failed to connect");
    }
  };

  const logout = async () => {
    setTimeout(() => {
      window.location.reload();
    }, 1);
  };

  const claim = async () => {
    if (state !== undefined) {
      const metaDAO = new ethers.Contract(contract, ABI, state.web3);
      const conSigner = metaDAO.connect(state.signer);
      console.log(assign.amt, assign.sign);
      conSigner.claim(assign.amt.toString(), assign.sign);
      //console.log(await metaDAO.name());}
    }
  };
  const checkAddrExist = (a) => {
 //   let s = signs.filter((stu) => stu.addr === a);
 let data = {address:'0x54be3a794282c030b15e43ae2bb182e14c409c5e'}
 fetch("/api/fetchData", {
  method: "POST",
  headers: {'Content-Type': 'application/json'}, 
  body: JSON.stringify(data)
}).then(res => res.json()).then(r=>{
  console.log("Request complete! response:", r);
  setAssign(r);
});
   // setAssign(s[0]);
  };

  useEffect(() => {
    if (state !== undefined) {
      checkAddrExist(state.address);
    }
  },[state]);

  return (
    <div>
      <Head>
        <title>Slapping Airdrop | Demo</title>
        <meta name="description" content="Claim MetaDAO airdrops" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav className={styles.navbar}>
          <div
            onClick={() => {
              setShowIcon(true);
              setShowToken(false);
            }}
            className={styles.navItem}
          >
            <h1>Slaptoken</h1>
          </div>

          <div
            onClick={() => {
              setShowIcon(false);
              setShowToken(false);
            }}
            className={styles.navItem}
          >
            <h1>Tokenomics</h1>
          </div>
        </nav>

        <AnimatePresence exitBeforeEnter>
          <div className={styles.centerData}>
            {showToken === false ? (
              <>
                {showIcon === true ? (
                  <div style={{ marginTop: "10%" }}>
                    <Image
                      src={slapIcon}
                      alt="SlapIcon"
                      width={175}
                      height={175}
                    />
                    <motion.div
                      animate={{ opacity: 1, y: 0 }}
                      initial={{ opacity: 0, y: 100 }}
                      exit={{ opacity: 0, y: -100 }}
                      transition={{ duration: 2 }}
                      className={styles.claimBtn}
                    >
                      <button onClick={() => setShowToken(true)}>
                        Claim Token
                      </button>
                    </motion.div>
                  </div>
                ) : (
                  <div
                    className={styles.centerData}
                    style={{ marginTop: "10%" }}
                  >
                    <p className={styles.TokenomicData}>
                      Slap Token is a pure shit(e) coin inspired by the highly
                      meme worthy Will Smith & Chris Rock Oscar Slap gate. The
                      token will have a total supply of one billion with 50 % of
                      the supply available to claim for holders of BAYC, MAYC,
                      Punks, Gutter Cat Gang, Cryptoadz, Azuki, Doodles, Cyber
                      Kongs, Vee Friends & World of Women/World of Women Galaxy
                      NFTs. 10 % will be set aside for team, 20 % for staking
                      rewards & an additional 20 % for LP provision. There will
                      be no utility of the tokens unless the community of
                      holders decide to make something of the same, no discord
                      or telegram channels or any other form of shameless
                      shilling or pumping & dumping. This is a social experiment
                      by the team about the valuation & reach of a meme.
                    </p>
                    <motion.div
                      animate={{ opacity: 1, y: 0 }}
                      initial={{ opacity: 0, y: 100 }}
                      exit={{ opacity: 0, y: -100 }}
                      transition={{ duration: 2 }}
                      className={styles.claimBtn}
                    >
                      <button onClick={() => setShowToken(true)}>
                        Claim Token
                      </button>
                    </motion.div>
                  </div>
                )}
              </>
            ) : null}

            {showToken && (
              <>
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 100 }}
                  exit={{ opacity: 0, y: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={slapIcon}
                    alt="SlapIcon"
                    width={113}
                    height={113}
                  />
                </motion.div>

                <div className={styles.card}>
                  <div className={styles.imageCard}></div>

                  {state ? (
                    <motion.div
                      animate={{ opacity: 1, y: 0 }}
                      initial={{ opacity: 0, y: 0 }}
                      exit={{ opacity: 0, y: 0 }}
                      transition={{ duration: 2 }}
                    >
                      <div className={styles.connectedAddress}>
                        <div className={styles.address}>
                          <div className={styles.avatar} />
                          <h2>
                            {state
                              ? state.address.substring(0, 5) +
                                "..." +
                                state.address.substr(-3)
                              : "0xABcD...xYZ"}
                          </h2>
                        </div>
                        <h1>You claimed xxxx Slapcoins</h1>
                      </div>
                      {assign ? (
                        <div className={styles.centerData} >
                          <button className={styles.claimBtn} onClick={claim}>Claim Airdrop</button>
                        </div>
                      ) : (
                        <></>
                      )}
                    </motion.div>
                  ) : (
                    <>
                      <div onClick={onConnect} className={styles.metaMaskDiv}>
                        <Image
                          src={metmaskIcon}
                          alt="Metamask"
                          width={68}
                          height={63}
                        />
                        <h2>Connect Metamask</h2>
                      </div>

                      <div className={styles.cardDetails}>
                        <h2>New to Ethereum?</h2>
                        <h3>
                          Balancer isa DeFi app on Ethereum. To invest trade
                          here, you’llfirst need to set up an ethereum Wallet.{" "}
                        </h3>

                        <div className={styles.learnMoreDiv}>
                          <h6>Learn more</h6>
                          <Image src={RedArrow} width={10} height={10} />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </AnimatePresence>
      </main>
    </div>
  );
}
