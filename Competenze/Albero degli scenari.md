---
tipo: competenza
area: ottimizzazione
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["scenario tree", "albero di scenari", "formulazione per nodi", "node-based formulation", "asset-liability management stocastico", "stochastic ALM", "asset liability problem", "nodo padre nell'albero degli scenari"]
tags: [competenza, area/ottimizzazione]
---

# Albero degli scenari

> Rappresentazione discreta dell'incertezza che si rivela nel tempo: ogni nodo è uno stato d'informazione, ogni cammino radice-foglia è uno scenario; le decisioni si indicizzano per nodo.

## Definizione / enunciato
Uno **scenario** è una traiettoria $(\xi_t)_{t\in[T]}$ delle variabili aleatorie, indicizzata da $s\in\mathcal S$. Nell'albero ogni nodo $n$ ha un unico predecessore $a(n)$ (o $p(n)$, nodo padre) e un insieme di successori $C(n)$; i nodi allo stadio $t$ formano $\mathcal K_t$. Le decisioni prese in un nodo possono dipendere solo dall'informazione lungo il cammino che vi porta. L'albero può non essere "perfetto" (numero di rami diverso nei nodi); se il rumore è indipendente fra stadi l'albero è ricombinante.

## Formule chiave
**Asset-liability management** (budget $b$, obiettivo $G$ dopo $Y$ anni, ribilanciamento ogni $\upsilon$ anni, $H=Y/\upsilon$ periodi, azioni $S$ e obbligazioni $B$, surplus $v^+$ e shortfall $v^-$): con $H=3$ e 8 scenari equiprobabili (rendimenti 1.25/1.14 oppure 1.06/1.12 per periodo),
$$\min\frac18\sum_{s=1}^8\big[(1+r)v_s^--(1+q)v_s^+\big]$$
$$x_S^1+x_B^1=b,\qquad R_S^nx_S^{p(n)}+R_B^nx_B^{p(n)}=x_S^n+x_B^n,\qquad R_S^sx_S^{p(s)}+R_B^sx_B^{p(s)}=G+v_s^--v_s^+,$$
con $R^n$ rendimenti del periodo che porta al nodo $n$: 1 nodo in $t=1$, 2 in $t=2$, 4 in $t=3$, 8 foglie.

## Intuizione
L'albero rende finito un problema con informazione crescente: invece di funzioni $\mathbf x_t(\xi_{[t]})$ si hanno variabili per nodo. La dimensione cresce esponenzialmente con gli stadi, motivo per cui servono decomposizione e campionamento.

## Come si usa
Due formulazioni equivalenti: **per nodi** (variabili condivise automaticamente dagli scenari che passano per il nodo) o **per scenari** ($x^{s,t}$ per ogni scenario e tempo) con l'aggiunta dei vincoli di non anticipatività, che rendono il problema decomponibile per scenari. Esempio multistadio con $T=3$ e 9 scenari nelle lezioni.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): esempio "Asset Liability Problem" e alberi multistadio. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/lezione_1.pdf` (p. 14-17, 40); `magistrale/Ottimizzazione in condizione di incertezza/lezione_2.pdf` (p. 2, 5-6, 16).

## Prerequisiti
- [[Programmazione stocastica a due stadi]]: caso con un solo livello di ramificazione

## Porta a
- [[Vincoli di non anticipatività]]: necessari nella formulazione per scenari
- [[Programmazione stocastica multistadio]]: modello sull'albero a più stadi
- [[Decomposizione di Benders annidata]]: algoritmo che percorre l'albero

## Collegati
- [[Cash flow matching]]: altro modello di gestione attivo-passivo, deterministico
- [[Albero (teoria dei grafi)]]: struttura combinatoria sottostante
