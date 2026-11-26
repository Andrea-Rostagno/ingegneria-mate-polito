---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [Vigenère cipher, Vigenere cipher, cifrario di Vigenere, cifrario polialfabetico, polyalphabetic cipher, tabula recta, sovrapposizione di Kerckhoffs, Kerckhoffs superimposition, attacco di Kasiski, verme]
tags: [competenza, area/informatica]
---

# Cifrario di Vigenère

> Cifrario polialfabetico: la chiave è una parola che, ripetuta, dà un vettore da sommare al messaggio lettera per lettera in $\mathbb Z_{26}$. Si rompe scoprendo il periodo della chiave e facendo l'analisi delle frequenze colonna per colonna.

## Definizione / enunciato
Con le lettere codificate in $\mathbb Z_{26}$, la chiave $k_0$ determina un vettore $v\in\mathbb Z_{26}^m$, ottenuto ripetendo la chiave (detta anche "verme"). Da `Critto_week3.pdf` p. 3:
$$\mathrm{Enc}_{k_0}(P)=P+v,\qquad v=k_0\|k_0\|\cdots$$
La **tabula recta** di Trithemius non è altro che la tabella della somma in $\mathbb Z_{26}$. Il periodo $L$ è la lunghezza della chiave.

## Formule chiave
Stima del periodo da un crittogramma di $N$ lettere (esercizio 2.1.5, con $\varphi_o$, $\kappa_p$, $\kappa_r$ definiti nella nota [[Indice di coincidenza]]):
$$L\cong\frac{\kappa_p-\kappa_r}{\dfrac{\varphi_o}{N(N-1)}-\kappa_r}.$$

## Intuizione
Ogni posizione $\equiv j\pmod L$ è cifrata con lo stesso Cesare. Una volta noto $L$, il polialfabetico si spezza in $L$ monoalfabetici, ciascuno attaccabile con le frequenze.

**Sovrapposizione di Kerckhoffs** (§2.1.1). Siano $C_1=\mathrm{Enc}_k(P_1),\dots,C_s=\mathrm{Enc}_k(P_s)$ cifrati con la stessa chiave. Si scrivono uno sotto l'altro, $C_i=C_{i1}C_{i2}\cdots C_{iN}$. Poiché la chiave si ripete, le **colonne** della matrice $(C_{ij})$ sono cifrate monoalfabeticamente, e su di esse si applica l'analisi delle frequenze.

Più in generale, pensando le chiavi come vettori di $\mathbb Z_2^m$, ogni crittogramma intercettato è un'equazione per la chiave incognita: più crittogrammi con la stessa chiave significano meno soluzioni possibili. Per questo in uno scenario COA è sconsigliato cifrare molti messaggi con la stessa chiave.

## Come si usa
Procedura per l'esercizio 2.1.6 (crittogramma Vigenère fornito):
1. calcolare $\varphi_o$ con il test Phi;
2. stimare $L$ con la formula sopra;
3. sovrapporre i blocchi di lunghezza $L$;
4. risolvere ogni colonna come un Cesare.

Le dispense citano anche l'**attacco di Kasiski** al Vigenère (lezione 1, solo nominato).

## Nei corsi
- **Crittografia** (magistrale): cifrari polialfabetici nella lezione 1 (Alberti, macchine a rotori, Vigenère), crittanalisi nella lezione 2 (Kerckhoffs, Friedman e Kullback), formalizzazione in $\mathbb Z_{26}$ nella lezione 3. Fonti: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week1.pdf` (Critto 1, pp. 22-23, 26); `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week2.pdf` (Critto 2, pp. 2-5); `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week3.pdf` (Critto 3, p. 3).

## Prerequisiti
- [[Cifrario di Cesare]]: ogni colonna è un Cesare
- [[Classi di resto modulo n]]: somma vettoriale in $\mathbb Z_{26}^m$

## Porta a
- [[Indice di coincidenza]]: test di Friedman e Kullback per periodo e chiave comune

## Collegati
- [[One-time pad]]: un Vigenère con chiave casuale, lunga quanto il messaggio e mai riusata
- [[Principio di Kerckhoffs]]: omonimia, Kerckhoffs firma sia il principio sia la sovrapposizione
- [[Modelli di attacco crittografico]]: la crittanalisi è un COA
