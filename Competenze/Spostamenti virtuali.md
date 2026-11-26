---
tipo: competenza
area: fisica
corsi: [Meccanica]
livello: [triennale]
aliases: ["virtual displacements", "spostamento virtuale", "velocità virtuali", "virtual velocities", "spostamento reversibile", "spostamento irreversibile", "reversible virtual displacement"]
tags: [competenza, area/fisica]
---

# Spostamenti virtuali

> Spostamenti infinitesimi compatibili con i vincoli "congelati" all'istante $t$: sono possibili, non necessariamente realizzati dal moto.

## Definizione / enunciato
Con coordinate generalizzate $q_1,\dots,q_n$ (dove $n$ sono i gradi di libertà) la velocità virtuale e lo spostamento virtuale di $P$ sono
$$\vec v_P'=\sum_{k=1}^n\frac{\partial P}{\partial q_k}\frac{\delta q_k}{\delta t}\quad(3.7),\qquad \delta P=\sum_{k=1}^n\frac{\partial P}{\partial q_k}\delta q_k\quad(3.8).$$
Manca il termine $\partial P/\partial t$, presente invece nello spostamento reale. Uno spostamento virtuale è **reversibile** se anche $-\delta P$ lo è (Def. 6.2); se tutti lo sono il vincolo è bilatero.

## Formule chiave
Per un corpo rigido (3.17-3.20):
$$\vec v_P'=\vec v_Q'+\vec\omega'\wedge(P-Q),\qquad \delta P=\delta Q+\vec\varepsilon'\wedge(P-Q),$$
con $\vec v_Q',\vec\omega'$ arbitrari; se $C$ è fisso, $\vec v_P'=\vec\omega'\wedge(P-C)$.

## Intuizione
Con un vincolo mobile lo spostamento reale non è virtuale. Esempio (Ex3): punto su un'asta che ruota con $\hat u(t)=(\cos\alpha t,\sin\alpha t)$. La velocità reale $\vec v_P=\dot s[\cos\alpha t\,\hat\imath_1+\sin\alpha t\,\hat\imath_2]+s\alpha[\cos\alpha t\,\hat\imath_2-\sin\alpha t\,\hat\imath_1]$ (3.12) ha una componente normale all'asta; lo spostamento virtuale $\delta P=\frac{\partial P}{\partial s}\delta s$ (3.14) è invece parallelo all'asta.

## Come si usa
Con vincoli unilateri gli spostamenti virtuali sul bordo sono irreversibili, per esempio $\delta\vartheta\ge0$ in $\vartheta=0$. Ex6: un'asta con un estremo incernierato in $O$ e l'altro su una guida verticale ammette una rotazione virtuale ($\vec v_P'=\vec\omega'\wedge(A-O)$) solo nella configurazione della figura, perché l'allungamento sarebbe un infinitesimo del secondo ordine.

## Nei corsi
- **Meccanica** (triennale): $\delta q_k$ indica la variazione virtuale, $dq_k$ quella reale. Fonti: `triennale/ANNO 2/Meccanica/Lect2-Constraints.pdf` (pp. 28-32, eqq. 3.6-3.20; numerazione stampata); `triennale/ANNO 2/Meccanica/Lect5-Statics.pdf` (p. 57, Def. 6.2).

## Prerequisiti
- [[Classificazione dei vincoli]]: dipendono dal tipo di vincolo
- [[Coordinate generalizzate]]: δP = Σ ∂P/∂q_k δq_k
- [[Formula fondamentale della cinematica rigida]]: la rigidità vincola le velocità virtuali

## Porta a
- [[Principio dei lavori virtuali]]: lavoro delle forze sugli spostamenti virtuali
- [[Componenti lagrangiane delle forze]]: δL = Σ Q_k δq_k
- [[Principio di d'Alembert]]: si annulla il lavoro virtuale delle forze perdute

## Collegati
- Nessuno.
