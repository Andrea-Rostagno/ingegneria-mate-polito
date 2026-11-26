---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["sequential characterization of limits", "teorema ponte", "limite sequenziale", "teorema del limite sequenziale"]
tags: [competenza, area/analisi]
---

# Caratterizzazione sequenziale del limite

> Il "teorema ponte": $f(x)\to\ell$ per $x\to\bar x$ se e solo se $f(x_n)\to\ell$ lungo ogni successione $x_n\to\bar x$ con $x_n\ne\bar x$.

## Definizione / enunciato
**Lemma 1.1** (Mazzi). Se $\bar x$ è di accumulazione per $A$, esiste una successione $x_n\in A$ con $x_n\to\bar x$.

**Teorema del limite sequenziale** (Mazzi, teor. 1.16; Morandotti, teor. 3.1.15). Sia $\bar x$ di accumulazione per $A=\operatorname{dom}f$. Esiste $\lim_{x\to\bar x}f(x)=\ell$ se e solo se per ogni successione $\{x_n\}$ con $x_n\in A\setminus\{\bar x\}$ e $x_n\to\bar x$ si ha $\lim_n f(x_n)=\ell$.

**Corollario 1.13.** Se esistono due successioni $x_n,y_n\to\bar x$ (in $A\setminus\{\bar x\}$) con $\lim f(x_n)\ne\lim f(y_n)$, allora $\lim_{x\to\bar x}f(x)$ non esiste.

## Formule chiave
$$\lim_{x\to\bar x}f(x)=\ell\iff\Big(\forall\{x_n\}\subseteq A\setminus\{\bar x\},\ x_n\to\bar x\ \Rightarrow\ f(x_n)\to\ell\Big)$$

## Intuizione
Il limite di funzione è un "limite lungo tutte le strade": basta una strada che porta altrove per farlo cadere. Una sola successione non basta per provare che il limite esiste ($\cos(2n\pi)\to1$ ma $\cos x$ non ha limite all'infinito).

## Come si usa
Soprattutto per dimostrare che un limite **non** esiste. Mazzi (es. 1.3): $\tan x$ per $x\to+\infty$ con $x_n=\frac\pi4+n\pi$ ($\tan\to1$) e $y_n=n\pi$ ($\tan\to0$). Lezione del 20/10/2021: $\sin(1/x)$ per $x\to0^+$ con $a_n=\frac1{\frac{3\pi}2+2\pi n}$ e $b_n=\frac1{\frac\pi2+2\pi n}$, lungo cui $\sin(1/x)$ vale $-1$ e $1$. Permette anche di trasferire ai limiti di successioni i limiti notevoli delle funzioni (es. 1.2: $\cos\frac1{n!}\to1$).

## Nei corsi
- **Analisi 1** (triennale): "legame fra funzioni e successioni". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/0.Limiti-totale.pdf` (§1.8, lemma 1.1, prop. 1.8, teor. 1.16, cor. 1.13, es. 1.2-1.3, pp. 29-30); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (teor. 3.1.15, PDF p. 86); `triennale/ANNO 1/analisi 1/Lezioni 2021-22 (manoscritte)/Lezione 2021-10-20.pdf` (p. 1).

## Prerequisiti
- [[Limite di successione]]: si valuta f lungo x_n
- [[Limite della funzione composta]]: la dimostrazione usa il teor. 1.12

## Porta a
- Nessuno.

## Collegati
- [[Sottosuccessione]]: stessa tecnica delle due successioni
