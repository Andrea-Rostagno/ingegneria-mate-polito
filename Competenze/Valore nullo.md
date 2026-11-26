---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: ["NULL", "null value", "valore NULL", "IS NULL", "IS NOT NULL", "informazione incompleta", "attributo opzionale"]
tags: [competenza, area/informatica]
---

# Valore nullo

> Valore speciale NULL, esterno a ogni dominio, che rappresenta l'assenza di un valore (ignoto o non definito) in un attributo di una tupla.

## Definizione / enunciato
Alcune informazioni possono mancare: in `Studente(Matricola, Cognome, DataNascita, Telefono, AnnoLaurea)` il telefono può essere ignoto e l'anno di laurea non definito (studente non laureato) o non ancora noto. Usare un valore "speciale" del dominio (0, stringa vuota, 999) non è adeguato: serve un valore inutilizzato, che potrebbe diventare necessario, e le applicazioni devono trattarlo a parte.

Il **valore nullo (NULL)**: non fa parte di alcun dominio; rappresenta sia valore ignoto sia valore non definito; va usato con cautela (`Matricola = NULL`?). Nello schema gli attributi che ammettono NULL si marcano con `*`.

## Formule chiave
```sql
NomeAttributo IS [NOT] NULL
```
In SQL "in presenza di valori NULL qualsiasi predicato di confronto è falso" (così le slide): `WHERE Taglia > 44` non seleziona i prodotti con taglia NULL.

## Intuizione
NULL non è un valore come gli altri: per questo non si confronta con `=`, ma con l'operatore speciale `IS NULL`. Una chiave che ammette NULL perde l'univocità: da qui la chiave primaria, che non ammette nulli.

## Come si usa
Esempio delle slide su `P`: "prodotti con taglia maggiore di 44 **o che potrebbero averla**":
```sql
SELECT CodP, NomeP
FROM P
WHERE Taglia > 44 OR Taglia IS NULL;
```
Altri usi nel corso: `UNIQUE` ammette più NULL (sempre considerati diversi); `INSERT` di una tupla parziale assegna NULL agli attributi omessi, che devono ammetterlo; l'outer join completa con NULL le tuple senza controparte; nella CTE ricorsiva la radice della gerarchia è `BossID IS NULL`. Nel modello ER un attributo con cardinalità minima 0 ammette il valore nullo.

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/Modello-relazionale-1.pdf` (pp. 16-18); `triennale/ANNO 3/base di dati/1-SQL_fondamenti.pdf` (pp. 31-34); `triennale/ANNO 3/base di dati/6-SQL_gestione_tabelle.pdf` (pp. 33-36, NOT NULL e UNIQUE).

## Prerequisiti
- [[Modello relazionale]]: attributi e domini delle tuple

## Porta a
- [[Outer join]]: completa con NULL le tuple prive di controparte

## Collegati
- [[Chiave di una relazione]]: la chiave primaria non ammette NULL
- [[Istruzione SELECT]]: predicati IS NULL nella clausola WHERE
