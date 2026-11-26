---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [minimum variance hedge ratio, hedge ratio ottimo, rapporto di copertura ottimo, N*, h*, copertura con futures, hedging con futures, rischio di base, basis risk, base dei futures, cross hedge, copertura incrociata, efficacia della copertura, copertura con il beta]
tags: [competenza, area/finanza]
---

# Rapporto di copertura a varianza minima

> Il numero di futures per unità di esposizione che minimizza la varianza della posizione coperta: $N^*=-\rho\,\sigma_S/\sigma_f$.

## Definizione / enunciato
La **base** è $b(t,T)=S(t)-f(t,T)$ (def. c06-base); se l'attività coincide con il sottostante $b\to0$ per $t\to T$. Il **rischio di base** è l'incertezza su $b(t_h,T)$ all'orizzonte di copertura; il prezzo effettivo ottenuto è $f(0,T)+b(t_h,T)$.

**Teorema** (teo. c06-hedge-ottimo): con $\sigma_S^2=\mathrm{Var}(\Delta S)$, $\sigma_f^2=\mathrm{Var}(\Delta f)$, $\rho=\mathrm{Corr}(\Delta S,\Delta f)$, la varianza della posizione $(1,N)$
$$\sigma_V^2(N)=\sigma_S^2+N^2\sigma_f^2+2N\rho\sigma_S\sigma_f$$
è minima per
$$N^*=-\frac{\mathrm{Cov}(\Delta S,\Delta f)}{\mathrm{Var}(\Delta f)}=-\rho\frac{\sigma_S}{\sigma_f},\qquad\sigma_V^2(N^*)=\sigma_S^2(1-\rho^2).$$
**Efficacia** (prop. c06-efficacia): frazione di varianza eliminata $=\rho^2$, il $R^2$ della regressione di $\Delta S$ su $\Delta f$.

## Formule chiave
Numero di contratti $|N^*|Q_A/Q_F$; con un futures su indice $N_c=\beta_PV_P/(f\,m)$.

## Intuizione
È il vertice di una parabola in $N$, ovvero (meno) la pendenza della retta di regressione. "Rapporto 1 = copertura perfetta" è falso (serve $|\rho|=1$); con $\rho=0$ conviene non coprirsi. Copertura perfetta significa risultato certo, non migliore.

## Come si usa
Esempio del libro (cross hedge, numeri del libro): gasolio coperto con futures sull'heating oil, $\sigma_S=0.032$, $\sigma_f=0.040$, $\rho=0.85$: $N^*=-0.68$; esposizione corta di 1.5 milioni di galloni, quindi si **comprano** $0.68\cdot1500000/42000\approx24$ contratti; efficacia $0.7225$. Copertura con il beta: portafoglio di 5 milioni con $\beta=1.2$, futures a 4000 con moltiplicatore 25: si vendono 60 contratti.

## Nei corsi
- **Financial engineering** (magistrale): cap. 6 §§Copertura con i futures e rischio di base, Il rapporto di copertura a varianza minima. Hull scrive $h^*=-N^*$. Fonti: `Libri/Financial engineering/capitoli/cap06.tex`; lezioni d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/22 - lez 13 marzo a - rendimenti e portafoglio.pdf`, `23 - 13 marzo b - Practice questions hedging futures.pdf`.

## Prerequisiti
- [[Contratto futures]]: strumento di copertura
- [[Covarianza]]: $N^*$ è un rapporto covarianza/varianza
- [[Coefficiente di correlazione]]: l'efficacia è $\rho^2$

## Collegati
- [[Regressione lineare]]: $-N^*$ è la pendenza della regressione di $\Delta S$ su $\Delta f$
- [[Rischio e rendimento di un portafoglio]]: varianza di una combinazione lineare
- [[Delta hedging]]: copertura delle opzioni con il sottostante
