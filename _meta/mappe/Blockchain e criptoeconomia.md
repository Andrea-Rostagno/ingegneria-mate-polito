---
tipo: meta
tags: [meta, mappa]
corso: Blockchain e criptoeconomia
livello: magistrale
cartella: magistrale/Blockchain e criptoeconomia
---

# Mappa delle competenze: Blockchain e criptoeconomia

Mappa concettuale del corso `magistrale/Blockchain e criptoeconomia` (Politecnico di Torino, Laurea Magistrale in Ingegneria Matematica, docente Danilo Bazzanella, gruppo CrypTO). **71 competenze nuove** e 16 note esistenti estese con una sezione "Nei corsi". Area `informatica` per crittografia, blockchain, Bitcoin, Ethereum, consenso e applicazioni; area `finanza` per denaro, stablecoin, CBDC, strumenti finanziari, normativa e fiscalità. I nomi sono in testo semplice (non wikilink), così la mappa non entra nel grafo.

Fonti: tutte le slide di teoria (`01-Strumenti.pdf`, `02-Introduzione.pdf`, `03-Bitcoin.pdf`, `03B-Lightning Network.pdf`, `04-Denaro.pdf`, `05-Blockchain2.pdf`, `06-Protocolli di consenso.pdf`, `07-Altcoin.pdf`, `08-Aspetti normativi.pdf`, `09-Applicazioni.pdf`, `10-Metaverso.pdf`), tutte con testo estraibile. `06-Protocolli di consenso (2).pdf` e `10-Metaverso (2).pdf` sono copie identiche salvo la numerazione delle pagine: non usate. La dispensa LaTeX dell'utente `dispensa_blockchain/dispensa_blockchain.tex` è usata come traccia e sintesi; dove aggiunge cose che le slide non dicono, le note lo dichiarano. I file in `extracted_text/` sono estrazioni delle stesse slide. Nessun tema d'esame nella cartella. Convenzione: "p. N" è la pagina del PDF, che coincide con la numerazione "N/totale" stampata sulle slide. Formule perse da `pdftotext` verificate sulle pagine renderizzate (`01-Strumenti.pdf` pp. 6, 16, 19, 22-23, 29, 34; `03-Bitcoin.pdf` pp. 6-7, 9, 23, 32, 89).

## Strumenti crittografici

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Funzione hash crittografica** | informatica | cryptographic hash function; impronta; digest; resistenza alla preimmagine; resistenza alla seconda preimmagine; resistenza alle collisioni; effetto valanga; SHA-256; SHA-3; RIPEMD-160; computazionalmente intrattabile | `01-Strumenti.pdf` pp. 3-13 | — | Merkle tree<br>Proof of Work<br>Firma digitale<br>Indirizzo Bitcoin<br>Blockchain<br>Hashed Timelock Contract | Tabella hash (esistente) |
| **Crittografia a chiave pubblica** | informatica | public-key cryptography; crittografia asimmetrica; crittografia simmetrica; chiave pubblica; chiave privata; Diffie-Hellman 1976 | `01-Strumenti.pdf` pp. 15-18 | — | RSA<br>Curva ellittica<br>Firma digitale<br>Wallet di criptovalute | — |
| **RSA** | informatica | Sistema RSA; Rivest-Shamir-Adleman; RSA cryptosystem | `01-Strumenti.pdf` p. 19 | Crittografia a chiave pubblica<br>Classi di resto modulo n (esistente) | Firma digitale | Curva ellittica<br>Problema del logaritmo discreto |
| **Curva ellittica** | informatica | elliptic curve; elliptic curve cryptography; ECC; curva ellittica su un campo finito; somma di punti; punto all'infinito; secp256k1 | `01-Strumenti.pdf` pp. 20-27; `03-Bitcoin.pdf` p. 19 | Crittografia a chiave pubblica<br>Campo finito (esistente)<br>Gruppo ciclico (esistente)<br>Teorema di Lagrange sui gruppi (esistente) | Problema del logaritmo discreto<br>Cifratura ElGamal<br>ECDSA<br>Indirizzo Bitcoin | RSA |
| **Problema del logaritmo discreto** | informatica | discrete logarithm problem; DLP; ECDLP; logaritmo discreto su curve ellittiche | `01-Strumenti.pdf` p. 28; `03-Bitcoin.pdf` p. 20 | Curva ellittica | Cifratura ElGamal<br>ECDSA | RSA |
| **Cifratura ElGamal** | informatica | ElGamal encryption; ElGamal su curve ellittiche; cifratura in stile ElGamal | `01-Strumenti.pdf` p. 29 | Curva ellittica<br>Problema del logaritmo discreto | — | ECDSA |
| **Firma digitale** | informatica | digital signature; KeyGen Sign Verify; autenticità integrità non ripudiabilità; DSA; firma di Schnorr; firma BLS | `01-Strumenti.pdf` pp. 30-31, 35 | Crittografia a chiave pubblica<br>Funzione hash crittografica | ECDSA<br>Transazione Bitcoin<br>Multisignature<br>Self Sovereign Identity | RSA<br>Privacy coin |
| **ECDSA** | informatica | Elliptic Curve Digital Signature Algorithm; firma ECDSA | `01-Strumenti.pdf` pp. 32-34 | Firma digitale<br>Curva ellittica<br>Problema del logaritmo discreto | Transazione Bitcoin | Cifratura ElGamal<br>Multisignature |

## DLT, blockchain e consenso

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Distributed Ledger Technology** | informatica | DLT; registro distribuito; libro mastro distribuito; single point of failure; CRUD | `02-Introduzione.pdf` pp. 3-9 | — | Blockchain<br>Criteri di adozione della blockchain<br>Fiscalità delle cripto-attività<br>Web3 | Protocollo di consenso |
| **Blockchain** | informatica | catena di blocchi; blocco di genesi; genesis block; altezza di un blocco; blockchain permissionless; blockchain permissioned; blockchain ibrida | `02-Introduzione.pdf` pp. 4-11; `03-Bitcoin.pdf` pp. 3, 13 | Distributed Ledger Technology<br>Funzione hash crittografica | Problema del double spending<br>Fork della blockchain<br>Protocollo di consenso<br>Struttura del blocco Bitcoin<br>Bitcoin<br>Ethereum<br>Criteri di adozione della blockchain | Merkle tree<br>Proof of Authority |
| **Problema del double spending** | informatica | double spending; doppia spesa; scarsità digitale | `02-Introduzione.pdf` p. 10; `03-Bitcoin.pdf` pp. 49-50 | Blockchain<br>Firma digitale | Modello UTXO<br>Mining | Precursori di Bitcoin<br>Fork della blockchain |
| **Fork della blockchain** | informatica | biforcazione; fork; stale block; orphan block; blocco orfano; catena più lunga; conferme di una transazione; checkpoint | `02-Introduzione.pdf` pp. 11-12; `03-Bitcoin.pdf` pp. 54-61 | Blockchain<br>Mining | Soft fork e hard fork<br>Coinbase transaction<br>Nothing at stake | Problema del double spending |
| **Protocollo di consenso** | informatica | consensus protocol; algoritmo di consenso; trilemma della blockchain; attacco del 51% | `02-Introduzione.pdf` p. 13; `06-Protocolli di consenso.pdf` pp. 3, 28 | Blockchain | Proof of Work<br>Proof of Stake<br>Proof of Authority<br>Proof of Burn<br>Proof of Space | Distributed Ledger Technology |
| **Proof of Work** | informatica | PoW; prova di lavoro; hashcash; target; nonce; ASIC; Scrypt; CryptoNight; Ethash; X11; Equihash | `02-Introduzione.pdf` pp. 14-22; `06-Protocolli di consenso.pdf` pp. 4-14 | Funzione hash crittografica<br>Protocollo di consenso | Mining<br>Difficoltà di mining<br>Precursori di Bitcoin<br>Proof of Stake<br>Proof of Space | — |
| **Precursori di Bitcoin** | informatica | cypherpunk; Crypto Anarchist Manifesto; B-money; Reusable Proof of Work; RPoW; Bit gold; Satoshi Nakamoto | `02-Introduzione.pdf` pp. 16-33 | Proof of Work | Bitcoin<br>Smart contract | Problema del double spending |

## Bitcoin

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Bitcoin** | informatica | BTC; satoshi; criptomoneta; punti di forza di Bitcoin; debolezze di Bitcoin; Bitcoin come denaro | `03-Bitcoin.pdf` pp. 4-5, 134-149; `04-Denaro.pdf` pp. 34-36 | Blockchain<br>Precursori di Bitcoin | Altcoin<br>Strumenti finanziari su Bitcoin<br>Lightning Network<br>Privacy coin | Funzioni del denaro<br>Rapporto tra flusso e riserva<br>Ethereum<br>Decentralized Autonomous Organization |
| **Struttura del blocco Bitcoin** | informatica | block header; header del blocco; hashPrevBlock; hashMerkleRoot; Bits; Nonce; magic number | `03-Bitcoin.pdf` pp. 5-7, 11 | Blockchain<br>Merkle tree | Mining<br>Nodi di Bitcoin<br>SegWit | Difficoltà di mining |
| **Merkle tree** | informatica | albero di Merkle; Merkle root; hash tree; prova di inclusione | `03-Bitcoin.pdf` pp. 8-10 | Funzione hash crittografica<br>Albero binario (esistente) | Struttura del blocco Bitcoin<br>Nodi di Bitcoin | Blockchain |
| **Transazione Bitcoin** | informatica | Bitcoin transaction; input e output; resto; lock time; In-Counter; Out-Counter | `03-Bitcoin.pdf` pp. 16-18, 31-34 | Firma digitale<br>ECDSA<br>Indirizzo Bitcoin | Modello UTXO<br>Fee di transazione<br>Coinbase transaction<br>Hashed Timelock Contract<br>Canale di pagamento | Privacy coin |
| **Modello UTXO** | informatica | UTXO; Unspent Transaction Output; UTXO set; same-block spending; mempool | `03-Bitcoin.pdf` pp. 45-48 | Transazione Bitcoin<br>Problema del double spending | Nodi di Bitcoin | Mining<br>Ethereum |
| **Indirizzo Bitcoin** | informatica | Bitcoin address; P2PKH; P2PK; Base58Check; HASH160; Pay-To-Public-Key-Hash | `03-Bitcoin.pdf` pp. 19-30 | Funzione hash crittografica<br>Curva ellittica | Transazione Bitcoin<br>Multisignature<br>SegWit<br>Wallet di criptovalute | — |
| **Fee di transazione** | informatica | transaction fee; commissione; fee; mempool; attacco DoS | `03-Bitcoin.pdf` pp. 42-44, 51 | Transazione Bitcoin | Mining | Halving<br>Lightning Network |
| **Mining** | informatica | miner; minatori; validazione dei blocchi; hashrate; mining pool; attacco Sybil | `03-Bitcoin.pdf` pp. 50-53, 143 | Proof of Work<br>Fee di transazione<br>Struttura del blocco Bitcoin<br>Problema del double spending | Fork della blockchain<br>Coinbase transaction<br>Difficoltà di mining | Modello UTXO<br>Nodi di Bitcoin |
| **Difficoltà di mining** | informatica | difficulty; aggiustamento del target; 2016 blocchi; velocità di validazione; transazioni al secondo | `03-Bitcoin.pdf` pp. 81-84 | Mining<br>Proof of Work | — | Struttura del blocco Bitcoin<br>Halving |
| **Coinbase transaction** | informatica | transazione coinbase; coinbase maturity; ricompensa del blocco; block reward | `03-Bitcoin.pdf` pp. 35, 85-86 | Mining<br>Transazione Bitcoin | Halving | Fork della blockchain |
| **Halving** | informatica | dimezzamento della ricompensa; 21 milioni di bitcoin; offerta massima di Bitcoin | `03-Bitcoin.pdf` pp. 86-90 | Coinbase transaction<br>Serie geometrica (esistente) | Rapporto tra flusso e riserva | Fee di transazione<br>Difficoltà di mining |
| **Nodi di Bitcoin** | informatica | full node; light node; nodo completo; nodo leggero; Simple Payment Verification; SPV; header chain | `03-Bitcoin.pdf` pp. 62-67 | Merkle tree<br>Modello UTXO<br>Struttura del blocco Bitcoin | — | Mining |
| **Soft fork e hard fork** | informatica | soft fork; hard fork; Bitcoin Cash; Bitcoin Gold; Bitcoin SV; Ethereum Classic | `03-Bitcoin.pdf` pp. 68-80 | Fork della blockchain | Altcoin | SegWit<br>Decentralized Autonomous Organization |
| **Wallet di criptovalute** | informatica | wallet; portafoglio; hot wallet; cold wallet; hardware wallet; paper wallet; custodial wallet; non custodial wallet; lost bitcoin | `03-Bitcoin.pdf` pp. 91-104 | Indirizzo Bitcoin<br>Crittografia a chiave pubblica | Self Sovereign Identity | Regolamento MiCA<br>Proof of Burn |
| **Multisignature** | informatica | multisig; firma multipla; firma a soglia; m-su-n; P2SH; Pay-to-Script-Hash; Taproot; P2TR | `03-Bitcoin.pdf` pp. 116-121; `01-Strumenti.pdf` p. 35 | Firma digitale<br>Indirizzo Bitcoin | Canale di pagamento | ECDSA |
| **SegWit** | informatica | Segregated Witness; P2WPKH; Pay-to-witness-public-key-hash; indirizzi bc1 | `03-Bitcoin.pdf` pp. 51, 120 | Indirizzo Bitcoin<br>Struttura del blocco Bitcoin | — | Soft fork e hard fork |
| **Hashed Timelock Contract** | informatica | HTLC; timelock; hashlock; contratto a tempo e hash | `03-Bitcoin.pdf` pp. 106-109 | Funzione hash crittografica<br>Transazione Bitcoin | Atomic swap<br>Lightning Network | Smart contract |
| **Atomic swap** | informatica | scambio atomico; cross-chain swap; scambio cross-chain | `03-Bitcoin.pdf` pp. 110-111 | Hashed Timelock Contract | — | Altcoin<br>Proprietà ACID (esistente) |
| **Strumenti finanziari su Bitcoin** | finanza | future su Bitcoin; ETF spot su Bitcoin; treasury company; posizione long; posizione short; leva | `03-Bitcoin.pdf` pp. 122-132 | Bitcoin<br>Contratto futures (esistente) | — | Tokenizzazione di strumenti finanziari<br>Stablecoin |

## Lightning Network

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Canale di pagamento** | informatica | payment channel; funding transaction; commitment transaction; revocation; penalty mechanism; transazioni off-chain | `03B-Lightning Network.pdf` pp. 4-16 | Multisignature<br>Transazione Bitcoin | Lightning Network | Hashed Timelock Contract |
| **Lightning Network** | informatica | LN; protocollo di livello 2; layer 2; rete di canali di pagamento; atomic transaction | `03B-Lightning Network.pdf` pp. 3, 17-26 | Canale di pagamento<br>Hashed Timelock Contract<br>Grafo (esistente) | — | Fee di transazione<br>Bitcoin |

## Denaro

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Funzioni del denaro** | finanza | unità di conto; mezzo di pagamento; riserva di valore; baratto | `04-Denaro.pdf` pp. 3-6 | — | Commerciabilità del denaro<br>Moneta fiat | Bitcoin |
| **Commerciabilità del denaro** | finanza | salability; commerciabilità in scala; commerciabilità nello spazio; commerciabilità nel tempo | `04-Denaro.pdf` pp. 7-9, 18-19 | Funzioni del denaro | Rapporto tra flusso e riserva<br>Gold standard | — |
| **Rapporto tra flusso e riserva** | finanza | stock-to-flow; flusso; riserva; scarsità; pietre di Yap | `04-Denaro.pdf` pp. 10-17 | Commerciabilità del denaro<br>Halving | Gold standard | Bitcoin |
| **Gold standard** | finanza | moneta merce; tallone aureo; convertibilità in oro; Bretton Woods | `04-Denaro.pdf` pp. 19-30 | Commerciabilità del denaro<br>Rapporto tra flusso e riserva | Moneta fiat | — |
| **Moneta fiat** | finanza | fiat money; fiat standard; moneta a corso legale; fine di Bretton Woods 1971 | `04-Denaro.pdf` pp. 23-31 | Gold standard<br>Funzioni del denaro | Stablecoin<br>CBDC | — |

## Ethereum e Blockchain 2.0

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Ethereum** | informatica | ETH; ether; Blockchain 2.0; Vitalik Buterin; confronto Bitcoin-Ethereum | `05-Blockchain2.pdf` pp. 3-5, 11; `02-Introduzione.pdf` p. 35 | Blockchain<br>Bitcoin | Ethereum Virtual Machine | Proof of Stake<br>Modello UTXO |
| **Ethereum Virtual Machine** | informatica | EVM; gas; Turing completezza; Turing completeness | `05-Blockchain2.pdf` pp. 6-7 | Ethereum<br>Problema della fermata (esistente)<br>Compilazione e interpretazione (esistente) | Smart contract | — |
| **Smart contract** | informatica | contratto intelligente; dApp; decentralized application; Solidity; Vyper; Nick Szabo | `05-Blockchain2.pdf` pp. 8-10; `02-Introduzione.pdf` pp. 23-24 | Ethereum Virtual Machine<br>Precursori di Bitcoin | Token crittografico<br>Finanza decentralizzata<br>Decentralized Autonomous Organization<br>Oracolo blockchain | Hashed Timelock Contract<br>Tracciabilità di filiera su blockchain |
| **Token crittografico** | informatica | token; utility token; security token; payment token; token nativo; fan token | `05-Blockchain2.pdf` pp. 12-17 | Smart contract | ERC-20<br>Token non fungibile<br>Initial Coin Offering<br>Finanza decentralizzata<br>Web3 | Stablecoin |
| **ERC-20** | informatica | standard ERC-20; Ethereum Request for Comment; token fungibile; totalSupply; transferFrom; allowance | `05-Blockchain2.pdf` pp. 18-20 | Token crittografico | — | Token non fungibile |
| **Token non fungibile** | informatica | NFT; non-fungible token; ERC-721; ERC-1155; token non fungibili | `05-Blockchain2.pdf` pp. 21-23; `09-Applicazioni.pdf` pp. 76-77 | Token crittografico<br>ERC-20 | Metaverso | Fiscalità delle cripto-attività<br>Tracciabilità di filiera su blockchain |
| **Finanza decentralizzata** | finanza | DeFi; decentralized finance; prestito peer-to-peer | `05-Blockchain2.pdf` pp. 24-25; `09-Applicazioni.pdf` pp. 34-38 | Smart contract<br>Token crittografico | — | Oracolo blockchain<br>Stablecoin<br>Initial Coin Offering |
| **Initial Coin Offering** | finanza | ICO; Security Token Offering; STO; soft cap; hard cap; offerta iniziale di token | `05-Blockchain2.pdf` pp. 26-29 | Token crittografico | Tokenizzazione di strumenti finanziari<br>Decentralized Autonomous Organization | Regolamento MiCA |
| **Decentralized Autonomous Organization** | informatica | DAO; organizzazione autonoma decentralizzata; The DAO; code is law; DFO; Decentralized Flexible Organization | `05-Blockchain2.pdf` pp. 30-36 | Smart contract<br>Initial Coin Offering | — | Soft fork e hard fork<br>Bitcoin |
| **Oracolo blockchain** | informatica | oracle; oracolo; problema dell'oracolo; oracle problem; Chainlink | `05-Blockchain2.pdf` pp. 37-44; `07-Altcoin.pdf` p. 6 | Smart contract | Tracciabilità di filiera su blockchain | Finanza decentralizzata<br>Altcoin |

## Protocolli di consenso

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Proof of Stake** | informatica | PoS; prova di interesse; validatore; staking; Proof of Importance; PoI; Proof of Activity | `06-Protocolli di consenso.pdf` pp. 15-20, 25-26, 37-38 | Protocollo di consenso<br>Proof of Work | Nothing at stake<br>Delegated Proof of Stake<br>Pure Proof of Stake | Proof of Burn<br>Ethereum |
| **Nothing at stake** | informatica | problema nothing at stake; nessuna posta in gioco; Slasher | `06-Protocolli di consenso.pdf` pp. 17-19 | Proof of Stake<br>Fork della blockchain | — | Proof of Work |
| **Delegated Proof of Stake** | informatica | DPoS; producer; delegati | `06-Protocolli di consenso.pdf` pp. 21-23 | Proof of Stake | — | Proof of Authority<br>Pure Proof of Stake |
| **Pure Proof of Stake** | informatica | PPoS; Algorand; comitato sorteggiato | `06-Protocolli di consenso.pdf` p. 24; `07-Altcoin.pdf` p. 11 | Proof of Stake | — | Delegated Proof of Stake<br>Altcoin |
| **Proof of Authority** | informatica | PoA; consenso basato sulla reputazione; validatori autorizzati | `06-Protocolli di consenso.pdf` pp. 27-29 | Protocollo di consenso | Voto elettronico su blockchain | Delegated Proof of Stake<br>Blockchain |
| **Proof of Burn** | informatica | PoB; bruciatura di monete; eater address; Slimcoin; deposit-based consensus | `06-Protocolli di consenso.pdf` pp. 30-36 | Protocollo di consenso | — | Proof of Stake<br>Wallet di criptovalute |
| **Proof of Space** | informatica | PoSpace; Proof of Capacity; Proof of Storage; Burst; Filecoin; proof-of-replication; proof-of-spacetime | `06-Protocolli di consenso.pdf` pp. 39-48 | Protocollo di consenso<br>Proof of Work | — | — |

## Altcoin, stablecoin e CBDC

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Altcoin** | informatica | criptovalute alternative; generazioni di criptovalute; Ripple; XRP; Cardano; Solana; Litecoin | `07-Altcoin.pdf` pp. 3-13 | Bitcoin<br>Soft fork e hard fork | Privacy coin<br>Stablecoin | Pure Proof of Stake<br>Oracolo blockchain<br>Atomic swap |
| **Privacy coin** | informatica | Monero; XMR; ring signature; RingCT; stealth address; privacy di Bitcoin; pseudonimato | `07-Altcoin.pdf` pp. 7-9; `03-Bitcoin.pdf` pp. 146-147 | Altcoin<br>Bitcoin | — | Firma digitale<br>Transazione Bitcoin |
| **Stablecoin** | finanza | moneta stabile; USDT; Tether; USDC; DAI; MakerDAO; collaterale | `07-Altcoin.pdf` pp. 14-24 | Altcoin<br>Moneta fiat | CBDC<br>Regolamento MiCA | Finanza decentralizzata<br>Token crittografico<br>Strumenti finanziari su Bitcoin |
| **CBDC** | finanza | Central Bank Digital Currency; moneta digitale di banca centrale; Libra; Diem | `07-Altcoin.pdf` pp. 25-31 | Moneta fiat<br>Stablecoin | — | — |

## Aspetti normativi

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Regolamento MiCA** | finanza | MiCA; MiCAR; Markets in Crypto-Assets; Regolamento (UE) 2023/1114; ART; EMT; CASP; D.Lgs. 129/2024; GENIUS Act | `08-Aspetti normativi.pdf` pp. 3-14, 22-30 | Stablecoin | — | Initial Coin Offering<br>Wallet di criptovalute<br>Tokenizzazione di strumenti finanziari<br>Fiscalità delle cripto-attività |
| **Fiscalità delle cripto-attività** | finanza | tassazione delle criptovalute; cripto-attività; plusvalenze cripto; imposta di bollo; quadro RW; legge 197/2022 | `08-Aspetti normativi.pdf` pp. 36-66 | Distributed Ledger Technology | — | Regolamento MiCA<br>Token non fungibile |
| **Tokenizzazione di strumenti finanziari** | finanza | tokenizzazione; MiFID; Decreto FinTech; Clarity Act; securities e commodities | `08-Aspetti normativi.pdf` pp. 15-21, 31-35; `05-Blockchain2.pdf` p. 29 | Initial Coin Offering | — | Regolamento MiCA<br>Strumenti finanziari su Bitcoin |

## Applicazioni

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Criteri di adozione della blockchain** | informatica | quando usare una blockchain; tecnologia dirompente; disruptive technology | `09-Applicazioni.pdf` pp. 3-16, 38 | Distributed Ledger Technology<br>Blockchain | Self Sovereign Identity<br>Voto elettronico su blockchain<br>Tracciabilità di filiera su blockchain | — |
| **Self Sovereign Identity** | informatica | SSI; identità digitale autosovrana; credenziali verificabili | `09-Applicazioni.pdf` pp. 54-56 | Criteri di adozione della blockchain<br>Wallet di criptovalute<br>Firma digitale | — | Voto elettronico su blockchain |
| **Voto elettronico su blockchain** | informatica | e-voting; voto elettronico; voto ripetuto; credenziali multiple | `09-Applicazioni.pdf` pp. 49-53 | Criteri di adozione della blockchain<br>Proof of Authority | — | Self Sovereign Identity |
| **Tracciabilità di filiera su blockchain** | informatica | supply chain; tracciabilità; logistica; agroalimentare; farmaceutica; assicurazione parametrica | `09-Applicazioni.pdf` pp. 41-48, 57-75 | Criteri di adozione della blockchain<br>Oracolo blockchain | — | Smart contract<br>Token non fungibile |

## Web3 e metaverso

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Web3** | informatica | Web 3; web decentralizzato; web 1.0; web 2.0; web 3.0 semantico | `10-Metaverso.pdf` pp. 3-5 | Distributed Ledger Technology<br>Token crittografico | Metaverso | — |
| **Metaverso** | informatica | metaverse; realtà aumentata; realtà virtuale; pass-through; see-through; continuum reale-virtuale | `10-Metaverso.pdf` pp. 6-33 | Web3<br>Token non fungibile | — | — |

## Note esistenti estese (sezione "Nei corsi")

- Tabella hash: collegato Funzione hash crittografica (hash per dizionari contro hash crittografico).
- Albero binario: porta a Merkle tree.
- Classi di resto modulo n: porta a RSA ($\mathbb Z_{\varphi(N)}^*$).
- Campo finito, Gruppo ciclico, Teorema di Lagrange sui gruppi: portano a Curva ellittica (secp256k1, ogni punto non nullo è generatore perché $n$ è primo).
- Serie geometrica: porta a Halving (21 milioni di BTC).
- Problema della fermata, Compilazione e interpretazione: portano a Ethereum Virtual Machine.
- Proprietà ACID: collegato Atomic swap (atomicità per analogia).
- Grafo: porta a Lightning Network.
- Contratto futures: porta a Strumenti finanziari su Bitcoin.
- Note create dall'agente di Crittografia ed estese da questo corso: Scambio di chiavi Diffie-Hellman (articolo del 1976), Paradosso del compleanno (Equihash, collegato a Proof of Work), Bit commitment (hashlock, collegato a Hashed Timelock Contract), Prova a conoscenza nulla (Crypto Anarchist Manifesto, collegato a Self Sovereign Identity). Costruzione di Merkle-Damgård non è nelle slide: solo link da Merkle tree.

## Concetti esterni (da collegare)

- Collegamenti con le note del corso di Crittografia (agente parallelo, nomi concordati): Funzione phi di Eulero (teorema di Eulero in RSA), Scambio di chiavi Diffie-Hellman, Paradosso del compleanno (Equihash), Costruzione di Merkle-Damgård, Bit commitment, Prova a conoscenza nulla, Firma di Schnorr, DSA. Sono già link: alcuni convertiti dall'agente di Crittografia, gli altri da questo corso.
- **Computer quantistico e crittografia post-quantistica**: `03-Bitcoin.pdf` p. 133; resta "(da collegare)" in Problema del logaritmo discreto.
- **Teoria dei giochi e incentivi**: le slide parlano di incentivi (Lightning, DPoS, PoB, fee) ma senza modelli formali. In Canale di pagamento un altro agente ha collegato Equilibrio di Nash.
- **Ordinals e Colored coins** (`03-Bitcoin.pdf` pp. 112-115): citati in Bitcoin, senza nota propria.

## Dubbi

- `03-Bitcoin.pdf` p. 5 dice che l'header ha "sette campi", ma la tabella di p. 7 ne elenca sei (Version, hashPrevBlock, hashMerkleRoot, Time, Bits, Nonce; 80 byte). Nella nota si riporta la tabella.
- `07-Altcoin.pdf` p. 11 attribuisce ad Algorand la "PPoW (Pure Proof of Work)", mentre `06-Protocolli di consenso.pdf` p. 24 parla di PPoS: le note usano PPoS e segnalano la discrepanza.
- `06-Protocolli di consenso.pdf` p. 33 (Proof of Burn) scrive "la PoW potrebbe anche essere usata come strumento per una transizione morbida... bruciando la vecchia moneta come PoB": dal contesto sembra intendere la PoB; riportato con questa avvertenza.
- `05-Blockchain2.pdf` p. 19: le descrizioni dei sei "parametri" ERC-20 sono riportate come nelle slide, anche dove sembrano imprecise (per esempio `balanceOf` descritto come assegnazione iniziale di token).
- Security token: a p. 14 di `05-Blockchain2.pdf` dà diritto al profitto; a p. 26 (ICO) può essere "a tutti gli effetti una sorta di azione"; a p. 28 (STO) "non rappresenta una quota della società". Riportate le tre formulazioni.
- Cifre datate (dimensioni della blockchain e UTXO set a marzo 2026, difficulty circa 150 T a marzo 2026, aliquota del 26% per il 2025 e 33% "negli anni seguenti", capitalizzazioni): riportate con la data della slide.
- La dispensa aggiunge elementi che non compaiono nelle slide (watchtower, finality gadget, governance token, stablecoin "algoritmiche" come classe, "maggiore lavoro cumulato", tre categorie di nodi con SPV separato): nelle note sono omessi o dichiarati come provenienti dalla dispensa.
- La somma dei punti di una curva ellittica è mostrata nelle slide solo graficamente (pp. 22-24) e con la tabella delle somme per $p=13$ (p. 27, immagine): le formule algebriche della somma non sono nelle fonti e non sono riportate.
- La sicurezza di RSA legata alla fattorizzazione è affermata dalla dispensa, non dalla slide RSA: dichiarato nella nota.
