---
tipo: competenza
area: statistica
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["Dirichlet-multinomial conjugacy", "prior di Dirichlet", "Dirichlet prior", "posteriori Dirichlet", "statistica bayesiana per dati categorici", "ddirch", "dmulti"]
tags: [competenza, area/statistica]
---

# Coniugatezza Dirichlet-multinomiale

> Per conteggi multinomiali una prior di Dirichlet dà una posteriori di Dirichlet: si sommano i conteggi osservati ai parametri della prior.

## Definizione / enunciato
Se $\boldsymbol\pi\sim\mathrm{Dir}(\alpha_1,\dots,\alpha_D)$ e $\mathbf X\mid\boldsymbol\pi\sim\mathrm{Mult}(n;\boldsymbol\pi)$, allora (libro, cap. 6, Teorema 6.12)
$$\boldsymbol\pi\mid\mathbf X=\mathbf x\sim\mathrm{Dir}(\alpha_1+x_1,\dots,\alpha_D+x_D).$$
Lo stesso vale osservando la sequenza di $n$ Multinoulli, con $x_i$ numero di osservazioni nella categoria $i$. Infatti $\prod\pi_i^{\alpha_i-1}\cdot\prod\pi_i^{x_i}$ è il nucleo di una Dirichlet.

## Formule chiave
Media a posteriori come media pesata (Prop. 6.13), con $\mathbf m=\boldsymbol\alpha/\alpha_0$ e $\hat{\boldsymbol\pi}=\mathbf x/n$:
$$\tilde{\boldsymbol\pi}=\frac{\boldsymbol\alpha+\mathbf x}{\alpha_0+n}=\frac{\alpha_0}{\alpha_0+n}\mathbf m+\frac n{\alpha_0+n}\hat{\boldsymbol\pi}.$$
La prior pesa come $\alpha_0$ osservazioni.

## Intuizione
È la Beta-Bernoulli con $D$ categorie: ogni $\alpha_i$ è un conteggio fittizio della categoria $i$.

## Come si usa
- Elicitazione (libro, Es. `c06-elicitazione`): "$\pi_1$ triplo di ciascuna delle altre, con peso pari a $n$ osservazioni" dà $\alpha_1=3n/(D+2)$, $\alpha_j=n/(D+2)$.
- Urna elettorale con tre opzioni (Es. `c06-posteriori-numerica`): $D=3$, peso 12, prior $\mathrm{Dir}(7.2,\,2.4,\,2.4)$; 40 schede con conteggi $(20,12,8)$ danno la posteriori $\mathrm{Dir}(27.2,\,14.4,\,10.4)$, $\alpha_0+n=52$, media a posteriori $(27.2,14.4,10.4)/52$.
- La legge marginale dei conteggi è la Dirichlet-multinomiale (predittiva). In JAGS: `x[1:D] ~ dmulti(pi[1:D], n)` e `pi[1:D] ~ ddirch(alpha[1:D])`.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 6, §6.6 (Teorema 6.12, Prop. 6.13, pp. 101-102). Fonti: `Libri/Modelli statistici/capitoli/cap06.tex`; `magistrale/Modelli statistici/251015B Dirichlet.pdf`; `magistrale/Modelli statistici/PDF corretti/251015A.pdf` §6-7; codice `magistrale/Modelli statistici/codici/251023 Dirichlet (1).R`.

## Prerequisiti
- [[Distribuzione di Dirichlet]]: prior e posteriori
- [[Distribuzione multinomiale]]: modello dei conteggi
- [[Famiglia coniugata]]: schema generale

## Porta a
- [[Distribuzione predittiva a posteriori]]: la Dirichlet-multinomiale

## Collegati
- [[Coniugatezza Beta-Bernoulli]]: caso $D=2$
- [[Elicitazione della prior]]: scelta delle $\alpha_i$
- [[Distribuzione Multinoulli]]: osservazioni singole
