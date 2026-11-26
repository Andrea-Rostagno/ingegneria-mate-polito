---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa, Ottimizzazione in condizione di incertezza]
livello: [triennale, magistrale]
aliases: ["convex set", "insiemi convessi", "ricopertura convessa", "chiusura convessa", "convex hull", "conv(S)", "epigrafo", "epigraph", "sublevel set", "insieme di sottolivello"]
tags: [competenza, area/ottimizzazione]
---

# Insieme convesso

> Un insieme è convesso se contiene il segmento fra due suoi punti qualsiasi; è la nozione su cui si costruiscono funzioni e problemi convessi.

## Definizione / enunciato
$S\subseteq\mathbb R^n$ è **convesso** se
$$\mathbf x,\mathbf y\in S\ \Rightarrow\ \lambda\mathbf x+(1-\lambda)\mathbf y\in S\quad\forall\lambda\in[0,1].$$
Equivalentemente è chiuso rispetto alle combinazioni convesse di un numero finito di punti: $\mathbf x_j\in S$, $\lambda_j\ge0$, $\sum_j\lambda_j=1\Rightarrow\sum_j\lambda_j\mathbf x_j\in S$.

**Ricopertura convessa** $\mathrm{conv}(S)$: l'insieme delle combinazioni convesse di tutti i sottoinsiemi finiti di $S$; è sia l'intersezione di tutti i convessi che contengono $S$, sia il più piccolo convesso che contiene $S$. La ricopertura convessa di un numero finito di punti è un poliedro limitato i cui vertici sono un sottoinsieme dei punti.

## Formule chiave
$$\mathrm{epi}(f)=\{(\mathbf x,y)\in\mathbb R^n\times\mathbb R\mid y\ge f(\mathbf x)\},\qquad L_f(t)=\{\mathbf x\in S:f(\mathbf x)\le t\}.$$

## Intuizione
Convesso = "senza rientranze né buchi": dall'interno si vede ogni altro punto in linea retta. Per questo un algoritmo di ricerca locale non può restare intrappolato dietro una rientranza della regione ammissibile.

## Come si usa
Fatti utili: l'intersezione di convessi è convessa; $\{\mathbf x:g(\mathbf x)\le0\}$ è convesso se $g$ è convessa; un semispazio $\mathbf a^T\mathbf x\le b$ e un iperpiano $\mathbf a^T\mathbf x=b$ sono convessi; una palla $B_p(\alpha)=\{\mathbf x:\|\mathbf x\|_p\le\alpha\}$, $p\ge1$, è convessa perché la norma è convessa. Un vincolo di uguaglianza $h(\mathbf x)=0$ in generale non è convesso: lo è se $h$ è affine. Esercizio delle slide: disegnare $\{x_1^2+x_2^2\le4\}$, $\{x_1^2+x_2^2\ge4\}$ e $\{x_1^2+x_2^2=4\}$ (il primo è convesso, gli altri due no: conclusione mia, le slide lasciano l'esercizio). Le regioni dei problemi interi non sono convesse.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap1.pdf` (p. 18-20, 25); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap4.pdf` (p. 8-10, 29).
- **Ottimizzazione in condizione di incertezza** (magistrale): ripresa nelle note di analisi convessa (iperpiani, semispazi, palle di norma convessi; intersezione sì, unione no) e **approssimazioni interne ed esterne** di insiemi e funzioni convesse: dall'esterno con un sottoinsieme finito di iperpiani di supporto (minorante poliedrale, base dei piani di taglio), dall'interno con l'inviluppo convesso di punti di frontiera (maggiorante). Fonti: `magistrale/Ottimizzazione in condizione di incertezza/05a - Analisi convessa (versione completa).pdf` (p. 3-5, 23).

## Prerequisiti
- [[Combinazioni coniche, affini e convesse]]: il segmento è una combinazione convessa

## Porta a
- [[Funzione convessa]]: $f$ convessa se e solo se l'epigrafo è convesso
- [[Problema di ottimizzazione convessa]]: richiede $S$ convesso
- [[Poliedro]]: intersezione finita di semispazi
- [[Teoremi di separazione]]: separazione di convessi disgiunti

## Collegati
- [[Norme vettoriali]]: le palle di una norma sono convesse
- [[Cono convesso]]: cono che è anche insieme convesso
