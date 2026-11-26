---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [one-way function, funzione unidirezionale, funzione a senso unico, trapdoor, funzione one-way con trapdoor, trapdoor one-way function, botola, preimage resistance property]
tags: [competenza, area/informatica]
---

# Funzione one-way

> Funzione facile da calcolare ma computazionalmente difficile da invertire. Se esiste un'informazione segreta (la **trapdoor**) che rende facile l'inversione, è la base della crittografia a chiave pubblica.

## Definizione / enunciato
$f:D\to T$ è **one-way** se per ogni $x\in D$ il valore $f(x)$ si calcola in modo efficiente, mentre per $y\in T$ non è computazionalmente fattibile trovare $x\in D$ con $f(x)=y$ (Crypto 7, §7.1.1).

La dispensa italiana aggiunge un requisito di sicurezza. Dato $y$, l'algoritmo ottimale per risolvere $f(x)=y$ dovrebbe essere una **ricerca casuale sul dominio** (Critto 6, §6.2.12).

Una **trapdoor** è l'informazione speciale che rende facile l'inversione.

## Formule chiave
Esempi delle dispense (Crypto 7, pp. 2-3):
- da un cifrario a blocchi sicuro, $f:K\to C$, $f(k):=\mathrm{Enc}_k(P_0)$ con $P_0$ fisso. Invertirla è crittanalisi.
- $f(P):=\mathrm{Enc}_k(P)$, dove la chiave $k$ fa da trapdoor;
- **RSA** e **Rabin**: $f(x)=x^e \pmod n$ e $f(x)=x^2\pmod n$, con trapdoor la fattorizzazione $n=p\cdot q$;
- **potenza** $f:\mathbb Z_n\to\langle\alpha\rangle$, $\gamma\mapsto\alpha^\gamma$, con $\alpha$ di ordine $n$. Il miglior attacco ha complessità $O(\sqrt n)$ ed è legato al paradosso del compleanno: se $\beta=\alpha^\gamma$ e $\alpha^a\beta^b=\alpha^A\beta^B$, allora
$$\gamma=\frac{B-b}{a-A}\pmod n;$$
- **moltiplicazione** di due primi $(p,q)\mapsto N=pq$: facile da calcolare, difficile risalire ai fattori.

## Intuizione
Calcolare è facile, tornare indietro no, a meno di conoscere la trapdoor. Le funzioni one-way senza trapdoor danno hash e scambi di chiavi. Quelle con trapdoor danno cifratura e firma a chiave pubblica.

## Come si usa
- La potenza modulare è la one-way usata nello scambio di Diffie-Hellman (Nota 7.1.3).
- La moltiplicazione di primi, insieme al teorema cinese dei resti, è usata in RSA (Nota 7.1.4).
- Calcolo su dati cifrati (Crypto 7, §7.1.5): Alice vuole $e=\log_g x$ senza rivelare $x$. Sceglie $r$ casuale e chiede a Bob $\tilde e=f(x\,g^r)$, poi ricava $e$ da $e+r=\tilde e\pmod{p-1}$.

## Nei corsi
- **Crittografia** (magistrale): §7.1 delle dispense inglesi e §6.2.12 di quelle italiane, dove la proprietà one-way è la "preimage resistance" richiesta alle hash. Fonti: `magistrale/Crittografia/Slide/slides week 1-14/week7/Crypto7.pdf` (pp. 2-4); `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week6.pdf` (Critto 6, p. 18).

## Prerequisiti
- [[Problema del logaritmo discreto]]: esempio principale di funzione one-way
- [[Cifrario a blocchi]]: un cifrario sicuro dà una one-way

## Porta a
- [[Funzione hash crittografica]]: la prima proprietà richiesta è la one-way
- [[Scambio di chiavi Diffie-Hellman]]: usa la potenza modulare
- [[RSA]]: one-way con trapdoor, la fattorizzazione
- [[Crittosistema di Rabin]]: $x\mapsto x^2 \bmod n$ con trapdoor
- [[Tabelle rainbow]]: compromesso tempo-memoria per invertire $f$

## Collegati
- [[Crittografia a chiave pubblica]]: le funzioni con trapdoor la rendono possibile
- [[Paradosso del compleanno]]: dà il costo $O(\sqrt n)$ dell'inversione della potenza
