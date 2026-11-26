---
tipo: competenza
area: probabilita
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["Marchenko-Pastur law", "legge di Marčenko-Pastur", "Marcenko-Pastur", "regime delle matrici aleatorie", "random matrix regime", "covarianza campionaria in alta dimensione"]
tags: [competenza, area/probabilita]
---

# Legge di Marchenko-Pastur

> Quando dimensione $p$ e numero di campioni $n$ crescono insieme, gli autovalori della covarianza campionaria non convergono a quelli veri ma si distribuiscono secondo la legge di Marchenko-Pastur.

## Definizione / enunciato
$x_1,\dots,x_n\in\mathbb R^p$ i.i.d. da $\mathcal N(0,\Sigma_p)$. Lo stimatore di massima verosimiglianza di $\Sigma_p$ è la **covarianza campionaria**
$$\hat\Sigma_p=\frac1n\sum_{k=1}^nx_kx_k^T .$$
Se $p$ è fisso e $n\to\infty$, per la legge forte dei grandi numeri $\|\hat\Sigma_p-\Sigma_p\|\to0$ q.c. per ogni norma matriciale.

**Teorema** (Marčenko-Pastur, 1967). Con $\Sigma_p=I_p$, se $p,n\to\infty$ con $p/n\to c>0$:
$$\frac1p\sum_{k=1}^p\delta_{\lambda_k(\hat\Sigma_p)}\xrightarrow{\text{q.c.}}\mu\quad\text{debolmente},$$
dove $\mu$ è la legge di Marchenko-Pastur di parametro $c$: $\mu(\{0\})=\max(0,1-c^{-1})$ e su $(0,\infty)$ $\mu$ ha densità continua con supporto $[(1-\sqrt c)^2,(1+\sqrt c)^2]$.

## Formule chiave
Regime $p/n=c>1$ con $\Sigma_p=I_p$: la convergenza elemento per elemento resta, $\max_{i,j}|\hat\Sigma_{i,j}-\delta_{i,j}|\to0$ q.c., ma si perde la convergenza in norma spettrale, perché il rango di $X$ è limitato dal numero di campioni (vincolo sul rango da verificare sul PDF, p. 43) e quindi
$$\lambda_{\min}(\hat\Sigma_p)=0<1=\lambda_{\min}(\Sigma_p).$$

## Intuizione
Anche se tutti gli autovalori veri valgono 1, quelli stimati si sparpagliano in un intervallo largo: con pochi campioni per dimensione non si possono usare gli autovalori di $\hat\Sigma_p$ per stimare quelli di $\Sigma_p$. Figura delle slide: istogramma degli autovalori per $p=500$, $n=2000$ (cioè $c=0.25$, rapporto calcolato da noi) sovrapposto alla densità teorica.

## Come si usa
Le covarianze campionarie compaiono ovunque (misture gaussiane, PCA, minimi quadrati): nel regime $p\sim n$ la PCA può vedere direzioni di varianza "spurie". Rimedi: riduzione di dimensione, regolarizzazione, modelli parsimoniosi.

## Nei corsi
- **Matematica per l'AI** (triennale): sezione sulle matrici di covarianza di `triennale/ANNO 3/matematica AI/curse.pdf` (p. 36-49).

## Prerequisiti
- [[Matrice di covarianza]]: l'oggetto stimato
- [[Legge dei grandi numeri]]: convergenza nel regime classico $p$ fisso
- [[Autovalori e autovettori]]: si studia lo spettro di $\hat\Sigma_p$

## Porta a
- [[Analisi delle componenti principali]]: usa gli autovalori della covarianza campionaria

## Collegati
- [[Maledizione della dimensionalità]]: effetto della dimensione sulla stima
- [[Stimatore di massima verosimiglianza]]: $\hat\Sigma_p$ è lo stimatore ML
