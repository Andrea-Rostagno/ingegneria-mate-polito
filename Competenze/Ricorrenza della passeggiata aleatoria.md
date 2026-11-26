---
tipo: competenza
area: probabilita
corsi: [Processi stocastici, Matematica per l'AI]
livello: [magistrale, triennale]
aliases: ["random walk recurrence", "teorema di Pólya", "passeggiata in d dimensioni"]
tags: [competenza, area/probabilita]
---

# Ricorrenza della passeggiata aleatoria

> La passeggiata aleatoria semplice è ricorrente solo se simmetrica, e la versione $d$-dimensionale delle slide solo per $d\le2$: è l'esempio chiave per spazi infiniti.

## Definizione / enunciato
Passeggiata su $\mathbb Z$ con $p(i,i+1)=p$ e $p(i,i-1)=q=1-p$, $0<p<1$ (irriducibile):
1. tutti gli stati sono ricorrenti se $p=1/2$;
2. tutti gli stati sono transienti se $p\ne1/2$.

In $\mathbb Z^d$ le slide definiscono la passeggiata con le $d$ coordinate date da passeggiate 1d i.i.d. Con $p=1/2$ è ricorrente per $d\le2$ e transiente per $d\ge3$.

## Formule chiave
$$p^{(2n)}(0,0)=\binom{2n}{n}p^nq^n\approx\frac{(4pq)^n}{\sqrt{\pi n}}\quad\text{(Stirling)},\qquad p^{(2n+1)}(0,0)=0.$$
Per $p=1/2$: $\sum_n p^{(2n)}(0,0)\ge\sum_{n\ge M}\frac1{2\sqrt{\pi n}}=\infty$. Per $p\ne1/2$: $4pq<1$, quindi la serie è geometrica e converge.
In dimensione $d$: $\mathbb E_0[N(0)]\approx\sum_n\big(\tfrac1{\pi n}\big)^{d/2}$.

## Intuizione
Con deriva ($p\ne1/2$) la passeggiata scappa all'infinito; senza deriva oscilla e torna. In più dimensioni ci sono "troppe direzioni" per tornare: "A drunk man will always find his way home, but a drunk bird may get lost forever".

## Come si usa
È il primo esempio di catena irriducibile su spazio infinito non ricorrente, quindi su spazi infiniti l'irriducibilità non basta.
- Si usa per confronto (es. F di `suggested_exercises_DTMC.pdf`: passi $+1$ e $-2$).
- Serve come base per le passeggiate riflesse (nascita e morte).
- Nella lezione 8 si chiede se la passeggiata con $p=1/2$ è ricorrente positiva. Non lo è (ricorrente nulla), perché la catena non ha distribuzione stazionaria (da verificare sul PDF l'argomento usato in aula).

## Nei corsi
- **Processi stocastici** (magistrale): Lezione 7 ("1d Random Walk", "nd Random Walk"), lezione 8; `magistrale/Processi stocastici/riassunto_del_corso.tex` § Classificazione di una DTMC (confronto con random walk). Le slide definiscono la passeggiata in $\mathbb Z^n$ come prodotto di passeggiate 1d indipendenti, non come passeggiata ai primi vicini. Fonti principali: `magistrale/Processi stocastici/Lezione_07_13_10.pdf` (lezione 7).
- **Matematica per l'AI** (triennale): caso $d=1$ negli appunti di De Gregorio: $p(0,n)=\binom n{n/2}p^{n/2}q^{n/2}\sim\sqrt{2/\pi}\,n^{-1/2}(4pq)^{n/2}$ ($n$ pari) via Stirling; se $p=q$ la serie $\sum_{n\ge N}p(0,n)\sim\sum\sqrt{2/\pi}\,/\sqrt n=\infty$ e la passeggiata è ricorrente, se $p\neq q$ ($4pq<1$) la serie converge ed è transiente. Fonti: `triennale/ANNO 3/matematica AI/De Gregorio Mia 2 (1).pdf` (p. 12-14).

## Prerequisiti
- [[Criterio delle visite attese]]: serie delle probabilità di ritorno

## Porta a
- [[Catena di nascita e morte discreta]]: passeggiata riflessa come caso particolare

## Collegati
- [[Martingala]]: passeggiata simmetrica è martingala
- [[Ricorrenza e transienza del moto browniano]]: analogo continuo del teorema di Pólya
- [[Rovina del giocatore]]: stessa passeggiata con barriere assorbenti
- [[Formula di Stirling]]: stima di $\binom{2n}{n}$
- [[Limite gaussiano della passeggiata aleatoria]]: stessa passeggiata, forma gaussiana di $p(m,n)$ (Matematica per l'AI)
