---
tipo: competenza
area: statistica
corsi: [Prob e statistica, Prova finale]
livello: [triennale]
aliases: ["method of moments", "stimatore dei momenti", "method of moments estimator", "momenti campionari", "sample moments", "inversione del tau di Kendall", "Kendall-based estimator", "metodo dei momenti per copule"]
tags: [competenza, area/statistica]
---

# Metodo dei momenti

> Si eguagliano i primi $p$ momenti campionari ai corrispondenti momenti teorici, funzioni dei $p$ parametri, e si risolve il sistema: le soluzioni sono gli stimatori.

## Definizione / enunciato
Per la legge dei grandi numeri $\frac1n\sum X_i^j\to\mathbb E(X^j)=\mu_j$ (applicata a $Z=X^j$). Con $p$ parametri si risolve il sistema
$$\frac1n\sum_{i=1}^nX_i^j=\mu_j(\theta_1,\dots,\theta_p),\qquad j=1,\dots,p,$$
prendendo in genere i primi $p$ momenti, se dipendono da tutti i parametri.

## Formule chiave
- $\mathcal N(\mu,\sigma^2)$: $\hat\mu=\bar X$, $\hat\sigma^2=\frac1n\sum(X_i-\bar X)^2$ (da $\mathbb E X^2=\mu^2+\sigma^2$).
- $G(a,b)$ con $\mathbb E X=a/b$, $\operatorname{Var}X=a/b^2$: $\hat a=\dfrac{\bar X^2}{\hat\sigma^2}$, $\hat b=\dfrac{\bar X}{\hat\sigma^2}$.
- $\mathrm{Exp}(\lambda)$: $\hat\lambda=1/\bar X$.
- $\mathrm{Bin}(k,p)$: $\hat k=\dfrac{\bar X^2}{\bar X-\hat\sigma^2}$, $\hat p=\bar X/\hat k$.

## Intuizione
È il metodo più antico e richiede solo di conoscere i momenti. Il limite: non c'è alcun vincolo sui valori che lo stimatore può assumere, per esempio $\hat k$ della binomiale non è garantito intero (né positivo).

## Come si usa
Nello script R (chunk "Metodo Momenti") si simulano dati e si confrontano le stime con i valori veri; sul dataset `birth` (altezze alla nascita, modello Gamma) le stime dei momenti $\hat a=\bar x^2/\hat\sigma^2$, $\hat b=\bar x/\hat\sigma^2$ sono molto vicine a quelle di massima verosimiglianza trovate con `optim`.

## Nei corsi
- **Prob e statistica** (triennale): slide "Stime puntuali". Fonti: `triennale/ANNO 3/prob e statistica/statistica/Stime Puntuali lez5.pdf` (Metodo dei Momenti I-IX); codice in `statistica/R/Stime Puntuali Vers 1.0.0.R` (chunk Metodo Momenti e ottimizzazione).
- **Prova finale** (triennale): versione per le copule, in cui il "momento" è una misura di concordanza: si sceglie $\tau$ di Kendall (o $\rho$ di Spearman), lo si calcola sul campione e si risolve $\tau(\theta)=\hat\tau$. Se $\theta=g(\tau)$, lo stimatore $\hat\theta_n=g(\tau_n)$ è detto "Kendall-based" (Pellerey, slide 95-96; esempio FGM $\hat\theta=9\tau_n/2$). Inversioni usate: gaussiana e t $\rho=\sin(\pi\tau/2)$, Clayton $\theta=2\tau/(1-\tau)$, Gumbel $\theta=1/(1-\tau)$, Frank numerica (funzione di Debye). Sul DAX con $\tau=0.6598$: Gumbel 2.9394, Clayton 3.8789, gaussiana e t 0.8606, Frank 9.7812 (tab. 5.8). Pro: semplice, intuitivo, robusto alle marginali; contro: meno efficiente della MLE, dipende dal momento scelto, non stima i gradi di libertà della t, difficile in dimensione alta. Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§5.2.3-5.2.6, pp. 47-53; §5.3.3, pp. 75-76); `triennale/ANNO 3/Prove finali/slides pellerey handout.pdf` (slide 95-96).

## Prerequisiti
- [[Stimatore puntuale]]: cosa si cerca
- [[Legge dei grandi numeri]]: momenti campionari convergono ai teorici

## Porta a
- Nessuno nel corso (Prob e statistica).
- [[Stima delle copule sul DAX]]: stime per inversione del tau (Prova finale)

## Collegati
- [[Stimatore di massima verosimiglianza]]: metodo alternativo, che resta nello spazio parametrico
- [[Distribuzione Gamma]]: esempio con due parametri
- [[Tau di Kendall]]: momento usato per le copule
