---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["VSR", "view equivalence", "view-equivalenza", "view serializability", "schedule seriale", "schedule serializzabile", "commit projection", "reads-from", "final write"]
tags: [competenza, area/informatica]
---

# View-serializzabilità

> Uno schedule è view-serializzabile (VSR) se ha le stesse relazioni "legge-da" e le stesse scritture finali di uno schedule seriale delle stesse transazioni.

## Definizione / enunciato
- **Schedule**: sequenza delle operazioni di lettura/scrittura di transazioni concorrenti, nell'ordine di arrivo delle richieste (ogni transazione è identificata dal TID).
- **Commit projection**: ipotesi semplificativa, lo schedule contiene solo transazioni che fanno commit (quindi il dirty read non è trattato; l'ipotesi viene tolta poi).
- **Schedule seriale**: le azioni di ogni transazione compaiono in sequenza, senza interfogliamento. **Schedule serializzabile**: produce lo stesso risultato di un qualunque schedule seriale delle stesse transazioni.

Le classi di equivalenza tra schedule sono view, conflict, 2PL e timestamp: ognuna individua un insieme di schedule accettabili con diversa complessità di verifica.

**View-equivalenza.** $r_i(x)$ *legge-da* $w_j(x)$ se $w_j(x)$ precede $r_i(x)$, $i\ne j$, e non c'è nessun altro $w_k(x)$ in mezzo. $w_i(x)$ è una *scrittura finale* se è l'ultima scrittura di $x$ nello schedule. Due schedule sono **view-equivalenti** se hanno lo stesso insieme legge-da e lo stesso insieme di scritture finali. **VSR** = schedule view-equivalenti a qualche schedule seriale.

## Formule chiave
Esempi delle slide:
- $S_1=w_0(x)\,r_2(x)\,r_1(x)\,w_2(x)\,w_2(z)$ è VSR perché view-equivalente a $S_2=w_0(x)\,r_1(x)\,r_2(x)\,w_2(x)\,w_2(z)$.
- $S_3=w_0(x)\,r_2(x)\,w_2(x)\,r_1(x)\,w_2(z)$ non è view-equivalente a $S_2$ (insiemi legge-da diversi), ma è VSR perché equivalente a $S_4=w_0(x)\,r_2(x)\,w_2(x)\,w_2(z)\,r_1(x)$.
- Lost update $S=r_1(x)\,r_2(x)\,w_2(x)\,w_1(x)$: gli unici seriali sono $r_1w_1r_2w_2$ e $r_2w_2r_1w_1$, nessuno view-equivalente, quindi non serializzabile.

## Intuizione
Due esecuzioni sono indistinguibili "dall'esterno" se ogni lettura vede lo stesso valore e alla fine resta lo stesso valore scritto.

## Come si usa
Verificare la view-equivalenza con **uno** schedule dato ha complessità lineare; verificarla rispetto a **un qualunque** schedule seriale è **NP-completo**, quindi non praticabile nei sistemi reali: servono tecniche meno accurate ma più veloci (conflict-serializzabilità, 2PL).

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): "Theory of concurrency control". Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/06 - 17-ConcurrencyControl_new.pdf` (pp. 14-29).

## Prerequisiti
- [[Anomalie delle transazioni concorrenti]]: criterio per escludere le anomalie

## Porta a
- [[Conflict-serializzabilità]]: classe più ristretta e verificabile in tempo lineare

## Collegati
- Nessuno.
