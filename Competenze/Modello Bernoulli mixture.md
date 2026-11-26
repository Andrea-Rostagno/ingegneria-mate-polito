---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [Bernoulli mixture model, modello di Bernoulli misto, indicatore di default, default indicator, perdita di un portafoglio di crediti, correlazione di default, portafoglio scambiabile, exchangeable portfolio, scambiabilità, exchangeability, modello a un fattore, one-factor model, rischio di credito]
tags: [competenza, area/finanza]
---

# Modello Bernoulli mixture

> Gli indicatori di default sono Bernoulli indipendenti **condizionatamente** a fattori comuni: così si modella la dipendenza tra insolvenze e le code della perdita di un portafoglio di crediti.

## Definizione / enunciato
**Indicatore di default** (def. c22-indicatore-default): $Y_i=1$ se il debitore $i$ fallisce entro $T$, $Y_i\sim\mathrm{Bernoulli}(\pi_i)$. **Perdita** (def. c22-perdita-credito): $L=\sum_iw_iY_i$, numero di default $M=\sum_iY_i$; portafoglio omogeneo ($w_i=1/n$): $L=wM$. **Scambiabile** (def. c22-scambiabile): legge invariante per permutazioni degli indici, quindi $\pi_i=\pi$.

**Bernoulli mixture** (def. c22-bernoulli-mixture): esiste un vettore di fattori $\Psi$ e funzioni $p_i$ con $Y_1,\dots,Y_n$ indipendenti dato $\Psi$, $\mathbb P(Y_i=1\mid\Psi=\psi)=p_i(\psi)$.

**Un fattore, scambiabile** (prop. c22-un-fattore), $\tilde p=p(\Psi)$ con legge $G$: $\pi=\mathbb E[\tilde p]$, $\pi_k=\mathbb E[\tilde p^k]$,
$$\mathbb P(M=k)=\binom nk\int_0^1q^k(1-q)^{n-k}\,dG(q).$$
**Correlazione di default** (prop. c22-correlazione-default):
$$\rho_Y=\frac{\pi_2-\pi^2}{\pi(1-\pi)}=\frac{\mathrm{Var}(\tilde p)}{\pi(1-\pi)}\ge0,\qquad\mathrm{Var}(M)=n\pi(1-\pi)\big[1+(n-1)\rho_Y\big].$$

## Formule chiave
$\mathbb E[M]=n\pi$ non dipende dalla dipendenza; la varianza e la coda sì.

## Intuizione
La probabilità di default media non basta: modelli con la stessa $\pi$ (stessa perdita attesa) possono avere code molto diverse. Una piccola correlazione tra indicatori, moltiplicata per $n-1$, gonfia molto la varianza. $\rho_Y$ è molto più piccola della correlazione tra le attività da cui nasce.

## Come si usa
Esempio del libro: probabilità di default 0.5%, 2%, 8% in espansione, normalità, recessione (probabilità 0.5, 0.35, 0.15): $\pi=0.0215$, $\pi_2=0.0011125$, $\rho_Y=0.0309$; con $n=100$ la varianza di $M$ è moltiplicata per $1+99\cdot0.0309=4.06$.

## Nei corsi
- **Financial engineering** (magistrale): cap. 22 §§Indicatori di default, Scambiabilità, Modelli Bernoulli mixture (slide di E. Bruna; il libro scrive $M$ e $\tilde p$ al posto di $N$ e $Q$). Fonti: `Libri/Financial engineering/capitoli/cap22.tex`; lezione d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/41 - 28 aprile b - Credit_risk_modelling_Italiano.pdf`.

## Prerequisiti
- [[Distribuzione binomiale]]: legge di $M$ dato il fattore
- [[Speranza condizionata]]: $\pi=\mathbb E[\tilde p]$
- [[Indipendenza di variabili aleatorie]]: indipendenza condizionata

## Porta a
- [[Modello beta-binomiale dei default]]: mistura Beta
- [[Modello di Merton]]: fattore gaussiano dalle attività

## Collegati
- [[Copule nel rischio di credito]]: altro modo di modellare la dipendenza tra default
- [[Value at Risk]]: quantile del numero di default
- [[Coefficiente di correlazione]]: correlazione tra indicatori
