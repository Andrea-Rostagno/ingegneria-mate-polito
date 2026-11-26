---
tipo: competenza
area: algebra-geometria
corsi: [Matematica discreta]
livello: [triennale]
aliases: ["inclusion-exclusion principle", "principio di inclusione esclusione", "PIE", "cardinalità di un'unione", "formula di Sylvester"]
tags: [competenza, area/algebra-geometria]
---

# Principio di inclusione-esclusione

> Calcola la cardinalità di un'unione di insiemi che possono sovrapporsi. Si sommano le cardinalità, si tolgono le intersezioni a due, si aggiungono quelle a tre e così via, a segni alterni.

## Definizione / enunciato
**Teorema 2.6.1.** Se $A=A_1\cup A_2\cup\dots\cup A_n$, con gli $A_i$ non necessariamente disgiunti, allora
$$|A|=\sum_i|A_i|-\sum_{i<j}|A_i\cap A_j|+\sum_{i<j<l}|A_i\cap A_j\cap A_l|-\dots+(-1)^{n-1}|A_1\cap\dots\cap A_n|.$$

## Formule chiave
$$|A|=\sum_{k=1}^n(-1)^{k-1}\sum_{1\le j_1<\dots<j_k\le n}|A_{j_1}\cap\dots\cap A_{j_k}|
=\sum_{k=1}^n(-1)^{k-1}\sum_{J\subseteq\{1,\dots,n\},\,|J|=k}\Big|\bigcap_{j\in J}A_j\Big|.$$
Casi piccoli: $|A_1\cup A_2|=|A_1|+|A_2|-|A_1\cap A_2|$, e per tre insiemi si aggiunge $+|A_1\cap A_2\cap A_3|$ dopo aver tolto le tre intersezioni a coppie.

## Intuizione
Ogni elemento che sta in esattamente $m$ degli $A_i$ viene contato $\binom m1-\binom m2+\dots\pm\binom mm=1$ volta (verifica fatta qui con il teorema binomiale, non nelle fonti). È la correzione della regola della somma quando gli insiemi non formano una partizione. Nella logica matematica "oppure" è inclusivo, e per questo le parti si sovrappongono.

## Come si usa
**Esempio della lezione 4** (Tilli Es. 2.6.2). Si contano le stringhe di lunghezza $n\ge3$ sull'alfabeto $\{a,b,c,d,e\}$ che iniziano con $a$ ($A_1$), oppure finiscono con $d$ ($A_2$), oppure hanno $b$ al secondo posto ($A_3$).
- $|A_i|=5^{n-1}$ (una posizione fissata);
- $|A_i\cap A_j|=5^{n-2}$;
- $|A_1\cap A_2\cap A_3|=5^{n-3}$.

Quindi
$$|A|=3\cdot5^{n-1}-3\cdot5^{n-2}+5^{n-3}=5^{n-3}\,(3\cdot5^2-3\cdot5+1).$$
Il metodo standard per contare gli oggetti "con almeno una proprietà" è passare al complementare e applicare il principio, come per le dismutazioni.

## Nei corsi
- **Matematica discreta** (triennale): lezione 4, dopo la probabilità classica. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/04 - Contare con insiemi finiti.pdf` (lezione 4, pp. 23-26); `triennale/ANNO 1/Matematica discreta/teoria/Lectures Notes prof. Tilli.pdf` (§2.6, pp. 36-39).

## Prerequisiti
- [[Regola della somma]]: è il caso degli insiemi disgiunti
- [[Operazioni sugli insiemi]]: unioni e intersezioni di più insiemi

## Porta a
- [[Dismutazioni]]: si contano le permutazioni con almeno un punto fisso

## Collegati
- [[Spazio di probabilità]]: la stessa formula vale per la probabilità di un'unione di eventi. Il collegamento è concettuale e non compare nelle fonti del corso.
