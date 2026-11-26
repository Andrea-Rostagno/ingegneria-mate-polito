---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["algebraic optimization", "trasformazioni di equivalenza", "anticipo della selezione", "push down", "pushing selection down", "albero della query", "query tree"]
tags: [competenza, area/informatica]
---

# Ottimizzazione algebrica

> Fase dell'ottimizzatore che riscrive l'albero della query con trasformazioni di equivalenza dell'algebra relazionale, per ridurre la dimensione dei risultati intermedi.

## Definizione / enunciato
Due espressioni relazionali sono **equivalenti** se producono lo stesso risultato per qualunque istanza della base di dati. Le trasformazioni interessanti riducono la dimensione dei risultati intermedi da tenere in memoria, oppure preparano l'espressione ad una trasformazione che li riduce. Sono considerate sempre vantaggiose (es. anticipare la selezione rispetto al join), indipendenti dalla distribuzione dei dati, ed eliminano le differenze tra formulazioni diverse della stessa query. L'output è un albero in forma "canonica".

## Formule chiave
1. Atomizzazione della selezione: $\sigma_{F_1\wedge F_2}(E)\equiv\sigma_{F_2}(\sigma_{F_1}(E))\equiv\sigma_{F_1}(\sigma_{F_2}(E))$
2. Proiezioni in cascata: $\pi_X(E)\equiv\pi_X(\pi_{X,Y}(E))$
3. Anticipo della selezione rispetto al join: $\sigma_F(E_1\bowtie E_2)\equiv E_1\bowtie\sigma_F(E_2)$, se $F$ riguarda solo attributi di $E_2$
4. Anticipo della proiezione rispetto al join: $\pi_L(E_1\bowtie_p E_2)\equiv\pi_L\big(\pi_{L_1,J}(E_1)\bowtie_p\pi_{L_2,J}(E_2)\big)$, con $L_1=L-\text{Schema}(E_2)$, $L_2=L-\text{Schema}(E_1)$, $J$ attributi del predicato di join
5. Join dal prodotto cartesiano: $\sigma_F(E_1\times E_2)\equiv E_1\bowtie_F E_2$
6. $\sigma_F(E_1\cup E_2)\equiv\sigma_F(E_1)\cup\sigma_F(E_2)$
7. $\sigma_F(E_1-E_2)\equiv\sigma_F(E_1)-\sigma_F(E_2)\equiv\sigma_F(E_1)-E_2$
8. $\pi_X(E_1\cup E_2)\equiv\pi_X(E_1)\cup\pi_X(E_2)$; rispetto alla differenza vale solo se $X$ include la chiave primaria (o attributi unici e non nulli)
9. $\sigma_{F_1\vee F_2}(E)\equiv\sigma_{F_1}(E)\cup\sigma_{F_2}(E)$, $\sigma_{F_1\wedge F_2}(E)\equiv\sigma_{F_1}(E)\cap\sigma_{F_2}(E)$
10. $E\bowtie(E_1\cup E_2)\equiv(E\bowtie E_1)\cup(E\bowtie E_2)$. Tutti gli operatori binari sono commutativi e associativi tranne la differenza.

## Intuizione
Selezioni e proiezioni "scendono" verso le foglie: si scarta prima possibile ciò che non serve, così il join lavora su poche tuple.

## Come si usa
Esempio delle slide: EMP(Emp#, ..., Dept#, Salary), DEPT(Dept#, DName, ...) e `SELECT DISTINCT DName FROM EMP, DEPT WHERE EMP.Dept#=DEPT.Dept# AND Salary > 1000`. Si parte da $\pi_{DName}(\sigma_{\ldots}(EMP\times DEPT))$; con le proprietà 1, 5, 3, 2 e 4 si arriva a $\pi_{DName}\big(\pi_{Dept\#}(\sigma_{Salary>1000}(EMP))\bowtie\pi_{Dept\#,DName}(DEPT)\big)$. Con le cardinalità della slide (EMP ≈ 10.000, DEPT ≈ 100, EMP con Salary > 1000 ≈ 50) il join lavora su 50 tuple invece di 10.000. Lo stesso principio, applicato al GROUP BY, è il "group by push down" della progettazione fisica.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): "Algebraic optimization", trasformazioni 1-10 ed esempio EMP/DEPT. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/04 - 15-QueryOptimization.pdf` (pp. 9, 16-38).

## Prerequisiti
- [[Ottimizzatore di query]]: prima fase di ottimizzazione
- [[Algebra relazionale]]: le trasformazioni di equivalenza lavorano sugli operatori algebrici

## Porta a
- Nessuno.

## Collegati
- [[Progettazione fisica di una base di dati]]: group by push down come anticipo del raggruppamento
