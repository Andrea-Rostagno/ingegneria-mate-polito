---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: ["Foster-Lyapunov recurrence criterion", "funzione di Lyapunov", "drift"]
tags: [competenza, area/probabilita]
---

# Criterio di Foster-Lyapunov per la ricorrenza

> Una funzione «energia» con sottolivelli finiti e drift non positivo fuori da un insieme finito dimostra la ricorrenza senza calcolare probabilità di ritorno.

## Definizione / enunciato
**Teorema (DTMC).** Sia $\{X_n\}$ una DTMC irriducibile. Supponiamo che esista $V\ge0$ tale che
- per ogni $0<K<\infty$ il sottolivello $B_K=\{x\in S:V(x)\le K\}$ è finito;
- $\mathbb E[V(X_{n+1})\mid X_n=x]-V(x)\le0$ per tutti gli stati $x$ tranne un numero finito.

Allora $\{X_n\}$ è ricorrente.

**Versione CTMC (lezione 22).** Per una CTMC irriducibile, con $B_K$ finiti e $\mathcal LV(x)\le 0$ per tutti gli $x$ tranne un numero finito, la catena è ricorrente. **Attenzione:** la slide (`Lezione_22_02_12.pdf`, p. 31, testo digitale, non OCR) scrive $\mathcal LV(x)\le V(x)$, e anche lo sketch di p. 32 definisce $\Gamma=\{x:\mathcal LV(x)>V(x)\}$. Però lo stesso sketch usa che $V(X_{t\wedge\tau})$ è una supermartingala, il che richiede $\mathcal LV\le0$ fuori da $\Gamma$, come nella versione DTMC. È quasi certamente un refuso della slide: in caso di dubbio chiedi al docente. Dimostrazione: solo sketch, non chiesta all'esame.

## Formule chiave
Drift (`.tex`): $\Delta V(x)=\mathbb E_x[V(X_1)-V(X_0)]=\sum_y p(x,y)V(y)-V(x)$.
Idea della prova: con $\Gamma=\{x:\Delta V(x)>0\}$ finito si sceglie $K$ con $\Gamma\subseteq B_K$ e si pone $\tau=\inf\{n:X_n\in B_K\}$. Il processo $V(X_{n\wedge\tau})$ è una supermartingala $\ge0$; per il primo teorema di convergenza di Doob converge q.c. e resta in un insieme finito $B_{K'}$. Per l'irriducibilità questo forza $\tau<\infty$.

## Intuizione
$V$ misura una "distanza energetica" dal centro. Se fuori da un insieme finito il processo non tende ad aumentarla, non può scappare all'infinito e torna nelle regioni piccole (`.tex`).

## Come si usa
Esempio delle lezioni 10 e 21: catena su $\mathbb Z$ con passi $+5$ (prob. $1/3$), $+2$ (prob. $1/6$), $-4$ (prob. $1/2$). Dimostrare che è ricorrente.
- Il drift medio è $\frac53+\frac26-2=0$.
- Con $V(x)=|x|$ i sottolivelli sono finiti, e per $x\ge4$ o $x\le-5$ il drift di $|X|$ vale 0.
- Il criterio dà quindi la ricorrenza (svolgimento nostro).

## Nei corsi
- **Processi stocastici** (magistrale): Lezione 21 ("A recurrence criterion for DTMCs", riferimento Meyn-Tweedie 1992), lezione 22 (versione CTMC); `magistrale/Processi stocastici/riassunto_del_corso.tex` § Criteri di Foster-Lyapunov; argomento 15 di `magistrale/Processi stocastici/topics_2025_26.pdf`. Fonti principali: `magistrale/Processi stocastici/Lezione_21_01_12.pdf` (lezione 21), `magistrale/Processi stocastici/Lezione_22_02_12.pdf` (lezione 22); `magistrale/Processi stocastici/riassunto_del_corso.tex` §Criteri di Foster-Lyapunov; `magistrale/Processi stocastici/topics_2025_26.pdf (argomento 15)`.

## Prerequisiti
- [[Primo teorema di convergenza di Doob]]: supermartingala non negativa converge
- [[Ricorrenza e transienza]]: prova ricorrenza senza calcoli espliciti

## Porta a
- [[Criterio di Foster-Lyapunov per la ricorrenza positiva]]: la ricorrenza segue dal criterio precedente

## Collegati
- [[Ricorrenza e transienza di una CTMC]]: versione del criterio per CTMC
