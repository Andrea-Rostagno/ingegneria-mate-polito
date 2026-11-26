---
tipo: competenza
area: statistica
corsi: [Prob e statistica]
livello: [triennale]
aliases: ["chi-squared test for the variance", "chi-test", "test chi-quadro", "test sulla varianza di una normale", "intervallo di confidenza per la varianza"]
tags: [competenza, area/statistica]
---

# Test chi-quadro sulla varianza

> Test sulla varianza di una normale con media ignota: $V=(n-1)S^2/\sigma_0^2\sim\chi^2(n-1)$ sotto $H_0$; invertito dà l'intervallo di confidenza per $\sigma^2$.

## Definizione / enunciato
**Dati**: $X_i\sim\mathcal N(\mu,\sigma^2)$ i.i.d., $\mu$ ignota. **Ipotesi nulle** $H_0:\sigma^2=\sigma_0^2$, $\sigma^2\le\sigma_0^2$, $\sigma^2<\sigma_0^2$, $\sigma^2\ge\sigma_0^2$, $\sigma^2>\sigma_0^2$.
$$V=\frac{(n-1)S^2}{\sigma_0^2}\sim\chi^2(n-1)\quad\text{sotto }H_0 .$$

## Formule chiave
- Bilaterale approssimato (code $\alpha/2$): $A(\mathbf x)=\big\{w_{n-1,1-\alpha/2}<\frac{(n-1)s^2}{\sigma_0^2}<w_{n-1,\alpha/2}\big\}$, con $w$ quantili del $\chi^2_{n-1}$.
- Intervallo di confidenza $1-\alpha$ per $\sigma^2$: $\big[\frac{(n-1)S^2}b,\frac{(n-1)S^2}a\big]$ con $\mathbb P(a\le\chi^2_{n-1}\le b)=1-\alpha$.
- In regressione semplice $\frac{(n-2)S^2}{\sigma^2}\sim\chi^2_{n-2}$ permette test $H_0:\sigma^2=c$.

## Intuizione
Il test LR esatto per $H_0:\sigma^2=\sigma_0^2$ dipende da $\hat\sigma^2/\sigma_0^2$ tramite una funzione con massimo in 1: le due soglie di livello esatto si trovano solo numericamente, quindi ci si accontenta delle code uguali $\alpha/2$. Con questa approssimazione può capitare che un campione con valore più estremo sia accettato mentre uno meno estremo è rifiutato; il problema sparisce con l'ipotesi unilaterale $H_0:\sigma^2\le\sigma_0^2$.

## Come si usa
Sonniferi con $\sigma_0^2=10$: $s^2=1.51$, si rifiuta $H_0$. Lo stesso pivot dà intervallo e test: i $\sigma_0^2$ nell'intervallo sono esattamente quelli che il test accetterebbe. Le code uguali non danno l'intervallo più corto, perché il chi-quadro è asimmetrico.

## Nei corsi
- **Prob e statistica** (triennale): slide sui test ("Chi-test" nelle statistiche da conoscere). Fonti: `triennale/ANNO 3/prob e statistica/statistica/Test d'Ipotesi e Intervalli di Confidenza lez6.pdf` (Rapporto di verosimiglianza XII-XV; Intervalli di confidenza IV-V, VIII; Statistiche da conoscere I); `statistica/regressione lez7.pdf` (Stima dei parametri XX).

## Prerequisiti
- [[Distribuzione chi-quadro]]: legge della statistica
- [[Media e varianza campionaria nel caso normale]]: $(n-1)S^2/\sigma^2\sim\chi^2(n-1)$
- [[Test del rapporto di verosimiglianza]]: derivazione e approssimazione

## Porta a
- Nessuno nel corso.

## Collegati
- [[Intervallo di confidenza]]: intervallo per $\sigma^2$ per inversione
