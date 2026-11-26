---
tipo: competenza
area: statistica
corsi: [Prob e statistica, Modelli statistici]
livello: [triennale, magistrale]
aliases: ["sample mean and variance of a normal sample", "indipendenza di media e varianza campionaria", "distribuzione di X barra e S^2", "(n-1)S^2/sigma^2 chi-quadro", "teorema delle distribuzioni campionarie normali", "due campioni normali"]
tags: [competenza, area/statistica]
---

# Media e varianza campionaria nel caso normale

> In un campione normale $\bar X$ e $S^2$ sono indipendenti, $\bar X\sim\mathcal N(\mu,\sigma^2/n)$, $(n-1)S^2/\sigma^2\sim\chi^2(n-1)$ e $\sqrt n(\bar X-\mu)/S\sim t(n-1)$: è il teorema su cui poggiano z-test, t-test, chi-test e F-test.

## Definizione / enunciato
**Teorema.** $X_1,\dots,X_n$ i.i.d. $\mathcal N(\mu,\sigma^2)$:
(i) $\bar X$ e $S^2$ sono indipendenti; (ii) $\bar X\sim\mathcal N(\mu,\frac{\sigma^2}n)$; (iii) $\frac{(n-1)S^2}{\sigma^2}\sim\chi^2(n-1)$; (iv) $\frac{\sqrt n(\bar X-\mu)}S\sim t(n-1)$.
**Due campioni.** $X_1..X_m$ i.i.d. $\mathcal N(\mu_x,\sigma_x^2)$, $Y_1..Y_n$ i.i.d. $\mathcal N(\mu_y,\sigma_y^2)$ indipendenti: $\bar X-\bar Y\perp S_x^2/S_y^2$; $\bar X-\bar Y\sim\mathcal N(\mu_x-\mu_y,\frac{\sigma_x^2}m+\frac{\sigma_y^2}n)$; $\frac{\sigma_y^2S_x^2}{\sigma_x^2S_y^2}\sim F(m-1,n-1)$.

## Formule chiave
- Identità: $\sum(X_i-\bar X)^2=\sum X_i^2-n\bar X^2$ e $\sum(x_i-\mu)^2=\sum(x_i-\bar x)^2+n(\bar x-\mu)^2$.
- (i) primo modo: $(\bar X,X_1-\bar X,\dots,X_n-\bar X)=A\mathbf X$ è gaussiano e $\operatorname{Cov}(\bar X,X_j-\bar X)=\frac{\sigma^2}n-\frac{\sigma^2}n=0$.
- (i) secondo modo: con $A$ ortogonale ($AA^T=I_n$, prima riga $\frac1{\sqrt n}$, riga $k$ con $k-1$ elementi $\frac1{\sqrt{k(k-1)}}$ e poi $-\frac{k-1}{\sqrt{k(k-1)}}$), $\mathbf W=A\mathbf X$ ha componenti indipendenti, $W_1=\sqrt n\bar X$ e $W_2^2+\dots+W_n^2=(n-1)S^2$.
- (iii) segue perché $(n-1)S^2/\sigma^2$ è somma di $n-1$ normali standard al quadrato; (iv) è il rapporto fra la normale standard $(\bar X-\mu)/\sqrt{\sigma^2/n}$ e la radice del chi-quadro diviso i suoi gradi.

## Intuizione
Gli scarti dalla media non contengono informazione sulla posizione della media: in un campione gaussiano le due cose sono separate esattamente. Stimare $\mu$ con $\bar X$ costa un grado di libertà.

## Come si usa
Fornisce le quantità pivotali dei test e intervalli classici: $\frac{\bar X-\mu_0}{\sqrt{S^2/n}}\sim t(n-1)$, $\frac{(n-1)S^2}{\sigma_0^2}\sim\chi^2(n-1)$, $\frac{S_x^2}{c_0S_y^2}\sim F(n-1,m-1)$.

## Nei corsi
- **Prob e statistica** (triennale): slide di statistica campionaria. Nella dimostrazione del caso a due campioni la slide scrive $(m-1)S_x^2/\sigma_x^2\sim\chi^2(n-1)$: refuso per $\chi^2(m-1)$ (da verificare sul PDF). Qui $m$ è la numerosità delle $X$ e $n$ quella delle $Y$; nelle slide sui test le lettere sono scambiate ($F(n-1,m-1)$). Fonti: `triennale/ANNO 3/prob e statistica/statistica/statistica campionionaria lez2.pdf` (Statistiche e Distribuzione Campionaria V-XIII).
- **Modelli statistici** (magistrale): dimostrato con le proiezioni (libro, cap. 8, Cor. 8.15): $\mathbf X\sim N_n(\mu\mathbf 1,\sigma^2\mathbf I)$, $\bar X=\frac1n\mathbf 1'\mathbf X$ e scarti $(\mathbf I-\frac1n\mathbf 1\mathbf 1')\mathbf X$ indipendenti perché $\frac1n\mathbf 1'(\mathbf I-\frac1n\mathbf 1\mathbf 1')=\mathbf 0$; $\sum(X_i-\bar X)^2/\sigma^2$ è la forma quadratica della proiezione di rango $n-1$, quindi $\chi^2(n-1)$. È il caso $p=1$ (sola intercetta) del modello lineare. Fonti: `Libri/Modelli statistici/capitoli/cap08.tex` (§8.6, p. 135); `magistrale/Modelli statistici/PDF corretti/251105.pdf`.

## Prerequisiti
- [[Campione casuale]]: $\bar X$ e $S^2$
- [[Vettore gaussiano]]: covarianza nulla implica indipendenza
- [[Distribuzione chi-quadro]]: legge di $(n-1)S^2/\sigma^2$
- [[Distribuzione t di Student]]: legge della media studentizzata

## Porta a
- [[Test t di Student]]: statistica $t$
- [[Inferenza sui coefficienti di regressione]]: generalizzazione a $p$ coefficienti (Modelli statistici)
- [[Test chi-quadro sulla varianza]]: statistica $V$
- [[Test F sul rapporto di varianze]]: rapporto delle varianze campionarie
- [[Intervallo di confidenza]]: quantità pivotali

## Collegati
- [[Covarianza]]: $\operatorname{Cov}(\bar X,X_j-\bar X)=0$
- [[Matrice ortogonale]]: trasformazione ortogonale nella seconda dimostrazione
- [[Distribuzione F di Fisher-Snedecor]]: caso a due campioni
