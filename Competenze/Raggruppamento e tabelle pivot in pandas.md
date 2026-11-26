---
tipo: competenza
area: informatica
corsi: [Data science lab]
livello: [magistrale]
aliases: [groupby, DataFrameGroupBy, pivot_table, pivoting, tabella pivot, MultiIndex, Multi-Index, indice gerarchico, stack, unstack, reset_index, set_index]
tags: [competenza, area/informatica]
---

# Raggruppamento e tabelle pivot in pandas

> Strumenti di pandas per riassumere un DataFrame per gruppi: `groupby` (raggruppa, aggrega, filtra), `pivot_table` (tabella incrociata di due attributi) e indici gerarchici (MultiIndex).

## Definizione / enunciato
- **groupby**: `df.groupby('k')` restituisce un oggetto `DataFrameGroupBy`; si può iterare sui gruppi (`for key, group_df in grouped_df`), ogni gruppo è un sotto-DataFrame.
- **Aggregazione per gruppo**: `grouped_df.mean()` dà un DataFrame con una riga per gruppo, indicizzato dalla chiave; `grouped_df['c1'].mean()` una Series.
- **Filtro per gruppo**: `grouped_df.filter(lambda x: x['c1'].mean() > 5)` tiene solo i gruppi che soddisfano la condizione.
- **pivot_table**: `df.pivot_table('fail', index='type', columns='class', aggfunc='sum')` mostra il valore aggregato per ogni combinazione di due attributi.
- **MultiIndex**: gerarchia di indici per righe (e colonne); va ordinato (`sort_index`) per usare lo slicing; accesso con `loc` sul livello esterno, con tuple per più livelli, o con `pd.IndexSlice`. `reset_index`/`set_index` trasformano livelli d'indice in colonne e viceversa; `unstack`/`stack` passano da Series multi-indicizzata a DataFrame e ritorno; le aggregazioni accettano `level=`.

## Formule chiave
Esempio delle slide (`5-Pandas.pdf` p. 65-69): `k = [a,b,a,b]`, `c1 = [2,10,3,15]`, `c2 = [4,20,5,30]`. Medie per gruppo: $a: (2.5,\ 4.5)$, $b: (12.5,\ 25.0)$; il filtro `mean > 5` scarta il gruppo $a$ (media 2.5) e tiene $b$ (12.5).

Pivot (p. 70-72): con `aggfunc='sum'` si contano i guasti per tipo e classe (2 sensori di tipo b e classe 2 hanno avuto un guasto); con `aggfunc='mean'` si ottiene la frazione (il 50% dei sensori di tipo a e classe 3).

## Intuizione
È lo schema "dividi, applica, ricombina": si spezza la tabella secondo una chiave, si calcola su ogni pezzo, si rimettono insieme i risultati indicizzati dalla chiave. La pivot è la versione a due chiavi, con una chiave sulle righe e una sulle colonne.

## Come si usa
Esplorazione dei dati prima della modellazione: medie per categoria, tassi per combinazione di attributi, serie indicizzate per (città, anno) come negli esempi `Rome/Turin`, `2018/2019` (p. 73-90).

## Nei corsi
- **Data science lab** (magistrale): sezioni "Grouping data", "Pivoting", "Multi-Index" delle slide pandas. Fonti: `magistrale/Data science lab/slide py/5-Pandas.pdf` (p. 64-90).

## Prerequisiti
- [[Indicizzazione in pandas]]: selezione con `loc` e indici espliciti

## Collegati
- [[GROUP BY e HAVING]]: `groupby` + aggregazione corrisponde a GROUP BY, `filter` a HAVING
- [[Merge di DataFrame]]: l'altra operazione "relazionale" di pandas
