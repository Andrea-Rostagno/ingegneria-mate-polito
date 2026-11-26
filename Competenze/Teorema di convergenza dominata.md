---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità, Analisi funzionale]
livello: [triennale]
aliases: ["dominated convergence theorem", "teorema di Lebesgue", "convergenza dominata", "passaggio al limite sotto il segno di integrale"]
tags: [competenza, area/analisi]
---

# Teorema di convergenza dominata

> Se una successione converge quasi ovunque ed è dominata da una funzione integrabile fissa, limite e integrale si scambiano.

## Definizione / enunciato
**Teorema (di Lebesgue).** Sia $(f_n)_{n\ge1}$ una successione di funzioni misurabili convergente q.o. a $f$ misurabile, e supponiamo che esista $g\ge0$ integrabile con $|f_n(x)|\le g(x)$ per ogni $n\ge1$ e q.o. $x\in X$. Allora $f_n$ e $f$ sono integrabili ed esiste
$$\lim_n\int_Xf_n\,d\mu=\int_Xf\,d\mu\;\Big(=\int_X\lim_nf_n\,d\mu\Big).$$
**Corollario.** Se $\sum_{n=1}^\infty\int_X|f_n|\,d\mu<+\infty$, allora $\sum_nf_n$ converge q.o. e $\sum_n\int_Xf_n\,d\mu=\int_X\sum_nf_n\,d\mu$.

## Formule chiave
Dimostrazione: Fatou su $f_n+g\ge0$ e su $g-f_n\ge0$ dà
$$\int_Xf\,d\mu\le\liminf_n\int_Xf_n\,d\mu\le\limsup_n\int_Xf_n\,d\mu\le\int_Xf\,d\mu.$$

## Intuizione
La dominante integrabile impedisce che massa "scappi all'infinito" o si concentri in picchi sempre più alti: le due disuguaglianze di Fatou diventano un'uguaglianza.

## Come si usa
Per passare al limite sotto integrale verificando una stima uniforme $|f_n|\le g$. Nel corso torna nella parte di metodi matematici: la continuità della trasformata di Fourier di una funzione sommabile si ottiene così, dominando $|g(t)e^{-2\pi i\nu_nt}|=|g(t)|$ (Prop. 5.9 di `Capitolo 5 (3).pdf`, che rimanda all'appendice §5.10).

## Nei corsi
- **Metodi matematici e probabilità** (triennale): lezione 11; fonte manoscritta. Fonte: `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione11(11-05-23).pdf` (lezione 11, pp. 9-11).
- **Analisi funzionale** (triennale): richiamato nel cap. 3 e usato in versione $L^p$ (Prop. 5.32(ii)): se $p\in[1,\infty)$, $f_n\to f$ $\mu$-q.o. ed esiste $g\in L^p$ con $|f_n|\le g$ q.o. per ogni $n$, allora $f\in L^p$ e $f_n\to f$ in $L^p$. Serve per la densità delle funzioni semplici e a scalino in $L^p$ (Teor. 5.37). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (cap. 3; Prop. 5.32, p. 56); `triennale/ANNO 3/analisi funzionale/04_spaziLp_handout.pdf` (p. 8).

## Prerequisiti
- [[Lemma di Fatou]]: applicato a g+f_n e g-f_n

## Porta a
- [[Trasformata di Fourier]]: continuità della trasformata
- [[Sottospazi densi di Lp]]: versione in Lp usata nelle approssimazioni (Analisi funzionale)

## Collegati
- [[Secondo teorema di convergenza di Doob]]: l'uniforme integrabilità generalizza la dominazione
