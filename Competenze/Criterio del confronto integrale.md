---
tipo: competenza
area: analisi
corsi: [Analisi 2]
livello: [triennale]
aliases: ["integral test", "confronto serie-integrale", "criterio dell'integrale", "integral comparison test"]
tags: [competenza, area/analisi]
---

# Criterio del confronto integrale

> Se $f$ è positiva e decrescente, la serie $\sum f(n)$ e l'integrale improprio $\int_1^\infty f$ hanno lo stesso carattere.

## Definizione / enunciato
**Teorema.** Sia $f:(1,+\infty)\to\mathbb R$ decrescente e positiva e $a_n=f(n)$. Allora $\sum_{n=1}^\infty a_n$ ha lo stesso comportamento (convergente o divergente) di $\int_1^{+\infty}f(x)\,dx$.

## Formule chiave
$$\int_1^{n+1}f(x)\,dx<S_n=a_1+\dots+a_n,\qquad S_n-a_1=a_2+\dots+a_n<\int_1^nf(x)\,dx.$$

## Intuizione
Dimostrazione con i rettangoli di base 1: quelli di altezza $f(n)$ "a sinistra" stanno sopra il grafico (se l'integrale diverge, diverge la serie); quelli spostati di uno stanno sotto (se l'integrale converge, $S_n$ è limitata e, essendo crescente perché $a_n>0$, ha limite finito).

## Come si usa
È il modo per stabilire il carattere della serie armonica generalizzata $\sum\frac1{n^\alpha}$, che poi diventa la serie campione per il criterio del confronto. Si usa quando il termine generale è il valore in $n$ di una funzione di cui si sa integrare la primitiva (ad esempio $\frac1x$, $\frac1{\sqrt x}$).

## Nei corsi
- **Analisi 2** (triennale): lezione del 28/11/2022, con dimostrazione. Fonte: `triennale/ANNO 2/analisi 2/AII 17 2022 serie numeriche.pdf` (pp. 13-16).

## Prerequisiti
- [[Serie numerica]]: serie a termini positivi
- [[Integrale improprio]]: confronto con ∫_1^∞ f(x) dx

## Porta a
- [[Serie armonica generalizzata]]: serie armonica generalizzata

## Collegati
- Nessuno.
