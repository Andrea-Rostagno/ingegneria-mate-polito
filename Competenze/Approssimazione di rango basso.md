---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["low-rank approximation", "teorema di Eckart-Young", "Eckart-Young theorem", "SVD troncata", "truncated SVD", "compressione di immagini"]
tags: [competenza, area/algebra-geometria]
---

# Approssimazione di rango basso

> La SVD troncata $A_k=\sum_{i\le k}s_iu_iv_i^T$ è la migliore approssimazione di rango $k$ in norma 2, con errore $s_{k+1}$.

## Definizione / enunciato
**Teorema.** Sia $A=USV^T$ con $s_1\ge\dots\ge s_r>s_{r+1}=\dots=s_p=0$, e $k\le r$ intero positivo. Posto
$$A_k=\sum_{i=1}^ks_iu_iv_i^T,\qquad\mathcal B_k=\{B\in\mathbb R^{m,n}:\ \mathrm{rango}(B)=k\},$$
si ha
$$\min_{B\in\mathcal B_k}\|A-B\|_2=\|A-A_k\|_2=s_{k+1}.$$
Quindi $A_k$ è la migliore approssimazione di rango $k$ in norma 2, e $s_{k+1}$ è la distanza di $A$ dalle matrici di rango $k$. (Le slide non danno un nome al teorema; "Eckart-Young" è il nome usato in letteratura.)

## Formule chiave
$$\|A-A_k\|_2=s_{k+1},\qquad \text{memoria di } A_k:\ k(m+n+1)\ \text{numeri}$$

## Intuizione
I primi termini $s_iu_iv_i^T$ portano la maggior parte dell'"energia" di $A$; troncare dove i valori singolari diventano piccoli scarta poca informazione e molta memoria.

## Come si usa
**Compressione di immagini**: una foto $1000\times1000$ in livelli di grigio, se basta $n=5$, si memorizza con $2\cdot5\cdot1000+5=10005$ valori invece di $10^6$ (risparmio di quasi il 99%). Esempio delle slide: matrice $271\times300$, $650400$ byte; con rango $n=10,30,50$ servono $(271n+300n+n)\cdot8$ byte, cioè il 7%, 21%, 35%. Lo stesso troncamento migliora la soluzione di sistemi mal condizionati.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn4_autovalori_valori_singolari_print.pdf` (slide 64-65, 82-87).

## Prerequisiti
- [[Decomposizione ai valori singolari]]: troncamento della somma s_i u_i v_i^T
- [[Norma spettrale]]: errore misurato in norma 2

## Porta a
- Nessuno.

## Collegati
- [[Pseudo-inversa di Moore-Penrose]]: valori singolari piccoli azzerati nei sistemi mal condizionati
