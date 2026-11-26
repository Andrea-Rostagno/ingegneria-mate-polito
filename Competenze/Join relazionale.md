---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [prodotto cartesiano di relazioni, natural join, join naturale, theta-join, theta join, equi-join, INNER JOIN, condizione di join]
tags: [competenza, area/informatica]
---

# Join relazionale

> Operatore che combina le tuple di due relazioni "semanticamente legate": prodotto cartesiano seguito da una condizione di legame (theta-join) o dall'uguaglianza sugli attributi comuni (natural join).

## Definizione / enunciato
**Prodotto cartesiano** $R = A \times B$: schema unione degli schemi di $A$ e $B$; contiene tutte le coppie formate da una tupla di $A$ e una di $B$. Commutativo e associativo.

**Natural join** $R = A \bowtie B$: schema con gli attributi solo di $A$, quelli solo di $B$ e **una sola copia** degli attributi comuni (stesso nome); contiene le coppie per cui gli attributi comuni hanno valore uguale. Commutativo e associativo.

**Theta-join** $R = A \bowtie_p B$: schema unione degli schemi; contiene le coppie per cui è vero $p$, nella forma $X\,\theta\,Y$ con $X$ attributo di $A$, $Y$ di $B$ e $\theta$ operatore di confronto compatibile con i domini. Commutativo e associativo. **Equi-join**: caso $\theta$ è $=$.

## Formule chiave
Le slide dicono che il join è un operatore derivato, esprimibile con $\times$, $\sigma$, $\pi$; per il theta-join questo si scrive (lettura nostra, la formula non è nelle slide)
$$A \bowtie_p B = \sigma_p (A \times B)$$ Esempio: matricola dei docenti titolari di almeno due corsi
$$\pi_{C1.\text{MatrDocente}}\big((\text{Corsi}\ C1) \bowtie_{p} (\text{Corsi}\ C2)\big),\quad p: C1.\text{MatrDocente}=C2.\text{MatrDocente} \wedge C1.\text{Codice} \neq C2.\text{Codice}$$
Risultato: D102, D104.

## Intuizione
Il prodotto cartesiano accoppia tutto con tutto; il predicato di join tiene solo le coppie con un legame di significato. Le tuple senza controparte spariscono: il docente D105 (Neri), che non tiene corsi, non compare in `Corsi ⋈ Docenti`.

## Come si usa
In SQL il join si scrive nelle clausole `FROM` e `WHERE`: con $N$ tabelle servono almeno $N-1$ condizioni di join, e risultato ed efficienza non dipendono dall'ordine delle tabelle né dei predicati (lo sceglie l'ottimizzatore).
```sql
SELECT NomeF
FROM F, FP
WHERE F.CodF=FP.CodF AND CodP='P2';
```
Sintassi alternativa, che separa join e selezione: `FROM P INNER JOIN FP ON P.CodP=FP.CodP INNER JOIN F ON F.CodF=FP.CodF WHERE P.Colore='Rosso'`. Self-join con alias: `FROM F AS FX, F AS FY WHERE FX.Sede=FY.Sede AND FX.CodF < FY.CodF` elimina coppie uguali e permutazioni.

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/Algebra_Relazionale.pdf` (pp. 22-43; simboli verificati sulle immagini di pp. 36, 38); `triennale/ANNO 3/base di dati/1-SQL_fondamenti.pdf` (pp. 39-58).

## Prerequisiti
- [[Algebra relazionale]]: operatore binario dell'algebra
- [[Selezione e proiezione]]: il join è derivato da selezione e prodotto

## Porta a
- [[Semi-join e anti-join]]: varianti che tengono solo le tuple di A
- [[Outer join]]: variante che conserva le tuple senza controparte
- [[Istruzione SELECT]]: join espresso in FROM e WHERE
- [[Decomposizione senza perdita]]: ricomposizione delle proiezioni con il join

## Collegati
- [[Nested loop join]]: algoritmo con cui il DBMS realizza il join
