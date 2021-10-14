
import React, { useEffect, useState } from "react";
import {
    Nav,
    NavLink,
    LeftWrapper,
    RightWrapper,
    styledDiv,
    Title,
    Bars,
    NavMenu,
    Discord,
    Twitter,
    Fish,
    SocialButton,
    Button
} from './NavbarElements';

function Navbar({ provider, loadWeb3Modal, logoutOfWeb3Modal }) {
    const [account, setAccount] = useState("");
    const [rendered, setRendered] = useState("");

    useEffect(() => {
        async function fetchAccount() {
            try {
                if (!provider) {
                    return;
                }

                // Load the user's accounts.
                const accounts = await provider.listAccounts();
                setAccount(accounts[0]);

                // Resolve the ENS name for the first account.
                const name = await provider.lookupAddress(accounts[0]);

                // Render either the ENS name or the shortened account address.
                if (name) {
                    setRendered(name);
                } else {
                    setRendered(account.substring(0, 6) + "..." + account.substring(36));
                }
            } catch (err) {
                setAccount("");
                setRendered("");
                console.error(err);
            }
        }
        fetchAccount();
    }, [account, provider, setAccount, setRendered]);

    return (

        <>
            <Button
                onClick={() => {
                    if (!provider) {
                        loadWeb3Modal();
                    } else {
                        logoutOfWeb3Modal();
                    }
                }}
            >
                {rendered === "" && "Connect Wallet"}
                {rendered !== "" && rendered}
            </Button>
            <SocialButton><Discord size={24} /></SocialButton>

            <SocialButton><Twitter size={24} /></SocialButton>

        </>
    );
}


export default Navbar;