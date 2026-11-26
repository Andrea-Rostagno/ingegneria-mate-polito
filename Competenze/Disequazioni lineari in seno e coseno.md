---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["linear trigonometric inequalities", "disequazioni goniometriche lineari", "disequazioni trigonometriche", "metodo dell'angolo aggiunto"]
tags: [competenza, area/analisi]
---

# Disequazioni lineari in seno e coseno

> Una disequazione $a\sin x+b\cos x\gtrless0$ si riconduce a una disequazione elementare $\sin(\cdot)\gtrless0$ o $\cos(\cdot)\gtrless0$ moltiplicando per un coefficiente e usando le formule di addizione e sottrazione.

## Definizione / enunciato
Una disequazione è **lineare in seno e coseno** quando entrambi compaiono al primo grado, senza prodotti e senza termini misti.
**Tecnica**: si moltiplicano i due membri per un coefficiente che trasforma i coefficienti di $\sin x$ e $\cos x$ in valori noti di seno e coseno di un angolo, e si riconosce una formula di addizione o sottrazione.

## Formule chiave
$$\sin(\alpha-\beta)=\sin\alpha\cos\beta-\cos\alpha\sin\beta,\qquad \sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta .$$

## Intuizione
Con coefficienti $+1$ e $-1$ si moltiplica per $\frac{\sqrt2}{2}=\cos\frac\pi4=\sin\frac\pi4$; con coefficienti $\sqrt3$ e $1$ si moltiplica per $\frac12$, così compaiono $\cos\frac\pi6$ e $\sin\frac\pi6$. La combinazione diventa un solo seno (o coseno) di un angolo traslato.

## Come si usa
Lezione 1, es. 7: $\sin x>\cos x$, cioè $\sin x-\cos x>0$. Moltiplicando per $\frac{\sqrt2}2$:
$$\sin x\cos\tfrac\pi4-\sin\tfrac\pi4\cos x>0\iff\sin\!\left(x-\tfrac\pi4\right)>0 .$$
Posto $y=x-\frac\pi4$: $0+2k\pi<y<\pi+2k\pi$, quindi
$$S:\ \tfrac\pi4+2k\pi<x<\tfrac54\pi+2k\pi .$$
Altri esempi (p. 8): $\sqrt3\sin x+\cos x>0\Rightarrow\sin(x+\frac\pi6)>0$; $\sqrt3\cos x-\sin x>0\Rightarrow\cos(\frac\pi6+x)>0$.

## Nei corsi
- **Analisi 1** (triennale): esercitazione 1 (test di ingresso). Fonti: `triennale/ANNO 1/analisi 1/2021.09.27 - Fiandaca_Lezione1.pdf` (lezione 1, pp. 7-8).

## Prerequisiti
- [[Formule trigonometriche]]: formule di addizione e sottrazione

## Porta a
- Nessuno.

## Collegati
- [[Disequazioni esponenziali]]: stessa strategia, ricondursi a una disequazione elementare
