---
tipo: competenza
area: statistica
corsi: [Prob e statistica]
livello: [triennale]
aliases: ["minimal sufficient statistic", "minimalità", "minimality", "sufficiente e minimale", "teorema di minimalità"]
tags: [competenza, area/statistica]
---

# Statistica sufficiente minimale

> La statistica sufficiente che induce la partizione più grossolana possibile, cioè funzione di ogni altra statistica sufficiente: la massima riduzione dei dati senza perdere informazione su $\theta$.

## Definizione / enunciato
Una statistica sufficiente $T(\mathbf x)$ è **minimale** se per ogni altra statistica sufficiente $T'(\mathbf x)$, $T$ è funzione di $T'$: $T'(\mathbf x)=T'(\mathbf y)\Rightarrow T(\mathbf x)=T(\mathbf y)$.

## Formule chiave
**Teorema.** Se esiste $T$ tale che, per ogni coppia di campioni $\mathbf x,\mathbf y$,
$$\frac{f(\mathbf x|\theta)}{f(\mathbf y|\theta)}=C_{\mathbf x,\mathbf y}\ \text{costante in }\theta\iff T(\mathbf x)=T(\mathbf y),$$
allora $T(\mathbf X)$ è sufficiente e minimale.
Dimostrazione: (sufficienza) scelto un rappresentante $\mathbf x_{T(\mathbf x)}$ per ogni insieme della partizione, $f(\mathbf x|\theta)=h(\mathbf x)f(\mathbf x_{T(\mathbf x)}|\theta)=h(\mathbf x)g(T(\mathbf x)|\theta)$ e si applica la fattorizzazione; (minimalità) se $T'(\mathbf x)=T'(\mathbf y)$ il rapporto vale $h'(\mathbf x)/h'(\mathbf y)$, costante in $\theta$, quindi $T(\mathbf x)=T(\mathbf y)$.

## Intuizione
Con tre Bernoulli, $T'=(\sum X_i,X_1)$ è sufficiente ma separa $(1,0,0)$ da $(0,1,0)$, che per il principio di sufficienza vanno trattati allo stesso modo; $T=\sum X_i$ li unisce ed è minimale. Funzioni biunivoche di una minimale sono minimali (es. $\bar x$ al posto di $\sum x_i$).

## Come si usa
- Bernoulli: $\frac{f(\mathbf x|p)}{f(\mathbf y|p)}=p^{\sum x_i-\sum y_i}(1-p)^{\sum y_i-\sum x_i}$, costante in $p$ se e solo se $\sum x_i=\sum y_i$: $T=\sum X_i$ è minimale.
- Normale $\mathcal N(\mu,\sigma^2)$: il rapporto non dipende da $\mu$ se e solo se $\bar x=\bar y$ e da $\sigma^2$ se e solo se $\sum(x_i-\bar x)^2=\sum(y_i-\bar y)^2$: $T=(\bar X,S^2)$ è minimale.
- Poisson: $T=\sum X_i$ è minimale.

## Nei corsi
- **Prob e statistica** (triennale): lezione 3 di statistica. Nelle slide i titoli degli esercizi "Poisson" e "normale" sono scambiati. Fonti: `triennale/ANNO 3/prob e statistica/statistica/data reduction lez3.pdf` (Minimalità I-XI).

## Prerequisiti
- [[Statistica sufficiente]]: partizione e principio di sufficienza
- [[Teorema di fattorizzazione]]: dimostrazione del teorema di minimalità

## Porta a
- Nessuno nel corso.

## Collegati
- [[Funzione di verosimiglianza]]: il criterio è un rapporto di verosimiglianze
