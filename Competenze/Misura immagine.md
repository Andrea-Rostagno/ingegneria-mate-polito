---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["pushforward measure", "image measure", "misura immagine di mu mediante psi", "integrazione rispetto alla misura immagine", "formula del cambio di variabile astratto"]
tags: [competenza, area/analisi]
---

# Misura immagine

> La misura che una funzione misurabile $\psi$ trasporta dallo spazio di partenza a quello di arrivo: in probabilità è la legge di una variabile aleatoria.

## Definizione / enunciato
Siano $(X,\mathcal A,\mu)$ spazio di misura, $(Y,\mathcal Y)$ spazio misurabile e $\psi:X\to Y$ misurabile. La **misura immagine** è
$$\mu_\psi(B)=\mu(\psi^{-1}(B)),\qquad B\in\mathcal Y.$$
È una misura; se $\mu$ è di probabilità lo è anche $\mu_\psi$ ($\mu_\psi(Y)=\mu(X)=1$).

**Teorema (integrazione rispetto alla misura immagine).** Se $g:Y\to\overline{\mathbb R}$ è misurabile, $g\in L^1(Y,\mathcal Y,\mu_\psi)\iff g\circ\psi\in L^1(X,\mathcal A,\mu)$ e
$$\int_Yg\,d\mu_\psi=\int_X(g\circ\psi)\,d\mu.$$

## Formule chiave
Per $g=\sum_jb_j\mathbb 1_{B_j}$ semplice: $g\circ\psi=\sum_jb_j\mathbb 1_{\psi^{-1}(B_j)}$, quindi
$$\int_Yg\,d\mu_\psi=\sum_jb_j\mu(\psi^{-1}(B_j))=\int_X(g\circ\psi)\,d\mu;$$
poi si estende alle misurabili non negative e di segno qualsiasi.

## Intuizione
La σ-additività passa per controimmagine perché $\psi^{-1}$ conserva unioni e disgiunzioni. Integrare $g$ "dopo" $\psi$ equivale a integrare $g$ sulla misura trasportata.

## Come si usa
Con $\psi=X$ variabile aleatoria e $\mu=\mathbb P$: $\mathbb P_X(B)=\mathbb P(X\in B)$ è la legge, e la formula dà $\mathbb E[g(X)]=\int_\Omega g(X)\,d\mathbb P=\int_{\mathbb R}g\,d\mathbb P_X$, che per v.a. discrete diventa $\sum_ig(x_i)p_X(x_i)$.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): lezioni 8 e 12; fonte manoscritta. Fonti: `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione08(19-04-23) (3).pdf` (lezione 8, pp. 1-2), `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione12(25-05-23) (1).pdf` (lezione 12, pp. 4-5).

## Prerequisiti
- [[Spazio di misura]]: trasporto della misura
- [[Funzione misurabile]]: tramite una funzione misurabile

## Porta a
- [[Teorema di Radon-Nikodym]]: corollario per le leggi
- [[Variabile aleatoria]]: la legge è una misura immagine
- [[Valore atteso]]: E[g(X)] come integrale su R

## Collegati
- Nessuno.
