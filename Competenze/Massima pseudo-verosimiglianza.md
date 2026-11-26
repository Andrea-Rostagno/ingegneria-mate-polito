---
tipo: competenza
area: statistica
corsi: [Prova finale]
livello: [triennale]
aliases: ["maximum pseudo-likelihood", "MPL", "pseudo-MLE", "pseudo maximum likelihood", "canonical maximum likelihood", "stima semiparametrica della copula", "log-verosimiglianza sui ranghi"]
tags: [competenza, area/statistica]
---

# Massima pseudo-verosimiglianza

> Si massimizza la log-verosimiglianza della copula valutata sulle pseudo-osservazioni (ranghi): le marginali non vanno specificate e la stima è robusta alla loro errata specificazione.

## Definizione / enunciato
**Pellerey, slide 100**. Lo stimatore MPL di $\theta$ massimizza la log-verosimiglianza basata sui ranghi
$$\mathcal L(\theta)=\sum_{i=1}^n\ln c_\theta\Big(\frac{R_i}{n+1},\frac{S_i}{n+1}\Big),$$
dove le marginali sono stimate con le distribuzioni empiriche. Si applica anche se le marginali sono ignote, ed è robusto alla loro errata specificazione.

## Formule chiave
Nella tesi (§5.2.1, passo 5):
$$L^*(\theta)=\prod_{i=1}^nc(U_{i1},\dots,U_{id};\theta),\qquad U_{ij}=\hat F_j(x_{ij}),$$
e con $\hat F_j$ empirica si ottiene la MPL. Esempio di log-densità usata (gaussiana, §5.3.2):
$$\ell(\rho)=\sum_i\Big[-\tfrac12\log(1-\rho^2)-\frac{\rho^2(x_i^2+y_i^2)-2\rho x_iy_i}{2(1-\rho^2)}\Big],\quad x_i=\Phi^{-1}(u_i),\ y_i=\Phi^{-1}(v_i).$$

## Intuizione
È il compromesso semiparametrico: la copula è parametrica, le marginali no. Si perde un po' di efficienza rispetto alla ML con marginali corrette, ma non si rischia di distorcere la dipendenza per colpa di marginali sbagliate.

## Come si usa
È di fatto la stima "MLE" del §5.3.2 della tesi: le volatilità rolling di Open e Close sono rese uniformi con `stats.rankdata(...)/(n+1)` e su queste si massimizzano le log-verosimiglianze delle cinque famiglie con L-BFGS-B. Risultati nella tab. 5.7: la t di Student ha log-verosimiglianza 119436.7486, la gaussiana 31393.9252, Clayton 21220.4682, Frank 19543.0218, Gumbel 18049.9447.

## Nei corsi
- **Prova finale** (triennale): "Pseudo MLE" del §5.2.1 e stima sul DAX del §5.3.2. Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (p. 42; pp. 70-74); `triennale/ANNO 3/Prove finali/slides pellerey handout.pdf` (slide 100); `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/Codici & Dataset/copula-analysis.py` (sezioni 4-6).

## Prerequisiti
- [[Pseudo-osservazioni]]: argomenti della densità
- [[Densità di una copula]]: log-densità da sommare
- [[Massima verosimiglianza per copule]]: stesso principio

## Porta a
- [[Stima delle copule sul DAX]]: stime "MLE" della tab. 5.7
- [[Criteri di informazione AIC e BIC]]: confronto delle log-verosimiglianze

## Collegati
- [[Metodo IFM]]: alternativa con marginali parametriche
- [[Funzione di verosimiglianza]]: qui sostituita da una pseudo-verosimiglianza
