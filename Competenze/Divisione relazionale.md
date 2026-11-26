---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [divisione, division, operatore di divisione, divisione in SQL, interrogazioni con tutti]
tags: [competenza, area/informatica]
---

# Divisione relazionale

> Operatore dell'algebra relazionale per le richieste "per ogni"/"tutti": restituisce i valori di A associati a tutte le tuple di B. In SQL si realizza contando.

## Definizione / enunciato
$R = A / B$ genera una relazione con schema $\text{schema}(A) - \text{schema}(B)$ che contiene le tuple $(X\!:\!x)$ di $A$ tali che **per ogni** tupla $(Y\!:\!y)$ di $B$ esiste in $A$ la tupla $(X\!:\!x, Y\!:\!y)$. Né commutativa né associativa.

## Formule chiave
$$R = \text{EsamiSuperati} / \text{CorsiPrimoAnno}$$
con `EsamiSuperati(MatrStudente, CodCorso)` e `CorsiPrimoAnno(CodCorso)`: studenti che hanno superato tutti i corsi del primo anno. Nelle slide, con CorsiPrimoAnno = {C1} risultano S1, S2; con {C2, C4} risultano S1, S4; con {C1,...,C6} solo S1.
$$\pi_{\text{CodF},\text{CodP}}FP \ / \ \pi_{\text{CodP}} P \quad\text{(fornitori che forniscono tutti i prodotti)}$$

## Intuizione
La divisione è l'inverso del prodotto cartesiano: cerca gli $x$ che, combinati con **tutto** $B$, stanno in $A$. Più $B$ è grande, meno $x$ superano la prova.

## Come si usa
In SQL non c'è un operatore di divisione: si verifica con `COUNT` che gli elementi associati a ogni $x$ siano tanti quanti l'insieme di riferimento.
```sql
SELECT CodF
FROM FP
GROUP BY CodF
HAVING COUNT(*)=(SELECT COUNT(*) FROM P);
```
Variante "almeno tutti i prodotti forniti da F2": si contano solo i prodotti di F2 (`WHERE CodP IN (SELECT CodP FROM FP WHERE CodF='F2')`) e si confronta con il numero di prodotti di F2 nella `HAVING`.

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/Algebra_Relazionale.pdf` (pp. 83-89); `triennale/ANNO 3/base di dati/2-SQL_query_nidificate-2.pdf` (pp. 70-77).

## Prerequisiti
- [[Algebra relazionale]]: è un suo operatore binario
- [[GROUP BY e HAVING]]: realizzazione in SQL con conteggi per gruppo

## Porta a
- Nessuno.

## Collegati
- [[Interrogazioni nidificate]]: il conteggio di riferimento è una sottointerrogazione
- [[Funzioni aggregate]]: COUNT confronta le cardinalità
