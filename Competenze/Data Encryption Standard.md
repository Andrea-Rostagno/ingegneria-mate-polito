---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: ["DES (cifrario)", "DES cipher", "3DES", "Triple DES", "Triplo DES", "2DES", "DES EDE", "key schedule di DES", "S-box di DES"]
tags: [competenza, area/informatica]
---

# Data Encryption Standard (DES)

> Data Encryption Standard: cifrario a blocchi orientato ai bit, ideato da IBM con le idee di Horst Feistel. Blocchi di 64 bit, chiave efficace di 56 bit, 16 round di Feistel. Oggi è insicuro per la chiave troppo corta; si usa ancora come 3DES.

## Definizione / enunciato
- **Struttura:** blocco $B$ di 64 bit, chiave $k$ di 56 bit, uscita $Y$ di 64 bit.
- **Round:** una permutazione iniziale IP, 16 round di Feistel con sottochiavi $k_1,\dots,k_{16}$ di 48 bit, lo scambio delle due metà di 32 bit dopo l'ultimo round e la permutazione finale $FP=IP^{-1}$.
- **Funzione $f$:** i 32 bit di $R_j$ vengono espansi a 48 dall'espansore ED, sommati in XOR a $k_{j+1}$ e divisi in 8 gruppi da 6 bit. Le otto S-box $S_1,\dots,S_8$, tutte diverse, li riducono a 8 gruppi da 4 bit, cioè 32 bit, poi permutati da Perm.
- **Key schedule:** la chiave in ingresso ha 64 bit, ma i bit 8, 16, ..., 64 non sono usati da PC-1; per questo la chiave è di 56 bit. Ogni $k_i$ è una proiezione di $k$ composta con una permutazione.

## Formule chiave
Rotazioni a sinistra del key schedule:
$$LS_i=\begin{cases}1 & i=1,2,9,16\\ 2 & \text{altrimenti}\end{cases}$$
3DES in modalità EDE:
$$\mathrm{DES}_{k_3}\circ\mathrm{DES}^{-1}_{k_2}\circ\mathrm{DES}_{k_1}$$

## Intuizione
- Le S-box sono l'unica parte non lineare e danno la confusione.
- La permutazione Perm manda i 4 bit d'uscita di ogni S-box su S-box diverse del round seguente; questo dà la diffusione.
- Insieme producono l'**effetto valanga**: ogni bit d'uscita dipende fortemente da ogni bit di chiave e di ingresso.

## Come si usa
- **DES non è sicuro:** un attacco a forza bruta KPA è fattibile. Nota una coppia $(x,y)$, si provano tutte le $2^{56}$ chiavi finché $\mathrm{Enc}_k(x)=y$.
- **Nemmeno 2DES è sicuro**, per l'[[Attacco meet-in-the-middle]]. 3DES è considerato sicuro.
- **Esercizi di lezione** (enunciati):
  - verificare che $S_1(4)\oplus S_1(23)=S_1(4\oplus23)$ e che $S_1(0)\neq0$, quindi $S_1$ non è lineare;
  - verificare la proprietà di complementazione $Y'=\mathrm{DES}_{k'}(B')$, dove l'apice indica il complemento a uno.
- **Decifratura:** stesso circuito della cifratura, con le sottochiavi in ordine inverso.

## Nei corsi
- **Crittografia** (magistrale): Critto 5 §5.2 e appendici §5.5.3-5.5.4 (Di Scala, 2020); Crypto 4 §4.2, con i 7 criteri di progetto delle S-box. Fonti: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week5.pdf` (pp. 5-11, 26-27); `magistrale/Crittografia/Slide/slides week 1-14/week4/Crypto4.pdf` (pp. 6-12).

## Prerequisiti
- [[Rete di Feistel]]: i 16 round sono di Feistel
- [[Cifrario a blocchi]]: DES ne è il primo standard
- [[Confusione e diffusione]]: S-box e Perm

## Porta a
- [[Attacco meet-in-the-middle]]: rende inutile 2DES e motiva 3DES
- [[AES]]: lo standard che lo ha sostituito

## Collegati
- [[Rete a sostituzione-permutazione]]: anche DES usa S-box, ma dentro una struttura di Feistel
- [[Modelli di attacco crittografico]]: la forza bruta su DES è un attacco KPA
- [[Modalità CFB e OFB]]: lo standard FIPS 81 definisce le modalità d'uso di DES
