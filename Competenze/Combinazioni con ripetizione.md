---
tipo: competenza
area: algebra-geometria
corsi: [Matematica discreta]
livello: [triennale]
aliases: ["combinations with repetition", "stars and bars", "stelle e barre", "distribuire monete", "distributing money", "oggetti identici in scatole distinte", "cestino della frutta", "soluzioni intere di x1+...+xk=n"]
tags: [competenza, area/algebra-geometria]
---

# Combinazioni con ripetizione

> Contano i modi di distribuire $n$ oggetti identici fra $k$ scatole distinte, cioè le soluzioni intere di $x_1+\dots+x_k=n$. Si risolvono mettendo dei separatori fra gli oggetti.

## Definizione / enunciato
**Problema 2.1.1 (monete, ognuno almeno una).** $n$ monete identiche vanno divise fra $k$ persone ($n\ge k$) in modo che ciascuna ne riceva almeno una. Si mettono le monete in fila e si inseriscono $k-1$ separatori negli $n-1$ spazi fra monete consecutive, al più uno per spazio. Le distribuzioni sono
$$\binom{n-1}{k-1}.$$
**Problema 2.1.2 (senza vincoli).** Se qualcuno può non ricevere nulla, si aggiungono $k$ monete "false", si distribuiscono $n+k$ monete con almeno una a testa e poi si ritirano le false. Le distribuzioni sono
$$\binom{n+k-1}{k-1}.$$

## Formule chiave
$$\#\{x\in(\mathbb N\setminus\{0\})^k:\ x_1+\dots+x_k=n\}=\binom{n-1}{k-1},\qquad \#\{x\in\mathbb N^k:\ x_1+\dots+x_k=n\}=\binom{n+k-1}{k-1}.$$
Il secondo caso si riduce al primo col cambio di variabili $y_j=x_j+1$.

## Intuizione
La distribuzione è determinata solo dalla posizione dei separatori, non dall'identità delle monete, che sono indistinguibili. È anche una **scelta non ordinata con ripetizione**: scegliere $n$ volte fra $k$ tipi, contando solo quante volte esce ogni tipo.

## Come si usa
Esempi della lezione 4:
- 10 monete identiche fra 3 persone, almeno una a testa: $\binom92=36$;
- soluzioni di $x_1+x_2+x_3+x_4=15$ con $x_j\ge1$: $\binom{14}{3}$;
- 2 caramelle fra 5 bambini, senza vincoli: $\binom{6}{4}=15$. Si verifica con la regola della somma: 5 modi di darle entrambe allo stesso bambino più $\binom52=10$ modi di darle a due bambini diversi;
- **cestino della frutta:** 4 frutti scelti fra mele, arance e pere, contando solo i tipi. L'elenco dei casi dà 15, e la formula con $n=4$, $k=3$ dà $\binom{6}{2}=15$. Lo stesso numero si ottiene come anagrammi di una parola con 4 asterischi e 2 barre: $\frac{6!}{2!\,4!}$.

**Quiz della lezione 6:** scegliere 6 oggetti da 10 senza ordine e con ripetizione dà $\binom{15}{9}=\binom{n+k-1}{k-1}$ con $n=6$, $k=10$.

## Nei corsi
- **Matematica discreta** (triennale): lezione 4 ("Distribuire monete", "cestino della frutta"), ripreso nel quiz che apre la lezione 6. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/04 - Contare con insiemi finiti.pdf` (lezione 4, pp. 12-15, 21); `triennale/ANNO 1/Matematica discreta/teoria/06 - Successioni ricorsive non lineari.pdf` (p. 9); `triennale/ANNO 1/Matematica discreta/teoria/Lectures Notes prof. Tilli.pdf` (§2.1, pp. 21-24).

## Prerequisiti
- [[Calcolo combinatorio]]: si scelgono $k-1$ posizioni fra $n-1$

## Porta a
- Nessuno nel corso.

## Collegati
- [[Permutazioni con ripetizione]]: il cestino è l'anagramma di una parola con due simboli
- [[Partizioni di un insieme finito]]: oggetti distinti in scatole non numerate, il caso opposto
