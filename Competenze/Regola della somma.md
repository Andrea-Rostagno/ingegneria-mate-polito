---
tipo: competenza
area: algebra-geometria
corsi: [Matematica discreta]
livello: [triennale]
aliases: ["splitting rule", "sum rule", "regola della partizione", "principio additivo"]
tags: [competenza, area/algebra-geometria]
---

# Regola della somma

> Se un insieme finito è spezzato in parti disgiunte che lo ricoprono, la sua cardinalità è la somma delle cardinalità delle parti. È il primo strumento per contare.

## Definizione / enunciato
**Partizione** (Tilli, Def. 1.2.1). Una famiglia finita $\{A_i\}$ di sottoinsiemi di $A$ è una partizione di $A$ se:
1. $A=\bigcup_i A_i$ (gli $A_i$ esauriscono $A$);
2. $A_i\cap A_j=\emptyset$ per $i\ne j$ (sono a due a due disgiunti).

**Teorema 1.2.2 (Splitting Rule).** Se $A$ è finito e $\{A_i\}$ è una sua partizione, allora
$$|A|=\sum_i|A_i|.$$
Tilli omette la dimostrazione formale perché "piena di dettagli noiosi".

## Formule chiave
$$A=A_1\sqcup\dots\sqcup A_n\ \Longrightarrow\ |A|=|A_1|+\dots+|A_n|.$$

## Intuizione
Si conta ogni pezzo per conto suo e poi si somma. La condizione essenziale è la disgiunzione: se le parti si sovrappongono, alcuni elementi vengono contati più volte, e allora serve l'inclusione-esclusione.

## Come si usa
- **Esempio della lezione 4** (Tilli Es. 1.2.3): parole di lunghezza 10 sulle lettere $\{a,b\}$ in cui una delle due lettere compare esattamente una volta. Si spezza in $S_a$ (una sola $a$) e $S_b$ (una sola $b$): sono disgiunte, $|S_a|=|S_b|=10$, quindi le parole sono 20.
- **Matricole** (lezione 4): codici di 7 caratteri che iniziano con D o con S, seguiti da 6 cifre. Si spezza secondo la prima lettera e si ottiene $10^6+10^6=2\cdot10^6$.
- **Dimostrare la regola del prodotto:** $A\times B$ si spezza nelle "righe" $\{a_i\}\times B$, ciascuna di cardinalità $|B|$.
- **Spezzare sull'ultimo o sul primo passo:** i percorsi di lunghezza $k+1$ si contano secondo l'ultimo arco; le tassellazioni e le stringhe secondo il primo pezzo, e così nascono le ricorrenze.

## Nei corsi
- **Matematica discreta** (triennale): apre la lezione 4 ("il caso della partizione"). Fonti: `triennale/ANNO 1/Matematica discreta/teoria/04 - Contare con insiemi finiti.pdf` (lezione 4, pp. 1-3, 5); `triennale/ANNO 1/Matematica discreta/teoria/Lectures Notes prof. Tilli.pdf` (§1.2, pp. 6-8).

## Prerequisiti
- [[Cardinalità di un insieme finito]]: contare significa determinare $|A|$
- [[Operazioni sugli insiemi]]: unione e intersezione definiscono la partizione

## Porta a
- [[Regola del prodotto]]: $|A\times B|=|A|\,|B|$ si dimostra spezzando in righe
- [[Principio di inclusione-esclusione]]: generalizzazione a parti non disgiunte
- [[Potenze della matrice di adiacenza]]: i percorsi si contano secondo l'ultimo arco
- [[Conteggio con relazioni ricorsive]]: si spezza secondo il primo pezzo

## Collegati
- [[Relazione di equivalenza]]: le classi di equivalenza formano una partizione
