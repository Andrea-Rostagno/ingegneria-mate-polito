---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [unione di relazioni, intersezione di relazioni, differenza di relazioni, operatore UNION, UNION ALL, INTERSECT, EXCEPT, compatibilità di schema, operatori insiemistici SQL]
tags: [competenza, area/informatica]
---

# Operatori insiemistici relazionali

> Unione, intersezione e differenza applicate a relazioni con lo stesso schema; in SQL diventano UNION, INTERSECT ed EXCEPT tra due interrogazioni.

## Definizione / enunciato
Per relazioni $A$ e $B$ **compatibili** (stesso schema: numero e tipo degli attributi), il risultato ha lo schema di $A$ e $B$:
- **unione** $A \cup B$: tuple di $A$, di $B$ o di entrambe; duplicati eliminati; commutativa e associativa;
- **intersezione** $A \cap B$: tuple sia di $A$ sia di $B$; commutativa e associativa;
- **differenza** $A - B$: tuple di $A$ che non appartengono a $B$; né commutativa né associativa ($A-B \neq B-A$).

## Formule chiave
$$\text{DocentiLaurea} - \text{DocentiMaster} \neq \text{DocentiMaster} - \text{DocentiLaurea}$$
Nelle slide la prima dà Neri e Bianchi, la seconda Rossi.
```sql
SELECT CodP FROM P WHERE Colore='Rosso'
UNION                -- UNION ALL non rimuove i duplicati
SELECT CodP FROM FP WHERE CodF='F2';
```

## Intuizione
È l'algebra degli insiemi applicata alle tabelle: la compatibilità di schema serve perché il risultato sia ancora una relazione. La differenza esprime il "ma non": prima si costruisce l'insieme da escludere, poi lo si sottrae.

## Come si usa
Equivalenze in SQL viste a lezione:
- `INTERSECT` ↔ join (`SELECT Sede FROM F, P WHERE F.Sede=P.Magazzino`) o `IN` (`SELECT Magazzino FROM P WHERE Magazzino IN (SELECT Sede FROM F)`);
- `EXCEPT` ↔ `NOT IN`: le città sede di fornitori ma non magazzino di prodotti sono `SELECT Sede FROM F WHERE Sede NOT IN (SELECT Magazzino FROM P)` (risultato: Venezia). Con più attributi, la parte sinistra di IN/NOT IN è un costruttore di tupla.

Esempio in algebra con differenza e join: docenti che non tengono corsi $= \text{Docenti} \bowtie \big(\pi_{\text{MatrDocente}}\text{Docenti} - \pi_{\text{MatrDocente}}\text{Corsi}\big)$.

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/Algebra_Relazionale.pdf` (pp. 61-78); `triennale/ANNO 3/base di dati/3-SQL_operatori_insiemistici.pdf` (pp. 3-23).

## Prerequisiti
- [[Algebra relazionale]]: estende l'algebra degli insiemi

## Porta a
- Nessuno.

## Collegati
- [[Operazioni sugli insiemi]]: le stesse operazioni sugli insiemi matematici
- [[Semi-join e anti-join]]: l'anti-join esprime la differenza "non legati"
- [[Interrogazioni nidificate]]: INTERSECT ed EXCEPT riscritte con IN e NOT IN
- [[Common Table Expression]]: la CTE ricorsiva unisce con UNION ALL passo iniziale e ricorsivo
