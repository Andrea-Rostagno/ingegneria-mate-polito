---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["Hall's marriage theorem", "teorema del matrimonio", "teorema di Hall sui matrimoni", "matching", "abbinamento", "complete matching", "matching completo", "perfect matching", "matching perfetto", "maximum matching"]
tags: [competenza, area/network]
---

# Teorema di Hall

> In un grafo bipartito esiste un matching che copre tutto un lato se e solo se ogni sottoinsieme di quel lato ha almeno tanti vicini quanti elementi.

## Definizione / enunciato
In un grafo non orientato, un **matching** è $M\subseteq\mathcal E$ senza cappi e senza archi adiacenti; **massimo** se di cardinalità massima, **perfetto** se $|M|=n/2$. In un bipartito $\mathcal G=(\mathcal V_0\cup\mathcal V_1,\mathcal E)$, un matching è **completo da $\mathcal V_0$ a $\mathcal V_1$** se ha cardinalità $|\mathcal V_0|$.

**Teorema (Hall, 1934).** Sono equivalenti:
1. esiste un matching completo su $\mathcal V_0$;
2. per ogni $\mathcal W\subseteq\mathcal V_0$ vale $|N_{\mathcal W}|\ge|\mathcal W|$, dove $N_{\mathcal W}$ è l'insieme dei vicini di $\mathcal W$ in $\mathcal V_1$.

## Formule chiave
Prova via max-flow min-cut: si aggiungono una sorgente $o$ con archi di capacità 1 verso $\mathcal V_0$, un pozzo $d$ con archi di capacità 1 da $\mathcal V_1$, e gli archi originali orientati da $\mathcal V_0$ a $\mathcal V_1$ con capacità $n+1$. I tagli minimi hanno la forma $S=\{o\}\cup U\cup N^+_U$ con $U\subseteq\mathcal V_0$, e
$$c^*_{od}=\min_{U\subseteq\mathcal V_0}\big(|\mathcal V_0|-|U|+|N^+_U|\big)=|\mathcal V_0|+\min_{U\subseteq\mathcal V_0}\big(|N^+_U|-|U|\big).$$
Quindi $c^*_{od}=|\mathcal V_0|$ se e solo se valgono le condizioni di Hall.

## Intuizione
La necessità è ovvia: $|\mathcal W|$ persone che conoscono in tutto meno di $|\mathcal W|$ lavori non possono essere sistemate. Hall dice che questo è l'unico ostacolo.

## Come si usa
Esempio delle slide: candidati e lavori, arco se il candidato è qualificato. "Si può dare a ogni candidato un lavoro diverso?" equivale a "esiste un matching completo sui candidati?". I matching corrispondono ai flussi interi ammissibili nella rete costruita sopra, quindi Ford-Fulkerson trova un matching completo quando esiste (e in generale un matching massimo).

## Nei corsi
- **Dinamiche su network** (magistrale): enunciato in Slides 1, dimostrato in Slides 3 come corollario di max-flow min-cut. Fonti: `magistrale/Dinamiche su network/slide/Slides-1-Graphs.pdf` (pp. 101-109); `magistrale/Dinamiche su network/slide/Slides-3-Connectivity+NetworkFlows.pdf` (pp. 49-53).

## Prerequisiti
- [[Grafo]]: grafi bipartiti
- [[Teorema max-flow min-cut]]: dimostrazione della sufficienza

## Porta a
- [[Algoritmo di Ford-Fulkerson]]: calcola il matching completo quando esiste

## Collegati
- [[Problema di assegnamento]]: versione pesata dell'abbinamento
- [[Insieme indipendente]]: il matching è un insieme di archi indipendenti
