---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["points of non-differentiability", "punto angoloso", "cuspide", "flesso a tangente verticale", "derivata destra", "derivata sinistra"]
tags: [competenza, area/analisi]
---

# Punti di non derivabilità

> Punti in cui la funzione è continua ma non derivabile: angolosi (derivate laterali diverse), cuspidi (laterali infinite di segno opposto) e flessi a tangente verticale.

## Definizione / enunciato
**Derivate laterali** (Mazzi, def. 1.4): $f'_+(x_0)=\lim_{x\to x_0^+}\frac{f(x)-f(x_0)}{x-x_0}$ e $f'_-(x_0)$ analoga, se finite. Se esistono e coincidono, $f$ è derivabile e $f'(x_0)=f'_\pm(x_0)$ (prop. 1.3).

$x_0$ interno al dominio è un **punto di non derivabilità** se $f$ è continua ma non derivabile in $x_0$ (def. 1.5). Classificazione (def. 1.6):
1. **punto angoloso**: esistono $f'_+(x_0)\ne f'_-(x_0)$ (anche se uno solo dei due limiti laterali è infinito);
2. **punto a tangente verticale** (flesso a tangente verticale): $\lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0}=\pm\infty$; la tangente è la retta $x=x_0$;
3. **cuspide**: i limiti destro e sinistro del rapporto incrementale sono infiniti di segno opposto.

## Formule chiave
$$|x|:\ f'_\pm(0)=\pm1;\qquad \sqrt[3]x:\ \lim_{x\to0}\frac{\sqrt[3]x}{x}=+\infty;\qquad \sqrt[3]{x^2}:\ \lim_{x\to0^\pm}\frac1{\sqrt[3]x}=\pm\infty$$

## Intuizione
Angoloso: due tangenti diverse; cuspide: le due tangenti coincidono ma il grafico arriva "a punta"; tangente verticale: la funzione sale con pendenza infinita senza invertire il verso.

## Come si usa
Esempi di Mazzi (es. 1.3): $|x|$ ha un punto angoloso in $0$, $\sqrt[3]x$ un punto a tangente verticale, $\sqrt[3]{x^2}$ una cuspide. La classificazione non è completa: $x\sin\frac1x$ (con $f(0)=0$) è continua in $0$ ma il rapporto incrementale $\sin\frac1x$ non ha limiti laterali (Mazzi, (1.3); lezione del 10/11/2021). Il teorema del limite della derivata permette di classificare senza calcolare il rapporto incrementale.

## Nei corsi
- **Analisi 1** (triennale): "derivate laterali, classificazione punti di non derivabilità". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/calcolo differenziale corretto.pdf` (§1.2, def. 1.4-1.6, prop. 1.3, es. 1.3, pp. 6-8); `triennale/ANNO 1/analisi 1/Lezioni 2021-22 (manoscritte)/Lezione 2021-11-10.pdf` (p. 1).

## Prerequisiti
- [[Derivata]]: fallisce il limite del rapporto
- [[Limite di funzione]]: derivate laterali

## Porta a
- [[Teorema del limite della derivata]]: classifica i casi infiniti
- [[Studio di funzione]]: punti angolosi e cuspidi

## Collegati
- [[Valore assoluto]]: |x| ha un punto angoloso
- [[Hölderianità delle traiettorie browniane]]: traiettorie continue mai derivabili
