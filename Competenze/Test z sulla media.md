---
tipo: competenza
area: statistica
corsi: [Prob e statistica]
livello: [triennale]
aliases: ["z-test", "Z-test", "test z", "test sulla media con varianza nota", "z-test per differenze tra medie", "two-sample z-test"]
tags: [competenza, area/statistica]
---

# Test z sulla media

> Test sulla media di una normale con varianza **nota**: la statistica $Z=\frac{\bar X-\mu_0}{\sqrt{\sigma^2/n}}$ è normale standard sotto $H_0$.

## Definizione / enunciato
**Dati**: $X_i\sim\mathcal N(\mu,\sigma^2)$ i.i.d., $\sigma^2$ noto. **Ipotesi nulle** $H_0:\mu=\mu_0$, $\mu\le\mu_0$, $\mu<\mu_0$, $\mu\ge\mu_0$, $\mu>\mu_0$.
$$Z=\frac{\bar X-\mu_0}{\sqrt{\sigma^2/n}}\sim N(0,1)\quad\text{sotto }H_0 .$$
**Differenza tra medie** ($X_i\sim\mathcal N(\mu_x,\sigma_x^2)$, $Y_j\sim\mathcal N(\mu_y,\sigma_y^2)$, $i\le n$, $j\le m$, indipendenti, varianze note), $H_0:\mu_x-\mu_y=\mu_0$ (e unilaterali):
$$Z=\frac{\bar X-\bar Y-\mu_0}{\sqrt{\frac{\sigma_x^2}n+\frac{\sigma_y^2}m}}\sim N(0,1).$$

## Formule chiave
- Bilaterale: $A=\{|\bar X-\mu_0|\le z_{\alpha/2}\sqrt{\sigma^2/n}\}$.
- Unilaterale $H_0:\mu\le\mu_0$: $R=\{\bar X>\mu_0+z_\alpha\sqrt{\sigma^2/n}\}$; la probabilità di rifiuto è massima in $\mu=\mu_0$, quindi basta calcolarla lì.
- Potenza: $\beta(\mu)=\mathbb P\big(Z\ge z_\alpha+\frac{\mu_0-\mu}{\sqrt{\sigma^2/n}}\big)$.

## Intuizione
Se $H_0$ è vera $\bar X$ cade vicino a $\mu_0$ entro qualche errore standard $\sqrt{\sigma^2/n}$; uno scarto di più di $z_{\alpha/2}$ errori standard è raro sotto $H_0$.

## Come si usa
Michelson e Morley: $\bar x=852.4$, $\sigma^2=6242.66$ (presa uguale alla campionaria), $n=100$, $\mu_0=792.458$, $z_{\alpha/2}=1.960$: si rifiuta $H_0$, le misure avevano errori sistematici; anche il test unilaterale $H_0:\mu\le\mu_0$ rifiuta (velocità sovrastimata). Con $H_1:\mu<\mu_0$ invece non si può rifiutare, perché i valori maggiori sono esclusi dalle ipotesi. Sonniferi con $\sigma^2=10$: $\bar x=-1.58$, $n=10$, si accetta $H_0:\mu=0$.

## Nei corsi
- **Prob e statistica** (triennale): slide sui test, elenco "Statistiche da conoscere". Fonti: `triennale/ANNO 3/prob e statistica/statistica/Test d'Ipotesi e Intervalli di Confidenza lez6.pdf` (Costruzione del test XVII-XXI; Rapporto di verosimiglianza VII-IX; Statistiche da conoscere I-II); `statistica/Anova Ancova lez8.pdf` (Regressione con Interazione e Fattori VII).

## Prerequisiti
- [[Quantità pivotale]]: $Z$ standardizzata
- [[Distribuzione normale]]: quantili $z_{\alpha/2}$

## Porta a
- Nessuno nel corso.

## Collegati
- [[Funzione potenza]]: potenza e numerosità campionaria
- [[Test t di Student]]: stesso test con varianza stimata
- [[Test del rapporto di verosimiglianza]]: il z-test è il test LR con $\sigma^2$ nota
