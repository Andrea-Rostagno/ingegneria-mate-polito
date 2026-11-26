---
tipo: competenza
area: analisi
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["stable manifold", "unstable manifold", "varietà stabile", "varietà instabile", "teorema della varietà stabile", "stable manifold theorem", "punto fisso iperbolico", "hyperbolic fixed point", "punto omoclino", "homoclinic point", "punto eteroclino", "heteroclinic point"]
tags: [competenza, area/analisi]
---

# Varietà stabile e instabile

> Insiemi dei punti le cui traiettorie convergono a un dato punto nel futuro (stabile) o nel passato (instabile); vicino a un punto fisso iperbolico sono tangenti agli autospazi stabile e instabile del linearizzato.

## Definizione / enunciato
Dato $x_0\in M$:
$$W_s^{LOC}(x_0)=\{x\in M:\|\phi^tx-\phi^tx_0\|\to0\ \text{per}\ t\to\infty\},\qquad W_u^{LOC}(x_0)=\{x\in M:\|\phi^tx-\phi^tx_0\|\to0\ \text{per}\ t\to-\infty\}.$$
Versioni globali, invarianti per la dinamica: $W_s(x_0)=\bigcup_{t\le0}\phi^t(W_s^{LOC}(x_0))$, $W_u(x_0)=\bigcup_{t\ge0}\phi^t(W_u^{LOC}(x_0))$ (nella dispensa entrambe sono scritte con $t\le0$, da verificare sul PDF).

**Varietà stabile per un punto fisso.** Sia $\bar x$ un punto fisso **iperbolico** (esponenti di Lyapunov non nulli) di $\dot x=F(x)$. Esistono varietà locali $W_s^{LOC}(\bar x)$, $W_u^{LOC}(\bar x)$ della stessa dimensione degli autospazi $\epsilon^s,\epsilon^u$ del sistema linearizzato in $\bar x$ e ad essi tangenti, regolari quanto $F$.

## Formule chiave
Per esistenza e unicità delle soluzioni, due varietà stabili (o instabili) globali di **due punti fissi distinti** non si intersecano, e $W_s(\bar x)$ (o $W_u(\bar x)$) non interseca sé stessa. Possono invece intersecarsi stabili e instabili:
- **punto omoclino**: $P\in W_s(\bar x_1)\cap W_u(\bar x_1)$;
- **punto eteroclino**: $P\in W_s(\bar x_1)\cap W_u(\bar x_2)$.

## Intuizione
Vicino a una sella i punti sulla varietà stabile vengono "risucchiati", quelli sulla instabile "espulsi". Le intersezioni trasversali omocline si ripetono lungo l'orbita ($\varphi^lP$ è ancora omoclino) creando pieghe sempre più fitte ed estese: sono la fonte tipica del comportamento complicato.

## Come si usa
Si linearizza $F$ nel punto fisso (jacobiana), si trovano autovalori con parte reale negativa (direzioni stabili) e positiva (instabili); le varietà sono le versioni non lineari di questi sottospazi. Nei sistemi iperbolici le varietà stabili e instabili dei punti formano i lati delle celle delle partizioni di Markov.

## Nei corsi
- **Matematica per l'AI** (triennale): Fonti: `triennale/ANNO 3/matematica AI/IntroToDynamicalSystems (1).pdf` (p. 2-3, 6).

## Prerequisiti
- [[Flusso di un sistema dinamico]]: le definizioni usano $\phi^t$
- [[Matrice jacobiana]]: linearizzazione nel punto fisso
- [[Autovalori e autovettori]]: autospazi stabile e instabile

## Porta a
- [[Insieme iperbolico]]: decomposizione stabile/instabile su un intero insieme
- [[Teorema della varietà centrale]]: il caso con autovalori a parte reale nulla
- [[Partizione di Markov e dinamica simbolica]]: i lati delle celle sono pezzi di $W_s$ e $W_u$

## Collegati
- [[Esponente di Lyapunov]]: iperbolicità = esponenti non nulli
