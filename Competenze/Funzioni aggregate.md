---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [aggregate functions, funzioni di aggregazione, COUNT, SUM, AVG, funzione MAX, funzione MIN, COUNT DISTINCT, COUNT(*)]
tags: [competenza, area/informatica]
---

# Funzioni aggregate

> Funzioni SQL che operano su un insieme di valori e producono un unico valore: COUNT, SUM, AVG, MAX, MIN.

## Definizione / enunciato
Una funzione aggregata opera su un insieme di valori e produce un unico valore aggregato. Si indica nella clausola `SELECT`:
- senza GROUP BY **non** si possono indicare anche attributi non aggregati;
- si possono richiedere più funzioni aggregate insieme;
- sono valutate **dopo** l'applicazione di tutti i predicati della `WHERE`.

| funzione | significato |
|---|---|
| COUNT | conteggio degli elementi |
| SUM | somma dei valori |
| AVG | media dei valori |
| MAX, MIN | massimo e minimo |

## Formule chiave
```sql
COUNT (<* | [DISTINCT | ALL] ListaAttributi>)
```
`COUNT(*)` conta le righe; `COUNT(DISTINCT CodF)` i valori distinti. SUM e AVG vogliono argomenti numerici o intervalli di tempo; MAX e MIN un'espressione ordinabile (anche stringhe e istanti di tempo). Tutte ammettono un attributo o un'espressione.

## Intuizione
"Numero di fornitori con almeno una fornitura" mostra la differenza: `COUNT(*) FROM FP` conta le forniture, `COUNT(CodF)` i valori non nulli di CodF (ancora le forniture), solo `COUNT(DISTINCT CodF)` conta i fornitori.

## Come si usa
```sql
SELECT SUM(Qta) FROM FP WHERE CodP='P2';   -- 800 nell'istanza delle slide
SELECT COUNT(*) FROM F;                    -- 5
```
Il filtro della WHERE agisce prima dell'aggregazione: `SELECT COUNT(*) FROM FP WHERE CodP='P2'` conta i fornitori di P2. Per aggregare per gruppi serve la GROUP BY; per aggregare due volte (media massima) serve una tabella derivata o una CTE. Lo script dell'homework calcola per esempio `SELECT COUNT(DISTINCT Tipo) FROM Corsi`.

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/1-SQL_fondamenti.pdf` (pp. 61-71); `triennale/ANNO 3/base di dati/Algebra_Relazionale.pdf` (p. 90, estensione dell'algebra).

## Prerequisiti
- [[Istruzione SELECT]]: si scrivono nella clausola SELECT

## Porta a
- [[GROUP BY e HAVING]]: aggregati calcolati per gruppo
- [[Funzioni OLAP con finestra]]: aggregati calcolati su una finestra di righe

## Collegati
- [[Algebra relazionale]]: operatori aggiuntivi proposti per l'algebra
- [[Divisione relazionale]]: COUNT realizza la divisione in SQL
