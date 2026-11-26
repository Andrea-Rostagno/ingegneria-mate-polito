---
tipo: competenza
area: analisi
corsi: [Equazioni di fisica matematica]
livello: [triennale]
aliases: ["Buckley-Leverett equation", "legge di conservazione con flusso a concavità variabile", "flusso non convesso", "spiazzamento acqua-petrolio"]
tags: [competenza, area/analisi]
---

# Equazione di Buckley-Leverett

> Prototipo di legge di conservazione con flusso dotato di un flesso: la soluzione entropica del problema di Riemann è una rarefazione seguita da un'onda d'urto.

## Definizione / enunciato
$f\in C^2$ con un flesso $\bar u$: $f''(\bar u)=0$, $f''>0$ per $u<\bar u$, $f''<0$ per $u>\bar u$ (o viceversa). Prototipo (L20 p. 1):
$$\partial_tu+\partial_xf(u)=0,\qquad f(u)=\frac{u^2}{u^2+a(1-u)^2},\quad a>0,$$
dove $u(x,t)$ è la frazione di acqua e $1-u$ quella di petrolio. $f$ cresce da 0 a 1 su $[0,1]$, $f'$ ha un massimo in $\bar u$.

## Formule chiave
Dato $u_0=1$ per $x<0$ (acqua), $u_0=0$ per $x>0$ (petrolio); $f'(1)=f'(0)=0$.
- Il gradino fermo non è soluzione: R-H richiederebbe $0=\frac{f(0)-f(1)}{0-1}=1$.
- L'urto con $s=1$ soddisfa R-H ma non è entropico, perché non tutte le caratteristiche entrano nell'urto.
- Soluzione entropica: rarefazione da $u_\ell=1$ fino a un valore $u^*$, poi urto da $u^*$ a $u_r=0$ con velocità $f'(u^*)$. R-H impone
$$f'(u^*)=\frac{f(u^*)-f(u_r)}{u^*-u_r}=\frac{f(u^*)}{u^*},$$
cioè la retta per l'origine di pendenza $f(u^*)/u^*$ è **tangente** al grafico di $f$ in $u^*$ (con $\bar u<u^*<1$ nel disegno).

## Intuizione
Con flusso non convesso né l'urto puro né la rarefazione pura funzionano: la parte "concava" del flusso genera un ventaglio, quella "convessa" un salto, e la tangenza raccorda le due.

## Come si usa
Costruzione grafica: si traccia da $(0,0)$ la tangente al grafico di $f$; il punto di contatto dà $u^*$ e la velocità dell'urto $s=f(u^*)/u^*$. Dietro l'urto la soluzione decresce con continuità da 1 a $u^*$.

## Nei corsi
- **Equazioni di fisica matematica** (triennale): fonte `triennale/ANNO 3/eq fisica matematica/20 - Lezione 22_11_23.pdf` (pp. 1-4).

## Prerequisiti
- [[Onda d'urto]]: l'urto finale rispetta Rankine-Hugoniot
- [[Onda di rarefazione]]: tratto continuo dietro l'urto
- [[Soluzione entropica]]: criterio che esclude l'urto con s = 1
