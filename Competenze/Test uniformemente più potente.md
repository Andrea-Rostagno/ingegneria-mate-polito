---
tipo: competenza
area: statistica
corsi: [Prob e statistica]
livello: [triennale]
aliases: ["uniformly most powerful test", "test UMP", "UMP", "lemma di Neyman-Pearson", "Neyman-Pearson lemma", "teorema di Karlin-Rubin", "Karlin-Rubin theorem", "Carlin-Rubin", "test non distorto", "unbiased test", "rapporto di verosimiglianza monotono"]
tags: [competenza, area/statistica]
---

# Test uniformemente più potente

> Fra i test di livello $\alpha$, quello con potenza massima per ogni $\theta\in\Theta_0^c$; esiste in casi particolari, descritti dal lemma di Neyman-Pearson e dal teorema di Karlin-Rubin.

## Definizione / enunciato
In una classe $\mathcal C$ di test per $H_0:\theta\in\Theta_0$ contro $H_1:\theta\in\Theta_0^c$, un test con funzione potenza $\beta$ è **uniformemente più potente** (UMP) se $\beta(\theta)\ge\beta'(\theta)$ per ogni $\theta\in\Theta_0^c$ e ogni test di $\mathcal C$ con potenza $\beta'$. Di solito $\mathcal C$ = test di livello $\alpha$.
Un test è **non distorto** se $\beta(\theta)\ge\beta(\theta')$ per ogni $\theta\in\Theta_0^c$ e $\theta'\in\Theta_0$.

## Formule chiave
**Lemma di Neyman-Pearson.** Per $H_0:\theta=\theta_0$ contro $H_1:\theta=\theta_1$, un test con
$$\mathbf x\in R\ \text{se}\ f(\mathbf x|\theta_1)>kf(\mathbf x|\theta_0),\qquad\mathbf x\in R^c\ \text{se}\ f(\mathbf x|\theta_1)<kf(\mathbf x|\theta_0),$$
$k\ge0$ e $\alpha=\mathbb P(\mathbf X\in R;\theta_0)$, è UMP fra i test di livello $\alpha$.
**Teorema di Karlin-Rubin** (scritto "Carlin-Rubin" nelle slide). $H_0:\theta\le\theta_0$ contro $H_1:\theta>\theta_0$, $T$ sufficiente con $g(t|\theta_2)/g(t|\theta_1)$ monotono in $t$ per ogni $\theta_2>\theta_1$: il test che rifiuta se e solo se $T>t_0$, con $\alpha=P_{\theta_0}(T>t_0)$, è UMP di livello $\alpha$.

## Intuizione
Neyman-Pearson: si rifiuta dove i dati sono "molto più verosimili" sotto $H_1$ che sotto $H_0$. Non distorto: è più probabile rifiutare $H_0$ quando è falsa che quando è vera.

## Come si usa
Le slide precisano che i due teoremi non sono richiesti all'esame: servono a sapere che i test del rapporto di verosimiglianza sono UMP quando le loro ipotesi valgono. Non sempre un test UMP esiste o si riesce a dimostrare che lo è.

## Nei corsi
- **Prob e statistica** (triennale): slide sui test. Fonti: `triennale/ANNO 3/prob e statistica/statistica/Test d'Ipotesi e Intervalli di Confidenza lez6.pdf` (Rapporto di verosimiglianza I-IV).

## Prerequisiti
- [[Funzione potenza]]: criterio di confronto
- [[Statistica sufficiente]]: ipotesi del teorema di Karlin-Rubin

## Porta a
- Nessuno nel corso.

## Collegati
- [[Test del rapporto di verosimiglianza]]: è UMP sotto le ipotesi dei teoremi
