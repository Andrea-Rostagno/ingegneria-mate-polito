---
tipo: competenza
area: statistica
corsi: [Prob e statistica]
livello: [triennale]
aliases: ["F-test", "F-test for equality of variances", "test F", "test sul rapporto delle varianze", "F-test per differenze tra varianze"]
tags: [competenza, area/statistica]
---

# Test F sul rapporto di varianze

> Confronta le varianze di due campioni normali indipendenti: sotto $H_0:\sigma_x^2/\sigma_y^2=c_0$, $F=S_x^2/(c_0S_y^2)$ segue una $F(n-1,m-1)$.

## Definizione / enunciato
**Dati**: $X_i\sim\mathcal N(\mu_x,\sigma_x^2)$, $i=1..n$, e $Y_j\sim\mathcal N(\mu_y,\sigma_y^2)$, $j=1..m$, indipendenti, medie ignote. **Ipotesi nulle** $H_0:\sigma_x^2/\sigma_y^2=c_0$ (e le unilaterali $\le,<,\ge,>$).
$$F=\frac{S_x^2}{c_0S_y^2}\sim F(n-1,m-1)\quad\text{sotto }H_0 .$$

## Formule chiave
Deriva da $\frac{\sigma_y^2S_x^2}{\sigma_x^2S_y^2}=\frac{((n-1)S_x^2/\sigma_x^2)/(n-1)}{((m-1)S_y^2/\sigma_y^2)/(m-1)}\sim F(n-1,m-1)$: rapporto di due chi-quadro indipendenti divisi per i gradi di libertà. Con $c_0=1$ si verifica l'uguaglianza delle varianze.

## Intuizione
Se le varianze stanno nel rapporto $c_0$, il rapporto delle varianze campionarie riscalato oscilla attorno a 1 secondo una F; valori troppo grandi o troppo piccoli fanno rifiutare.

## Come si usa
Attenzione alla notazione: qui (slide sui test) $n$ è la numerosità delle $X$ e $m$ quella delle $Y$, mentre nelle slide di statistica campionaria è il contrario, da cui $F(m-1,n-1)$. Esempio motivante delle slide: le cinque serie di Michelson hanno varianze campionarie 11009.474, 3741.053, 6257.895, 3605.000, 2939.737: ci si chiede se gli esperimenti siano stati fatti nelle stesse condizioni.

## Nei corsi
- **Prob e statistica** (triennale): elenco "Statistiche da conoscere" delle slide sui test; il risultato distributivo è nelle slide di statistica campionaria. Fonti: `triennale/ANNO 3/prob e statistica/statistica/Test d'Ipotesi e Intervalli di Confidenza lez6.pdf` (Introduzione II; Statistiche da conoscere IV); `statistica/statistica campionionaria lez2.pdf` (Statistiche e Distribuzione Campionaria XII-XIII).

## Prerequisiti
- [[Distribuzione F di Fisher-Snedecor]]: legge della statistica
- [[Media e varianza campionaria nel caso normale]]: caso a due campioni

## Porta a
- Nessuno nel corso.

## Collegati
- [[Test t di Student]]: il t-test a due campioni con varianza pooled suppone varianze uguali
