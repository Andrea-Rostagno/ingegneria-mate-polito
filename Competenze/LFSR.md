---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: ["linear feedback shift register", "registro a scorrimento a retroazione lineare", "Fibonacci LFSR", "Galois LFSR", "LFSR di Fibonacci", "LFSR di Galois", "polinomio di feedback", "feedback polynomial", "m-sequenza", "generatore di Geffe", "Geffe generator", "attacco di correlazione", "correlation attack"]
tags: [competenza, area/informatica]
---

# LFSR

> Un *linear-feedback shift register* è un registro di $m$ bit che a ogni colpo di clock scorre di una posizione e reinserisce una combinazione lineare (xor) dei bit, detti *taps*. È un generatore di keystream velocissimo in hardware, ma da solo è insicuro.

## Definizione / enunciato
Lo stato è $s\in\{0,1\}^m$ e l'uscita è il bit più a destra (`Crypto2.pdf` p. 11). Nella **configurazione di Fibonacci** il nuovo bit è
$$s_m=f(s)=\sum_{j=0}^{m-1}s_j\,p_j ,$$
e la transizione è lineare: $s\cdot L=s'=[f(s)\,s_{m-1}\cdots s_1]$. $L$ è la matrice compagna con prima colonna $p_{m-1},\dots,p_0$ (`Crypto2.pdf` p. 12; `Critto_week4.pdf` p. 15).

## Formule chiave
$$P(x)=1+p_{m-1}x+\dots+p_1x^{m-1}+p_0x^m,\qquad \chi_L(x)=x^mP(\tfrac1x)=p_0+p_1x+\dots+p_{m-1}x^{m-1}+x^m$$
- $P(x)$ è il polinomio di feedback, $\chi_L(x)$ il polinomio caratteristico di $L$ su $\mathbb Z_2$.
- La serie generatrice dell'uscita è $\sum_j s_jx^j=Q(x)/P(x)$, dove $Q$ dipende dallo stato iniziale (`Crypto2.pdf` p. 13).

## Intuizione
Gli stati sono un insieme finito, quindi la sequenza è periodica. Lo stato nullo resta nullo, quindi il periodo è al più $2^m-1$ (`Critto_week4.pdf` p. 16). Il periodo è massimale se e solo se $\chi_L$ è un **polinomio primitivo**. In particolare il periodo massimale implica che $\chi_L$ sia irriducibile su $\mathbb Z_2[x]$ (es. 4.5.4).

Essendo lineare, un LFSR non è sicuro contro un attacco KPA (es. 4.5.7). Da abbastanza bit di keystream si ricavano i coefficienti risolvendo un sistema lineare.

## Come si usa
- **Esempio a 4 flip-flop:** il tap è $FF_3\oplus FF_0$. Lo stato si ripete dopo 15 colpi di clock, quindi il registro passa per tutti i $2^4-1$ stati non nulli (`Critto_week4.pdf` pp. 14-15).
- **Esercizio della dispensa:** far girare l'LFSR con $\chi_L=x^4+x^3+1$ da $[1000]$, trovarne il periodo e verificare che il registro "specchio" (polinomio reciproco) produce l'uscita al contrario (`Crypto2.pdf` p. 12).
- **Riduzione dei taps:** da $1+x+x^8=(1+x^2+x^3+x^5+x^6)(1+x+x^2)$ segue che il keystream con feedback $1+x^2+x^3+x^5+x^6$ si ottiene anche con l'LFSR di feedback $1+x+x^8$ (p. 13).
- **LFSR di Galois:** lo stato è un polinomio $s(x)$ e il clock fa $s'(x)=x\otimes s(x)$ modulo $\chi_L$. In bit:
  $$s\cdot L=\begin{cases}\mathrm{shiftright}(s)&g_{m-1}=0\\ \mathrm{shiftright}(s)\oplus p&g_{m-1}=1\end{cases}$$
  L'uscita coincide con quella dell'LFSR di Fibonacci con lo stesso $\chi_L$ (pp. 14-15).
- **Combinazioni:** il generatore di Geffe unisce tre LFSR con una funzione booleana ed è vulnerabile all'**attacco di correlazione** (p. 16). Mersenne Twister, Trivium, E0 e A5/1 usano registri a scorrimento.

## Nei corsi
- **Crittografia** (magistrale): §2.4 "Stream Ciphers: LFSR" delle dispense inglesi e §4.5 "LFSR e PRNG" delle italiane, con il diagramma dei flip-flop. Fonti: `magistrale/Crittografia/Slide/slides week 1-14/week2/Crypto2.pdf` (pp. 11-16); `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week4.pdf` (Critto 4, pp. 14-16).

## Prerequisiti
- [[Cifrario a flusso]]: l'LFSR genera il keystream
- [[Autovalori e autovettori]]: $\chi_L$ è il polinomio caratteristico di $L$
- [[Anello dei polinomi]]: aritmetica in $\mathbb Z_2[x]$

## Porta a
- [[Numeri pseudo-casuali]]: famiglia di PRNG a registri

## Collegati
- [[Polinomio irriducibile]]: necessario per il periodo massimale
- [[Campo finito]]: l'LFSR di Galois moltiplica per $x$ in $\mathbb Z_2[x]/(\chi_L)$
- [[Serie di potenze]]: serie generatrice $Q(x)/P(x)$
- [[Modelli di attacco crittografico]]: un LFSR si rompe con un attacco KPA
