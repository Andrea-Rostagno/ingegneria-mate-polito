---
tipo: competenza
area: analisi
corsi: [Analisi 2]
livello: [triennale]
aliases: ["partial derivatives", "derivata parziale", "derivate parziali seconde", "derivate di ordine superiore"]
tags: [competenza, area/analisi]
---

# Derivate parziali

> La derivata di $f$ rispetto a una sola variabile, tenendo fisse le altre: limite del rapporto incrementale lungo un asse.

## Definizione / enunciato
Se $f(x,y)$ è definita in un intorno di $(x_0,y_0)$,
$$\frac{\partial f}{\partial x}(x_0,y_0)=f_x(x_0,y_0)=\lim_{h\to0}\frac{f(x_0+h,y_0)-f(x_0,y_0)}{h},\qquad \frac{\partial f}{\partial y}(x_0,y_0)=\lim_{h\to0}\frac{f(x_0,y_0+h)-f(x_0,y_0)}{h},$$
quando i limiti esistono finiti. Ogni derivata parziale è a sua volta una funzione di $n$ variabili, con dominio contenuto in $\mathrm{dom}(f)$; derivandola ancora si ottengono le derivate di ordine superiore: a priori $n^k$ derivate di ordine $k$ ($f_{xx},f_{xy},f_{yx},f_{yy},\dots$).

## Formule chiave
Esempio $f=x^2e^{2y+3x}$: $f_x=(2x+3x^2)e^{2y+3x}$, $f_y=2x^2e^{2y+3x}$, $f_{xx}=(2+12x+9x^2)e^{2y+3x}$, $f_{xy}=f_{yx}=(4x+6x^2)e^{2y+3x}$, $f_{yy}=4x^2e^{2y+3x}$.

## Intuizione
Si fa Analisi I su una variabile alla volta. Ma la sola esistenza delle derivate parziali in un punto non garantisce né il piano tangente né la continuità: $\frac{x^2y}{x^4+y^2}$ (estesa con $0$) ha entrambe le derivate parziali in $(0,0)$ pur essendo discontinua.

## Come si usa
Nei punti "critici" del dominio si torna al rapporto incrementale:
- $f=\sqrt x\,e^{x+2y^2}$: $f_y$ esiste su tutto il dominio $\{x\ge0\}$, mentre in $(0,y_0)$ il rapporto incrementale in $x$ tende a $+\infty$, quindi $\mathrm{dom}(f_x)=\{x>0\}$.
- $f=\sqrt{|xy|}$: sull'asse $x$ si ha $f_x(x_0,0)=0$, ma $f_y(x_0,0)$ non esiste se $x_0\ne0$.

## Nei corsi
- **Analisi 2** (triennale): definizione a fine lezione del 03/10/2022, esempi il 05/10, derivate di ordine superiore il 10/10. Fonti: `triennale/ANNO 2/analisi 2/AII 02 2022 continuita e derivate parziali.pdf` (pp. 10-11); `triennale/ANNO 2/analisi 2/AII 03 2033 differenziabilita.pdf` (pp. 1-3, 11-12); `triennale/ANNO 2/analisi 2/AII 04 2022 differenziabilita e derivate successive.pdf` (pp. 11-13).

## Prerequisiti
- [[Limiti e continuità in più variabili]]: limite del rapporto incrementale
- [[Derivata]]: derivata in una variabile, le altre fissate

## Porta a
- [[Differenziabilità in più variabili]]: esistenza delle derivate parziali
- [[Teorema di Schwarz]]: derivate di ordine superiore
- [[Matrice jacobiana]]: matrice delle derivate parziali
- [[Rotore]]: componenti del rotore
- [[Superficie parametrica]]: derivate parziali della parametrizzazione
- [[Equazione delle onde]]: equazione alle derivate parziali in x e t

## Collegati
- [[Derivata direzionale]]: le derivate parziali sono direzionali lungo gli assi
- [[Propagazione degli errori]]: le derivate parziali pesano gli errori delle misure
- [[Equazione di Schrödinger]]: equazione alle derivate parziali seconde in x, y, z
