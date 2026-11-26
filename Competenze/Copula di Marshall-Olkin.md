---
tipo: competenza
area: probabilita
corsi: [Prova finale]
livello: [triennale]
aliases: ["Marshall-Olkin copula", "copula MO", "MO copula", "esponenziale bivariata di Marshall-Olkin", "Marshall-Olkin bivariate exponential", "copula di Cuadras-Augé", "Cuadras-Augé copula", "Generalized Marshall-Olkin", "GMO"]
tags: [competenza, area/probabilita]
---

# Copula di Marshall-Olkin

> Copula dei tempi di vita con uno shock comune: $(X_1,X_2)=(Y_1\wedge Y_3,\,Y_2\wedge Y_3)$. Ha una parte singolare e, nel caso $\alpha=\beta$, si riduce alla copula di Cuadras-Augé.

## Definizione / enunciato
Siano $Y_1,Y_2,Y_3$ esponenziali indipendenti di parametri $\lambda_1,\lambda_2,\lambda_3>0$ e $(X_1,X_2)=(Y_1\wedge Y_3,Y_2\wedge Y_3)$ (esponenziale bivariata di Marshall-Olkin). La sua copula (di sopravvivenza) è (Pellerey, slide 47; `Elenco Copule.pdf` §2.8)
$$C_{\alpha,\beta}(u,v)=uv\min\{u^{-\alpha},v^{-\beta}\}=\begin{cases}u^{1-\alpha}v,& u^\alpha\ge v^\beta\\ uv^{1-\beta},& u^\alpha\le v^\beta\end{cases}$$
con $\alpha=\lambda_3/(\lambda_1+\lambda_3)$, $\beta=\lambda_3/(\lambda_2+\lambda_3)$, $0\le\alpha,\beta\le1$.

## Formule chiave
- $\alpha=\beta=0$: indipendenza; $\alpha=\beta=1$: dipendenza completa.
- **Cuadras-Augé** (compendio §2.13): $C_\theta(u,v)=[\min(u,v)]^\theta(uv)^{1-\theta}$, $0\le\theta\le1$, cioè la media geometrica pesata $M^\theta\Pi^{1-\theta}$ citata dalla tesi. Sostituendo $\alpha=\beta=\theta$ nella formula di Marshall-Olkin si ottiene proprio questa (verifica mia).
- Dipendenza di coda (Nelsen, Ex. 5.21): Marshall-Olkin $\lambda_L=0$, $\lambda_U=\min(\alpha,\beta)$; Cuadras-Augé $\lambda_L=0$, $\lambda_U=\theta$.

## Intuizione
Lo shock comune $Y_3$ può uccidere entrambe le componenti nello stesso istante: c'è probabilità positiva che $X_1=X_2$, quindi massa su una curva del quadrato. Per questo la copula descrive sempre dipendenza positiva e **non è assolutamente continua**: non ha densità e non si presta alla stima per massima verosimiglianza delle altre famiglie.

## Come si usa
La tesi la indica fra le famiglie usate in finanza, adatta "a modellare la dipendenza tra variabili casuali che rappresentano tempi di vita" (§1.1, §2.2.1), come i tempi di default. Nel modello GMO (Pellerey, slide 88) la struttura di dipendenza si conserva nel tempo, e rendere $Y_3$ stocasticamente più grande riduce la concordanza.

## Nei corsi
- **Prova finale** (triennale): famiglie "Marshall-Olkin" e "Cuadras-Augé" del §2.2.1, solo descritte e non stimate. Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§1.1, p. 11; §2.2.1, p. 14); `triennale/ANNO 3/Prove finali/slides pellerey handout.pdf` (slide 47-48, 88); `triennale/ANNO 3/Prove finali/Elenco Copule.pdf` (§2.8, §2.13); `triennale/ANNO 3/Prove finali/An Introduction to Copulas - Nelsen.pdf` (Ex. 5.21).

## Prerequisiti
- [[Copula]]: definizione generale
- [[Distribuzione esponenziale]]: tempi di vita $Y_i$
- [[Massimo e minimo di variabili aleatorie]]: $X_i$ sono minimi di esponenziali

## Porta a
- [[Copule nel rischio di credito]]: tempi di default con shock comune

## Collegati
- [[Limiti di Fréchet-Hoeffding]]: Cuadras-Augé interpola fra $\Pi$ e $M$
- [[Densità di una copula]]: contro-esempio, copula senza densità
- [[Dipendenza di coda]]: $\lambda_U=\min(\alpha,\beta)$
