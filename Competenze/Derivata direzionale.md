---
tipo: competenza
area: analisi
corsi: [Analisi 2]
livello: [triennale]
aliases: ["directional derivative", "derivate direzionali", "pendenza lungo una direzione", "∂f/∂v"]
tags: [competenza, area/analisi]
---

# Derivata direzionale

> La pendenza del grafico di $f$ quando da $P_0$ ci si muove nella direzione del versore $v$.

## Definizione / enunciato
Scelto $v\in\mathbb R^2$ con $\|v\|=1$ e $P_0$ interno al dominio, la derivata direzionale di $f$ in $P_0$ lungo $v$ è (quando esiste finito)
$$\frac{\partial f}{\partial v}(P_0)=\lim_{h\to0}\frac{f(P_0+h\,v)-f(P_0)}{h}.$$
Le derivate parziali sono i casi $v=(1,0)$ e $v=(0,1)$.

## Formule chiave
Se $f$ è differenziabile in $P_0$: $\dfrac{\partial f}{\partial v}(P_0)=\nabla f(P_0)\cdot v=\|\nabla f(P_0)\|\cos\theta$, con $\theta$ angolo tra $v$ e il gradiente.

## Intuizione
Il rapporto incrementale è il coefficiente angolare della retta per $(P_0,f(P_0))$ e $(P_0+hv,f(P_0+hv))$, entrambi sul grafico, nel piano verticale che contiene $P_0$ e $P_0+v$. Immagine del docente: un paesaggio montano su una cartina; $\frac{\partial f}{\partial v}(P_0)$ è la pendenza che si sente partendo da $P_0$ e muovendosi di poco nella direzione $v$ sulla cartina.

## Come si usa
Si calcola col limite quando la differenziabilità non è garantita, altrimenti con il prodotto scalare. L'esistenza di tutte le derivate direzionali non basta per la differenziabilità: per $\frac{x^2y}{x^4+y^2}$ (estesa con $0$) esistono in $(0,0)$ lungo ogni direzione, ma la funzione è discontinua (esercizio della lezione).

## Nei corsi
- **Analisi 2** (triennale): lezione del 05/10/2022. Fonti: `triennale/ANNO 2/analisi 2/AII 03 2033 differenziabilita.pdf` (pp. 4-6, 11-12); `triennale/ANNO 2/analisi 2/AII 04 2022 differenziabilita e derivate successive.pdf` (pp. 3-7, formula col gradiente).

## Prerequisiti
- [[Limiti e continuità in più variabili]]: limite del rapporto incrementale lungo v

## Porta a
- [[Gradiente]]: calcolo delle derivate direzionali

## Collegati
- [[Derivate parziali]]: le derivate parziali sono direzionali lungo gli assi
