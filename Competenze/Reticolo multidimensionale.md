---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Business intelligence per big data]
livello: [magistrale]
aliases: ["lattice", "reticolo delle viste", "derivabilità", "group-by lattice"]
tags: [competenza, area/informatica]
---

# Reticolo multidimensionale

> Insieme ordinato dei possibili raggruppamenti (group by) di uno schema di fatto, ordinati per derivabilità: dice quali viste si possono calcolare da quali altre.

## Definizione / enunciato
Ogni nodo è un insieme di attributi di raggruppamento (un *pattern* di aggregazione); un arco va da un nodo a uno meno fine ottenuto salendo di un livello in una gerarchia o togliendo una dimensione. Una vista è **derivabile** da un'altra se sta più in basso nel reticolo, cioè si ottiene da essa riaggregando (sempre che l'operatore di aggregazione lo consenta).

## Formule chiave
Reticolo delle slide con due dimensioni $a\to a'$ e $b\to b'$ (dove $a'$ e $b'$ sono i livelli superiori nelle gerarchie):

| livello | nodi |
|---|---|
| 0 | $\{a,b\}$ |
| 1 | $\{a',b\}$, $\{a,b'\}$ |
| 2 | $\{a',b'\}$, $\{a\}$, $\{b\}$ |
| 3 | $\{a'\}$, $\{b'\}$ |
| 4 | $\{\,\}$ |

Il nodo in cima è la tabella dei fatti, il nodo vuoto $\{\}$ è il totale generale.

## Intuizione
È il diagramma di Hasse della relazione "più fine di". La derivabilità richiede proprietà distributive o algebriche dell'aggregato: SUM su $\{a,b\}$ dà SUM su $\{a\}$, ma per AVG serve conservare anche il conteggio, e per gli olistici (mediana) non si può.

## Come si usa
Per rispondere a una query si cerca la vista materializzata più piccola fra quelle da cui la query è derivabile. Lo stesso reticolo serve a:
- scegliere le viste da materializzare (le query del carico di lavoro sono nodi; le viste candidate sono nodi da cui esse si derivano);
- calcolare il CUBE in modo efficiente, riusando group by già calcolati;
- aggiornare le viste materializzate durante l'alimentazione, propagando gli aggiornamenti lungo il reticolo (slide 32 di alimentazione).

Esempio: con $F_1=\{\text{prodotto, data, negozio}\}$, la vista $v_5=\{\text{trimestre, regione}\}$ si deriva da $v_4=\{\text{tipo, mese, regione}\}$ perché mese → trimestre e si elimina tipo (lettura nostra dell'esempio di p. 2).

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/05 - DSTBD_5-DWprogFisAlim-IT.pdf` (p. 4 reticolo, p. 32 alimentazione delle viste); calcolo del cubo in `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/04 - DSTBD_4-DWquery-IT.pdf` (pp. 73-74).
- **Business intelligence per big data** (magistrale): una slide: una vista materializzata può rispondere a più interrogazioni, con attenzione all'operatore di aggregazione richiesto (reticolo da $\{a,b\}$ a $\{\}$). Fonti: `magistrale/Business intelligence per big data/11-DWprogFis.pdf` (p. 4).

## Prerequisiti
- [[ROLLUP e CUBE]]: il cubo calcola tutti i group by del reticolo
- [[Vista materializzata]]: derivabilità tra viste

## Porta a
- [[Scelta delle viste da materializzare]]: si scelgono nodi del reticolo

## Collegati
- Nessuno.
