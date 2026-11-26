---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: ["Foster-Lyapunov positive recurrence criterion", "drift negativo"]
tags: [competenza, area/probabilita]
---

# Criterio di Foster-Lyapunov per la ricorrenza positiva

> Se il drift di una funzione di Lyapunov è minore di $-\varepsilon$ fuori da un insieme finito, il tempo medio di ritorno è finito e la catena è ricorrente positiva.

## Definizione / enunciato
**Teorema (DTMC).** Sia $\{X_n\}$ irriducibile. Supponiamo che esistano $V\ge0$ ed $\varepsilon>0$ tali che
- $B_K=\{x:V(x)\le K\}$ è finito per ogni $0<K<\infty$;
- $\mathbb E[V(X_{n+1})\mid X_n=x]<\infty$ per ogni $x$;
- $\mathbb E[V(X_{n+1})\mid X_n=x]-V(x)\le-\varepsilon$ per tutti gli $x$ tranne un numero finito.

Allora la catena è ricorrente positiva.

**Versione CTMC (lezione 22).** Con $B_K$ finiti, $\mathcal LV(x)<\infty$ per ogni $x$ e $\mathcal LV(x)\le-\varepsilon$ per tutti gli $x$ tranne un numero finito, la CTMC irriducibile è ricorrente positiva.

## Formule chiave
Prova (DTMC). Per il criterio precedente la catena è ricorrente. Sia $C=\sup_{x\in B_K}\big(\mathbb E[V(X_{n+1})-V(X_n)\mid X_n=x]\big)^+<\infty$. Per la decomposizione di Doob,
$$V(X_n)=M_n+\sum_{i=0}^{n-1}\mathbb E[V(X_{i+1})-V(X_i)\mid\mathcal F_i].$$
L'optional sampling al tempo limitato $n\wedge\tau$ e la convergenza monotona danno
$$\mathbb E[\tau\mid X_0=x]\le\frac{\varepsilon+V(x)+C}{\varepsilon}<\infty.$$
CTMC, con la formula di Dynkin e $\tau_m$ uscita da compatti $C_m$: $\mathbb E_x[\tau\wedge\tau_m]\le V(x)/\varepsilon$.

## Intuizione
Un drift strettamente negativo fa da "molla": ogni passo fuori dal centro fa perdere in media almeno $\varepsilon$ di energia. Partendo da energia $V(x)$, servono in media al più circa $V(x)/\varepsilon$ passi per rientrare.

## Come si usa
- Esempio della lezione 21: catena su $\{1,2,3,\dots\}$ con $p(x,y)=\frac1{2x}$ per $y\in\{1,\dots,2x\}$. Con $V(x)=x$ il drift è $+\frac12$ e il criterio non si applica. Con $V(x)=\log x$ il drift tende a $\log2-1<0$ (verifica nostra, da controllare).
- Esercizio della lezione 22: CTMC su $\mathbb N$ con tassi polinomiali, da dimostrare non esplosiva e ricorrente positiva (tassi illeggibili nell'OCR, da verificare sul PDF).

## Nei corsi
- **Processi stocastici** (magistrale): Lezione 21 ("A positive recurrence criterion for DTMCs", con prova completa nel materiale online), lezione 22 ("A positive recurrence criterion for CTMCs"); `magistrale/Processi stocastici/riassunto_del_corso.tex` § Criteri di Foster-Lyapunov; argomento 15 di `magistrale/Processi stocastici/topics_2025_26.pdf`. Fonti principali: `magistrale/Processi stocastici/Lezione_21_01_12.pdf` (lezione 21), `magistrale/Processi stocastici/Lezione_22_02_12.pdf` (lezione 22); `magistrale/Processi stocastici/riassunto_del_corso.tex` §Criteri di Foster-Lyapunov.

## Prerequisiti
- [[Ricorrenza positiva]]: tempo medio di ritorno finito
- [[Criterio di Foster-Lyapunov per la ricorrenza]]: la ricorrenza segue dal criterio precedente
- [[Decomposizione di Doob]]: scompone V(X_n) in martingala e drift
- [[Teorema di optional sampling]]: arresto al tempo limitato n e tau

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- Nessuno.
