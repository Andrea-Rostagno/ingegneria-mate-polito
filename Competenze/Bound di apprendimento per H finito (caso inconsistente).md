---
tipo: competenza
area: data-ml
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["learning bound finite H inconsistent case", "caso inconsistente", "bound di convergenza uniforme", "uniform convergence bound", "rasoio di Occam", "Occam's razor"]
tags: [competenza, area/data-ml]
---

# Bound di apprendimento per H finito (caso inconsistente)

> Per un insieme di ipotesi finito, con alta probabilità l'errore vero di **ogni** ipotesi supera quello empirico al più di $\sqrt{(\log|H|+\log\frac2\delta)/(2m)}$.

## Definizione / enunciato
Caso tipico in pratica: problemi difficili, nessuna $h\in H$ è consistente con il campione, ma ipotesi con pochi errori di addestramento possono essere utili.

**Teorema.** Sia $H$ finito. Per ogni $\delta>0$, con probabilità almeno $1-\delta$,
$$\forall h\in H,\qquad R(h)\le\hat R_S(h)+\sqrt{\frac{\log|H|+\log\frac2\delta}{2m}} .$$

## Formule chiave
**Dimostrazione** (union bound + Hoeffding):
$$\Pr\Big[\max_{h\in H}|R(h)-\hat R_S(h)|>\epsilon\Big]\le\sum_{h\in H}\Pr\big[|R(h)-\hat R_S(h)|>\epsilon\big]\le2|H|\exp(-2m\epsilon^2).$$
In forma asintotica: $R(h)\le\hat R_S(h)+O\Big(\sqrt{\frac{\log|H|}{m}}\Big)$, un tasso $O(1/\sqrt m)$, quadraticamente peggiore del caso consistente.

## Intuizione
Hoeffding non si può applicare a $h_S$ perché dipende da $S$ (e $\mathbb E[\hat R(h_S)]$ non è $R(h_S)$): serve un bound **uniforme**, valido simultaneamente per tutte le ipotesi. Il prezzo è il fattore $|H|$ dentro il logaritmo.

## Come si usa
Lettura come **rasoio di Occam** ("plurality should not be posited without necessity"): a parità di errore empirico conviene l'insieme di ipotesi più piccolo, cioè la spiegazione più parsimoniosa; la complessità di Kolmogorov ne è l'analogo in teoria dell'informazione. Il bound mostra il compromesso fra ridurre $\hat R_S$ (H grande) e tenere piccolo $\log|H|$, che diventa la scomposizione stima-approssimazione.

## Nei corsi
- **Matematica per l'AI** (triennale): Fonti: `triennale/ANNO 3/matematica AI/MIA_01W.pdf` (p. 58-64); `FML.pdf` §2.3.

## Prerequisiti
- [[Disuguaglianza di Hoeffding]]: stima per ogni ipotesi fissata
- [[Bound di apprendimento per H finito (caso consistente)]]: stesso schema con union bound

## Porta a
- [[Complessità di Rademacher]]: sostituisce $\log|H|$ per insiemi infiniti
- [[Errore di stima ed errore di approssimazione]]: il compromesso fra $\hat R_S$ e complessità
- [[Apprendimento PAC agnostico]]: garanzia nel caso non realizzabile

## Collegati
- [[Overfitting e pruning]]: un $H$ troppo ricco riduce $\hat R_S$ ma peggiora il bound
