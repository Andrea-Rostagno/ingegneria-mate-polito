---
tipo: competenza
area: probabilita
corsi: [Processi stocastici, Matematica per l'AI, Financial engineering]
livello: [magistrale, triennale]
aliases: ["stopping time", "tempo di arresto", "tempo di primo passaggio"]
tags: [competenza, area/probabilita]
---

# Tempo d'arresto

> Variabile aleatoria che indica quando fermarsi usando solo l'informazione passata e presente; è l'ipotesi chiave della proprietà di Markov forte e dei teoremi di Doob.

## Definizione / enunciato
Un **tempo d'arresto** per $\{X_i\}_{i\in I}$ è una v.a. $\tau$ a valori in $I\cup\{\infty\}$ tale che
$$\{\tau\le i\}\in\mathcal F_i\qquad\forall i\in I,$$
dove $\{\mathcal F_i\}$ è la filtrazione (naturale). In tempo discreto è equivalente richiedere $\{\tau=n\}\in\mathcal F_n$. La $\sigma$-algebra del passato fino a $\tau$ è
$$\mathcal F_\tau=\{A\in\mathcal F:\ A\cap\{\tau\le n\}\in\mathcal F_n\ \forall n\}.$$

## Formule chiave
- Tempo di primo passaggio / ritorno: $T_y=\min\{n\ge1: X_n=y\}$ è un tempo d'arresto.
- Insiemi tipici di $\mathcal F_\tau$: $\{$visito $j$ prima di $\tau\}$, $\{\max_{1\le i\le\tau}X_i>K\}$, $\{\tau\le 56\}$, $\{\tau>5,\ X_{\tau-3}=j\}$.

## Intuizione
Osservando il processo fino al tempo $i$, e non il futuro, devo saper dire se mi sono già fermato. $\mathcal F_\tau$ non è una variabile aleatoria: è l'informazione accumulata fino all'istante aleatorio $\tau$.

## Come si usa
Esercizio tipico (lezione 6; `suggested_exercises_DTMC.pdf`, es. B): decidere quali sono tempi d'arresto tra
$T_1=\min\{n\ge6:X_n=2\}$, $T_2=\min\{n\ge1:X_{n+1}=2\}$, $T_3=\min\{n\ge2:X_{n-1}=2\}$, $T_4=\min\{n>T_1:X_{n-1}=2\}$, $T_5=\min\{n\ge10:X_n=X_{n-1}\}$, $T_6=\min\{n\ge1:X_n=X_5\}$, $T_7=10$.
- $T_2$ guarda $X_{n+1}$, quindi non è un tempo d'arresto.
- $T_6$ non lo è, perché per $n<5$ l'evento $\{T_6=n\}$ dipende da $X_5$.
- Le costanti come $T_7$ sono sempre tempi d'arresto.
- Anche l'ultimo istante di visita $R_2=\max\{n:X_n=2\}$ (es. A) non è un tempo d'arresto.

## Nei corsi
- **Processi stocastici** (magistrale): Definito nella lezione 6 ("Stopping times"), con la $\sigma$-algebra $\mathcal F_\tau$. Gli esempi del `.tex` sono: primo tempo di visita, primo superamento di una soglia, primo arrivo di un Poisson. Riusato per l'arresto opzionale (lezioni 18-19). Fonti principali: `magistrale/Processi stocastici/Lezione_06_07_10.pdf` (lezione 6), `magistrale/Processi stocastici/Lezione_18_18_11.pdf` (lezione 18); `magistrale/Processi stocastici/riassunto_del_corso.tex` §Prerequisiti e notazione; `magistrale/Processi stocastici/suggested_exercises_DTMC.pdf (es. B)`.
- **Matematica per l'AI** (triennale): "un tempo 'definibile' oggettivamente come valutazione se un dato evento è accaduto o meno al tempo $n$": $T:\Omega\to\{0,1,2,\dots\}\cup\{\infty\}$ è tempo d'arresto se $\{T=n\}$ dipende solo da $X_0,\dots,X_n$. Esempi: tempo di primo impatto $H_i=\inf\{n\ge0:X_n=i\}$ e di primo passaggio $T_i=\inf\{n\ge1:X_n=i\}$ (differiscono solo se $X_0=i$). Fonti: `triennale/ANNO 3/matematica AI/De Gregorio Mia 2 (1).pdf` (p. 6).
- **Financial engineering** (magistrale): $\{\tau\le t\}\in\mathcal F_t$ per ogni $t$, processo arrestato $X_{t\wedge\tau}$ (def. c11-tempo-arresto). Esempi: il primo passaggio $T_a=\inf\{t:W_t=a\}$ è un tempo d'arresto ($\{T_a\le t\}=\{\max_{u\le t}W_u\ge a\}$); l'ultimo zero prima di 1 e "l'istante del massimo dell'anno" non lo sono (nessuno vende esattamente al massimo). Usato per localizzare l'integrale di Itô (successione $\tau_m$) e per i tempi di primo passaggio delle diffusioni. Fonti: `Libri/Financial engineering/capitoli/cap11.tex`, `cap12.tex`; lezione d'origine `magistrale/Financial engineering/onofrio/Lezione 01 - analisi stocastica - 24 apr 26.pdf`.

## Prerequisiti
- [[Filtrazione]]: evento deciso con informazione presente

## Porta a
- [[Proprietà di Markov forte]]: istante aleatorio che non guarda il futuro
- [[Processo arrestato]]: arresto in un istante aleatorio

## Collegati
- Nessuno.
- [[Probabilità di impatto e tempo medio di impatto]]: il tempo di primo impatto in un insieme (Matematica per l'AI)
- [[Martingala locale]]: successione localizzante di tempi d'arresto (Financial engineering)
- [[Tempo di primo passaggio di una diffusione]]: densità e trasformata di Laplace del primo passaggio (Financial engineering)
