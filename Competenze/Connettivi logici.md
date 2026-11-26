---
tipo: competenza
area: analisi
corsi: [Analisi 1, Informatica]
livello: [triennale]
aliases: ["logical connectives", "proposizione logica", "tavola di verità", "truth table", "congiunzione", "disgiunzione", "negazione"]
tags: [competenza, area/analisi]
---

# Connettivi logici

> Le operazioni "e", "o", "non" che costruiscono proposizioni composte a partire da proposizioni semplici, con il valore di verità dato dalla tavola di verità.

## Definizione / enunciato
Una **proposizione logica** è un enunciato di cui si può stabilire con certezza la veridicità: ha un valore di verità, vero (V) o falso (F). "Roma è la capitale dell'Olanda" è una proposizione (falsa); "la vita è bella" non lo è, perché è soggettiva. Le proposizioni da cui si parte si dicono **semplici**.

A partire da $p$ e $q$ si ottengono nuove proposizioni con i connettivi:
- **congiunzione** "e", $p\wedge q$: vera solo se sono entrambe vere;
- **disgiunzione** "o", $p\vee q$: falsa solo se sono entrambe false;
- **negazione** "non", $\rceil p$: vera se $p$ è falsa e viceversa.

## Formule chiave
| $p$ | $q$ | $p\wedge q$ | $p\vee q$ | $\rceil p$ |
|---|---|---|---|---|
| V | V | V | V | F |
| V | F | F | V | F |
| F | V | F | V | V |
| F | F | F | F | V |

## Intuizione
Il valore di verità di una proposizione composta dipende solo dai valori delle componenti, non dal loro contenuto: per questo basta la tavola di verità. Con tre proposizioni la tavola ha 8 righe.

## Come si usa
- Lezione 1, "vero o falso" n. 1: $2\le 3$ è vera. Il simbolo $\le$ è una proposizione "doppia", $2<3$ **o** $2=3$; basta che una delle due sia vera ($2<3$ V, $2=3$ F, quindi la disgiunzione è V).
- `Esercizi di logica.pdf` es. 1-3: verificare con le tavole l'associatività di $\wedge$ e $\vee$, le leggi di De Morgan e che $p\vee\rceil p$ è una tautologia.

## Nei corsi
- **Analisi 1** (triennale): concetti introduttivi del programma ("Logica: proposizioni, connettivi logici"). Notazione della docente: $\rceil$ per la negazione. Fonti: `triennale/ANNO 1/analisi 1/2021.09.28 - Fiandaca_Lezione2.pdf` (lezione 2, pp. 1-2); `triennale/ANNO 1/analisi 1/2021.09.27 - Fiandaca_Lezione1.pdf` (lezione 1, p. 11); `triennale/ANNO 1/analisi 1/Esercizi di logica.pdf` (es. 1-3).
- **Informatica** (triennale): unità P3: i connettivi diventano gli operatori `and`, `or`, `not` sul tipo `bool` di Python, valutati da sinistra a destra in cortocircuito; le slide elencano le proprietà commutativa, associativa e distributiva. Fonti: `triennale/ANNO 1/informatica/Unita P3 - Decisioni.pdf` (p. 82-98).
- **Analisi 1** (seconda passata, 2026-11-24): la dispensa Mazzi definisce negazione, congiunzione, disgiunzione, implicazione ed equivalenza con le tavole di verità (esempi: "$\sqrt2$ è razionale" e la sua negazione; "7 è razionale" e "7 è negativo"); anche Morandotti §1.2 e Lussardi cap. 1 §1. Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/Capitolo Preliminari.pdf` (§1.1.1, pp. 1-3); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (§1.2).

## Prerequisiti
- Nessuno.

## Porta a
- [[Implicazione logica]]: definita come $\rceil p\vee q$
- [[Equivalenza logica]]: confronto di tavole di verità
- [[Quantificatori]]: i predicati sono proposizioni con una variabile
- [[Negazione dei quantificatori]]: la negazione applicata a enunciati quantificati
- [[Operazioni sugli insiemi]]: e, o, non diventano intersezione, unione, complementare

## Collegati
- [[Assiomi dei numeri reali]]: $x\le y$ letto come disgiunzione $x<y \vee x=y$
- [[Operatori booleani]]: and, or, not sono i connettivi e, o, non della logica
