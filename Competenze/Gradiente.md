---
tipo: competenza
area: analisi
corsi: [Analisi 2]
livello: [triennale]
aliases: ["gradient", "nabla f", "∇f", "direzione di massima crescita", "curve di livello", "level curves"]
tags: [competenza, area/analisi]
---

# Gradiente

> Il vettore delle derivate parziali: dà le derivate direzionali, la direzione di massima pendenza ed è perpendicolare alle curve di livello.

## Definizione / enunciato
$\nabla f(P_0)=\Big(\frac{\partial f}{\partial x_1}(P_0),\dots,\frac{\partial f}{\partial x_n}(P_0)\Big)\in\mathbb R^n$.

**Teorema.** Se $f$ è differenziabile in $P_0$:
1. $f$ è continua in $P_0$;
2. esistono tutte le derivate direzionali e $\dfrac{\partial f}{\partial V}(P_0)=\nabla f(P_0)\cdot V$ per ogni $V$ con $\|V\|=1$;
3. se $\nabla f(P_0)\ne0$, indica la direzione in cui $f$ cresce più rapidamente ($-\nabla f$ quella di decrescita più rapida) e la pendenza massima è $\|\nabla f(P_0)\|=\tan\alpha$;
4. per $n=2$, $\nabla f(P_0)$ è perpendicolare alla curva di livello $\{f(x,y)=f(P_0)\}$.

## Formule chiave
$$\frac{\partial f}{\partial V}(P_0)=\|\nabla f(P_0)\|\cos\theta,\qquad V_{\max}=\frac{\nabla f(P_0)}{\|\nabla f(P_0)\|}.$$

## Intuizione
La 1 segue da $|\nabla f(P_0)\cdot(P-P_0)|\le\|\nabla f(P_0)\|\,\|P-P_0\|$; la 2 ponendo $P=P_0+hV$ nello sviluppo al primo ordine; la 3 perché $\cos\theta$ è massimo per $\theta=0$.

## Come si usa
Esempio della lezione: $f=x^2y+2x-3y$, $P_0=(1,2)$. $f$ è differenziabile ovunque ($f_x=2xy+2$, $f_y=x^2-3$ continue) e $\nabla f(P_0)=(6,-2)$. Piano tangente $z=-2+6(x-1)-2(y-2)$; direzione di massima pendenza $\big(\frac3{\sqrt{10}},-\frac1{\sqrt{10}}\big)$ con pendenza $2\sqrt{10}$; una direzione tangente alla curva di livello $f=-2$ è $(2,6)$, perpendicolare al gradiente.

## Nei corsi
- **Analisi 2** (triennale): teorema con dimostrazione nella lezione del 10/10/2022. Fonti: `triennale/ANNO 2/analisi 2/AII 03 2033 differenziabilita.pdf` (pp. 12-13); `triennale/ANNO 2/analisi 2/AII 04 2022 differenziabilita e derivate successive.pdf` (pp. 1-10).

## Prerequisiti
- [[Derivata direzionale]]: ∂f/∂v = ∇f·v
- [[Differenziabilità in più variabili]]: gradiente e piano tangente
- [[Prodotto scalare]]: ∇f·v e direzione di massima crescita

## Porta a
- [[Punti critici in più variabili]]: annullamento del gradiente
- [[Campo conservativo]]: campi gradiente
- [[Potenziale elettrostatico]]: E = -∇V

## Collegati
- [[Forza conservativa]]: la forza è meno il gradiente dell'energia potenziale
- [[Orientazione di una superficie]]: normale al grafico (-g_x, -g_y, 1)
