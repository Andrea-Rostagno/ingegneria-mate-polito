---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["notable limits", "standard limits", "limiti fondamentali", "limiti notevoli trigonometrici ed esponenziali", "numero e"]
tags: [competenza, area/analisi]
---

# Limiti notevoli

> La tavola dei limiti delle funzioni elementari e dei limiti fondamentali (trigonometrici, esponenziali, logaritmici) usati per sciogliere le forme indeterminate.

## Definizione / enunciato
Comportamento agli estremi (formulario):
- $\lim_{x\to+\infty}x^\alpha=+\infty$, $\lim_{x\to0^+}x^\alpha=0$ se $\alpha>0$; $\lim_{x\to+\infty}x^\alpha=0$, $\lim_{x\to0^+}x^\alpha=+\infty$ se $\alpha<0$.
- $\lim_{x\to+\infty}a^x=+\infty$, $\lim_{x\to-\infty}a^x=0$ se $a>1$; il contrario se $a<1$.
- $\lim_{x\to+\infty}\log_ax=+\infty$, $\lim_{x\to0^+}\log_ax=-\infty$ se $a>1$; il contrario se $a<1$.
- $\lim_{x\to\pm\infty}\sin x$, $\cos x$, $\tan x$ non esistono; $\lim_{x\to(\frac\pi2+k\pi)^\pm}\tan x=\mp\infty$; $\lim_{x\to\pm\infty}\arctan x=\pm\frac\pi2$.
- Polinomi: $\displaystyle\lim_{x\to\pm\infty}\frac{a_nx^n+\dots+a_0}{b_mx^m+\dots+b_0}=\frac{a_n}{b_m}\lim_{x\to\pm\infty}x^{n-m}$.

## Formule chiave
$$\lim_{x\to0}\frac{\sin x}x=1,\qquad \lim_{x\to0}\frac{1-\cos x}{x^2}=\frac12$$
$$\lim_{x\to\pm\infty}\left(1+\frac ax\right)^x=e^a\ (a\in\mathbb R),\qquad \lim_{x\to0}(1+x)^{1/x}=e$$
$$\lim_{x\to0}\frac{\log_a(1+x)}x=\frac1{\log a},\qquad \lim_{x\to0}\frac{a^x-1}x=\log a\quad(a>0)$$
$$\lim_{x\to0}\frac{\log(1+x)}x=1,\qquad \lim_{x\to0}\frac{e^x-1}x=1,\qquad \lim_{x\to0}\frac{(1+x)^\alpha-1}x=\alpha\ (\alpha\in\mathbb R)$$

## Intuizione
Ognuno dice che vicino a $0$ una funzione elementare si comporta come il suo termine di primo grado: $\sin x\approx x$, $e^x-1\approx x$, $\log(1+x)\approx x$, $1-\cos x\approx\frac{x^2}2$. Per questo le forme $\frac00$ che li contengono si risolvono per confronto.

## Come si usa
Si riconduce la forma indeterminata a uno dei limiti della tavola, eventualmente con una sostituzione $y=g(x)\to0$. Il materiale della cartella non contiene esercizi svolti sui limiti: il programma li elenca in "Forme indeterminate. Limiti notevoli trigonometrici ed esponenziali", insieme al numero $e$.

## Nei corsi
- **Analisi 1** (triennale): Fonti: `triennale/ANNO 1/analisi 1/formulario.pdf` (p. 2, "Limiti notevoli"); `triennale/ANNO 1/analisi 1/presentazione_corso15_2021-22.pdf` (programma).
- **Analisi 1** (seconda passata, 2026-11-24): il materiale completo contiene ora teoria ed esercizi sui limiti, quindi la frase "il materiale della cartella non contiene esercizi svolti" in Come si usa non vale più. Il numero $e$ è definito come $\lim_n(1+1/n)^n$ (vedi Teorema sulle successioni monotone) e da esso Mazzi ricava $\lim_{x\to\pm\infty}(1+1/x)^x=e$ e gli altri limiti notevoli (§1.10.1); $\frac{\sin x}x\to1$ si dimostra con i carabinieri. Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/0.Limiti-totale.pdf` (§1.10-1.10.1, pp. 32-36); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (def. 2.2.20, (2.19), teor. 3.1.29, PDF pp. 76, 91); esercitazioni 10-11 (2021-22, "limiti notevoli") e il foglio `LIMITI NOTEVOLI SCRITTI CON SIMBOLI di LANDAU.pdf` (scansioni).

## Prerequisiti
- [[Proprietà di potenze e logaritmi]]: limiti di $a^x$, $\log_a x$ e forme $\frac{a^x-1}{x}$
- [[Teorema sulle successioni monotone]]: definisce il numero e
- [[Forme indeterminate]]: i limiti notevoli sciolgono forme 0/0 e 1^∞

## Porta a
- [[Sviluppi di Maclaurin]]: i limiti notevoli sono gli sviluppi al primo ordine
- [[Simboli di Landau]]: danno le equivalenze di base

## Collegati
- [[Formule trigonometriche]]: zeri del coseno e limiti della tangente
- [[Principio di eliminazione dei termini trascurabili]]: forniscono le equivalenze da sostituire
