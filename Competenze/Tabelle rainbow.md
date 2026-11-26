---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [rainbow table, tabelle di Hellman, Hellman's tables, compromesso tempo-memoria, time-memory trade-off, look up table, funzione di riduzione, salt, sale]
tags: [competenza, area/informatica]
---

# Tabelle rainbow

> Tecnica di compromesso tempo-memoria per invertire una funzione one-way, come cifratura di un testo fisso o hash di password. Si precalcolano catene e si memorizzano solo il primo e l'ultimo elemento. Il **salt** la neutralizza.

## Definizione / enunciato
**Look up table** (Hellman 1980): il crittanalista cifra un testo fisso $P_0$ con tutte le $N=|K|$ chiavi e ordina la tabella $(\mathrm{Enc}_k(P_0),k)$. In un attacco CPA, quando l'utente fornisce $\mathrm{Enc}_k(P_0)$, la chiave si trova in tempo $O(\log N)$, ma la memoria è enorme (Crypto 8, p. 9).

**Tabelle di Hellman** (p. 11), con $f$ la funzione da invertire:
1. Si scelgono $m$ chiavi casuali e si costruiscono catene $k\to f(k)\to f(f(k))\to\cdots$ di lunghezza $t$. Si salvano solo la prima e l'ultima colonna, ordinate per l'ultima.
2. Intercettato $Y_1=f(k)$, si controlla se è nell'ultima colonna. Se c'è, si riparte dall'inizio della riga e si recupera la chiave in $O(t)$ operazioni. Altrimenti si calcola $Y_2=f(Y_1)$ e si ripete.
3. Si usano $t$ tabelle con **riduzioni** casuali $R$ diverse, cioè con $f_R:=R\circ f$.

## Formule chiave
- Una tabella: probabilità di successo $mt/N$, con $t$ ricerche per chiave.
- $t$ tabelle con riduzioni diverse: probabilità $mt^2/N$, con $t^2$ ricerche.
- **Rainbow** (Oechslin 2003): le $t$ riduzioni sono usate *lungo la stessa catena*, una per colonna. La ricerca di una chiave richiede $t^2/2$ operazioni (Crypto 8, p. 12).
- Esercizio di lezione: spiegare il numero $N^{2/3}$ che compare nell'affermazione di Hellman.

## Intuizione
Il tempo si paga una volta nel precalcolo e la memoria si riduce comprimendo ogni catena ai suoi estremi. Con una riduzione diversa per colonna, due catene si fondono solo se collidono nella stessa colonna. Le tabelle rainbow hanno quindi meno fusioni e ricerche più rapide di quelle di Hellman (esercizio 8.3.2).

## Come si usa
- **Password:** i sistemi conservano solo l'hash delle password (Paar, cap. 11). Una tabella rainbow precalcolata sugli hash inverte le password deboli.
- **Salt:** si aggiunge un valore casuale alla password prima dell'hash e lo si memorizza accanto all'hash. Le tabelle precalcolate diventano inutili, perché andrebbero ricostruite per ogni salt (Crypto 8, §8.3.1).

## Nei corsi
- **Crittografia** (magistrale): §8.3 delle dispense inglesi, sul paper di Hellman (`week8/paper hellman (36).pdf`) e su quello di Oechslin. Fonti: `magistrale/Crittografia/Slide/slides week 1-14/week8/Crypto8.pdf` (pp. 9-14).

## Prerequisiti
- [[Funzione one-way]]: è la funzione $f$ da invertire
- [[Funzione hash crittografica]]: bersaglio tipico (password hashate)
- [[Modelli di attacco crittografico]]: lo scenario di Hellman è un CPA

## Porta a
- Nessuno.

## Collegati
- [[Paradosso del compleanno]]: altro attacco generico a una hash, con memoria $O(2^{n/2})$
- [[Attacco meet-in-the-middle]]: altro compromesso tempo-memoria
- [[One-time password]]: la OTP "con algoritmi matematici" itera una funzione hash da un seme
