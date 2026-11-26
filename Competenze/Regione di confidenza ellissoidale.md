---
tipo: competenza
area: statistica
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["confidence ellipsoid", "ellissoide di confidenza", "regione di confidenza per C beta", "confidence region", "quantità pivotale F", "contrasto", "contrast", "combinazione lineare degli effetti", "intervalli simultanei di Scheffé", "Scheffé", "banda di Working-Hotelling"]
tags: [competenza, area/statistica]
---

# Regione di confidenza ellissoidale

> Regione di confidenza simultanea per $q$ combinazioni lineari $\mathbf C\boldsymbol\beta$ dei coefficienti del modello lineare, ottenuta da un pivot $F$: è un ellissoide centrato nella stima.

## Definizione / enunciato
Combinazione lineare $\mathbf c'\boldsymbol\beta$; **contrasto** se $\sum c_j=0$ (es. $\beta_i-\beta_j$); $\mathbf C$ è $q\times p$ di rango $q$ (libro, cap. 11, Def. 11.1). **Pivot** (Teorema 11.2):
$$F(\boldsymbol\beta)=\frac{(\mathbf C\hat{\boldsymbol\beta}-\mathbf C\boldsymbol\beta)'\bigl(\mathbf C(\mathbf X'\mathbf X)^{-1}\mathbf C'\bigr)^{-1}(\mathbf C\hat{\boldsymbol\beta}-\mathbf C\boldsymbol\beta)}{qS^2}\sim F(q,n-p).$$
La regione $R=\{\boldsymbol\gamma:\ F\le F_\alpha(q,n-p)\}$ ha copertura esattamente $1-\alpha$ per ogni $(\boldsymbol\beta,\sigma^2)$ (Def. 11.3, Prop. 11.4).

## Formule chiave
- Geometria: ellissoide centrato in $\mathbf C\hat{\boldsymbol\beta}$, assi lungo gli autovettori di $\mathbf C(\mathbf X'\mathbf X)^{-1}\mathbf C'$, semiassi $\sqrt{\lambda_k\,q\,S^2F_\alpha(q,n-p)}$; ellisse per $q=2$, intervallo per $q=1$.
- Dimostrazione: $\mathbf C\hat{\boldsymbol\beta}\sim N_q(\mathbf C\boldsymbol\beta,\sigma^2\mathbf C(\mathbf X'\mathbf X)^{-1}\mathbf C')$, la forma di Mahalanobis è $\sigma^2\chi^2(q)$, indipendente da $\mathrm{RSS}$.
- **Scheffé** (Prop. 11.15): con probabilità $1-\alpha$, per tutti i $\mathbf c$ insieme, $|\mathbf c'\hat{\boldsymbol\beta}-\mathbf c'\boldsymbol\beta|\le\sqrt{pF_\alpha(p,n-p)}\,S\sqrt{\mathbf c'(\mathbf X'\mathbf X)^{-1}\mathbf c}$; in regressione semplice è la banda di Working-Hotelling per l'intera retta.

## Intuizione
Gli intervalli separati per due coefficienti correlati formano un rettangolo che non tiene conto della correlazione delle stime; l'ellisse sì, ed è inclinata quando $\hat\beta_0,\hat\beta_1$ sono correlati (centrare $x$ la raddrizza).

## Come si usa
Tre diete con 15 soggetti per gruppo ($n=45$, $p=3$): $\hat\beta_B=3.404$, $\hat\beta_C=6.572$, $S^2=14.186$; la regione congiunta per le due differenze dal riferimento è un'ellisse (libro, Es. `c11-ellisse-diete`). In R `car::ellipse` o il calcolo diretto della forma quadratica.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 11, §11.1-11.3 e §11.7 (Teorema 11.2, Prop. 11.4, 11.15, pp. 182-191). Fonti: `Libri/Modelli statistici/capitoli/cap11.tex`; `magistrale/Modelli statistici/251126 Regioni di confidenza.pdf` (manoscritto).

## Prerequisiti
- [[Inferenza sui coefficienti di regressione]]: distribuzione di $\hat{\boldsymbol\beta}$ e di $S^2$
- [[Misure di distanza]]: la forma quadratica è una distanza di Mahalanobis
- [[Distribuzione F di Fisher-Snedecor]]: legge del pivot

## Porta a
- [[Test F nel modello lineare]]: test di $\mathbf C\boldsymbol\beta=\boldsymbol\theta$ per dualità
- [[Correzione di Bonferroni]]: alternativa rettangolare
- [[Previsione nella regressione lineare]]: caso $q=1$ con $\mathbf C=\mathbf x_f'$

## Collegati
- [[Intervallo di confidenza]]: caso $q=1$
- [[Quantità pivotale]]: costruzione della regione
