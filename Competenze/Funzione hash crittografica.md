---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia, Crittografia]
livello: [magistrale]
aliases: [cryptographic hash function, hash crittografico, impronta, digest, resistenza alla preimmagine, preimage resistance, resistenza alla seconda preimmagine, second preimage resistance, resistenza alle collisioni, collision resistance, effetto valanga, computazionalmente intrattabile, SHA-256, SHA-1, SHA-3, Keccak, RIPEMD-160, MD5]
tags: [competenza, area/informatica]
---

# Funzione hash crittografica

> Funzione che comprime un input di lunghezza arbitraria in un'impronta di lunghezza fissa, in modo che sia intrattabile invertirla o trovare collisioni: è il mattone di blockchain, Proof of Work e firme digitali.

## Definizione / enunciato
Dato un alfabeto $\Sigma$ e l'insieme $\Sigma^*$ delle parole di lunghezza arbitraria, una **funzione hash** è $h:\Sigma^*\to\Sigma^n$ con $n$ fissato; di solito $\Sigma=\{0,1\}$ e $n=160,256,384,512$. $h(x)$ è l'**impronta** (hash, digest). $h$ non può essere iniettiva: una **collisione** è una coppia $(a,b)$, $a\ne b$, con $h(a)=h(b)$.

$h$ è **crittografica** se:
1. si calcola in tempo polinomiale;
2. **resistenza alla preimmagine**: data $z$, è intrattabile trovare $x$ con $h(x)=z$;
3. **resistenza alla seconda preimmagine**: fissato $a$, è intrattabile trovare $b\neq a$ con $h(a)=h(b)$;
4. **resistenza alle collisioni**: è intrattabile trovare una qualsiasi collisione.

Le condizioni non sono indipendenti: la resistenza alle collisioni implica quella alla seconda preimmagine. Si desidera anche l'**effetto valanga**: cambiando un carattere l'output cambia radicalmente.

## Formule chiave
Un problema è **computazionalmente intrattabile** (rispetto a $n$) se per ogni algoritmo probabilistico $A$ polinomiale e ogni intero $k$ esiste $n_k$ tale che
$$n>n_k\ \Rightarrow\ \Pr(A\text{ risolve il problema})\le\frac1{n^k}.$$

## Intuizione
"Intrattabile" non vuol dire impossibile: la probabilità di successo in tempo polinomiale è trascurabile. L'hash è il ponte fra dati e sicurezza: si può controllare che un dato non sia cambiato senza conservarlo per intero.

## Come si usa
Le slide indicano tre usi: **immutabilità** (si archivia l'hash di un documento e lo si ricalcola per controllarlo); **prova di possesso** di un documento senza mostrarlo (si pubblica l'hash e il documento più tardi); **Proof of Work**. Famiglie citate: MD5 (Rivest, 1991), RIPEMD-160 (1994, usata negli indirizzi Bitcoin), SHA-1 (160 bit, compromessa nel 2005), SHA-2 (SHA-224/256/384/512), SHA-3 da Keccak (NIST, 2015, costruzione "a spugna" con fasi di assorbimento e spremitura). Bitcoin usa SHA-256 due volte (SHA-256d).

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): prima lezione sugli strumenti matematici. Fonti: `magistrale/Blockchain e criptoeconomia/01-Strumenti.pdf` (pp. 3-14); `dispensa_blockchain/dispensa_blockchain.tex` §1.1-1.4.
- **Crittografia** (magistrale): $\mathrm{Hash}:\mathbb Z_2^*\to\mathbb Z_2^n$ con digest di $n=160,256,512$ bit, l'"impronta digitale" dell'input. Le tre proprietà sono one-way, collision resistance e second preimage resistance (weak collision). Bazzanella le chiama hash *unidirezionale*, *debolmente* e *fortemente* priva di collisioni. Con un digest di $n$ bit, l'attacco del compleanno trova collisioni dopo circa $2^{n/2}$ messaggi e non $2^n$. Le costruzioni studiate sono Merkle-Damgård (MD4, SHA-1, SHA-2) e la spugna (Keccak, SHA-3, SHAKE128/256 con digest di lunghezza variabile). Esempio teorico con collisioni dimostrabilmente difficili, la compressione di **Chaum-van Heijst-Pfitzmann**: con $p\equiv3\pmod4$, $q=(p-1)/2$ primi, $g$ generatore di $\mathbb Z_p^*$ e $t$ casuale,
  $$h:\mathbb Z_q\times\mathbb Z_q\to\mathbb Z_p^*,\qquad h(a,b)=g^at^b\bmod p.$$
  Una collisione $g^{a_1}t^{b_1}\equiv g^{a_2}t^{b_2}$ dà $a_1-a_2\equiv y(b_2-b_1)\pmod{p-1}$ con $g^y\equiv t$. Si risolve perché $\gcd(b_2-b_1,p-1)\in\{1,2\}$, e quindi rivela il logaritmo discreto di $t$: se il DLP è intrattabile, $h$ è fortemente priva di collisioni. Usi visti nel corso: MAC e HMAC, firme, bit commitment, tabelle rainbow e salt per le password, marcatura temporale. Fonti: `magistrale/Crittografia/Slide/slides week 1-14/week7/Crypto7.pdf` (§7.2, pp. 5-12); `magistrale/Crittografia/Slide/slides week 1-14/week8/Crypto8.pdf`; `magistrale/Crittografia/Slide/slide crittografia italiano/slide critto italiano/Critto9.pdf` (pp. 14-19); `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week6.pdf` (Critto 6 §6.2).

## Prerequisiti
- Nessuno.

## Porta a
- [[Merkle tree]]: hash combinati a coppie fino alla radice
- [[Proof of Work]]: ricerca di un hash minore del target
- [[Firma digitale]]: si firma il digest del messaggio
- [[Indirizzo Bitcoin]]: RIPEMD-160(SHA-256) della chiave pubblica
- [[Blockchain]]: ogni blocco contiene l'hash del precedente
- [[Hashed Timelock Contract]]: hashlock sblocca rivelando la preimmagine

## Collegati
- [[Tabella hash]]: hash non crittografico, usato per indicizzare; qui conta la resistenza alle collisioni
- [[Paradosso del compleanno]]: stima della difficoltà di trovare collisioni, citato solo per Equihash
- [[Costruzione di Merkle-Damgård]]: costruzione interna di MD5 e SHA-1/SHA-2, non trattata nelle slide
- [[Costruzione a spugna]]: costruzione di Keccak/SHA-3 (Crittografia)
- [[Funzione one-way]]: la resistenza alla preimmagine è la proprietà one-way (Crittografia)
- [[Message authentication code]]: un MAC si costruisce da una hash con una chiave (HMAC) (Crittografia)
- [[Problema del logaritmo discreto]]: la compressione di Chaum-van Heijst-Pfitzmann riduce le collisioni al DLP (Crittografia)
