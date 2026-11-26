---
tipo: competenza
area: statistica
corsi: [Prob e statistica]
livello: [triennale]
aliases: ["sufficient statistic", "sufficienza", "sufficiency", "principio di sufficienza", "sufficiency principle", "riduzione dei dati", "data reduction", "partizione indotta da una statistica"]
tags: [competenza, area/statistica]
---

# Statistica sufficiente

> $T(\mathbf X)$ è sufficiente per $\theta$ se la legge del campione dato $T(\mathbf X)$ non dipende da $\theta$: contiene tutta l'informazione sul parametro e permette di ridurre i dati senza perdite.

## Definizione / enunciato
Ogni statistica induce una **partizione** dello spazio dei campioni $\mathcal X$ negli insiemi $A_t=\{\mathbf x:T(\mathbf x)=t\}$, uguale a quella di $\mathbf X$ o più grossolana.
**Principio di sufficienza**: se $T(\mathbf x)=T(\mathbf y)$ l'inferenza su $\theta$ deve essere la stessa osservando $\mathbf x$ o $\mathbf y$.
**Definizione.** $T(\mathbf X)$ è **sufficiente** per $\theta$ se la distribuzione condizionata di $\mathbf X$ dato $T(\mathbf X)$ non dipende da $\theta$, per **tutti** i valori $\mathbf x\in\mathcal X$ e $T(\mathbf X)\in\mathcal T$.

## Formule chiave
**Teorema.** Se $p(\mathbf x|\theta)$ è la pmf/pdf di $\mathbf X$ e $q(t|\theta)$ quella di $T(\mathbf X)$, $T$ è sufficiente per $\theta$ se e solo se per ogni $\mathbf x$
$$\frac{p(\mathbf x|\theta)}{q(T(\mathbf x)|\theta)}\ \text{è costante come funzione di }\theta .$$
(Discreto: $\mathbb P(\mathbf X=\mathbf x|T=T(\mathbf x))=\frac{p(\mathbf x|\theta)}{q(T(\mathbf x)|\theta)}$.)
Trasformazioni biunivoche di statistiche sufficienti sono sufficienti.

## Intuizione
Per sapere la proporzione $p$ di "leave" nella Brexit non serve sapere chi ha risposto cosa, basta quanti hanno detto "leave". La sufficienza dipende dal modello: $\bar X$ è sufficiente per la media di una normale ma non per il parametro di una $G(a,1)$.

## Come si usa
- $X_i$ i.i.d. $\mathrm{Bern}(p)$: $\frac{p^t(1-p)^{n-t}}{\binom nt p^t(1-p)^{n-t}}=\binom nt^{-1}$, quindi $T=\sum X_i$ è sufficiente.
- $\mathcal N(\mu,\sigma^2)$ con $\sigma^2$ noto: con $\sum(x_i-\mu)^2=\sum(x_i-\bar x)^2+n(\bar x-\mu)^2$ e $\bar X\sim\mathcal N(\mu,\sigma^2/n)$ il rapporto non dipende da $\mu$, quindi $\bar X$ è sufficiente.
- $\mathcal P(\lambda)$: $\frac{f(\mathbf x|\lambda)}{f(t|\lambda)}=\frac{t!}{n^t\prod x_i!}$, quindi $T=\sum X_i$ è sufficiente.

## Nei corsi
- **Prob e statistica** (triennale): "data reduction", lezione 3 di statistica (Casella-Berger). Fonti: `triennale/ANNO 3/prob e statistica/statistica/data reduction lez3.pdf` (Sufficienza I-XII, Funzioni biunivoche I-IV).

## Prerequisiti
- [[Campione casuale]]: statistiche come funzioni del campione
- [[Distribuzione condizionata]]: legge di $\mathbf X$ dato $T(\mathbf X)$

## Porta a
- [[Teorema di fattorizzazione]]: criterio pratico di sufficienza
- [[Statistica sufficiente minimale]]: massima riduzione dei dati
- [[Teorema di Rao-Blackwell]]: condizionare a una sufficiente migliora uno stimatore

## Collegati
- [[Statistiche d'ordine]]: il campione ordinato è sufficiente nell'esempio della Gamma
