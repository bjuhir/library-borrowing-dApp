# Library Borrowing dApp — Flare Network

## 📍 Contract Address
**0x5131d5a5FC56634C5dC8C0595ec9Ed850eC83227**  
View on Explorer:  
https://coston2-explorer.flare.network/address/0x5131d5a5FC56634C5dC8C0595ec9Ed850eC83227

---

## 📘 Project Description

This project is a decentralized library borrowing system deployed on the Flare Coston2 testnet.  
Users can add items, borrow them, and return them — all on-chain.  
The system ensures transparency, provable state, and trustless interactions without relying on any centralized entity.

The UI is built using **Next.js + Wagmi + Viem**, enabling seamless Web3 wallet interaction, real-time transaction tracking, and smart contract function calls.

---

## ✨ Features

### **Smart Contract Features**
- Add new items to the library
- Borrow items if available
- Return borrowed items
- Track borrower address and availability of each item
- View total number of items
- On-chain storage of all item states

### **Frontend Features**
- Connect wallet gating
- Add/Borrow/Return items directly from the UI
- Live contract state fetching using Wagmi hooks
- Loading + Transaction pending + Transaction confirmed states
- Error handling for failed transactions
- Clean and simple integration example (`sample.tsx`)

---

## 🧩 How It Solves the Problem

Traditional item-lending systems rely on centralized databases or trust-based interactions.  
Those models suffer from:

- Lack of transparency  
- Possible manipulation or loss of records  
- No verifiable public history  
- Dependency on a trusted authority  

### **This decentralized borrowing system solves these issues by:**

#### ✔ Trustless Item Management  
Every item added, borrowed, or returned is permanently recorded on the blockchain.

#### ✔ Public Verifiability  
Anyone can verify item ownership and borrow status via the smart contract.

#### ✔ No Central Control  
The system has no admin authority controlling borrow/return logic — eliminating unfairness or manipulation.

#### ✔ Strong Use Cases  
- Public libraries  
- Community tool sharing  
- Digital equipment pools  
- University item checkout systems  
- Transparent DAO-owned equipment management  

---

The project provides an extendable, fully decentralized foundation for any asset-tracking or borrow/return mechanism, demonstrating practical real-world utility for Web3 beyond tokens and NFTs.


