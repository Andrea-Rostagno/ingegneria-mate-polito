---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: ["ECDH", "Elliptic curve Diffie-Hellman", "EC-DH", "scambio di chiavi su curve ellittiche", "Diffie-Hellman ellittico"]
tags: [competenza, area/informatica]
---

# Diffie-Hellman su curve ellittiche

> È lo scambio di chiavi di Diffie-Hellman svolto nel gruppo ciclico generato da un punto $G$ di una curva ellittica. La sua sicurezza poggia sull'ECDLP, che a parità di sicurezza consente chiavi molto più corte.

## Definizione / enunciato
Alice e Bob concordano i parametri di dominio $T=(p,a,b,G,n,h)$ di una curva $E: y^2=x^3+ax+b \pmod p$, con $G$ punto di ordine $n$.
- Alice sceglie la chiave segreta $A\in\{2,\dots,\#E-1\}$ e pubblica $p_A=A\cdot G$.
- Bob sceglie $B$ e pubblica $p_B=B\cdot G$.
- Alice calcola $k_A=A\cdot p_B$, Bob calcola $k_B=B\cdot p_A$.

Poiché $k_A=k_B$, il punto $k=AB\cdot G$ è la chiave di sessione comune (`Crypto12.pdf` §12.1.1).

Nella dispensa italiana l'isomorfismo one-way è $f:\mathbb Z_n\to\langle G\rangle$, $f(s)=s\cdot G=G\oplus\cdots\oplus G$ ($s$ volte). Le chiavi pubbliche sono punti della curva, quelle segrete elementi di $\mathbb Z_n$, e anche il segreto comune è un punto (`Critto_week7.pdf` §7.3.1).

## Formule chiave
$$p_A=A\cdot G,\quad p_B=B\cdot G,\qquad k=A\cdot p_B=B\cdot p_A=AB\cdot G$$

## Intuizione
È lo stesso schema di $g^{ab}$, scritto in notazione additiva. La "potenza" diventa il multiplo scalare $kP$, calcolato con raddoppi e somme come l'esponenziazione veloce: per esempio $9P$ si ottiene da $2P$, $4P$ e $8P$ con 4 somme invece di 9 (`Critto8.pdf` p. 40). Ricavare $A$ da $G$ e $A\cdot G$ è l'ECDLP, considerato più difficile del DLP classico.

## Come si usa
**Esempio di `Crypto12.pdf` §12.1.2.**
- Curva $y^2=x^3+2x+2\pmod{17}$, $G=(5,1)$, $T=(17,2,2,(5,1),19,1)$.
- Chiavi segrete $A=7$ e $B=13$, chiavi pubbliche $p_A=(0,6)$ e $p_B=(16,4)$.
- Chiave comune $k=7\cdot(16,4)=13\cdot(0,6)=(3,16)$.

Di solito la chiave si usa poi in un cifrario simmetrico (`Critto8.pdf` p. 41), derivandola con un hash. La dispensa chiede se $k_{AES}=\mathrm{SHA256}(x\|y)$ sia una buona idea quando il modulo è di 64 bit (Exercise 12.1.6).

**Attacchi di implementazione** (`Crypto12.pdf` §12.5):
- **invalid curve**: il server non verifica che il punto ricevuto stia sulla curva;
- **small subgroup**: Eve invia un punto $Q$ di ordine piccolo.

In entrambi i casi l'attaccante ottiene il segreto modulo l'ordine del punto e poi lo ricostruisce con il teorema cinese dei resti.

## Nei corsi
- **Crittografia** (magistrale): parte Di Scala (versione italiana e inglese) e slide ECC di Bazzanella. Fonti:
  - `magistrale/Crittografia/Slide/slides week 1-14/week12/Crypto12.pdf` (§12.1, pp. 2-4; §12.5, pp. 7-8);
  - `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week7.pdf` (§7.3.1, p. 12);
  - `magistrale/Crittografia/Slide/slide crittografia italiano/slide critto italiano/Critto8.pdf` (pp. 40-41).

## Prerequisiti
- [[Scambio di chiavi Diffie-Hellman]]: stesso protocollo nel gruppo $\mathbb Z_p^*$
- [[Curva ellittica]]: gruppo dei punti e somma
- [[Problema del logaritmo discreto]]: la sicurezza poggia sull'ECDLP

## Porta a
- [[Pairing bilineare]]: scambio a tre parti di Joux in un solo round
- [[Protocollo di Massey-Omura]]: altro protocollo nel gruppo dei punti

## Collegati
- [[ECDSA]]: stessi parametri di dominio $T$
- [[Teorema cinese dei resti]]: ricostruisce il segreto negli attacchi a sottogruppi piccoli
- [[Esponenziazione modulare veloce]]: double-and-add per calcolare $kP$
