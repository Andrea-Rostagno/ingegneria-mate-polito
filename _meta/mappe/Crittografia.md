---
tipo: meta
tags: [meta, mappa]
corso: Crittografia
livello: magistrale
cartella: magistrale/Crittografia
---

# Mappa delle competenze: Crittografia

Mappa concettuale del corso `magistrale/Crittografia` (Politecnico di Torino). La cartella contiene due edizioni dello stesso corso:
- **Crittografia** della Laurea Magistrale in Ingegneria Matematica, in italiano. Le dispense "Critto 1-7" sono di Di Scala (2020), le slide "Critto 8-13" di D. Bazzanella.
- **Cryptography (03LPYOV)**, in inglese. Le dispense "Crypto 1-14" sono di Di Scala (2020); le lezioni di laboratorio su OpenSSL, Python e attacchi sono di C. Basile.

Numeri:
- **78 competenze nuove**: 74 in area `informatica` e 4 in `algebra-geometria`. In area `algebra-geometria` vanno la phi di Eulero, l'esponenziazione veloce, i residui quadratici e i test di primalità.
- **23 note esistenti estese**: 11 di Istituzioni algebra e di altri corsi, 12 create dall'agente di Blockchain e criptoeconomia.

Le 101 note del corso formano un'unica componente connessa, con grado interno minimo 2. I nomi sono in testo semplice (non wikilink), così la mappa non entra nel grafo. "Porta a" è l'inverso di "Prerequisiti"; "(esistente)" indica una nota già presente ed estesa, "(esterno)" una nota di un altro corso collegata ma non estesa. Le colonne sono state ricavate dai link reali delle note.

## Inventario del materiale (2026-11-25)

156 PDF (circa 4600 pagine), 540 `.py`, 21 `.tex`, immagini. Molti file sono duplicati: 27 coppie di PDF identiche per md5, tra cui le due copie di Critto 1-13 e le due copie delle slide di Basile.

| Cartella / file | Contenuto | Uso |
|---|---|---|
| `Esercitazioni/SoluzioniCrypto/Critto_week1-7.pdf` | dispense italiane Di Scala 2020 (Critto 1-7), con esercizi svolti in coda o intercalati | **fonte primaria**, solo le pagine di lezione. Il nome della cartella inganna: non sono solo soluzioni. |
| `Slide/slide crittografia italiano/slide critto italiano/Critto8-13.pdf` | slide Bazzanella: chiave pubblica, hash e MAC, protocolli di base e avanzati, blockchain | **fonte primaria** |
| `Slide/slides week 1-14/weekN/CryptoN.pdf` | dispense inglesi Di Scala 2020, Crypto 1-14 | **fonte primaria** |
| `Slide/presentations/presentations/*.pdf` | 14 lezioni di laboratorio di Basile: OpenSSL, Python, attacchi simmetrici, RSA, hash | **fonte primaria** per gli attacchi pratici |
| `Slide/slide crittografia italiano/.../Critto1-7.pdf`, `Slide/Corso italiano - lezioni ed esercizi (Critto 1-13)/` | versione 2019 di Critto 1-7 (testo con legature perse) e copia identica di Critto 1-13 | non usate, sostituite dalla versione 2020 |
| `Slide/slides week 1-14/weekN/Lesson*.pdf`, `thuesday*`, `Recover9` | appunti a mano del docente, senza testo | non usati |
| `Slide/slides week 1-14/week8,12,13/` paper (Hellman 1980, Boneh-Lynn-Shacham, SRP di Wu, SAE di Harkins) | articoli di riferimento | consultati solo per pairing, SRP e SAE |
| `Repository GitHub/CryptoNotes2021/` | appunti LaTeX di studenti 2021 | fonte secondaria, usata solo per la firma di Schnorr, che le dispense danno come link |
| `Repository GitHub/cryptography-03lpyov-exercises/`, `Esercitazioni/Esercitazioni/exercises/` | script `.py` e `.c` del laboratorio (6 annate) | solo campioni dell'annata AY2021: `bf_client.py`, `ECB_ACPAttack_client.py`, `fermat_factorization.py`, `common_modulus.py`, `LSB_Oracle_client.py` |
| `Libri/` | Paar-Pelzl *Understanding Cryptography*, Schneier *Applied Cryptography*, Rescorla *SSL and TLS*, Viega *Network Security with OpenSSL* | non usati per scrivere note; citati dalle dispense |
| `Esami (Holy Crypto Bible)/`, `Esami (vecchi)/`, `Esercitazioni/SoluzioniCrypto/Soluzioni8-13.pdf`, `Slide/.../Esercizi_week9-14.pdf`, `Critto2_eser/`, `week12/ChineseRemainderThm.pdf`, `sample_exercises/` | temi d'esame, esercizi e soluzioni | **scartati** (regola "niente esami") |
| `Appunti, schemi e formulari/` (schema degli attacchi, `formulario.docx`, `.rar`), `Guida al corso (dal gruppo Telegram).md` | materiale di studenti | non usati come fonte |

Convenzione: "p. N" è la pagina del PDF, non il numero stampato.

## Fondamenti e cifrari classici (Critto 1-2, Crypto 1)

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Schema di cifratura simmetrica** | informatica | symmetric cipher, symmetric encryption scheme, cifrario simmetrico, cifrario a chiave privata, "(Gen, Enc, Dec); spazio delle chiavi, testo in chiaro, plaintext, crittogramma, ciphertext | Critto_week1.pdf; Crypto1.pdf | Classi di resto modulo n (esistente) | Principio di Kerckhoffs<br>Modelli di attacco crittografico<br>Segretezza perfetta<br>Cifrario di Cesare<br>One-time pad | Crittografia a chiave pubblica (esistente) |
| **Principio di Kerckhoffs** | informatica | Kerckhoffs's principle, Kerckhoffs principle, principio di Kerckhoff, sicurezza tramite segretezza della chiave | Critto_week1.pdf | Schema di cifratura simmetrica | Modelli di attacco crittografico | Cifrario di Vigenère<br>Crittografia a chiave pubblica (esistente) |
| **Modelli di attacco crittografico** | informatica | attack models, COA, ciphertext-only attack, KPA, known-plaintext attack, CPA, chosen-plaintext attack, CCA, chosen-ciphertext attack, attacco a forza bruta, brute force attack, security level, livello di sicurezza, crib | Critto_week1.pdf; Crypto1.pdf | Schema di cifratura simmetrica<br>Principio di Kerckhoffs | Sicurezza IND-CPA<br>Attacco meet-in-the-middle<br>Indice di coincidenza | Distanza di unicità<br>Attacco man-in-the-middle<br>Cifrario di Cesare |
| **Sicurezza IND-CPA** | informatica | IND-CPA, CPA-IND, CPA security, indistinguibilità, indistinguishability, IND, CCA-IND, IND-CCA, non malleabilità, non-malleability, NM, cifratura probabilistica, probabilistic encryption, esperimento IND | Critto_week1.pdf; Crypto1.pdf; Critto_week2.pdf | Modelli di attacco crittografico<br>Segretezza perfetta | — | Crittografia a chiave pubblica (esistente)<br>Attacco bit flipping<br>Schema di cifratura simmetrica |
| **Attacco man-in-the-middle** | informatica | man-in-the-middle attack, MitM, uomo nel mezzo, avversario attivo, active adversary, attacco di impersonificazione, impersonation attack | Critto_week1.pdf | Modelli di attacco crittografico<br>Crittografia a chiave pubblica (esistente) | Scambio di chiavi Diffie-Hellman | Attacco meet-in-the-middle |
| **Cifrario di Cesare** | informatica | Caesar cipher, cifrario a scorrimento, shift cipher, rot3, rot13, ROT13, ⊞-cipher, cifrario monoalfabetico, monoalphabetic cipher, rot cipher, circular shift | Crypto1.pdf; Critto_week1.pdf; Critto_week3.pdf | Classi di resto modulo n (esistente)<br>Schema di cifratura simmetrica | Cifrario di Vigenère<br>Cifrario affine | One-time pad<br>Distanza di unicità<br>Modelli di attacco crittografico |
| **Cifrario di Vigenère** | informatica | Vigenère cipher, Vigenere cipher, cifrario di Vigenere, cifrario polialfabetico, polyalphabetic cipher, tabula recta, sovrapposizione di Kerckhoffs, Kerckhoffs superimposition, attacco di Kasiski, verme | Critto_week1.pdf; Critto_week2.pdf; Critto_week3.pdf | Cifrario di Cesare<br>Classi di resto modulo n (esistente) | Indice di coincidenza | One-time pad<br>Principio di Kerckhoffs<br>Modelli di attacco crittografico |
| **Indice di coincidenza** | informatica | index of coincidence, kappa test di Friedman, Friedman's kappa test, phi test di Kullback, Kullback's phi test, test Kappa, test Phi, analisi delle frequenze, frequency analysis, kappa plaintext, kappa random | Critto_week2.pdf; Critto_week1.pdf | Cifrario di Vigenère<br>Probabilità condizionata (esterno) | Distanza di unicità | Entropia di Shannon<br>Modelli di attacco crittografico<br>Cifrario di Cesare |
| **Cifrario affine** | informatica | affine cipher, cifrario a blocchi affine, affine block cipher, Enc(P) = A P + v | Critto_week3.pdf | Matrice inversa (esterno)<br>Gruppo (esterno) | — | Cifrario di Hill<br>Cifrario di Cesare<br>Teorema di Lagrange sui gruppi (esistente)<br>Modelli di attacco crittografico |
| **Cifrario di Hill** | informatica | Hill cipher, Hill's cipher, cifrario a trasposizione, transposition cipher, matrice di trasposizione, permutation table, tabella di trasposizione | Critto_week3.pdf; Critto_week1.pdf | Matrice inversa (esterno)<br>Classi di resto modulo n (esistente)<br>Spazio vettoriale (esterno) | — | Cifrario affine<br>Gruppo simmetrico (esterno)<br>Teorema cinese dei resti (esistente) |
| **Segretezza perfetta** | informatica | perfect secrecy, segretezza perfetta di Shannon, teorema di Shannon sulla segretezza perfetta, Shannon's perfect secrecy theorem, cifrario secondo Shannon, quadrato latino, latin square, indistinguibilità perfetta, perfect indistinguishability | Critto_week2.pdf; Crypto1.pdf | Probabilità condizionata (esterno)<br>Indipendenza di variabili aleatorie (esterno)<br>Schema di cifratura simmetrica | One-time pad<br>Sicurezza IND-CPA<br>Entropia di Shannon | — |
| **Entropia di Shannon** | informatica | Shannon entropy, entropia dell'informazione, information entropy, H(k), equivocazione, equivocation, key equivocation, entropia condizionale, conditional entropy, entropia della chiave | Critto_week2.pdf | Valore atteso (esterno)<br>Variabile aleatoria discreta (esterno)<br>Probabilità condizionata (esterno) | Distanza di unicità | Segretezza perfetta<br>Entropia (esterno)<br>Indice di coincidenza |
| **Distanza di unicità** | informatica | unicity distance, distanza d'unicità, chiavi spurie, spurious keys, ridondanza della lingua, redundancy of a language, entropia per lettera, entropy per letter | Critto_week2.pdf | Entropia di Shannon<br>Cifrario di Cesare | — | Indice di coincidenza<br>Modelli di attacco crittografico<br>Segretezza perfetta |
| **One-time pad** | informatica | one time pad, cifrario di Vernam, Vernam cipher, ⊕-cipher, xor cipher, blocco monouso, cifrario di Vernam-Mauborgne | Critto_week3.pdf; Crypto1.pdf | Segretezza perfetta<br>Classi di resto modulo n (esistente) | Cifrario a flusso<br>Riuso del keystream | Cifrario di Vigenère<br>Cifrario di Cesare |
| **Attacco meet-in-the-middle** | informatica | meet-in-the-middle attack, attacco meet in the middle, doppia cifratura, double encryption, prodotto di cifrari, composizione di cifrari, algebra dei cifrari, combinazione convessa di cifrari | Critto_week2.pdf; 200409_03LPYOV_symmetric_attacks.pdf | Modelli di attacco crittografico<br>Schema di cifratura simmetrica | Data Encryption Standard | Attacco man-in-the-middle<br>Distanza di unicità |

## Aritmetica per la crittografia (Critto 3, Crypto 6)

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Funzione phi di Eulero** | algebra-geometria | Euler's totient function; funzione totient; totient; phi di Eulero; φ(n); teorema di Eulero; Euler's theorem; teorema generalizzato di Eulero | Crypto6.pdf; Critto_week3.pdf | Classi di resto modulo n (esistente)<br>Teorema cinese dei resti (esistente)<br>Teorema di Lagrange sui gruppi (esistente) | RSA (esistente)<br>Test di primalità | Piccolo teorema di Fermat (esistente)<br>Ordine di un elemento (esistente)<br>Esponenziazione modulare veloce |
| **Esponenziazione modulare veloce** | algebra-geometria | square-and-multiply; square and multiply; algoritmo quadra e moltiplica; modular exponentiation; esponenziazione modulare; potenza modulare; fast modular exponentiation | Crypto6.pdf | Classi di resto modulo n (esistente) | RSA (esistente)<br>Test di primalità<br>Residui quadratici | Problema del logaritmo discreto (esistente)<br>Funzione phi di Eulero<br>Costo computazionale di un algoritmo (esterno) |
| **Residui quadratici** | algebra-geometria | quadratic residues; residuo quadratico; quadratic residue; radice quadrata modulare; modular square root; criterio di Eulero; Euler's criterion; algoritmo di Cipolla; Cipolla's algorithm; Tonelli-Shanks; equazione di secondo grado modulo N | Critto_week3.pdf; Crypto6.pdf | Classi di resto modulo n (esistente)<br>Gruppo ciclico (esistente)<br>Esponenziazione modulare veloce | Generatore Blum-Blum-Shub<br>Crittosistema di Rabin | Teorema cinese dei resti (esistente)<br>Piccolo teorema di Fermat (esistente)<br>Teorema di Lagrange sui gruppi (esistente) |
| **Test di primalità** | algebra-geometria | primality test; test di Rabin-Miller; test di Miller-Rabin; Miller-Rabin test; Rabin-Miller test; test di Fermat; Fermat primality test; numeri pseudoprimi; pseudoprime; criterio di Lucas; generazione di numeri primi grandi; teorema dei numeri primi; prime number theorem | Crypto6.pdf; Critto_week3.pdf | Piccolo teorema di Fermat (esistente)<br>Esponenziazione modulare veloce<br>Classi di resto modulo n (esistente) | RSA (esistente) | Gruppo ciclico (esistente)<br>Teorema fondamentale dell'aritmetica (esterno)<br>Funzione phi di Eulero<br>Fattorizzazione di Fermat |

## Casualità e cifrari a flusso (Critto 4, Crypto 2-3)

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Cifrario a flusso** | informatica | stream cipher; cifrario a flusso sincrono; synchronous stream cipher; cifrario a flusso non sincronizzato; keystream; flusso di chiave; PRNG crittografico; Init e GetBits; entropy pool | Crypto2.pdf; Critto_week4.pdf | One-time pad<br>Numeri pseudo-casuali (esistente) | LFSR<br>RC4<br>Salsa20 e ChaCha20<br>Riuso del keystream | Sicurezza IND-CPA<br>Generatore Blum-Blum-Shub<br>Modalità CTR |
| **LFSR** | informatica | linear feedback shift register; registro a scorrimento a retroazione lineare; Fibonacci LFSR; Galois LFSR; LFSR di Fibonacci; LFSR di Galois; polinomio di feedback; feedback polynomial; m-sequenza; generatore di Geffe; Geffe generator; attacco di correlazione; correlation attack | Crypto2.pdf; Critto_week4.pdf | Cifrario a flusso<br>Autovalori e autovettori (esterno)<br>Anello dei polinomi (esterno) | Numeri pseudo-casuali (esistente) | Polinomio irriducibile (esterno)<br>Campo finito (esistente)<br>Serie di potenze (esterno)<br>Modelli di attacco crittografico |
| **RC4** | informatica | Rivest Cipher 4; ARC4; ARCFOUR; Key Scheduling Algorithm; KSA; RC4 KSA | Crypto3.pdf; Critto_week4.pdf; 200326_03LPYOV_crypto_in_python.pdf | Cifrario a flusso<br>Classi di resto modulo n (esistente) | Riuso del keystream | Salsa20 e ChaCha20<br>Gruppo simmetrico (esterno) |
| **Salsa20 e ChaCha20** | informatica | Salsa20; ChaCha20; ChaCha; XChaCha20; quarter-round; funzione quarter-round; architettura ARX; ARX; add-rotate-xor | Crypto3.pdf; Critto_week4.pdf; 200326_03LPYOV_crypto_in_python.pdf | Cifrario a flusso<br>Classi di resto modulo n (esistente) | Attacco bit flipping | RC4<br>Confusione e diffusione<br>Modalità CTR<br>Message authentication code |
| **Generatore Blum-Blum-Shub** | informatica | Blum-Blum-Shub; BBS; BBS PRNG; generatore x^2 mod N; x^2 mod N generator; next bit test; test del bit successivo; PRNG crittograficamente sicuro; sostituzione omofonica | Critto_week4.pdf | Residui quadratici<br>Numeri pseudo-casuali (esistente) | Sicurezza IND-CPA | Cifrario a flusso<br>Crittosistema di Rabin<br>Teorema cinese dei resti (esistente)<br>RSA (esistente) |

## Cifrari a blocchi (Critto 5, Crypto 4-5)

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Confusione e diffusione** | informatica | confusion and diffusion; confusione; confusion; diffusion (Shannon); principi di Shannon per i cifrari | Critto_week5.pdf; Crypto4.pdf | Indice di coincidenza | Cifrario a blocchi<br>Rete a sostituzione-permutazione<br>Data Encryption Standard | Distanza di unicità<br>AES |
| **Cifrario a blocchi** | informatica | block cipher; cifrari a blocchi; round; key schedule; funzione di round; effetto valanga; avalanche effect | Critto_week5.pdf; Crypto4.pdf | Schema di cifratura simmetrica<br>Confusione e diffusione | Rete di Feistel<br>Rete a sostituzione-permutazione<br>Data Encryption Standard<br>AES<br>Modalità ECB<br>Modalità CBC | Cifrario a flusso<br>Attacco meet-in-the-middle |
| **Rete di Feistel** | informatica | Feistel network; Feistel cipher; schema di Feistel; round di Feistel; Feistel round | Critto_week5.pdf; Crypto4.pdf | Cifrario a blocchi | Data Encryption Standard | Rete a sostituzione-permutazione<br>Confusione e diffusione |
| **Rete a sostituzione-permutazione** | informatica | substitution-permutation network; SPN; SP network; S-box; substitution box; round SP | Critto_week5.pdf; Crypto4.pdf | Cifrario a blocchi<br>Confusione e diffusione | AES | Rete di Feistel<br>Data Encryption Standard |
| **Data Encryption Standard** | informatica | DES (cifrario); DES cipher; 3DES; Triple DES; Triplo DES; 2DES; DES EDE; key schedule di DES; S-box di DES | Critto_week5.pdf; Crypto4.pdf | Rete di Feistel<br>Cifrario a blocchi<br>Confusione e diffusione | Attacco meet-in-the-middle<br>AES | Rete a sostituzione-permutazione<br>Modelli di attacco crittografico<br>Modalità CFB e OFB |
| **AES** | informatica | Advanced Encryption Standard; Rijndael; AES-128; AES-192; AES-256; SubBytes; ShiftRows; MixColumns | Critto_week5.pdf; Crypto4.pdf | Rete a sostituzione-permutazione<br>Cifrario a blocchi<br>Campo finito (esistente) | Modalità GCM<br>Attacco ECB byte-at-a-time | Data Encryption Standard<br>Confusione e diffusione |
| **Modalità ECB** | informatica | ECB; Electronic Codebook; Electronic Code Book; ECB mode; block replay | Critto_week5.pdf; Crypto5.pdf; 200416_03LPYOV_symmetric_attacks2.pdf | Cifrario a blocchi | Attacco ECB byte-at-a-time<br>Attacco ECB copy-paste | Modalità CBC<br>Sicurezza IND-CPA<br>Message authentication code |
| **Modalità CBC** | informatica | CBC; Cipher Block Chaining; CBC mode; vettore di inizializzazione; initialization vector; IV | Critto_week5.pdf; Crypto5.pdf; 200423_03LPYOV_symmetric_attacks3.pdf | Cifrario a blocchi<br>Modalità ECB | Attacco bit flipping<br>Attacco padding oracle<br>Message authentication code | Sicurezza IND-CPA<br>Modalità CTR |
| **Modalità CFB e OFB** | informatica | CFB; OFB; Cipher Feedback; Output Feedback; CFB mode; OFB mode; K-bit CFB | Critto_week5.pdf; Crypto5.pdf | Cifrario a blocchi<br>Cifrario a flusso | Riuso del keystream | Modalità CTR<br>Modalità CBC<br>Numeri pseudo-casuali (esistente)<br>Data Encryption Standard |
| **Modalità CTR** | informatica | CTR; Counter mode; modalità contatore; CTR mode; counter | Critto_week5.pdf; Crypto5.pdf | Cifrario a blocchi<br>Cifrario a flusso | Modalità GCM<br>Riuso del keystream | Modalità CFB e OFB<br>Modelli di attacco crittografico<br>One-time pad |
| **Modalità GCM** | informatica | GCM; Galois Counter Mode; Galois/Counter Mode; AEAD; authenticated encryption; cifratura autenticata; AAD; CCM; Counter CBC-MAC | Critto_week5.pdf; Crypto5.pdf | Modalità CTR<br>Campo finito (esistente) | Message authentication code | AES<br>Modalità CBC<br>Attacco bit flipping |

## Hash e MAC (Critto 6, Critto 9, Crypto 7-8, Basile hash attacks)

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Funzione one-way** | informatica | one-way function, funzione unidirezionale, funzione a senso unico, trapdoor, funzione one-way con trapdoor, trapdoor one-way function, botola, preimage resistance property | Crypto7.pdf; Critto_week6.pdf | Problema del logaritmo discreto (esistente)<br>Cifrario a blocchi | Funzione hash crittografica (esistente)<br>Scambio di chiavi Diffie-Hellman<br>RSA (esistente)<br>Crittosistema di Rabin<br>Tabelle rainbow | Crittografia a chiave pubblica (esistente)<br>Paradosso del compleanno |
| **Paradosso del compleanno** | informatica | birthday paradox, attacco del compleanno, birthday attack, metodo rho, rho method, algoritmo di Floyd, Floyd's cycle-finding algorithm, bound del compleanno, 2^(n/2) | Critto_week6.pdf; Crypto7.pdf | Funzione hash crittografica (esistente)<br>Calcolo combinatorio (esterno) | Problema del logaritmo discreto (esistente) | Funzione one-way<br>Tabelle rainbow<br>Costruzione di Merkle-Damgård |
| **Costruzione di Merkle-Damgård** | informatica | Merkle-Damgård construction, Merkle-Damgard, schema di Merkle-Damgård, funzione di compressione, compression function, Davies-Meyer, costruzione di Davies-Meyer, SHA-2, SHA-224, SHA-512, MD4 | Critto_week6.pdf; Crypto7.pdf; Crypto8.pdf | Funzione hash crittografica (esistente)<br>Cifrario a blocchi<br>Divisione tra polinomi (esterno) | Attacco length extension<br>HMAC | Costruzione a spugna<br>Salsa20 e ChaCha20<br>Paradosso del compleanno |
| **Costruzione a spugna** | informatica | sponge construction, funzione spugna, sponge function, spugna, Keccak-f, permutazione Keccak-f, SHAKE128, SHAKE256, extendable-output function, XOF, bitrate, capacità della spugna | Critto_week6.pdf; Crypto7.pdf; Crypto8.pdf | Funzione hash crittografica (esistente)<br>Funzione one-way | Cifrario a flusso | Costruzione di Merkle-Damgård<br>Firma digitale (esistente) |
| **Message authentication code** | informatica | MAC, codice di autenticazione del messaggio, tag, keyed digest, keyed-digest, Gen Mac Vrfy, sicurezza di un MAC | Crypto7.pdf; Critto9.pdf; 200319_03LPYOV_openssl_hash_mac_random_1X.pdf | Schema di cifratura simmetrica<br>Funzione hash crittografica (esistente) | HMAC<br>Attacco length extension<br>Modalità GCM | Firma digitale (esistente)<br>Checksum e CRC |
| **HMAC** | informatica | keyed-hash message authentication code, HMAC, ipad, opad, inner hash, outer hash, HMAC-SHA1, HMAC-MD5 | Crypto7.pdf; Critto9.pdf; 200319_03LPYOV_openssl_hash_mac_random_1X.pdf | Message authentication code<br>Costruzione di Merkle-Damgård<br>Funzione hash crittografica (esistente) | — | Attacco length extension<br>Protocolli WEP e WPA |
| **Attacco length extension** | informatica | length extension attack, attacco di estensione della lunghezza, estensione di lunghezza, HashPump, keyed digest forgery | 200604_03LPYOV_hash_attacks.pdf; Crypto7.pdf; Critto_week6.pdf | Costruzione di Merkle-Damgård<br>Message authentication code | HMAC | Funzione hash crittografica (esistente)<br>Costruzione a spugna |
| **Tabelle rainbow** | informatica | rainbow table, tabelle di Hellman, Hellman's tables, compromesso tempo-memoria, time-memory trade-off, look up table, funzione di riduzione, salt, sale | Crypto8.pdf | Funzione one-way<br>Funzione hash crittografica (esistente)<br>Modelli di attacco crittografico | — | Paradosso del compleanno<br>Attacco meet-in-the-middle<br>One-time password |
| **Checksum e CRC** | informatica | checksum, somma di controllo, CRC, cyclic redundancy check, controllo di ridondanza ciclico, LRC, longitudinal redundancy check, Internet checksum, RFC-1071, bit di parità, CRC-8, CRC-32 | Critto9.pdf | Divisione tra polinomi (esterno)<br>Classi di resto modulo n (esistente) | Protocolli WEP e WPA | Funzione hash crittografica (esistente)<br>Message authentication code<br>Anello dei polinomi (esterno) |
| **Protocolli WEP e WPA** | informatica | WEP, Wired Equivalent Privacy, WPA, Wi-Fi Protected Access, WPA2, WPA3, TKIP, Temporal Key Integrity Protocol, KRACK, sicurezza Wi-Fi, algoritmo Michael, MIC | Critto9.pdf; Crypto14.pdf | RC4<br>Checksum e CRC<br>AES | — | Simultaneous Authentication of Equals<br>Message authentication code<br>Riuso del keystream |

## Chiave pubblica (Critto 6-8, Crypto 9, Basile RSA attacks)

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Scambio di chiavi Diffie-Hellman** | informatica | Diffie-Hellman key exchange, Diffie-Hellman, DH, protocollo di Diffie-Hellman, scambio DH, problema di Diffie-Hellman, DHP, Diffie-Hellman assumption, domain parameters | Critto_week6.pdf; Critto_week7.pdf; Crypto9.pdf | Gruppo ciclico (esistente)<br>Problema del logaritmo discreto (esistente)<br>Esponenziazione modulare veloce | Cifratura ElGamal (esistente)<br>Diffie-Hellman su curve ellittiche<br>Encrypted Key Exchange<br>Protocollo di Massey-Omura | Attacco man-in-the-middle<br>Crittografia a chiave pubblica (esistente)<br>Cifratura ibrida |
| **Crittosistema di Rabin** | informatica | Rabin cryptosystem, sistema di Rabin, cifrario di Rabin, Rabin textbook, criptosistema di Rabin | Crypto9.pdf; Critto8.pdf | Residui quadratici<br>Teorema cinese dei resti (esistente)<br>Algoritmo di Euclide (esistente)<br>Piccolo teorema di Fermat (esistente) | Firma digitale (esistente) | RSA (esistente)<br>Crittografia a chiave pubblica (esistente)<br>Funzione one-way |
| **Protocollo di Massey-Omura** | informatica | Massey-Omura cryptosystem, criptosistema di Massey-Omura, Massey-Omura, protocollo del doppio lucchetto, three-pass protocol, EC-Massey-Omura | Critto8.pdf; Crypto12.pdf | Piccolo teorema di Fermat (esistente)<br>Identità di Bézout (esistente)<br>Esponenziazione modulare veloce | Firma digitale (esistente) | Scambio di chiavi Diffie-Hellman<br>Curva ellittica (esistente)<br>Attacco man-in-the-middle |
| **RSA con padding** | informatica | padded RSA, RSA randomizzato, RSA probabilistico, PKCS, Public Key Cryptography Standards, RSA textbook non IND-CPA | Crypto9.pdf; Critto8.pdf; 200528_03LPYOV_RSA_attacks_Python2.pdf | RSA (esistente)<br>Sicurezza IND-CPA | Cifratura ibrida | Modelli di attacco crittografico<br>Attacco di Håstad<br>Firma cieca |
| **Cifratura ibrida** | informatica | hybrid encryption, KEM/DEM, paradigma KEM/DEM, key-encapsulation mechanism, KEM, data-encapsulation mechanism, DEM, Pretty Good Privacy, PGP, PKC ⇒ PKDS | Critto_week1.pdf; Crypto9.pdf; Critto8.pdf | Crittografia a chiave pubblica (esistente)<br>Schema di cifratura simmetrica | Key Distribution Center | RSA (esistente)<br>RSA con padding<br>Scambio di chiavi Diffie-Hellman |
| **Fattorizzazione di Fermat** | informatica | Fermat's factorization method, Fermat factorization, metodo di fattorizzazione di Fermat, attacco a RSA con primi vicini, attacco del primo comune, common prime attack, fattorizzazione del modulo RSA | 200521_03LPYOV_RSA_attacks_Python.pdf; Critto8.pdf; fermat_factorization.py | RSA (esistente)<br>Teorema fondamentale dell'aritmetica (esterno)<br>Algoritmo di Euclide (esistente) | — | Funzione phi di Eulero<br>Attacco del modulo comune<br>Crittosistema di Rabin |
| **Attacco del modulo comune** | informatica | common modulus attack, attacco common modulus, RSA con modulo condiviso, stesso N per più utenti | Crypto9.pdf; 200521_03LPYOV_RSA_attacks_Python.pdf; common_modulus.py | RSA (esistente)<br>Identità di Bézout (esistente)<br>Algoritmo di Euclide (esistente) | — | Attacco di Håstad<br>Fattorizzazione di Fermat<br>Classi di resto modulo n (esistente) |
| **Attacco di Håstad** | informatica | Hastad broadcast attack, Håstad's broadcast attack, attacco di Hastad, attacco broadcast a RSA, low public exponent attack, attacco a esponente pubblico basso, e = 3 | Critto8.pdf; Crypto9.pdf; 200521_03LPYOV_RSA_attacks_Python.pdf | RSA (esistente)<br>Teorema cinese dei resti (esistente)<br>Identità di Bézout (esistente) | — | RSA con padding<br>Attacco del modulo comune<br>Attacco LSB oracle a RSA |
| **Attacco LSB oracle a RSA** | informatica | LSB oracle attack, RSA LSB oracle, parity oracle attack, oracolo del bit meno significativo, least significant bit oracle | 200528_03LPYOV_RSA_attacks_Python2.pdf; LSB_Oracle_client.py | RSA (esistente)<br>Modelli di attacco crittografico | — | RSA con padding<br>Attacco padding oracle<br>Attacco di Håstad |

## Curve ellittiche (Critto 7, Crypto 11-12)

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Diffie-Hellman su curve ellittiche** | informatica | ECDH; Elliptic curve Diffie-Hellman; EC-DH; scambio di chiavi su curve ellittiche; Diffie-Hellman ellittico | Crypto12.pdf; Critto_week7.pdf; Critto8.pdf | Scambio di chiavi Diffie-Hellman<br>Curva ellittica (esistente)<br>Problema del logaritmo discreto (esistente) | Pairing bilineare<br>Protocollo di Massey-Omura | ECDSA (esistente)<br>Teorema cinese dei resti (esistente)<br>Esponenziazione modulare veloce |
| **Pairing bilineare** | informatica | bilinear pairing; pairing; forma bilineare crittografica; pairing di Weil; pairing di Tate; Weil pairing; schema di Joux; Joux key exchange; firma BLS; BLS signature; gap group | Critto_week7.pdf; Crypto12.pdf; 22480516 (Short signatures from the weil pairing).pdf | Curva ellittica (esistente)<br>Campo finito (esistente)<br>Problema del logaritmo discreto (esistente) | Firma digitale (esistente) | Diffie-Hellman su curve ellittiche<br>Scambio di chiavi Diffie-Hellman |

## Firme digitali (Critto 10, Crypto 10)

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Firma RSA** | informatica | RSA signature; firma digitale RSA; RSA digital signature; naive RSA signature; textbook RSA signature; EMSA-PSS; RSA-PSS; Probabilistic Signature Scheme | Crypto10.pdf; Critto10.pdf | RSA (esistente)<br>Firma digitale (esistente)<br>Funzione hash crittografica (esistente) | Firma cieca | RSA con padding<br>Firma ElGamal<br>DSA |
| **Firma ElGamal** | informatica | ElGamal signature; firma digitale ElGamal; ElGamal digital signature; schema di firma di ElGamal | Critto10.pdf | Cifratura ElGamal (esistente)<br>Problema del logaritmo discreto (esistente)<br>Algoritmo di Euclide (esistente) | DSA<br>Firma di Schnorr | Firma digitale (esistente)<br>Firma RSA<br>Piccolo teorema di Fermat (esistente) |
| **DSA** | informatica | Digital Signature Algorithm; DSS; Digital Signature Standard; firma DSA; firma digitale DSA; canale subliminale; subliminal channel | Critto10.pdf; Crypto10.pdf | Firma ElGamal<br>Gruppo ciclico (esistente)<br>Funzione hash crittografica (esistente)<br>Test di primalità | ECDSA (esistente) | Firma di Schnorr<br>Problema del logaritmo discreto (esistente)<br>Firma digitale (esistente)<br>Numeri pseudo-casuali (esistente) |
| **Firma di Schnorr** | informatica | Schnorr signature; firma Schnorr; schema di Schnorr; gruppo di Schnorr; Schnorr group; multifirma Schnorr | Crypto10.pdf; 13_05_20.pdf; Critto12.pdf | Firma ElGamal<br>Problema del logaritmo discreto (esistente)<br>Funzione hash crittografica (esistente) | Prova a conoscenza nulla | DSA<br>ECDSA (esistente)<br>Firma digitale (esistente) |
| **Firma cieca** | informatica | blind signature; firma cieca RSA; RSA blind signature; blinding factor; fattore di accecamento; firma alla cieca | Crypto10.pdf; Critto12.pdf | Firma RSA<br>RSA (esistente)<br>Algoritmo di Euclide (esistente) | Denaro elettronico | Firma digitale (esistente)<br>Marcatura temporale |

## Protocolli (Critto 10-13, Crypto 13-14)

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **One-time password** | informatica | OTP, One Time Password, password usa e getta, catena di hash per password, hash chain password, protocollo di autenticazione con password, autenticazione challenge-response | Critto10.pdf | Funzione hash crittografica (esistente)<br>Funzione one-way | Encrypted Key Exchange<br>Secure Remote Password | Tabelle rainbow<br>Crittografia a chiave pubblica (esistente)<br>Prova a conoscenza nulla |
| **Secret splitting** | informatica | secret splitting, suddivisione di un segreto, condivisione di un segreto con XOR, secret broadcasting, trasmissione selettiva di un segreto | Critto11.pdf | One-time pad | Schema a soglia di Shamir<br>Schema di Blakley | Numeri pseudo-casuali (esistente) |
| **Schema a soglia di Shamir** | informatica | Shamir secret sharing, secret sharing, schema a soglia, threshold scheme, schema (m n), ombre, shadows, schema a soglia per gruppi | Critto11.pdf | Interpolazione polinomiale (esistente)<br>Classi di resto modulo n (esistente)<br>Secret splitting | Schema di Blakley | Rappresentazione di Lagrange (esterno)<br>Teorema di Rouché-Capelli (esterno) |
| **Schema di Blakley** | informatica | Blakley scheme, Blakley secret sharing, schema geometrico di condivisione del segreto | Critto11.pdf | Secret splitting<br>Soluzioni di un sistema lineare (esterno) | — | Schema a soglia di Shamir<br>Teorema di Rouché-Capelli (esterno) |
| **Bit commitment** | informatica | commitment scheme, schema di impegno, impegno crittografico, hiding, binding, segretezza e non ambiguità, coin flipping by telephone, lancio di moneta al telefono | Crypto7.pdf; Critto12.pdf | Funzione hash crittografica (esistente)<br>Funzione one-way | Prova a conoscenza nulla | Numeri pseudo-casuali (esistente)<br>Schema di cifratura simmetrica |
| **Prova a conoscenza nulla** | informatica | zero-knowledge proof, ZKP, dimostrazione a conoscenza nulla, protocollo di Fiat-Shamir, Fiat-Shamir identification, identificazione a conoscenza nulla, prover e verifier | Critto12.pdf | Residui quadratici<br>Funzione one-way<br>Bit commitment | Denaro elettronico | Firma di Schnorr<br>One-time password<br>Secure Remote Password |
| **Denaro elettronico** | informatica | digital cash, moneta digitale, contante elettronico, coin digitale | Critto12.pdf | Firma cieca<br>Funzione hash crittografica (esistente)<br>Prova a conoscenza nulla | — | Bitcoin (esistente)<br>Problema del double spending (esterno)<br>Crittografia a chiave pubblica (esistente) |
| **Marcatura temporale** | informatica | timestamping, marca temporale, trusted timestamping, marcatura temporale collegata, linked timestamping | Critto13.pdf | Funzione hash crittografica (esistente)<br>Firma digitale (esistente) | Blockchain (esistente) | Bitcoin (esistente)<br>Merkle tree (esistente)<br>Proof of Work (esistente) |
| **Key Distribution Center** | informatica | KDC, centro di distribuzione delle chiavi, key transport, key establishment, Needham-Schroeder, attacco di Denning-Sacco, replay attack, perfect forward secrecy, PFS, key derivation function, KDF, chiave di sessione, session key | Crypto13.pdf | Schema di cifratura simmetrica<br>HMAC | Encrypted Key Exchange | Scambio di chiavi Diffie-Hellman<br>Attacco man-in-the-middle |
| **Encrypted Key Exchange** | informatica | EKE, DH-EKE, scambio di chiavi cifrato, Bellovin-Merritt, password-authenticated key exchange, key exchange key, KEK, validazione challenge-response delle chiavi, partition attack | Crypto13.pdf; Critto10.pdf | Crittografia a chiave pubblica (esistente)<br>Schema di cifratura simmetrica<br>Key Distribution Center | Secure Remote Password<br>Simultaneous Authentication of Equals | Scambio di chiavi Diffie-Hellman<br>One-time password<br>Attacco man-in-the-middle |
| **Secure Remote Password** | informatica | SRP, protocollo SRP, asymmetric key exchange, AKE, verifier-based authentication, autenticazione basata su verificatore, plaintext-equivalent | Crypto14.pdf | Problema del logaritmo discreto (esistente)<br>Funzione hash crittografica (esistente)<br>Encrypted Key Exchange | — | Scambio di chiavi Diffie-Hellman<br>Simultaneous Authentication of Equals<br>Tabelle rainbow<br>Prova a conoscenza nulla |
| **Simultaneous Authentication of Equals** | informatica | SAE, Dragonfly, WPA3 SAE, password element, PWE, scambio di chiavi tra pari basato su password | Crypto14.pdf | Gruppo ciclico (esistente)<br>Encrypted Key Exchange | — | Scambio di chiavi Diffie-Hellman<br>Curva ellittica (esistente)<br>Secure Remote Password<br>Protocolli WEP e WPA |

## Attacchi pratici (laboratorio Basile)

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Attacco bit flipping** | informatica | bit-flipping attack; bit flipping; bit-flipping; malleabilità del cifrato; ciphertext malleability | 200409_03LPYOV_symmetric_attacks.pdf; 200423_03LPYOV_symmetric_attacks3.pdf; bf_client.py | Modalità CBC<br>Cifrario a flusso | Attacco padding oracle | Sicurezza IND-CPA<br>Message authentication code<br>Modalità GCM<br>Modalità ECB |
| **Attacco ECB byte-at-a-time** | informatica | ECB decryption oracle; byte-at-a-time ECB decryption; ECB decrypt adaptive chosen plaintext attack; attacco adattivo a testo scelto su ECB; oracolo di cifratura ECB | 200416_03LPYOV_symmetric_attacks2.pdf; 200423_03LPYOV_symmetric_attacks3.pdf; ECB_ACPAttack_client.py | Modalità ECB<br>Modelli di attacco crittografico | Attacco ECB copy-paste | Attacco padding oracle<br>AES<br>Sicurezza IND-CPA |
| **Attacco ECB copy-paste** | informatica | ECB copy&paste; ECB cut-and-paste; cut-and-paste attack; attacco taglia e incolla | 200416_03LPYOV_symmetric_attacks2.pdf; Crypto5.pdf | Modalità ECB | Message authentication code | Attacco ECB byte-at-a-time<br>Attacco bit flipping |
| **Attacco padding oracle** | informatica | padding oracle attack; CBC padding oracle; CBC Oracle attack; attacco di Vaudenay; padding PKCS#7; oracolo di padding | 200423_03LPYOV_symmetric_attacks3.pdf | Modalità CBC<br>Attacco bit flipping | Message authentication code | Attacco ECB byte-at-a-time<br>Modelli di attacco crittografico<br>Modalità GCM |
| **Riuso del keystream** | informatica | keystream reuse; nonce reuse; riuso del nonce; two-time pad; many-time pad; keystream reuse attack | 200430_03LPYOV_symmetric_attacks4.pdf | Cifrario a flusso<br>One-time pad | Indice di coincidenza | Modalità CTR<br>Modalità CFB e OFB<br>RC4<br>Attacco bit flipping |

## Note esistenti estese (esistente)

Ogni nota ha ricevuto un bullet "Crittografia" in `## Nei corsi`, il corso nel frontmatter e link motivati alle note nuove.

| Nome | corso di origine | cosa aggiunge Crittografia | fonte |
|---|---|---|---|
| Classi di resto modulo n | Istituzioni algebra | lettere in $\mathbb Z_{26}$, $U(\mathbb Z_n)$, xor contro somma in $\mathbb Z_{2^8}$ | Critto_week3 §3.2, §3.6-3.7; Crypto6 §6.2 |
| Identità di Bézout | Istituzioni algebra | $ax+b\equiv0\pmod N$, esempio $1=14\cdot29-9\cdot45$ | Critto_week3 §3.3 |
| Algoritmo di Euclide | Istituzioni algebra | versione estesa a tabella, `MCD.py`, `inv.py`, Kuttaka | Critto_week3 §3.3.1-3.3.8 |
| Teorema cinese dei resti | Istituzioni algebra | isomorfismo $\mathbb Z_a\times\mathbb Z_b\simeq\mathbb Z_{ab}$, divide et impera, $\mathbb Z_{24}\simeq\mathbb Z_3\times\mathbb Z_8$ | Critto_week3 NOTA 3.3.6; Crypto6 §6.4 |
| Piccolo teorema di Fermat | Istituzioni algebra | Eulero, Eulero generalizzato, Wilson, criterio di Lucas | Critto_week3 §3.7 |
| Gruppo ciclico | Istituzioni algebra | radici primitive, teorema di Gauss, DH generalizzato | Critto_week3 §3.7; Crypto6 §6.1 |
| Ordine di un elemento | Istituzioni algebra | ordine in $\mathbb Z_n^*$ divide $\varphi(n)$, esempio $\langle3\rangle$ in $\mathbb Z_{44}$ | Crypto6 §6.1.2 |
| Teorema di Lagrange sui gruppi | Istituzioni algebra | teorema di Eulero, sottogruppo dei residui quadratici | Crypto6 §6.1.2, §6.3 |
| Campo finito | Istituzioni algebra | $GF(4)$, $GF(2^8)$ con $X^8+X^4+X^3+X+1$, S-Box di AES | Critto_week3 §3.6 |
| Numeri pseudo-casuali | Informatica, Statistica computazionale, Ottimizzazione in condizione di incertezza | TRNG e PRNG, Init/GetBits, LCG `rand()` ANSI C, Park-Miller | Crypto2 §2.1-2.3 |
| Interpolazione polinomiale | Algebra lineare, Metodi numerici, Istituzioni algebra | ricostruzione del segreto di Shamir con un sistema di Vandermonde in $\mathbb Z_p$ | Critto11 pp. 10-16 |
| Funzione hash crittografica | Blockchain e criptoeconomia | proprietà, attacco del compleanno, compressione di Chaum-van Heijst-Pfitzmann | Crypto7 §7.2; Critto9 pp. 14-19 |
| Crittografia a chiave pubblica | Blockchain e criptoeconomia | problema della distribuzione delle chiavi, $n(n-1)/2$ chiavi | Crypto1 §1.7-1.8; Critto8 |
| RSA | Blockchain e criptoeconomia | textbook RSA, $e=3,17,65537$, attacchi | Crypto9 §9.2.3 |
| Cifratura ElGamal | Blockchain e criptoeconomia | textbook ElGamal su $GF(p)$, chiave effimera, malleabilità | Crypto9 §9.2.1 |
| Problema del logaritmo discreto | Blockchain e criptoeconomia | DLP nel gruppo moltiplicativo, funzione one-way | Critto_week3 §3.7; Crypto7 §7.1.1 |
| Curva ellittica | Blockchain e criptoeconomia | forma di Weierstrass, formule di somma, secp256k1, punti compressi | Crypto11 §11.1 |
| ECDSA | Blockchain e criptoeconomia | generazione delle chiavi, firma e verifica con dimostrazione | Crypto12 §12.3 |
| Firma digitale | Blockchain e criptoeconomia | schema $(\mathrm{Gen},\mathrm{Sign},\mathrm{Vrfy})$ e definizione di sicurezza | Crypto10 §10.1 |
| Blockchain | Blockchain e criptoeconomia | dalla marcatura temporale alla catena, fork, blocchi orfani | Critto13 pp. 9-12 |
| Bitcoin | Blockchain e criptoeconomia | header, mining, transazioni firmate ECDSA, 51% | Critto13 pp. 13-25 |
| Proof of Work | Blockchain e criptoeconomia | solo il link "(da collegare)" convertito: Paradosso del compleanno | — |
| Merkle tree | Blockchain e criptoeconomia | solo il link "(da collegare)" convertito: Costruzione di Merkle-Damgård | — |

Sono stati convertiti in link anche i "(da collegare)" di Funzione hash crittografica, Crittografia a chiave pubblica, RSA e Firma digitale. "Teorema di Eulero" è diventato il link a Funzione phi di Eulero, dove il teorema è trattato.

## Collegamenti verso altri corsi (esterno, senza estensione)

- Probabilità condizionata, Indipendenza di variabili aleatorie, Valore atteso, Variabile aleatoria discreta: segretezza perfetta ed entropia.
- Entropia (fisica): per contrasto.
- Matrice inversa, Spazio vettoriale, Teorema di Rouché-Capelli, Soluzioni di un sistema lineare: Hill, affine, Blakley.
- Gruppo, Gruppo simmetrico, Anello dei polinomi, Divisione tra polinomi, Polinomio irriducibile, Teorema fondamentale dell'aritmetica, Calcolo combinatorio.
- Rappresentazione di Lagrange: Shamir.
- Autovalori e autovettori, Serie di potenze: LFSR.
- Costo computazionale di un algoritmo.
- Problema del double spending (Blockchain): denaro elettronico.

## Concetti esterni (da collegare)

- Nessuno nelle note di Crittografia: tutti i collegamenti puntano a note esistenti.
- Restano all'agente Blockchain le conversioni nelle sue altre note, per esempio "Bit commitment (da collegare)" in Hashed Timelock Contract. Le note di destinazione esistono già.

## Dubbi

- **Formule "(da verificare sul PDF)":**
  - Cifrario di Cesare: Crypto1 stampa $\mathrm{Dec}_k(C)=C\boxplus k$, che va letto come sottrazione;
  - Esponenziazione modulare veloce: esponenti di $p$ negli es. 6.1.7-6.1.8;
  - Confusione e diffusione: estremi della somma;
  - Modalità GCM: la dispensa scrive "$128=2^8$" e $GF(2^8)$, invece di $GF(2^{128})$;
  - Firma RSA: lo schema EMSA-PSS è una figura;
  - Key Distribution Center: lo schema di Needham-Schroeder è una figura;
  - Secure Remote Password: $R(w,x)$ a Crypto14 p. 7;
  - Simultaneous Authentication of Equals: costruzione di PWE, figura;
  - Attacco ECB copy-paste: dettagli dei riempimenti.
- **Refusi delle fonti** (segnalati nelle note; quello di p. 13 solo qui):
  - Crypto6 p. 5: $\varphi(44)=\varphi(4)\varphi(11)=3\times10$ (in realtà $2\times10$);
  - Crypto6 p. 13: l'esempio "$\varphi(72)$" su una tabella fino a 49;
  - Crypto9 p. 9: Rabin, $(p+1)/4$ anche per $m_q$;
  - Crypto7 p. 17: HMAC con opad anche nella hash interna;
  - slide di Basile sul modulo comune: $c_2=m^{e_1}$.
- **Passaggi ricavati e dichiarati nelle note:**
  - cifratura di Feistel ottenuta invertendo la decifratura (Nota 5.2.4);
  - numero di chiavi e attacco CPA del cifrario affine;
  - attacco KPA lineare su Hill;
  - $C_1\oplus C_2=P_1\oplus P_2$ per l'OTP;
  - i $2^{70}$ byte di Salsa20.
- **Fonte secondaria:** la Firma di Schnorr usa gli appunti studenti `CryptoNotes2021/2021-05-13`, perché Crypto10 dà solo due link.
- **Accorpamenti:**
  - 3DES e key whitening dentro Data Encryption Standard;
  - Fermat, Miller-Rabin e Lucas dentro Test di primalità (la fonte tratta tutto in 3 pagine);
  - Wiener, Boneh-Durfee e Coppersmith solo citati in Attacco di Håstad;
  - Cipolla dentro Residui quadratici;
  - Mersenne Twister, NIST e TestU01 nell'estensione di Numeri pseudo-casuali;
  - canale subliminale dentro DSA;
  - secret broadcasting dentro Secret splitting;
  - Kasiski dentro Vigenère.
- **Nomi:**
  - "DES" è alias di Simulazione a eventi discreti: la nota si chiama **Data Encryption Standard**;
  - "diffusione" è alias di Processo di diffusione: tolto da Confusione e diffusione;
  - "OTP" da solo non è usato come alias, perché è ambiguo tra One-time pad e One-time password;
  - "doppia spesa" appartiene a Problema del double spending.
- **Non coperti:** puzzle di Merkle e knapsack di Merkle-Hellman (Critto 6 §6.1.1, §6.6.1, solo citati in Diffie-Hellman), Hopper-Blum (Crypto13 §13.4), PGP (citato in Cifratura ibrida), parte C/OpenSSL del laboratorio Basile (API, non concetti).
