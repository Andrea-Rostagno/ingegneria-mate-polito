---
tipo: competenza
area: probabilita
corsi: [Prob e statistica, Modelli statistici]
livello: [triennale, magistrale]
aliases: ["central limit theorem", "TLC", "CLT", "teorema centrale del limite", "approssimazione normale", "normal approximation", "correzione di continuità", "continuity correction", "asintoticamente normale"]
tags: [competenza, area/probabilita]
---

# Teorema del limite centrale

> La somma standardizzata di v.a. i.i.d. in $L^2$ converge in legge alla normale standard: $\frac{S_n-n\mu}{\sigma\sqrt n}\xrightarrow{\mathcal L}\mathcal N(0,1)$; giustifica le approssimazioni gaussiane.

## Definizione / enunciato
**Versione reale.** $(X_n)$ i.i.d. in $L^2$ con media $\mu$ e varianza $\sigma^2>0$, $S_n=\sum_{i=1}^nX_i$, $S_n^*=\frac{S_n-n\mu}{\sigma\sqrt n}$. Allora
$$S_n^*\xrightarrow{\mathcal L}N\sim\mathcal N(0,1),\qquad\text{equivalentemente}\qquad\sqrt n(\bar X_n-\mu)\xrightarrow{\mathcal L}\mathcal N(0,\sigma^2).$$
**Versione vettoriale.** $(\mathbf X_n)$ i.i.d. in $\mathbb R^k$ con componenti in $L^2$, media $\boldsymbol\mu$ e matrice di covarianza $C$: $\frac{\mathbf S_n-n\boldsymbol\mu}{\sqrt n}\xrightarrow{\mathcal L}\mathcal N_k(\mathbf 0,C)$.

## Formule chiave
- Approssimazione per $n$ grande ($n\ge30$ dà già buone approssimazioni): $\mathbb P(S_n^*\le x)\simeq\Phi(x)$, cioè $S_n\approx\mathcal N(n\mu,n\sigma^2)$, $\bar X_n\approx\mathcal N(\mu,\frac{\sigma^2}n)$ (ma **non** $S_n\xrightarrow{\mathcal L}\mathcal N(n\mu,n\sigma^2)$: il limite non può dipendere da $n$).
- Dimostrazione: con $Y_i=\frac{X_i-\mu}\sigma$, $\Phi_{S_n^*}(t)=[\Phi_Y(t/\sqrt n)]^n=[1-\frac{t^2}{2n}+o(\frac1n)]^n\to e^{-t^2/2}$, poi Lévy.
- Binomiale: buona approssimazione se $np\ge10$ e $n(1-p)\ge10$ (si accetta anche $\ge5$).

## Intuizione
Per la LGN $\bar X_n-\mu\to0$; ingrandendo con la lente $\sqrt n$ le oscillazioni "microscopiche" restano aleatorie e hanno distribuzione gaussiana qualunque sia la legge di partenza.

## Come si usa
Esercizio (lezione 18): 100 elettori, $p=0.4$ voterà B; $S_{100}\sim B(100,0.4)$. TLC: $\mathbb P(S_{100}\ge51)\simeq\mathbb P(N\ge\frac{51-40}{\sqrt{24}})=\mathbb P(N\ge2.24)=0.0125$, mentre $\mathbb P(S_{100}>50)\simeq\mathbb P(N\ge2.04)=0.0207$; la **correzione di continuità** ($50.5$) dà $\mathbb P(N\ge2.14)=0.0162$. Esercizio (lezione 19): $e^{-n}\sum_{k=0}^n\frac{n^k}{k!}=\mathbb P(X_n\le n)$ con $X_n\sim\mathcal P(n)$ somma di $n$ Poisson(1), quindi tende a $\Phi(0)=\frac12$.

## Nei corsi
- **Prob e statistica** (triennale): lezione 18; nelle slide di statistica è la base dei test approssimati (proporzioni, Poisson). Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione18(16-11-2023).pdf` (pp. 5-12); `2023Lezione19(17-11-2023).pdf` (p. 11); `statistica/Test d'Ipotesi e Intervalli di Confidenza lez6.pdf` (Costruzione del test XI).
- **Modelli statistici** (magistrale): enunciato scalare e vettoriale, $\sqrt n(\bar{\mathbf X}_n-\boldsymbol\mu)\to N_k(\mathbf 0,\Sigma)$ in legge (libro, cap. 7, Teorema 7.1; appendice B, Teorema B.4, con Slutsky e funzionale continuo). Due applicazioni portanti: **De Moivre-Laplace** $\sqrt n(N/n-\pi)\to N(0,\pi(1-\pi))$ per gli intervalli di Wald e Wilson (cap. 15, Teorema 15.3) e il **TLC multinomiale** $\sqrt n(\mathbf N/n-\boldsymbol\pi)\to N_d(\mathbf 0,\operatorname{diag}(\boldsymbol\pi)-\boldsymbol\pi\boldsymbol\pi')$, somma di Multinoulli i.i.d., da cui il teorema di Pearson (Teorema 15.12); giustifica anche l'errore Monte Carlo. Fonti: `Libri/Modelli statistici/capitoli/cap07.tex` (p. 109), `cap15.tex` (pp. 249-254), `appB.tex`.

## Prerequisiti
- [[Teorema di continuità di Lévy]]: passaggio al limite delle funzioni caratteristiche
- [[Funzione caratteristica]]: sviluppo di Taylor di $\Phi$ in 0
- [[Legge dei grandi numeri]]: $\bar X_n\to\mu$
- [[Convergenza in legge]]: tipo di convergenza

## Porta a
- [[Metodo delta]]: normalità asintotica di $g(\bar X_n)$
- [[Test sulle proporzioni]]: statistica approssimativamente normale
- [[Test chi-quadro di bontà dell'adattamento]]: TLC multinomiale e teorema di Pearson (Modelli statistici)
- [[Intervallo di confidenza per una proporzione]]: De Moivre-Laplace, Wald e Wilson (Modelli statistici)

## Collegati
- [[Distribuzione normale]]: legge limite
- [[Distribuzione binomiale]]: approssimazione normale con correzione di continuità
- [[Distribuzione normale degli errori]]: giustifica la gaussiana delle misure
- [[Matrice di covarianza]]: matrice del limite nella versione vettoriale
