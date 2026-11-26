---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["circle in space", "circonferenza in E3", "intersezione sfera-piano", "centro e raggio di una circonferenza nello spazio", "cerchio massimo"]
tags: [competenza, area/algebra-geometria]
---

# Circonferenza nello spazio

> In $E_3$ una circonferenza si descrive come intersezione di una sfera con un piano a distanza dal centro minore del raggio. Il centro è la proiezione del centro della sfera sul piano, e il raggio si trova con Pitagora.

## Definizione / enunciato
$$\gamma:\ \begin{cases}x^2+y^2+z^2+2ax+2by+2cz-d=0\\ \alpha x+\beta y+\gamma z+\delta=0\end{cases}$$
Sfera $\sigma$ (centro $C_\sigma$, raggio $r_\sigma$) e piano $\Pi$ si intersecano in una circonferenza se e solo se $\mathrm{dist}(C_\sigma,\Pi)<r_\sigma$.

**Centro:** $C_\gamma$ è l'intersezione di $\Pi$ con la retta per $C_\sigma$ perpendicolare a $\Pi$ (direzione = normale di $\Pi$).
**Raggio:** dal teorema di Pitagora.
Se $\Pi$ passa per $C_\sigma$ si ottiene un **cerchio massimo** ($r_\gamma=r_\sigma$).

## Formule chiave
$$r_\gamma=\sqrt{r_\sigma^2-\mathrm{dist}(C_\sigma,C_\gamma)^2}=\sqrt{r_\sigma^2-\mathrm{dist}(C_\sigma,\Pi)^2}$$

## Intuizione
Il segmento dal centro della sfera al centro della circonferenza è perpendicolare al piano. Con un raggio della circonferenza forma un triangolo rettangolo la cui ipotenusa è il raggio della sfera.

## Come si usa
Esempio (p. 52 di `14. Analytic Geometry II v3.2.0.pdf`, tema 13 settembre 2011): $S:x^2+y^2+z^2-4x-2y+4z=0$, $\Pi:x+y-z-1=0$.
- $S$ ha $C_S=(2,1,-2)$ e $r_S=3$.
- Retta perpendicolare per $C_S$: $(2+t,\ 1+t,\ -2-t)$. Interseca $\Pi$ per $t=-4/3$, quindi $C_\gamma=(2/3,-1/3,-2/3)$.
- $r_\gamma=\sqrt{9-16/3}=\sqrt{11/3}$. Il testo estratto riporta "11/3" senza radice; il valore è ricalcolato qui con Pitagora dai dati della slide.

Altri esercizi:
- Cerchio massimo nel fascio di piani paralleli $x+y-z+h=0$: si impone il passaggio per $C_S$ (p. 53).
- $\{x^2+y^2+z^2-4z=0,\ z=1\}$: $C=(0,0,1)$ e raggio $\sqrt{4-1}$ (p. 53).

## Nei corsi
- **Algebra lineare** (triennale): chiusura della geometria analitica parte II (slide di S. Mercadante). Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/14. Analytic Geometry II v3.2.0.pdf` (p. 50-53); esercizi `Esercizi ed esercitazioni/Es14 - sfere circonferenze_ris.pdf`.

## Prerequisiti
- [[Sfera]]: intersezione di una sfera con un piano

## Porta a
- Nessuno.

## Collegati
- [[Distanze tra punti, rette e piani]]: si confronta dist(C, Π) con il raggio
- [[Equazioni della retta]]: retta per il centro perpendicolare al piano
- [[Coni, cilindri e superfici di rotazione]]: nella rotazione ogni punto descrive una circonferenza
