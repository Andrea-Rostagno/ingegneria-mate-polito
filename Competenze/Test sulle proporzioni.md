---
tipo: competenza
area: statistica
corsi: [Prob e statistica, Modelli statistici]
livello: [triennale, magistrale]
aliases: ["test for proportions", "test sulla proporzione", "test binomiale approssimato", "test di una proporzione", "test approssimato con il TLC"]
tags: [competenza, area/statistica]
---

# Test sulle proporzioni

> Test su $p$ di una Bernoulli basato sull'approssimazione normale: $Z=\frac{\bar X-p_0}{\sqrt{p_0(1-p_0)/n}}$ (o con $\bar X(1-\bar X)$ al denominatore) è approssimativamente $\mathcal N(0,1)$ sotto $H_0$.

## Definizione / enunciato
**Dati**: $X_i\sim\mathrm{Bin}(p)$ (Bernoulli) i.i.d. **Ipotesi nulle** $H_0:p=p_0$, $p\le p_0$, $p<p_0$, $p\ge p_0$, $p>p_0$.
$$Z=\frac{\bar X-p_0}{\sqrt{\frac{p_0(1-p_0)}n}}\overset{approx}\sim N(0,1)\qquad\text{oppure}\qquad Z=\frac{\bar X-p_0}{\sqrt{\frac{\bar X(1-\bar X)}n}}\overset{approx}\sim N(0,1).$$

## Formule chiave
- Per il TLC $\bar X\approx\mathcal N\big(p,\frac{p(1-p)}n\big)$; poiché $\bar X(1-\bar X)\xrightarrow{\mathbb P}p(1-p)$, Slutsky giustifica la seconda forma.
- Regione di accettazione bilaterale: $A(\mathbf X)=\big\{|\bar X-p_0|\le z_{\alpha/2}\sqrt{\bar X(1-\bar X)/n}\big\}$, valida per ogni $p_0$ e $n$.
- Stessa idea per la Poisson: $\bar x\approx\mathcal N(\lambda,\lambda/n)$ e $R=\{\sum x_i\ge n(\lambda_0+z_\alpha\sqrt{\lambda_0/n})\}$ per $H_0:\lambda\le\lambda_0$.

## Intuizione
Una quantità pivotale esatta per la binomiale non è facile da trovare; per $n$ grande la proporzione campionaria è quasi normale e si standardizza come per la media.

## Come si usa
Brexit: intenzioni di voto $\mathrm{B}(p)$, $n=4772$, $H_0:p=0.5$; il pivot normale dà la regione in termini di $\bar X$ invece della somma binomiale. Esempio motivante: proporzioni di "leave" $0.48$ a gennaio e $0.38$ a giugno 2016, sono diverse?

## Nei corsi
- **Prob e statistica** (triennale): slide sui test. Fonti: `triennale/ANNO 3/prob e statistica/statistica/Test d'Ipotesi e Intervalli di Confidenza lez6.pdf` (Introduzione II; Costruzione del test XI-XV; Rapporto di verosimiglianza XXIV-XXV; Statistiche da conoscere II).
- **Modelli statistici** (magistrale): test esatto binomiale sul dado (30 sei su 100, $H_0:\pi=1/6$) e test asintotico da De Moivre-Laplace; invertiti danno gli intervalli di Clopper-Pearson, Wilson e Wald (libro, cap. 15, §15.2). Con $D=2$ la statistica di Pearson è il quadrato della statistica $z$. Fonti: `Libri/Modelli statistici/capitoli/cap15.tex` (pp. 248-250).

## Prerequisiti
- [[Teorema del limite centrale]]: normalità approssimata di $\bar X$
- [[Teorema di Slutsky]]: sostituzione della varianza con la stima
- [[Quantità pivotale]]: pivot approssimato

## Porta a
- Nessuno nel corso (Prob e statistica).
- [[Intervallo di confidenza per una proporzione]]: inversione dei test esatto e asintotico (Modelli statistici)
- [[Test chi-quadro di bontà dell'adattamento]]: estensione a $D$ categorie (Modelli statistici)

## Collegati
- [[Distribuzione binomiale]]: legge esatta della somma
