---
tipo: competenza
area: statistica
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["adaptive Metropolis", "adaptive proposal", "proposta adattiva", "diminishing adaptation", "condizione di diminish adaptation", "tasso di accettazione desiderato"]
tags: [competenza, area/statistica]
---

# Metropolis adattivo

> Variante del Metropolis in cui la varianza della proposta normale viene regolata durante il campionamento per avvicinare il tasso di accettazione a un valore desiderato, con aggiustamenti che si spengono nel tempo.

## Definizione / enunciato
Con proposta $N(\theta_p^{b-1},\eta)$ la scelta di $\eta$ è critica: un $\eta$ troppo piccolo fa accettare molto ma con catene molto dipendenti, uno troppo grande fa accettare poco, rendendo di nuovo i campioni dipendenti; euristicamente si dovrebbe accettare il 25% delle volte. Si fissano: $b$ iterazione, $\alpha^*$ tasso di accettazione desiderato, costanti $A,D$, $c$ = ogni quante iterazioni aggiornare ($c=50$ è classico), $\bar\alpha$ = media campionaria degli $\alpha$ del Metropolis nelle ultime $c$ iterazioni.

## Formule chiave
- **Univariato**, ogni $c$ iterazioni, dopo il passo Metropolis:
$$\eta\leftarrow\exp\bigl(\log(\eta)+\gamma_b(\bar\alpha-\alpha^*)\bigr),$$
con $\gamma_b\to0$ per $b\to\infty$ (**diminishing adaptation**), $\gamma_{b+1}\le\gamma_b$, $0\le\gamma_b<1$; scelte classiche $\gamma_b=\frac{A}{D+b}$ e $\gamma_b=\frac1{b^A}$.
- **Multivariato**, proposta $N(\boldsymbol\theta_p^{b-1},\lambda\boldsymbol\Sigma)$, a ogni iterazione:
$$\lambda\leftarrow\exp\bigl(\log(\lambda)+\gamma_b(\alpha-\alpha^*)\bigr),\quad \boldsymbol\mu\leftarrow\boldsymbol\mu+\gamma_b(\boldsymbol\theta_p^b-\boldsymbol\mu),$$
$$\boldsymbol\Sigma\leftarrow\boldsymbol\Sigma+\gamma_b\bigl((\boldsymbol\theta_p^b-\boldsymbol\mu)(\boldsymbol\theta_p^b-\boldsymbol\mu)'-\boldsymbol\Sigma\bigr),$$
con $\alpha$ rapporto Metropolis e $\lambda,\boldsymbol\mu,\boldsymbol\Sigma$ da inizializzare. Se $\boldsymbol\Sigma$ è numericamente singolare (spesso nelle prime iterazioni) si usa $N(\boldsymbol\theta_p^{b-1},\lambda\boldsymbol\Sigma+\epsilon\mathbf I)$ con $\epsilon$ piccolo.

## Intuizione
Se si accetta più del desiderato ($\bar\alpha>\alpha^*$) la varianza cresce, altrimenti cala; nel multivariato $\boldsymbol\Sigma$ impara la covarianza a posteriori. L'algoritmo **non è più markoviano**: la condizione $\gamma_b\to0$ serve a garantire la giusta distribuzione stazionaria.

## Come si usa
Si usa dentro un Gibbs con passi Metropolis su parametri trasformati in $\mathbb R$ (es. $\log\sigma^2$), lasciando adattare $\eta$ e controllando poi le catene.

## Nei corsi
- **Statistica computazionale** (magistrale): sezione "Adaptive Proposal" degli algoritmi MCMC. Fonti: `magistrale/Statistica computazionale/Algoritmi MCMC.pdf` (p. 34-36).

## Prerequisiti
- [[Algoritmo di Metropolis-Hastings]]: il passo da adattare

## Collegati
- [[Hamiltonian Monte Carlo]]: altra risposta al problema della proposta
- [[Dimensione campionaria effettiva]]: misura l'effetto della dipendenza tra campioni
- [[Matrice di covarianza]]: $\boldsymbol\Sigma$ stimata in modo ricorsivo
