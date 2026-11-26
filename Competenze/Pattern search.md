---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["generalized pattern search", "GPS", "coordinate search", "ricerca diretta", "direct search", "metodi derivative-free", "derivative-free optimization", "polling", "mesh di ricerca"]
tags: [competenza, area/ottimizzazione]
---

# Pattern search

> Metodi di ricerca diretta che richiedono solo valutazioni di $f$: esplorano i punti di una mesh attorno al punto corrente lungo le direzioni di uno spanning set positivo, espandendo o contraendo il passo.

## Definizione / enunciato
**Coordinate search:** si perturba una variabile per volta, $\mathbf y\in\{\mathbf x^{(k)}\pm\delta^{(k)}\mathbf e_i\}$, contraendo $\delta^{(k)}$ quando non si migliora. I metodi derivative-free non usano derivate ma ne sfruttano l'esistenza nelle dimostrazioni di convergenza, a differenza dei metodi black-box.

**Teorema.** Sia $D$ uno spanning set positivo per $\mathbb R^n$ e $\mathbf y\ne\mathbf 0$: esiste $\mathbf d\in D$ con $\mathbf y^T\mathbf d<0$. Se $f\in C^1$ e $\nabla f(\mathbf x)\ne\mathbf 0$, esiste $\mathbf d\in D$ direzione di discesa in $\mathbf x$. (Prova: $-\mathbf y=\sum_i\lambda_i\mathbf d_i$ con $\lambda_i\ge0$, quindi $0>-\|\mathbf y\|_2^2=\sum_i\lambda_i\mathbf y^T\mathbf d_i$.)

**Mesh:** con $G\in\mathbb R^{n\times n}$ invertibile e $Z\in\mathbb Z^{n\times p}$ le cui colonne sono uno spanning set positivo, $D=GZ$:
$$M^{(k)}=\{\mathbf x^{(k)}+\delta^{(k)}D\mathbf y:\mathbf y\in\mathbb N^p\}.$$

## Formule chiave
Algoritmo GPS: (1) **ricerca** su un sottoinsieme finito della mesh: se si trova $\mathbf y$ migliore, $\mathbf x^{(k+1)}=\mathbf y$, $\delta^{(k+1)}=\tau^{-1}\delta^{(k)}$; (2) altrimenti **polling** su $\{\mathbf x^{(k)}+\delta^{(k)}\mathbf d:\mathbf d\in D^{(k)}\}$ con $D^{(k)}$ spanning set positivo: se migliora si espande, altrimenti $\mathbf x^{(k)}$ è ottimo locale per la mesh e $\delta^{(k+1)}=\tau\delta^{(k)}$, $\tau\in(0,1)$; (3) stop quando $\delta^{(k+1)}\le\epsilon$.

## Intuizione
Se il gradiente non è nullo, almeno una delle direzioni di una base positiva "scende": il polling la trova senza conoscere il gradiente. La mesh non si costruisce, discretizza soltanto lo spazio.

## Come si usa
Esempio delle slide: $G=I_2$, $Z=\begin{pmatrix}1&0&-1&0\\0&1&0&-1\end{pmatrix}$ dà una mesh a maglie quadrate (le direzioni $\pm\mathbf e_i$ del coordinate search); si possono usare maglie triangolari. La fase di ricerca esplora in modo più globale, il polling garantisce la convergenza locale.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap5 (1).pdf` (p. 24, 28-30).

## Prerequisiti
- [[Combinazioni coniche, affini e convesse]]: spanning set e basi positive
- [[Metodi di discesa]]: esistenza di una direzione di discesa nel polling

## Collegati
- [[Metodo di Nelder-Mead]]: altro metodo di ricerca diretta
- [[Ottimizzazione surrogata]]: alternativa quando valutare $f$ è costoso
