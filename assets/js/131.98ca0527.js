(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{736:function(e,t,r){"use strict";r.r(t);var a=r(1),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"hd-wallet"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hd-wallet"}},[e._v("#")]),e._v(" HD Wallet")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",[e._v("Vite wallet and mobile app are HD compatible. Check "),r("RouterLink",{attrs:{to:"/vep/vep-3.html"}},[e._v("VEP-3")]),e._v(" for the address derivation.")],1),e._v(" "),r("p",[e._v("You can also refer to "),r("a",{attrs:{href:"https://bitcoin.org/en/glossary/hd-protocol",target:"_blank",rel:"noopener noreferrer"}},[e._v("HD Protocol, HD Wallet, BIP3"),r("OutboundLink")],1),e._v(" for more information.")])]),e._v(" "),r("h3",{attrs:{id:"key-generation-steps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#key-generation-steps"}},[e._v("#")]),e._v(" Key generation steps")]),e._v(" "),r("p",[e._v("To generate the private key, Vite wallet will")]),e._v(" "),r("ol",[r("li",[e._v("Follow BIP39 protocol to generate 24-word mnemonic phrase and the entropy;")]),e._v(" "),r("li",[e._v("Generate seed from mnemonic. In this step "),r("a",{attrs:{href:"https://en.bitcoin.it/wiki/Seed_phrase",target:"_blank",rel:"noopener noreferrer"}},[e._v("Two-Factor Seed Phrases"),r("OutboundLink")],1),e._v(" is not supported;")]),e._v(" "),r("li",[e._v("Derive master key from hashed seed through HMAC(Hash-based Message Authentication Code)-SHA512 algorithm with key "),r("code",[e._v("ed25519 blake2b seed")]),e._v(";")]),e._v(" "),r("li",[e._v("Follow BIP44 protocol to derive private key and address of Vite from master key. The "),r("code",[e._v("coin_type")]),e._v(" "),r("strong",[e._v("666666")]),e._v(" has been registered as Vite at "),r("a",{attrs:{href:"https://github.com/satoshilabs/slips/blob/master/slip-0044.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("SLIP-0044"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h3",{attrs:{id:"the-role-of-the-wallet-password"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-role-of-the-wallet-password"}},[e._v("#")]),e._v(" The role of the wallet password")]),e._v(" "),r("p",[e._v("When creating an account in the wallet, user needs to enter a "),r("strong",[e._v("password")]),e._v(", which is not "),r("code",[e._v("Two-Factor Seed Phrases")]),e._v(", but one of the parameters we encrypt BIP39 entropy. The specific encryption is different in iOS wallet, web wallet and go-vite built-in wallet")]),e._v(" "),r("ol",[r("li",[e._v("Go-vite built-in wallet: The user password is derived to a 256-bit encryption key of AES-GCM algorithm using the scrypt algorithm with standard parameters. The BIP39 entropy is encrypted with the key and stored in an EntropyStore file in user's file system. User can backup this file, so that even if his mnemonic phrase is lost it can always be recovered by decrypting the file.")]),e._v(" "),r("li",[e._v("Web wallet: The password is derived to 256-bit encryption key using the scrypt algorithm with lightweight parameters. The wallet employs AES-GCM algorithm to encrypt entropy into cipher text and stores in localStorage.")]),e._v(" "),r("li",[e._v("iOS Wallet: The salted hash value of user password is used as AES-GCM encryption key to encrypt the entropy. The encrypted data is saved in App Sandbox. After the user enters the password to log in wallet, the data is decrypted and derived into private key.")])]),e._v(" "),r("h3",{attrs:{id:"account-recovery-from-mnemonic-phrase"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#account-recovery-from-mnemonic-phrase"}},[e._v("#")]),e._v(" Account recovery from mnemonic phrase")]),e._v(" "),r("p",[e._v("A single mnemonic, under the rule of "),r("code",[e._v("vep-3: m/44'/666666'/x'")]),e._v(", theoretically can derive "),r("code",[e._v("2^32-1")]),e._v(" addresses. So how does the wallet restore the account from the mnemonic phrase if the user forgets his private key, or even his Vite address as well?")]),e._v(" "),r("p",[e._v("In web wallet, iOS wallet and Android wallet(yet to be released), a default maximum of 10 addresses are generated from one mnemonic phrase. When restoring account, the wallet will traverse the 0-9 address to check whether they are used. For example, if a transaction is found on the 8th address, the wallet will immediately restore all the addresses of 0-8. Therefore, do remember your mnemonic, because from which your lost accounts/private keys can always be found back.")]),e._v(" "),r("h3",{attrs:{id:"large-scale-address-derivation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#large-scale-address-derivation"}},[e._v("#")]),e._v(" Large-scale address derivation")]),e._v(" "),r("p",[e._v("You can directly integrate go-vite wallet module in your project. After creating the mnemonic and having it unlocked, you will have "),r("code",[e._v("entropystore.Manager")]),e._v(" object with two methods: "),r("code",[e._v("DeriveForFullPath")]),e._v(" and "),r("code",[e._v("DeriveForIndexPath")]),e._v(".")]),e._v(" "),r("ol",[r("li",[r("p",[r("code",[e._v("DeriveForFullPath")]),e._v(": As method name suggests, the complete prefix "),r("code",[e._v("m/44'/666666'/x'")]),e._v(" is passed in to derive address and private key. This method can also be used at a very large scale such as the required addresses exceed 2^32. To meet this purpose, passing in "),r("code",[e._v("m/44'/666666'/x'/y'/z'/...")]),e._v("("),r("code",[e._v("x")]),e._v(", "),r("code",[e._v("y")]),e._v(" and "),r("code",[e._v("z")]),e._v(" are "),r("code",[e._v("uint32")]),e._v(" values indicating different sub levels, each of which has "),r("code",[e._v("2^32-1")]),e._v(" sub addresses associated).")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("DeriveForIndexPath")]),e._v(": After passing in a "),r("code",[e._v("uint32")]),e._v(" value "),r("code",[e._v("x")]),e._v(", this method will compose a prefix string of "),r("code",[e._v("m/44'/666666'/x'")]),e._v(" and call "),r("code",[e._v("DeriveForFullPath")]),e._v(", then return related private key and account address. Up to "),r("code",[e._v("2^32-1")]),e._v(" addresses can be generated by this method.")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);