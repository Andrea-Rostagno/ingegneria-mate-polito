---
tipo: competenza
area: probabilita
corsi: [Prob e statistica]
livello: [triennale]
aliases: ["characteristic function", "Phi_X(t)", "trasformata di Fourier di una misura", "Fourier transform of a probability measure", "funzione generatrice dei momenti", "moment generating function", "criterio di indipendenza"]
tags: [competenza, area/probabilita]
---

# Funzione caratteristica

> $\Phi_{\mathbf X}(\mathbf t)=\mathbb E[e^{i\mathbf t^T\mathbf X}]$, trasformata di Fourier della legge di $\mathbf X$: è sempre definita, caratterizza la legge, trasforma somme indipendenti in prodotti e genera i momenti.

## Definizione / enunciato
Per $\mu$ misura finita su $(\mathbb R^N,\mathcal B(\mathbb R^N))$, $\hat\mu(\mathbf t)=\int e^{i\mathbf t^T\mathbf x}d\mu(\mathbf x)$. Per un vettore aleatorio
$$\Phi_{\mathbf X}(\mathbf t)=\widehat{\mathbb P_{\mathbf X}}(\mathbf t)=\mathbb E\big[e^{i\mathbf t^T\mathbf X}\big]=\mathbb E[\cos(\mathbf t^T\mathbf X)]+i\,\mathbb E[\sin(\mathbf t^T\mathbf X)],\quad\mathbf t\in\mathbb R^N,$$
ben definita su tutto $\mathbb R^N$ per qualunque $\mathbf X$. **Teorema**: $\mu_1=\mu_2\iff\hat\mu_1=\hat\mu_2$; quindi $\mathbf X\sim\mathbf Y\iff\Phi_{\mathbf X}=\Phi_{\mathbf Y}$. Se $\Phi_{\mathbf X}$ è integrabile, $\mathbf X$ è a.c. e (inversione)
$$f_{\mathbf X}(\mathbf x)=\frac1{(2\pi)^N}\int_{\mathbb R^N}e^{-i\mathbf t^T\mathbf x}\Phi_{\mathbf X}(\mathbf t)\,d\mathbf t.$$

## Formule chiave
1. $\Phi(\mathbf 0)=1$, $|\Phi|\le1$, $\Phi$ uniformemente continua (convergenza dominata).
2. $\Phi_{-\mathbf X}=\overline{\Phi_{\mathbf X}}$; se $\mathbf X\sim-\mathbf X$ (simmetrico) $\Phi_{\mathbf X}$ è reale.
3. $\mathbf X\perp\mathbf Y\Rightarrow\Phi_{\mathbf X+\mathbf Y}=\Phi_{\mathbf X}\Phi_{\mathbf Y}$.
4. $\Phi_{A\mathbf X+\mathbf b}(\mathbf t)=e^{i\mathbf t^T\mathbf b}\Phi_{\mathbf X}(A^T\mathbf t)$; in dimensione 1 $\Phi_{aX+b}(t)=e^{itb}\Phi_X(at)$.
5. Regolarità: se $X_j\in L^m$ allora $\Phi\in C^m$ e $\frac{\partial^k\Phi}{\partial t_{j_1}\cdots\partial t_{j_k}}(\mathbf 0)=i^k\mathbb E[X_{j_1}\cdots X_{j_k}]$; in particolare $\Phi_X^{(k)}(0)=i^k\mathbb E[X^k]$. Viceversa parziale: $\Phi_X\in C^m$ con $m$ **pari** $\Rightarrow X\in L^m$.
6. Marginali: $\Phi_{X_j}(t)=\Phi_{\mathbf X}(t\mathbf e_j)$.
7. **Criterio di indipendenza**: le componenti sono indipendenti $\iff\Phi_{\mathbf X}(\mathbf t)=\prod_j\Phi_{X_j}(t_j)$.
Anche la funzione generatrice dei momenti $M_{\mathbf X}(\mathbf t)=\mathbb E[e^{\mathbf t^T\mathbf X}]$, quando esiste, caratterizza la legge.

## Intuizione
Il vantaggio rispetto alle densità: la somma di indipendenti (una convoluzione) diventa un prodotto, e la convergenza in legge si legge come convergenza puntuale delle $\Phi$.

## Come si usa
- $N\sim\mathcal N(0,1)$: derivando sotto il segno e integrando per parti $\Phi_N'(t)=-t\Phi_N(t)$, $\Phi_N(0)=1$, quindi $\Phi_N(t)=e^{-t^2/2}$; per $X=\sigma N+\mu$, $\Phi_X(t)=e^{it\mu-\sigma^2t^2/2}$; da qui $\mathcal N(\mu_x,\sigma_x^2)+\mathcal N(\mu_y,\sigma_y^2)$ indipendenti è $\mathcal N(\mu_x+\mu_y,\sigma_x^2+\sigma_y^2)$.
- $\Phi_X(t)=(1+t^2)^{-1/2}$: $\mathbb E X=0$, $\operatorname{Var}X=1$; per $X,Y$ i.i.d. con questa $\Phi$, sviluppando $(1+t^2)^{-1}$ in serie, $\mathbb E[(X+Y)^4]=4!=24$.

## Nei corsi
- **Prob e statistica** (triennale): lezioni 10-11. Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione10(26-10-2023).pdf` (pp. 13-14); `2023Lezione11(27-10-2023).pdf` (pp. 1-13); `statistica/Distribuzioni lez1.pdf` (richiami normale univariata e multivariata).

## Prerequisiti
- [[Valore atteso]]: valore atteso di una v.a. complessa
- [[Trasformata di Fourier]]: $\Phi$ è la trasformata della legge
- [[Vettore aleatorio]]: definizione per $\mathbf X\in\mathbb R^N$

## Porta a
- [[Teorema di continuità di Lévy]]: convergenza in legge via $\Phi$
- [[Vettore gaussiano]]: $\Phi_{\mathbf Y}(\mathbf t)=e^{i\mathbf t^T\boldsymbol\mu-\frac12\mathbf t^T\Sigma\mathbf t}$
- [[Teorema del limite centrale]]: dimostrazione con lo sviluppo di $\Phi$

## Collegati
- [[Somma di variabili aleatorie indipendenti]]: prodotto delle $\Phi$
- [[Indipendenza di variabili aleatorie]]: criterio di fattorizzazione
- [[Formula di inversione di Fourier]]: inversione della funzione caratteristica
