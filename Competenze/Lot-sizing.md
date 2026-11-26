---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["lot sizing", "CLSP", "capacitated lot-sizing problem", "DLSP", "discrete lot-sizing and scheduling problem", "time bucket", "costi di setup"]
tags: [competenza, area/ottimizzazione]
---

# Lot-sizing

> Modelli MILP per dimensionare i lotti di produzione nel tempo con costi e tempi di setup: CLSP (time bucket grande) e DLSP (time bucket piccolo).

## Definizione / enunciato
**CLSP** (generalizza l'EOQ a domanda variabile e più prodotti con capacità comune). $\delta_{it}=1$ se si fa il setup di $i$ nel periodo $t$:
$$\min\sum_{i}\sum_{t=1}^T(h_iI_{it}+f_i\delta_{it})\ \ \text{s.t. }I_{it}=I_{i,t-1}+x_{it}-d_{it},\ \ \sum_i(r_{im}x_{it}+r'_{im}\delta_{it})\le R_{mt},\ \ x_{it}\le M_{it}\delta_{it},$$
con $M_{it}=\sum_{\tau=t}^Td_{i\tau}$, $f_i$ costo e $r'_{im}$ tempo di setup.

**DLSP** (una sola SKU per periodo su una linea): $x_{it}\in\{0,1\}$, produttività $p_i$, perdita $l_i$ per setup, $\delta_{it}=\max\{0,x_{it}-x_{i,t-1}\}$ linearizzato con $\delta_{it}\ge0$, $\delta_{it}\ge x_{it}-x_{i,t-1}$; vincoli $I_{it}=I_{i,t-1}+p_ix_{it}-l_i\delta_{it}-d_{it}$, $\sum_ix_{it}\le1$.

## Formule chiave
**Riformulazione plant location** del CLSP: $y_{itp}$ = quantità di $i$ prodotta in $t$ per la domanda di $p\ge t$, $x_{it}=\sum_{p\ge t}y_{itp}$:
$$\min\sum_{t,i}\Big(f_i\delta_{it}+\sum_{p=t+1}^T(p-t)h_iy_{itp}\Big)\ \ \text{s.t. }y_{itp}\le d_{ip}\delta_{it},\ \ \sum_{t=1}^py_{itp}=d_{ip},\ \ \sum_i\sum_{p\ge t}r_{im}y_{itp}+\sum_ir'_{im}\delta_{it}\le R_{mt}.$$

## Intuizione
Il vincolo $x_{it}\le M_{it}\delta_{it}$ con $M$ pari a tutta la domanda residua dà un rilassamento debole. Disaggregando la produzione per periodo di destinazione la grande M scende a $d_{ip}$: è un plant location "nel tempo", dove aprire un impianto in $t$ significa fare il setup, e la giacenza diventa un costo di trasporto nel tempo $h_i(p-t)$. Sommando i nuovi vincoli su $p$ si ritrova quello aggregato.

## Come si usa
Si sceglie CLSP o DLSP a seconda dell'ampiezza del time bucket; nel DLSP il setup si conserva fra periodi, quindi si paga solo nella transizione 0→1. Per risolvere grandi istanze conviene la riformulazione, più variabili ma bound più forti.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap3.pdf` (p. 13-16); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap8.pdf` (p. 17-19).

## Prerequisiti
- [[Pianificazione della produzione multiperiodo]]: estende il modello di costo minimo
- [[Vincoli con grande M]]: lega produzione e setup
- [[Modello EOQ]]: caso statico che il CLSP generalizza

## Porta a
- [[Rilassamento continuo]]: la riformulazione rafforza il bound

## Collegati
- [[Localizzazione di impianti]]: la riformulazione è un plant location nel tempo
- [[Programmazione lineare mista-intera]]: modello misto-intero
