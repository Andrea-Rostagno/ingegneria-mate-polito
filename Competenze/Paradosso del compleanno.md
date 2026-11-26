---
tipo: competenza
area: informatica
corsi: [Crittografia, Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [birthday paradox, attacco del compleanno, birthday attack, metodo rho, rho method, algoritmo di Floyd, Floyd's cycle-finding algorithm, bound del compleanno, 2^(n/2)]
tags: [competenza, area/informatica]
---

# Paradosso del compleanno

> Con un digest di $n$ bit una collisione si trova dopo circa $2^{n/2}$ messaggi, non $2^n$. Per questo la sicurezza contro le collisioni è la metà della lunghezza del digest.

## Definizione / enunciato
Sia la hash a valori in $\mathbb Z_2^n$ e si prendano $N$ messaggi casuali $x_1,\dots,x_N$. Ci sono $N(N-1)/2$ coppie candidate alla collisione. La collisione manca se la hash ristretta agli $N$ messaggi è iniettiva. La probabilità di questo evento è il rapporto tra le funzioni iniettive e tutte le funzioni (Critto 6, p. 15):
$$\frac{2^n!}{(2^n-N)!\,(2^n)^N}=\frac{2^n(2^n-1)\cdots(2^n-(N-1))}{(2^n)^N}.$$

## Formule chiave
Probabilità di collisione:
$$\lambda=1-\Big(1-\tfrac1{2^n}\Big)\Big(1-\tfrac2{2^n}\Big)\cdots\Big(1-\tfrac{N-1}{2^n}\Big)\approx 1-e^{-\frac{N(N-1)}{2\cdot 2^n}},$$
usando $e^{-x}\approx1-x$ per $x$ vicino a 0. Invertendo:
$$N\approx 2^{\frac{n+1}{2}}\sqrt{\ln\frac{1}{1-\lambda}}.$$

## Intuizione
Il numero di coppie cresce come $N^2$. Basta quindi $N\sim\sqrt{2^n}=2^{n/2}$ perché una coppia collida con probabilità non trascurabile. Un digest da 160 bit offre al più circa 80 bit di sicurezza contro le collisioni.

## Come si usa
- **Attacco con ordinamento** (Critto 6, §6.2.8): si calcolano $2^{n/2}$ coppie messaggio/digest e si ordinano per digest (per esempio con Quicksort). Poi si cercano righe consecutive uguali. Servono memoria $O(2^{n/2})$ e tempo medio $O(n\,2^{n/2})$.
- **Metodo rho** (Floyd): partendo da un digest $h$,
$$y_1=h,\ y_i=\mathrm{Hash}(y_{i-1});\qquad z_1=h,\ z_i=\mathrm{Hash}(\mathrm{Hash}(z_{i-1})).$$
  Quando $y_N=z_N$ si ottiene una collisione tra $y_{N-1}$ e $\mathrm{Hash}(z_{N-1})$, con memoria costante.
- Esercizio di lezione (Crypto 7, Ex. 7.2.3): quanti input servono per $\lambda=0{,}5$ e $\lambda=0{,}1$ con digest da 64, 128 e 160 bit. Si risponde applicando la formula per $N$.
- Lo stesso fenomeno dà il costo $O(\sqrt n)$ del logaritmo discreto (rho di Pollard, Crypto 7, §7.1.1).

## Nei corsi
- **Crittografia** (magistrale): "Collisions: Birthday attack" nelle dispense di Di Scala, in italiano con l'ordinamento e il metodo rho. Fonti: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week6.pdf` (Critto 6, pp. 15-16); `magistrale/Crittografia/Slide/slides week 1-14/week7/Crypto7.pdf` (p. 7).
- **Blockchain e criptoeconomia** (magistrale): compare come base di **Equihash**, la Proof of Work di Biryukov e Khovratovich (2016) usata da Bitcoin Gold. È fondata su una generalizzazione del problema del compleanno e progettata per richiedere molta memoria, così che le implementazioni parallele siano limitate dalla banda di memoria. Le slide non danno formule. Fonte: `magistrale/Blockchain e criptoeconomia/06-Protocolli di consenso.pdf` (p. 13).

## Prerequisiti
- [[Funzione hash crittografica]]: si cercano collisioni del digest
- [[Calcolo combinatorio]]: conteggio delle funzioni iniettive

## Porta a
- [[Problema del logaritmo discreto]]: attacco rho di complessità $O(\sqrt n)$

## Collegati
- [[Funzione one-way]]: l'inversione della potenza ha costo legato al compleanno
- [[Tabelle rainbow]]: altro compromesso tempo-memoria
- [[Proof of Work]]: Equihash si basa sul problema del compleanno generalizzato (Blockchain e criptoeconomia)
- [[Costruzione di Merkle-Damgård]]: una volta trovata una collisione, se ne generano facilmente altre (multi-collisioni)
