---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["Faraday's law", "legge dell'induzione elettromagnetica", "electromagnetic induction", "forza elettromotrice indotta", "legge di Lenz", "Lenz's law", "rot E = -∂B/∂t"]
tags: [competenza, area/fisica]
---

# Legge di Faraday-Henry

> Un campo magnetico variabile nel tempo induce un campo elettrico la cui circuitazione su una curva chiusa è l'opposto della derivata del flusso di $\vec B$: è la terza equazione di Maxwell.

## Definizione / enunciato
Sperimentalmente, in un circuito chiuso posto in un campo magnetico variabile nel tempo (magnete in moto, o circuito vicino con corrente variabile) si induce una f.e.m. uguale alla derivata rispetto al tempo del flusso magnetico attraverso una qualsiasi superficie che ha il circuito come contorno, col segno cambiato. Poiché la f.e.m. è il lavoro per spostare una carica unitaria lungo il percorso, $f.e.m.=\oint_L\vec E\cdot d\vec l$, la legge vale anche se $L$ è una curva ideale e non un conduttore.
**Legge di Lenz:** la corrente indotta in una spira chiusa ha verso tale da opporsi alla variazione che l'ha generata.

## Formule chiave
$$f.e.m.\ indotta=V_{ind}=-\frac{d}{dt}\Phi_{magn},\qquad i_{ind}=-\frac{1}{R}\frac{d}{dt}\Phi_{magn}$$
$$\oint_L\vec E\cdot d\vec l=-\frac{d}{dt}\left[\int_S\vec B\cdot d\vec S\right],\qquad \vec\nabla\times\vec E=-\frac{\partial\vec B}{\partial t}$$
La forma differenziale si ottiene applicando la legge integrale alle facce di un parallelepipedo infinitesimo $dx\,dy\,dz$ (o con il teorema di Stokes).

## Intuizione
Con campi variabili la circuitazione di $\vec E$ non è più nulla: il campo elettrico indotto non è conservativo e non deriva da un potenziale scalare. Il segno meno (Lenz) è la conservazione dell'energia: la corrente indotta crea un campo che contrasta la variazione di flusso.

## Come si usa
Applicazione (`23&24. LEZIONE.pdf` p. 10): spira conduttrice di raggio $L$ e resistenza $R$ in un campo $B(t)=a\,t$; trovare la corrente. La slide dà solo il testo. Conto mio, con $\vec B$ uniforme e perpendicolare alla spira: $\Phi=a\,t\,\pi L^2$, quindi $|V_{ind}|=a\pi L^2$ e $|i_{ind}|=a\pi L^2/R$, con verso che si oppone all'aumento di $B$. Attenzione: qui $L$ è il raggio, non l'induttanza.

## Nei corsi
- **Fisica 2** (triennale): enunciato sperimentale, legge di Lenz, forma integrale e differenziale. Refuso a p. 14: nella componente $\vec k$ del rotore compare $\partial E_x/\partial z$ invece di $\partial E_x/\partial y$. Fonti: `triennale/ANNO 2/fisica 2/lezioni/23&24. LEZIONE.pdf` (pp. 3-14); `triennale/ANNO 2/fisica 2/lezioni/29&30. LEZIONE.pdf` (p. 19).

## Prerequisiti
- [[Legge di Gauss per il campo magnetico]]: la fem dipende dalla variazione del flusso di B
- [[Teorema di Stokes]]: dalla forma integrale a quella differenziale

## Porta a
- [[Autoinduzione]]: la fem autoindotta è -L di/dt
- [[Equazioni di Maxwell]]: terza equazione
- [[Esperimento di Hertz]]: la spira rivela B tramite la corrente indotta

## Collegati
- [[Potenziale elettrostatico]]: con B variabile la circuitazione di E non è più nulla
- [[Legge di Ampère-Maxwell]]: simmetria tra le due leggi in assenza di correnti
