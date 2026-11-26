---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["spectral norm", "norma 2 di matrice", "raggio spettrale", "spectral radius"]
tags: [competenza, area/algebra-geometria]
---

# Norma spettrale

> Norma 2 di una matrice, $\|A\|_2=\sqrt{\rho(A^TA)}$, costruita dal raggio spettrale, cioè dal massimo modulo degli autovalori.

## Definizione / enunciato
Il **raggio spettrale** di $A$ di ordine $n$ è il modulo dell'autovalore di modulo massimo:
$$\rho(A)=\max_{i=1,\dots,n}\{|\lambda_i|:\lambda_i\ \text{autovalore di } A\}.$$
La **norma 2** o **norma spettrale** di $A\in\mathbb R^{m,n}$ è
$$\|A\|_2=\sqrt{\rho(A^TA)}.$$

## Formule chiave
$$A=A^T\ \Rightarrow\ \|A\|_2=\sqrt{\rho(A^2)}=\sqrt{\rho(A)^2}=\rho(A)$$
$$\|A\|_2=s_1,\qquad \|A^{-1}\|_2=1/s_n\quad(\text{valori singolari})$$
Matlab: `max(abs(eig(A)))` per $\rho(A)$; `norm(A,2)` o `norm(A)` per la norma spettrale.

## Intuizione
È la norma di matrice compatibile con la norma euclidea dei vettori. Passa per $A^TA$, che è simmetrica con autovalori non negativi, per avere una quantità reale anche quando $A$ è rettangolare o non simmetrica.

## Come si usa
Serve per il condizionamento spettrale $K_2(A)=\|A\|_2\|A^{-1}\|_2=s_1/s_n$, per la stima di Bauer-Fike in norma 2 e per misurare l'errore della migliore approssimazione di rango $k$: $\|A-A_k\|_2=s_{k+1}$.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn4_autovalori_valori_singolari_print.pdf` (slide 9-10, 64, 68); `triennale/ANNO 1/algebra lineare/2022_cn3_sistemi_lineari_print.pdf` (slide 4).

## Prerequisiti
- [[Autovalori e autovettori]]: raggio spettrale di A^T A
- [[Norme matriciali]]: norma 2 di matrice

## Porta a
- [[Approssimazione di rango basso]]: errore misurato in norma 2

## Collegati
- [[Decomposizione ai valori singolari]]: ||A||_2 = s_1
