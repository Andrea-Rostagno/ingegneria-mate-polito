---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["trigonometric identities", "formule di addizione e sottrazione", "formule di duplicazione", "formule di prostaferesi", "identità fondamentale della trigonometria", "archi associati"]
tags: [competenza, area/analisi]
---

# Formule trigonometriche

> Le identità fondamentali di seno e coseno (relazione fondamentale, valori notevoli, addizione, duplicazione, prostaferesi, archi associati) usate in tutto il corso.

## Definizione / enunciato
$$\cos^2x+\sin^2x=1\qquad\forall x\in\mathbb R .$$
Valori ($k\in\mathbb Z$): $\sin x=0$ se $x=k\pi$; $\sin x=1$ se $x=\frac\pi2+2k\pi$; $\sin x=-1$ se $x=-\frac\pi2+2k\pi$; $\cos x=0$ se $x=\frac\pi2+k\pi$; $\cos x=1$ se $x=2k\pi$; $\cos x=-1$ se $x=\pi+2k\pi$.

## Formule chiave
$$\sin(\alpha\pm\beta)=\sin\alpha\cos\beta\pm\cos\alpha\sin\beta,\qquad \cos(\alpha\pm\beta)=\cos\alpha\cos\beta\mp\sin\alpha\sin\beta$$
$$\sin2x=2\sin x\cos x,\qquad \cos2x=2\cos^2x-1$$
$$\sin x-\sin y=2\sin\frac{x-y}2\cos\frac{x+y}2,\qquad \cos x-\cos y=-2\sin\frac{x-y}2\sin\frac{x+y}2$$
$$\sin(x+\pi)=-\sin x,\quad \cos(x+\pi)=-\cos x,\quad \sin\!\left(x+\tfrac\pi2\right)=\cos x,\quad \cos\!\left(x+\tfrac\pi2\right)=-\sin x$$

## Intuizione
Tutte discendono dalle formule di addizione: con $\alpha=\beta$ si ottengono le duplicazioni, con $\beta=\pi$ o $\frac\pi2$ gli archi associati. La relazione fondamentale è il teorema di Pitagora sulla circonferenza goniometrica.

## Come si usa
- Disequazioni lineari in seno e coseno: $\sin x\cos\frac\pi4-\sin\frac\pi4\cos x=\sin(x-\frac\pi4)$ (lezione 1, es. 7).
- Derivate: nel formulario la derivata di $\tan x$ è scritta come $1+\tan^2x=\frac1{\cos^2x}$, uguaglianza che segue dalla relazione fondamentale.
- Limiti: gli zeri di $\cos x$, $x=\frac\pi2+k\pi$, sono i punti in cui $\tan x\to\mp\infty$.

## Nei corsi
- **Analisi 1** (triennale): prerequisito ("trigonometria"). Fonti: `triennale/ANNO 1/analisi 1/formulario.pdf` (p. 1, "Formule notevoli"); `triennale/ANNO 1/analisi 1/2021.09.27 - Fiandaca_Lezione1.pdf` (lezione 1, pp. 7-8).
- **Analisi 1** (seconda passata, 2026-11-24): usate per la forma trigonometrica dei complessi (prodotto = somma degli angoli) e per definire le inverse trigonometriche su rami di monotonia; Morandotti raccoglie le formule nell'appendice A. Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (§1.5.2-1.5.3, appendice A, PDF pp. 344-347).

## Prerequisiti
- Nessuno.

## Porta a
- [[Disequazioni lineari in seno e coseno]]: formule di addizione e sottrazione
- [[Derivate delle funzioni elementari]]: $1+\tan^2x=\frac1{\cos^2x}$
- [[Forma trigonometrica ed esponenziale dei numeri complessi]]: prodotti via formule di addizione
- [[Funzioni trigonometriche inverse]]: funzioni di partenza

## Collegati
- [[Limiti notevoli]]: zeri del coseno e limiti della tangente
- [[Funzioni pari, dispari e periodiche]]: seno e coseno sono 2π-periodiche
