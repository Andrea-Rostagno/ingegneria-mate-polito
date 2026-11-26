---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["rational inequalities", "fractional inequalities", "tabella dei segni", "studio del segno", "sign chart"]
tags: [competenza, area/analisi]
---

# Disequazioni fratte

> Una disequazione $\frac{A(x)}{B(x)}\gtrless0$ si risolve studiando separatamente il segno di numeratore e denominatore e combinandoli nella tabella dei segni.

## Definizione / enunciato
Per $\dfrac{A(x)}{B(x)}\gtrless0$:
1. si porta tutto a primo membro (non si moltiplica per il denominatore, il cui segno è ignoto);
2. si studia $A(x)\ge0$ (oppure $>0$) e $B(x)>0$ (il denominatore non si annulla mai);
3. si compila la **tabella dei segni** e si prendono gli intervalli con segno $+$ se si chiede $>$, con segno $-$ se si chiede $<$.

## Formule chiave
$$\frac{A(x)}{B(x)}\gtrless0\;\Longrightarrow\;\begin{cases}A(x)\gtrless0\\ B(x)>0\end{cases}\;\Longrightarrow\;\text{tabella dei segni}$$

## Intuizione
Il segno di un quoziente (o prodotto) è determinato dai segni dei fattori. La tabella dei segni li mette in colonna intervallo per intervallo, così non serve conoscere il segno del denominatore in anticipo.

## Come si usa
Lezione 1 (esercizio sulla fratta, p. 5): $\dfrac{2x-1}{5-x}<2$. Si porta a primo membro: $\dfrac{2x-1}{5-x}-2<0\Rightarrow\dfrac{2x-1-10+2x}{5-x}<0\Rightarrow\dfrac{4x-11}{5-x}<0$.
$A(x)>0\iff x>\frac{11}{4}$; $B(x)>0\iff x<5$. Dalla tabella dei segni la frazione è negativa per $S:\ x<\frac{11}{4}\ \vee\ x>5$.

Lo stesso metodo vale con più fattori: nell'es. 8 (logaritmica) si studiano i segni di $x$, $\log(x+2)$ e $x-3$.

## Nei corsi
- **Analisi 1** (triennale): esercitazione 1 (test di ingresso). Fonti: `triennale/ANNO 1/analisi 1/2021.09.27 - Fiandaca_Lezione1.pdf` (lezione 1, pp. 5, 9).

## Prerequisiti
- [[Assiomi dei numeri reali]]: si moltiplica solo per quantità di segno noto

## Porta a
- [[Disequazioni logaritmiche]]: tabella dei segni con fattori logaritmici

## Collegati
- Nessuno.
