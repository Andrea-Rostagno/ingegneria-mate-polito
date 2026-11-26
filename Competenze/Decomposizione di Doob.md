---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [Doob's decomposition theorem, teorema di decomposizione di Doob, compensatore, compensator, decomposizione di Doob-Meyer]
tags: [competenza, area/probabilita]
---

# Decomposizione di Doob

> Ogni processo integrabile in tempo discreto si scrive in modo unico come martingala più un processo prevedibile (il compensatore) che parte da zero.

## Definizione / enunciato
**Parte 1.** Sia $(X_n)_{n\ge0}$ con $\mathbb E[|X_n|]<\infty$ e $(\mathcal F_n)$ la sua filtrazione naturale. Esiste un'unica decomposizione
$$X_n=M_n+A_n$$
con $(M_n)$ martingala, $A_0=0$ e $(A_n)_{n\ge1}$ prevedibile, data da
$$A_n=\sum_{i=1}^n\mathbb E[X_i-X_{i-1}\mid\mathcal F_{i-1}].$$
**Parte 2.** Se $X$ è supermartingala, $A$ è non crescente; se è submartingala, $A$ è non decrescente.

## Formule chiave
$$M_n=X_n-\sum_{i=0}^{n-1}\mathbb E[X_{i+1}-X_i\mid\mathcal F_i]$$
Unicità: la differenza di due compensatori è una martingala prevedibile, quindi costante e nulla.

## Intuizione
$A$ raccoglie la deriva attesa passo per passo (il "trend" prevedibile), $M$ il rumore residuo a media zero. In tempo continuo l'analogo, sotto ipotesi tecniche, è la decomposizione di Doob-Meyer.

## Come si usa
Si ottengono martingale "senza fare conti" (slide, lezione 18), per la passeggiata simmetrica $W_n$:
- $X_n=|W_n|$: $A_{n+1}-A_n=\mathbf 1\{X_n=0\}$, quindi $|W_n|-\sum_{i=0}^{n-1}\mathbf 1\{X_i=0\}$ è martingala;
- $X_n=W_n^2$: $A_n=n$, quindi $W_n^2-n$ è martingala e $\mathbb E[W_n^2]=\mathbb E[W_0^2]+n$;
- passeggiata con $p\ne1/2$: $A_n=n(p-q)$, $M_n=X_n-n(p-q)$.

Esercizio E (Wright-Fisher): applicare Doob a $X_n^2$ per ottenere $\mathbb E[\sum_{n<\tau}X_n]$ e il tempo medio di fissazione. Esercizio F ("Invented by you"): cercare $f$ con $\mathbb E[f(L_{n+1})\mid L_n]=f(L_n)+1$, così $f(L_n)-n$ è martingala. Nel criterio di Foster-Lyapunov, $V(X_n)=M_n+\sum_{i<n}\mathbb E[V(X_{i+1})-V(X_i)\mid\mathcal F_i]$.

## Nei corsi
- **Processi stocastici** (magistrale): argomento d'orale 11. Le slide enunciano la versione per qualunque processo integrabile, con unicità e $A_n$ esplicito; il `.tex` la dà solo per submartingale (e cita il caso super). Fonti: `magistrale/Processi stocastici/Lezione_18_18_11.pdf` (lezione 18), `magistrale/Processi stocastici/Lezione_21_01_12.pdf` (lezione 21), `riassunto_del_corso.tex` §Martingale, `suggested_exercises_martingales.pdf` (es. E).

## Prerequisiti
- [[Trasformata di martingala]]: parte prevedibile del processo
- [[Martingala]]: parte martingala della decomposizione

## Porta a
- [[Formula di Dynkin]]: analogo a tempo continuo
- [[Modello di Wright-Fisher]]: tempo medio di fissazione
- [[Criterio di Foster-Lyapunov per la ricorrenza positiva]]: scompone V(X_n) in martingala e drift

## Collegati
- [[Incrementi ortogonali delle martingale]]: compensatore del quadrato di martingala
