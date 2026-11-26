---
tipo: competenza
area: probabilita
corsi: [Prova finale]
livello: [triennale]
aliases: ["copula density", "densità della copula", "copula assolutamente continua", "absolutely continuous copula", "c(u,v)", "log-densità della copula"]
tags: [competenza, area/probabilita]
---

# Densità di una copula

> Derivata mista $c=\partial^2C/\partial u\,\partial v$ di una copula assolutamente continua: è il "pezzo di dipendenza" della densità congiunta ed è ciò che entra nella verosimiglianza.

## Definizione / enunciato
Una copula $C$ è **assolutamente continua** se $C(\mathbf u)=\int_{[0,\mathbf u]}c(\mathbf t)\,d\mathbf t$ per una $c:[0,1]^d\to\mathbb R_+$ integrabile; per $C$ derivabile fino all'ordine $d$ (Pellerey, slide 44)
$$c(\mathbf u)=\frac{\partial^dC}{\partial u_1\cdots\partial u_d}(\mathbf u).$$
Esempio: $\Pi_d$ ha densità $c\equiv1$. Non tutte le copule l'hanno: Marshall-Olkin non è assolutamente continua (slide 47).

## Formule chiave
Fattorizzazione della densità congiunta (da Sklar, tesi §5.2.1):
$$f(\mathbf x;\theta)=c\big(F_1(x_1),\dots,F_d(x_d);\theta\big)\prod_{j=1}^d f_j(x_j).$$
Densità bivariate usate nella tesi e nel formulario `formule.ipynb`:
- gaussiana: $c(u,v;\rho)=\frac1{\sqrt{1-\rho^2}}\exp\!\Big(-\frac{\rho^2(x^2+y^2)-2\rho xy}{2(1-\rho^2)}\Big)$, $x=\Phi^{-1}(u)$, $y=\Phi^{-1}(v)$;
- Clayton: $c(u,v;\theta)=(1+\theta)(uv)^{-(1+\theta)}(u^{-\theta}+v^{-\theta}-1)^{-2-1/\theta}$;
- Frank: $c(u,v;\theta)=\dfrac{\theta(1-e^{-\theta})e^{-\theta(u+v)}}{\big(1-e^{-\theta}-(1-e^{-\theta u})(1-e^{-\theta v})\big)^2}$.
Le densità t e Gumbel sono nelle note delle rispettive famiglie. FGM (Pellerey, slide 45): $c_\theta(u,v)=1+\theta(1-2u)(1-2v)$.

## Intuizione
Dividendo la densità congiunta per il prodotto delle densità marginali resta un fattore che vale $1$ in caso di indipendenza e si scosta da $1$ dove le variabili tendono a stare insieme (per esempio negli angoli, in presenza di dipendenza di coda).

## Come si usa
Si implementa la log-densità per la stima: nel codice ogni famiglia ha la sua `*_copula_loglik` o `*_copula_logp` (somma di `term1 + term2 + term3`). Con le uniformi prese al bordo servono protezioni numeriche: la tesi taglia $u,v$ in $[0.001,0.999]$ (`tt.clip`) e sostituisce valori non finiti con $10^{-10}$.

## Nei corsi
- **Prova finale** (triennale): densità di gaussiana, t, Clayton, Gumbel, Frank nelle sezioni di stima. Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§5.2.1, p. 42; §5.3.4, pp. 77-80); `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/formule.ipynb` (densità e log-densità di ogni famiglia); `triennale/ANNO 3/Prove finali/slides pellerey handout.pdf` (slide 44-45).

## Prerequisiti
- [[Copula]]: $c$ è la sua derivata mista
- [[Densità congiunta]]: la copula ne fattorizza la parte di dipendenza
- [[Teorema di Sklar]]: da cui segue la fattorizzazione

## Porta a
- [[Massima verosimiglianza per copule]]: si massimizza $\sum\log c$
- [[Massima pseudo-verosimiglianza]]: $c$ valutata sulle pseudo-osservazioni

## Collegati
- [[Variabile aleatoria assolutamente continua]]: analogo univariato
- [[Copula di Clayton]]: densità in forma chiusa
- [[Copula di Frank]]: densità in forma chiusa
