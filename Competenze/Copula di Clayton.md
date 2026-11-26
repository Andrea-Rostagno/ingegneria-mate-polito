---
tipo: competenza
area: probabilita
corsi: [Prova finale]
livello: [triennale]
aliases: ["Clayton copula", "copula Clayton", "famiglia di Clayton", "Clayton family", "Nelsen (4.2.1)"]
tags: [competenza, area/probabilita]
---

# Copula di Clayton

> Copula archimedea a un parametro con forte dipendenza nella coda inferiore: le variabili tendono a crollare insieme.

## Definizione / enunciato
Tesi §3.4.1 (parametro $\alpha$) e `formule.ipynb` (parametro $\theta>0$):
$$C(u,v;\theta)=\max\Big\{\big(u^{-\theta}+v^{-\theta}-1\big)^{-1/\theta},\,0\Big\}.$$
È **comprensiva**: dà la copula prodotto $\Pi$ per $\theta=0$ (come limite), il limite inferiore di Fréchet $\max(u+v-1,0)$ per $\theta=-1$ e quello superiore per $\theta\to+\infty$. Versione $d$-dimensionale (Pellerey, slide 81): $C_\theta(\mathbf u)=\max\{(\sum_iu_i^{-\theta}-(d-1))^{-1/\theta},0\}$ con $\theta>-1/(d-1)$, $\theta\ne0$; per $\theta<0$ va usata con cautela.

## Formule chiave
- Generatore (Pellerey): $\psi(t)=(\max\{1+\theta t,0\})^{-1/\theta}$.
- Densità: $c(u,v;\theta)=(1+\theta)(uv)^{-(1+\theta)}\big(u^{-\theta}+v^{-\theta}-1\big)^{-2-1/\theta}$.
- Tau di Kendall: $\tau=\dfrac{\theta}{\theta+2}$, inversione $\theta=\dfrac{2\tau}{1-\tau}$.
- Dipendenza di coda (Nelsen, Ex. 5.22, famiglia 4.2.1, $\theta\ge0$): $\lambda_L=2^{-1/\theta}$, $\lambda_U=0$.

## Intuizione
La massa si concentra nell'angolo in basso a sinistra del quadrato: valori bassi congiunti (crolli simultanei) sono più probabili di valori alti congiunti. Proprietà notevole (Pellerey, slide 87): nei modelli di fragilità la Clayton conserva la stessa struttura di dipendenza per le vite residue a ogni istante $t$ ("preserves the dependence structure along time"); nasce quando la fragilità $\Theta$ è Gamma.

## Come si usa
Sulle volatilità rolling del DAX (Open-Close): MLE $\theta=2.0808$ (log-verosimiglianza 21220.4682), metodo dei momenti $\theta=3.8789$ (da $\theta=2\tau/(1-\tau)$), MCMC $\theta=2.154$ con prior $\mathrm{Gamma}(1,1)$ e WAIC 2270.51; media $\theta=2.7046$, AIC $=-40428.25$, terza dopo t e gaussiana (tab. 5.7-5.15). Nel codice la stima parte da $\theta_0=2\tau/(1-\tau)$ con vincolo $\theta\in[0.001,20]$, ed è eseguita solo se $\tau>0$.

## Nei corsi
- **Prova finale** (triennale): una delle cinque copule stimate. Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§3.4.1, p. 24; §5.2.5-5.2.6, pp. 51-53; §5.3.2-5.3.5, pp. 71-89); `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/formule.ipynb` (§3); `triennale/ANNO 3/Prove finali/slides pellerey handout.pdf` (slide 81-83, 87); `triennale/ANNO 3/Prove finali/An Introduction to Copulas - Nelsen.pdf` (famiglia (4.2.1), Ex. 5.22).

## Prerequisiti
- [[Copule archimedee]]: costruzione dal generatore
- [[Limiti di Fréchet-Hoeffding]]: casi limite della famiglia

## Porta a
- [[Dipendenza di coda]]: esempio di $\lambda_L>0$, $\lambda_U=0$
- [[Stima delle copule sul DAX]]: confronto con le altre famiglie

## Collegati
- [[Copula di Gumbel]]: specchio, coda superiore
- [[Tau di Kendall]]: $\tau=\theta/(\theta+2)$
- [[Metodo dei momenti]]: inversione del tau
