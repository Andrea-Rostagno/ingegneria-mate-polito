---
tipo: competenza
area: statistica
corsi: [Prob e statistica]
livello: [triennale]
aliases: ["pivotal quantity", "pivot", "statistica pivotale", "quantità pivotale approssimata"]
tags: [competenza, area/statistica]
---

# Quantità pivotale

> Una v.a. $Q(\mathbf X,\theta)$, funzione del campione e del parametro, la cui distribuzione non dipende da $\theta$: permette di fissare regioni di rifiuto e intervalli validi per ogni valore del parametro.

## Definizione / enunciato
$Q(\mathbf X,\theta)$ è una **quantità pivotale** se la sua distribuzione non dipende da $\theta$. Non è una statistica (dipende anche dal parametro), anche se a volte la si chiama "statistica pivotale".

## Formule chiave
- Campione normale, $\sigma^2$ noto: $\bar X\sim\mathcal N(\mu,\sigma^2/n)$ è una statistica, $Z=\frac{\bar X-\mu}{\sqrt{\sigma^2/n}}\sim\mathcal N(0,1)$ è pivotale.
- Proporzioni (approssimata): per il TLC e Slutsky $\frac{\bar X-p}{\sqrt{\bar X(1-\bar X)/n}}\xrightarrow{\mathcal L}\mathcal N(0,1)$.
- Test bilaterale $H_0:p=p_0$ con $P(Z<c_1)=P(Z>c_2)=\alpha/2$: $c_2=z_{\alpha/2}$, $c_1=-z_{\alpha/2}$ e
$$A(\mathbf X)=\Big\{|\bar X-p_0|\le z_{\alpha/2}\sqrt{\tfrac{\bar X(1-\bar X)}n}\Big\}.$$
Attenzione: la quantità è normale standard solo se $H_0$ è vera (si calcola l'errore di prima specie).

## Intuizione
Standardizzando si "toglie" il parametro dalla distribuzione: i quantili di una sola legge nota (normale, t, chi-quadro) servono per ogni $\theta$, $p_0$, $n$.

## Come si usa
Conviene quasi sempre scrivere la regione di rifiuto tramite un pivot. Per gli intervalli: da $\mathbb P(a\le\frac{(n-1)S^2}{\sigma^2}\le b)=1-\alpha$ si isola il parametro, $\big[\frac{(n-1)S^2}b,\frac{(n-1)S^2}a\big]$ ha confidenza $1-\alpha$ per $\sigma^2$.

## Nei corsi
- **Prob e statistica** (triennale): slide sui test. Fonti: `triennale/ANNO 3/prob e statistica/statistica/Test d'Ipotesi e Intervalli di Confidenza lez6.pdf` (Costruzione del test X-XV; Intervalli di confidenza IV-V).

## Prerequisiti
- [[Test d'ipotesi]]: regione costruita fissando $\alpha$
- [[Distribuzione normale]]: pivot standardizzato

## Porta a
- [[Intervallo di confidenza]]: si isola il parametro dal pivot
- [[Test z sulla media]]: pivot $Z$
- [[Test sulle proporzioni]]: pivot approssimato
