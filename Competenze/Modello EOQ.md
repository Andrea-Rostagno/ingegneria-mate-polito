---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["economic order quantity", "EOQ", "lotto economico", "lotto economico d'acquisto", "gestione delle scorte"]
tags: [competenza, area/ottimizzazione]
---

# Modello EOQ

> Modello classico di gestione delle scorte che sceglie la quantità d'ordine $Q$ bilanciando costo fisso di ordinazione e costo di giacenza; è il primo esempio di ottimizzazione convessa non vincolata del corso.

## Definizione / enunciato
Ipotesi: tasso di domanda $d$ costante e lead time $LT$ deterministico. Si ordina sempre la stessa quantità $Q$; il livello di riordino è $R=d\cdot LT$. Ogni ordine costa $A+cQ$ (parte fissa $A$, variabile $c$); la giacenza costa $h$ per unità e per unità di tempo. Si emette un ordine ogni $Q/d$ unità di tempo e il magazzino scende linearmente da $Q$ a $0$ (andamento a dente di sega).

## Formule chiave
Costo di ordinazione e di giacenza nell'unità di tempo:
$$C_{\rm ord}=(A+cQ)\frac dQ=\frac{Ad}Q+cd,\qquad C_{\rm inv}=h\cdot\frac{Q^2}{2d}\cdot\frac dQ=h\frac Q2 .$$
$$C_{\rm tot}(Q)=h\frac Q2+\frac{Ad}Q+cd,\qquad C'_{\rm tot}(Q)=\frac h2-\frac{Ad}{Q^2}=0\ \Rightarrow\ Q^*=\sqrt{\frac{2Ad}h}.$$
$C''_{\rm tot}(Q)=2Ad/Q^3>0$ per $Q>0$; costo ottimo $C^*_{\rm tot}(d)=\sqrt{2Ahd}+cd$.

## Intuizione
Il costo fisso spinge verso ordini grandi e rari, la giacenza verso ordini piccoli e frequenti: all'ottimo le due spinte si bilanciano. $C_{\rm tot}$ è convessa e coerciva sul dominio aperto $Q>0$, quindi la condizione di stazionarietà basta. Il costo ottimo è concavo in $d$: economia di scala.

## Come si usa
L'integrale della giacenza si ottiene come area del triangolo $\frac12\cdot\frac Qd\cdot Q$ per ciclo, moltiplicata per i $d/Q$ cicli nell'unità di tempo. Il modello trascura l'incertezza di domanda e lead time, che richiederebbe politiche $(Q,R)$ o $(s,S)$ con scorte di sicurezza. Nella versione multiprodotto con vincolo sul numero di ordini $\sum_i d_i/Q_i\le U$ il costo di ordinazione è sostituito dal prezzo ombra del vincolo: $Q_i^*=\sqrt{2\mu d_i/h_i}$, $\mu=\frac1{2U^2}\big(\sum_i\sqrt{h_id_i}\big)^2$.

## Nei corsi
- **Ricerca operativa** (triennale): primo esempio introduttivo (Brandimarte, cap. 1) e ripreso come esempio di prezzo ombra nel cap. 6. Le pagine citate sono quelle del PDF. Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap1.pdf` (p. 3-7); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap6.pdf` (p. 22-23).

## Prerequisiti
- [[Derivata]]: condizione di stazionarietà $C'_{\rm tot}(Q^*)=0$
- [[Funzione convessa]]: garantisce che lo stazionario sia il minimo

## Porta a
- [[Prezzo ombra]]: EOQ multiprodotto con vincolo sugli ordini
- [[Lot-sizing]]: generalizzazione a domanda variabile e più prodotti

## Collegati
- [[Modello di ottimizzazione]]: esempio di problema con una sola variabile decisionale
- [[Struttura dei costi]]: costo fisso più variabile di ogni ordine
