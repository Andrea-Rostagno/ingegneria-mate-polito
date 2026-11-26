---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [Gaussian optimal portfolio, portafoglio a VaR minimo, minimum VaR portfolio, portafoglio a CVaR minimo, minimizzazione del VaR gaussiano, mean-VaR portfolio, frontiera VaR]
tags: [competenza, area/finanza]
---

# Portafoglio gaussiano ottimo

> Con rendimenti gaussiani, minimizzare il VaR o il CVaR di un portafoglio long-only è un problema convesso: $\min_w-\mu^\top w+\psi(\alpha)\sqrt{w^\top Cw}$.

## Definizione / enunciato
**Proposizione** (prop. c21-portafoglio-ottimo): il portafoglio che minimizza il VaR (o il CVaR) gaussiano di livello $\alpha$ risolve
$$\min_{w\in\mathbb R^n}\ -\mu^\top w+\psi(\alpha)\sqrt{w^\top Cw}\qquad\text{con}\quad w_i\ge0,\ \sum_{i=1}^nw_i=1,$$
dove $\psi(\alpha)=z_\alpha$ per il VaR e $\psi(\alpha)=N'(z_\alpha)/(1-\alpha)$ per il CVaR. Se $C$ è definita positiva e $\psi(\alpha)>0$, l'obiettivo è convesso e l'insieme ammissibile convesso e compatto: il minimo esiste e ogni minimo locale è globale.

## Formule chiave
Per una perdita in rendimento $L=-w^\top R$ con $R\sim\mathcal N(\mu,C)$: $\mu_L=-\mu^\top w$, $\sigma_L=\sqrt{w^\top Cw}$, quindi $\mathrm{VaR}_\alpha=\mu_L+\sigma_Lz_\alpha$.

## Intuizione
Il rischio combina perdita media e volatilità pesata dal livello di confidenza. Al crescere di $\alpha$ (e di $\psi$) il portafoglio ottimo si avvicina a quello di varianza minima; per $\psi\to0$ si concentra sul titolo con la media più alta. L'obiettivo non è quadratico (c'è una radice quadrata): in MATLAB non si usa `quadprog` ma un ottimizzatore non lineare vincolato, `fmincon`; `quadprog` serve solo per il portafoglio di varianza minima di confronto.

## Come si usa
Esempio della lezione (titoli BMED, ENI, TIT): pesi ottimi 0.4250/0.4442/0.1308 per il VaR al livello 0.975; il libro rifà l'esempio con dati simulati perché i dati originali non sono nelle sorgenti (da verificare sul PDF della lezione), e traccia la frontiera del rischio minimo al variare di $\alpha$ (listato lst:c21-ottimo).

## Nei corsi
- **Financial engineering** (magistrale): cap. 21 §Il portafoglio gaussiano ottimo. Secondo il piano del libro la lezione scrive $G(\alpha)$ al posto di $\psi(\alpha)$ (da verificare sul PDF). Fonti: `Libri/Financial engineering/capitoli/cap21.tex`; lezione d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/40 - 28 aprile a - Lezione Risk measures VaR1.pdf`.

## Prerequisiti
- [[Value at Risk]]: VaR gaussiano
- [[Rischio e rendimento di un portafoglio]]: $\sigma_P=\sqrt{w^\top Cw}$
- [[Matrice di covarianza]]: $C$ definita positiva

## Collegati
- [[Portafoglio a varianza minima]]: limite per $\alpha$ grande
- [[Programmazione conica del secondo ordine]]: il termine $\sqrt{w^\top Cw}$ è un vincolo conico
- [[Funzione convessa]]: obiettivo convesso
- [[Misure di rischio coerenti]]: il CVaR è coerente
