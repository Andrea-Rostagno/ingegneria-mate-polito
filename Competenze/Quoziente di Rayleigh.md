---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["Rayleigh quotient"]
tags: [competenza, area/algebra-geometria]
---

# Quoziente di Rayleigh

> Il numero $x^HAx/x^Hx$, che vale $\lambda$ quando $x$ è autovettore: dato un autovettore, restituisce l'autovalore.

## Definizione / enunciato
Data $A$ di ordine $n$ e $x\ne0$, il **quoziente di Rayleigh** è
$$r_A(x)=\frac{x^HAx}{x^Hx},$$
dove $x^H$ è il trasposto coniugato ($x^H=x^T$ se $x$ è reale). Se $x$ è autovettore con autovalore $\lambda$, allora $r_A(x)=\lambda$.

## Formule chiave
$$r_A(x)=\frac{x^HAx}{x^Hx},\qquad Ax=\lambda x\Rightarrow r_A(x)=\lambda$$

## Intuizione
Autovalore e autovettore si ricavano l'uno dall'altro: noto $\lambda$, l'autovettore risolve il sistema omogeneo $Ax=\lambda x$; noto $x$, l'autovalore è $r_A(x)$. Se $x$ approssima bene un autovettore, $r_A(x)$ approssima bene l'autovalore.

## Come si usa
Con il quoziente di Rayleigh e la definizione si dimostra che una matrice simmetrica è definita positiva se e solo se ha autovalori tutti positivi. Nel metodo delle potenze, con $\|w^{(m)}\|_2=1$, la stima dell'autovalore dominante è $\lambda_1^{(m)}=(w^{(m)})^TAw^{(m)}$.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn4_autovalori_valori_singolari_print.pdf` (slide 7-8, 34).

## Prerequisiti
- [[Autovalori e autovettori]]: restituisce lambda dato l'autovettore

## Porta a
- [[Metodo delle potenze]]: stima dell'autovalore a ogni passo

## Collegati
- [[Matrice simmetrica definita positiva]]: sdp se e solo se autovalori positivi
- [[Segnatura di una forma quadratica]]: è la forma quadratica divisa per ‖x‖², e su un autovettore vale l'autovalore
