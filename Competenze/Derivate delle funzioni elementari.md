---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["derivatives of elementary functions", "tavola delle derivate", "table of derivatives", "derivate fondamentali"]
tags: [competenza, area/analisi]
---

# Derivate delle funzioni elementari

> La tavola delle derivate di potenze, funzioni trigonometriche e loro inverse, esponenziali, logaritmi e funzioni iperboliche.

## Definizione / enunciato
| $f(x)$ | $f'(x)$ |
|---|---|
| $x^\alpha$ | $\alpha x^{\alpha-1}$, $\forall\alpha\in\mathbb R$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $1+\tan^2x=\dfrac1{\cos^2x}$ |
| $\arcsin x$ | $\dfrac1{\sqrt{1-x^2}}$ |
| $\arccos x$ | $-\dfrac1{\sqrt{1-x^2}}$ |
| $\arctan x$ | $\dfrac1{1+x^2}$ |
| $a^x$ | $(\log a)\,a^x$ |
| $\log_a\lvert x\rvert$ | $\dfrac1{(\log a)\,x}$ |
| $\sinh x$ | $\cosh x$ |
| $\cosh x$ | $\sinh x$ |

## Formule chiave
Casi particolari ($a=e$, calcolo fatto dalla tavola): $(e^x)'=e^x$, $(\log\lvert x\rvert)'=\frac1x$.

## Intuizione
La tavola, letta da destra a sinistra, è la tavola delle primitive. Le derivate di $\arcsin$ e $\arccos$ differiscono solo nel segno: la loro somma ha derivata nulla.

## Come si usa
Combinata con le regole di derivazione (somma, prodotto, quoziente, composizione) permette di derivare qualunque funzione costruita dalle elementari. Il materiale della cartella non contiene esercizi svolti; il programma colloca la tavola dopo "Definizione di derivata, significato geometrico e fisico" e prima dei teoremi di Fermat, Rolle e Lagrange, che non sono sviluppati nel materiale.

## Nei corsi
- **Analisi 1** (triennale): "Calcolo differenziale". Fonti: `triennale/ANNO 1/analisi 1/formulario.pdf` (p. 3, "Tavola delle derivate di funzioni elementari"); `triennale/ANNO 1/analisi 1/presentazione_corso15_2021-22.pdf` (programma).
- **Analisi 1** (seconda passata, 2026-11-24): le derivate sono ricavate dalla definizione (rapporto incrementale e limiti notevoli) in Mazzi (es. 1.1) e raccolte in Morandotti (teor. 4.1.16, (4.11)); con il nuovo materiale ci sono esercizi svolti (esercitazione 13, 2022-23, "calcolo di derivate"). Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/calcolo differenziale corretto.pdf` (es. 1.1, pp. 2-4); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (teor. 4.1.16, PDF p. 122).

## Prerequisiti
- [[Formule trigonometriche]]: $1+\tan^2x=\frac1{\cos^2x}$
- [[Derivata]]: si calcolano dal rapporto incrementale

## Porta a
- [[Sviluppi di Maclaurin]]: i coefficienti dipendono dalle derivate successive in 0
- [[Primitive delle funzioni elementari]]: la tavola letta al contrario

## Collegati
- [[Regole di derivazione]]: insieme permettono di derivare ogni funzione elementare composta
