---
tipo: competenza
area: probabilita
corsi: [Prova finale]
livello: [triennale]
aliases: ["Gumbel copula", "Gumbel-Hougaard copula", "copula di Gumbel-Hougaard", "copula Gumbel", "Nelsen (4.2.4)"]
tags: [competenza, area/probabilita]
---

# Copula di Gumbel

> Copula archimedea con dipendenza nella coda superiore: le variabili assumono insieme valori estremi elevati. Nella stima bayesiana sul DAX è la migliore per WAIC.

## Definizione / enunciato
Per $\theta\ge1$ (tesi §3.4.1; `formule.ipynb` §4; Pellerey, slide 77):
$$C(u,v;\theta)=\exp\Big\{-\big[(-\ln u)^\theta+(-\ln v)^\theta\big]^{1/\theta}\Big\}.$$
$\theta=1$ dà l'indipendenza $\Pi$, $\theta\to\infty$ la comonotonia $M=\min(u,v)$; per gli altri valori descrive dipendenza positiva.

## Formule chiave
- Generatore (Pellerey): $\psi(t)=\exp(-t^{1/\theta})$.
- Densità (tesi §5.3.4, `formule.ipynb`):
$$c(u,v;\theta)=\frac{C(u,v;\theta)\,[(-\ln u)^\theta+(-\ln v)^\theta]^{2/\theta-2}(\ln u\ln v)^{\theta-1}}{uv}\Big(\theta-1+[(-\ln u)^\theta+(-\ln v)^\theta]^{1/\theta}\Big).$$
(da verificare sul PDF) Questa è la formula stampata nella tesi e in `formule.ipynb`, ma un mio controllo numerico contro la derivata mista $\partial^2C/\partial u\,\partial v$ non la conferma: l'esponente $2/\theta-2$ della parentesi sembra dover essere $1/\theta-2$. Anche `gumbel_copula_loglik` (§5.3.2) e `gumbel_copula_logp` (§5.3.4) non coincidono con il log della vera densità, per cui la stima MLE $\theta=1.1457$, la log-verosimiglianza, l'AIC e il WAIC della Gumbel vanno letti con cautela.
- Tau di Kendall: $\tau=1-\dfrac1\theta$, inversione $\theta=\dfrac1{1-\tau}$.
- Dipendenza di coda (Nelsen, Ex. 5.22, famiglia 4.2.4): $\lambda_L=0$, $\lambda_U=2-2^{1/\theta}$.

## Intuizione
È lo specchio della Clayton: la massa si addensa nell'angolo in alto a destra. La tesi la propone per la dipendenza asimmetrica fra mercati, "con una maggiore probabilità di movimenti congiunti al rialzo rispetto a quelli al ribasso" (§1.1). Pellerey (slide 51) mostra che, a parità di rho di Spearman 0.75, una nuvola Gumbel ha 92 punti nell'angolo superiore destro contro 51 della gaussiana.

## Come si usa
- È la copula su cui la tesi illustra il metodo dei momenti in Python (`gumbel_theta_kendall`, `method_of_moments_gumbel_optimized`, §5.2.6).
- Sul DAX: MLE $\theta=1.1457$ (log-verosimiglianza 18049.9447), momenti $\theta=2.9394$, MCMC $\theta=1.138$ con prior $1+\mathrm{Exp}(1)$; nella stima bayesiana ha il WAIC più basso, 1840.24, ed è "la copula migliore in stima bayesiana" (tab. 5.9). Con il parametro medio $\theta=1.7410$ ha AIC $=-15906.58$, quarta (tab. 5.15).
- Nel codice la simulazione della Gumbel è dichiarata un'approssimazione (`copula-analysis.py`).

## Nei corsi
- **Prova finale** (triennale): copula di esempio per il metodo dei momenti e vincitrice per WAIC. Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§1.1, p. 11; §3.4.1, p. 24; §5.2.5-5.2.6, pp. 51-52; §5.3.4, p. 79; tab. 5.7-5.15); `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/formule.ipynb` (§4); `triennale/ANNO 3/Prove finali/slides pellerey handout.pdf` (slide 51, 77-78); `triennale/ANNO 3/Prove finali/An Introduction to Copulas - Nelsen.pdf` (famiglia (4.2.4), Ex. 5.22).

## Prerequisiti
- [[Copule archimedee]]: costruzione dal generatore
- [[Limiti di Fréchet-Hoeffding]]: casi limite $\Pi$ e $M$

## Porta a
- [[Dipendenza di coda]]: esempio di $\lambda_U>0$
- [[Stima bayesiana]]: migliore per WAIC sul DAX

## Collegati
- [[Copula di Clayton]]: specchio, coda inferiore
- [[Tau di Kendall]]: $\tau=1-1/\theta$
- [[Metodo dei momenti]]: $\hat\theta=1/(1-\hat\tau)$
