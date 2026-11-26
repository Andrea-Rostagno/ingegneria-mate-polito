---
tipo: competenza
area: informatica
corsi: [Data science lab]
livello: [magistrale]
aliases: [pd.merge, merge, pd.concat, concat, concatenazione di DataFrame, join di DataFrame, combinare oggetti pandas]
tags: [competenza, area/informatica]
---

# Merge di DataFrame

> Combinazione di Series e DataFrame in pandas: `concat` li accoda, `merge` li unisce come un join dell'algebra relazionale.

## Definizione / enunciato
- **`pd.concat((s1, s2))`**: concatena una sequenza di Series/DataFrame, di default in verticale. L'indice è **conservato anche se duplicato** (pandas non vieta indici duplicati); con `ignore_index=True` si rinumera. Le colonne mancanti in uno dei DataFrame sono riempite con `NaN`. `df1.append(df2)` era una scorciatoia equivalente a `pd.concat((df1, df2))`.
- **`pd.merge(df1, df2)`**: join relazionale. Si unisce su:
  - le colonne con lo **stesso nome** nei due DataFrame (default);
  - colonne indicate con `on=...` (o `left_on`, `right_on`);
  - gli indici, con `left_index=True, right_index=True` (gli indici sono conservati, altrimenti scartati).
- A seconda dei dati il merge è **one-to-one**, **many-to-one** o **many-to-many**; `validate='1:1' | '1:m' | 'm:1' | 'm:m'` impone il tipo atteso.

## Formule chiave
Esempi delle slide (`5-Pandas.pdf` p. 62-63): `df1` con chiave `k1 = [0,1]` e colonna `c2`, `df2` con `k1 = [1,0]` e `c3`: `pd.merge(df1, df2)` unisce sulla colonna comune `k1` (one-to-one). Se `df1` ha `k1 = [0,1,0,1]`, ogni riga di `df2` viene abbinata a due righe di `df1` (many-to-one). Con `left_index`/`right_index` le colonne omonime diventano `k1_x`, `k1_y`.

## Intuizione
`concat` è un'unione "fisica" di righe (o colonne) allineate per etichetta; `merge` è un join per valore di chiave, lo stesso concetto della JOIN SQL ma in memoria.

## Come si usa
Ricostruire un dataset spezzato in più file (concat) o arricchire una tabella con attributi di un'altra tabella tramite una chiave (merge); `validate` protegge da duplicati inattesi che moltiplicherebbero le righe.

## Nei corsi
- **Data science lab** (magistrale): sezione "Combining Pandas objects" delle slide pandas. Fonti: `magistrale/Data science lab/slide py/5-Pandas.pdf` (p. 54-63).

## Prerequisiti
- [[DataFrame di pandas]]: struttura tabellare con indice

## Collegati
- [[Join relazionale]]: `merge` è il join naturale/equi-join sulle colonne comuni
- [[Raggruppamento e tabelle pivot in pandas]]: altra operazione di tipo relazionale su DataFrame
