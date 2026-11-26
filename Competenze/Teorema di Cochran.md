---
tipo: competenza
area: probabilita
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["Cochran's theorem", "Cochran", "proiezioni di una normale", "projections of a normal vector", "forme quadratiche chi-quadro", "scomposizione in chi-quadro indipendenti"]
tags: [competenza, area/probabilita]
---

# Teorema di Cochran

> Proiettando un vettore normale con covarianza $\sigma^2\mathbf I$ su sottospazi ortogonali si ottengono forme quadratiche indipendenti con distribuzione chi-quadro, con gradi di libertà pari alle dimensioni: è la base di tutti i test del modello lineare.

## Definizione / enunciato
**Proiezione di una normale** (libro, cap. 8, Teorema 8.14): se $\mathbf X\sim N_n(\boldsymbol\mu,\sigma^2\mathbf I_n)$ e $\mathbf P$ è una proiezione di rango $r$,
$$Q=\frac{(\mathbf X-\boldsymbol\mu)'\mathbf P(\mathbf X-\boldsymbol\mu)}{\sigma^2}=\frac{\|\mathbf P(\mathbf X-\boldsymbol\mu)\|^2}{\sigma^2}\sim\chi^2(r).$$
**Cochran** (Teorema 8.16): se $\mathbf P_1,\dots,\mathbf P_m$ sono proiezioni di ranghi $r_1,\dots,r_m$ con $\mathbf P_1+\dots+\mathbf P_m=\mathbf I_n$ e $\mathbf P_j\mathbf P_l=\mathbf 0$ ($j\ne l$), allora $\sum r_j=n$, le $Q_j=(\mathbf X-\boldsymbol\mu)'\mathbf P_j(\mathbf X-\boldsymbol\mu)/\sigma^2$ sono indipendenti e $Q_j\sim\chi^2(r_j)$; se $\mathbf P_j\boldsymbol\mu=\mathbf 0$ si può sostituire $\mathbf X-\boldsymbol\mu$ con $\mathbf X$.

## Formule chiave
Corollario (Cor. 8.15): per $X_i\overset{iid}\sim N(\mu,\sigma^2)$, $\bar X\sim N(\mu,\sigma^2/n)$, $\bar X\perp S^2$ e $(n-1)S^2/\sigma^2\sim\chi^2(n-1)$, con $\mathbf P=\frac1n\mathbf 1\mathbf 1'$ (rango 1) e $\mathbf I-\mathbf P$ (rango $n-1$).

## Intuizione
Con $\mathbf P=\mathbf T\boldsymbol\Lambda\mathbf T'$, il vettore $\mathbf T'(\mathbf X-\boldsymbol\mu)/\sigma$ è ancora normale standard (rotazione) e $Q$ è la somma dei quadrati di $r$ sue coordinate. Sottospazi ortogonali usano coordinate diverse, quindi indipendenti.

## Come si usa
- Nel modello lineare: $\mathrm{RSS}/\sigma^2=\mathbf Y'(\mathbf I-\mathbf P)\mathbf Y/\sigma^2\sim\chi^2(n-p)$, perché $(\mathbf I-\mathbf P)\mathbf X\boldsymbol\beta=\mathbf 0$.
- Nell'ANOVA: la scomposizione $\mathrm{RSS}_0=\mathrm{SS}_T+\mathrm{RSS}$ è una scomposizione in proiezioni ortogonali, da cui chi-quadro indipendenti e il rapporto $F$.
- Esercizio tipo: distribuzione di $\sum(X_i-\bar X)^2/\sigma^2$ "via proiezione su $\mathbf 1$".

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 8, §8.6 (Teorema 8.14, Cor. 8.15, Teorema 8.16, pp. 134-136). Fonti: `Libri/Modelli statistici/capitoli/cap08.tex`; `magistrale/Modelli statistici/251105 Quadratiche e lineari di normali.pdf`. In Prob e statistica il teorema era solo citato senza dimostrazione.

## Prerequisiti
- [[Matrice di proiezione]]: autovalori 0/1, rango uguale alla traccia
- [[Distribuzione chi-quadro]]: somma di quadrati di normali standard
- [[Indipendenza di forme lineari e quadratiche]]: indipendenza delle $Q_j$

## Porta a
- [[Media e varianza campionaria nel caso normale]]: corollario per un campione normale
- [[Inferenza sui coefficienti di regressione]]: $\mathrm{RSS}/\sigma^2\sim\chi^2(n-p)$
- [[Analisi della varianza]]: somme dei quadrati indipendenti
- [[Test F nel modello lineare]]: numeratore e denominatore indipendenti

## Collegati
- [[Misure di distanza]]: il quadrato della distanza di Mahalanobis è un'altra forma quadratica $\chi^2$
