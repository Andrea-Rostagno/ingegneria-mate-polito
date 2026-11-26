---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["second order cone programming", "SOCP", "QCQP", "quadratically constrained quadratic programming", "vincoli conici", "ottimizzazione conica", "sintesi di filtri"]
tags: [competenza, area/ottimizzazione]
---

# Programmazione conica del secondo ordine

> Problemi convessi con vincoli del tipo "norma euclidea di una funzione affine ≤ funzione affine"; generalizzano LP, QP e QCQP convessi e si risolvono con algoritmi a punti interni.

## Definizione / enunciato
**QCQP** (vincoli quadratici):
$$\min\tfrac12\mathbf x^TQ\mathbf x+\mathbf f^T\mathbf x\ \ \text{s.t. }\tfrac12\mathbf x^TH_i\mathbf x+\mathbf h_i^T\mathbf x\le d_i,\ A\mathbf x=\mathbf b,\ \mathbf x\ge\mathbf 0,$$
convesso se $Q\in S_+$ e $H_i\in S_+$ per ogni $i$.

**SOCP:**
$$\min\mathbf f^T\mathbf x\ \ \text{s.t. }\|A_i\mathbf x+\mathbf b_i\|_2\le\mathbf c_i^T\mathbf x+d_i,\ i=1,\dots,m;\ \ B\mathbf x=\mathbf g,\ \mathbf x\ge\mathbf 0 .$$
Ogni vincolo conico chiede che un'immagine affine di $\mathbf x$ stia nel cono del secondo ordine $\{(\mathbf y,t):\|\mathbf y\|_2=\sqrt{\mathbf y^T\mathbf y}\le t\}$.

## Formule chiave
Sintesi di filtri (minimax sulla funzione di trasferimento):
$$\min_{\mathbf x\in\mathbb R^n}\ \max_{i=1,\dots,m}\Big|H^*(\omega_i)-\sum_{j=1}^nx_jH_j(\omega_i)\Big| .$$

## Intuizione
Elevare al quadrato i due membri di un vincolo conico per togliere la radice è "controproducente": può trasformare un vincolo convesso in uno non convesso. Va lasciato in forma conica.

## Come si usa
Sintesi di un filtro: la risposta di un sistema lineare tempo-invariante è la convoluzione $y(t)=\int u(s)h(t-s)\,ds$, che in frequenza diventa $Y(\omega)=U(\omega)H(\omega)$. Data una funzione di trasferimento target $H^*(\omega)$ (es. passa-basso) e elementi $H_j(\omega)$, si minimizza la massima deviazione su frequenze discretizzate $\omega_i$. Nel tempo sarebbe un problema in norma $\ell_\infty$ (quindi LP), ma $H$ è complessa e $|z|=\sqrt{\mathrm{Re}(z)^2+\mathrm{Im}(z)^2}$: si ottiene un SOCP. Anche il vincolo robusto con incertezza ellissoidale $\mathbf a_0^T\mathbf x+\|\mathbf x\|_2\le b$ è conico del secondo ordine.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap1.pdf` (p. 27, 34-35); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap3.pdf` (p. 59-60); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap4.pdf` (p. 36, 43).

## Prerequisiti
- [[Programmazione quadratica]]: QCQP estende QP ai vincoli
- [[Cono convesso]]: il cono di Lorentz definisce i vincoli
- [[Norme vettoriali]]: vincolo sulla norma euclidea

## Porta a
- [[Programmazione lineare robusta]]: incertezza ellissoidale dà un vincolo SOCP

## Collegati
- [[Linearizzazione di valore assoluto e min-max]]: con valori reali il minimax sarebbe un LP
- [[Trasformata di Fourier]]: il filtro si progetta nel dominio delle frequenze
- [[Convoluzione]]: risposta del sistema all'ingresso
- [[Numeri complessi]]: il modulo complesso introduce la radice
