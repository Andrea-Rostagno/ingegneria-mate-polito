---
tipo: competenza
area: statistica
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["spatial Poisson model", "Poisson con effetto spaziale", "Poisson-GP", "offset di popolazione", "offset", "test di proporzionalità con la popolazione"]
tags: [competenza, area/statistica]
---

# Modello di Poisson spaziale

> Modello per conteggi su aree o punti in cui il log dell'intensità contiene un effetto spaziale latente (un processo gaussiano o un ICAR) e, tramite offset, la popolazione esposta.

## Definizione / enunciato
$$y(\mathbf s)\sim P(\lambda(\mathbf s)),\qquad\log\lambda(\mathbf s)=\mu+w(\mathbf s),\qquad W(\mathbf s)\sim GP(0,\sigma^2\exp(-h\phi)),$$
con prior $\mu\sim N(0,1000^2)$, $\phi\sim U(0.3,30)$, $\sigma^2\sim IG(1,1)$.
**Offset**: quando un conteggio si basa su $p(\mathbf s)$ unità si richiede $E\bigl(\frac{y(\mathbf s)}{p(\mathbf s)}\bigr)=\exp(\mu+w(\mathbf s))$, cioè
$$y(\mathbf s)\sim P(p(\mathbf s)\exp(\mu+w(\mathbf s))),\qquad\log\lambda(\mathbf s)=\log p(\mathbf s)+\mu+w(\mathbf s).$$

## Formule chiave
Il modello con offset assume conteggi proporzionali alla popolazione. Per testarlo:
$$\log E(y(\mathbf s))=\beta\log p(\mathbf s)+\mu+w(\mathbf s),\qquad y(\mathbf s)\sim P(p(\mathbf s)^\beta\exp(\mu+w(\mathbf s))),\quad\beta\sim N(0,10000):$$
se l'intervallo di credibilità di $\beta$ contiene 1 c'è evidenza di proporzionalità.

## Intuizione
Senza offset il rischio stimato riflette anche dove vive la gente (valori "elevati al sud" e bassi in Romagna nei furti di ciclomotori); con l'offset si modella il tasso. Con $\beta$ la posteriori è concentrata su valori maggiori di 1: la popolazione ha un effetto più che proporzionale.

## Come si usa
Dati: furti di ciclomotori in Italia nel 2006 per provincia (isole escluse), previsione di $\log\lambda$ su una griglia regolare. WAIC: 785.8078 (senza offset), 786.1524 (con offset), 785.6504 (con $\beta$). Il docente osserva che, trattandosi di province, sarebbe più naturale un modello su spazio discreto basato sui vicini: la stessa analisi con ICAR dà WAIC 785.0702, 787.9209 e 790.0982 per i modelli senza offset, con offset e con offset più latitudine.

## Nei corsi
- **Statistica computazionale** (magistrale): "Esempio - Poisson spaziale" e "Crime Data". Fonti: `magistrale/Statistica computazionale/Processi Gaussiani.pdf` (p. 43-53); `magistrale/Statistica computazionale/Auto-Modelli.pdf` (p. 29-31).

## Prerequisiti
- [[Distribuzione di Poisson]]: legge dei conteggi
- [[Processo gaussiano]]: effetto spaziale continuo

## Collegati
- [[Modello CAR]]: alternativa su spazio discreto (ICAR)
- [[Criteri di informazione AIC e BIC]]: confronto col WAIC
- [[Regressione con processo gaussiano]]: stessa previsione del processo in punti nuovi
