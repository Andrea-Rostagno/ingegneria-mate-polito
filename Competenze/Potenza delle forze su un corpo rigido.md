---
tipo: competenza
area: fisica
corsi: [Meccanica]
livello: [triennale]
aliases: ["power of forces on a rigid body", "lavoro elementare su un corpo rigido", "potenza di un sistema di forze", "potenza delle forze interne", "potenza delle reazioni vincolari"]
tags: [competenza, area/fisica]
---

# Potenza delle forze su un corpo rigido

> Su un corpo rigido il lavoro elementare e la potenza di un sistema di forze dipendono solo dalla risultante e dal momento risultante.

## Definizione / enunciato
Per un corpo rigido $d(P_i-O)=d(Q-O)+\vec\varepsilon\wedge(P_i-Q)$ con $\vec\varepsilon=\vec\omega\,dt$ (5.34). Sommando i lavori elementari $\vec F_i\cdot d(P_i-O)$:
$$dL=\vec R\cdot d(Q-O)+\vec M_Q\cdot\vec\varepsilon\qquad(5.36)$$
$$\Pi=\vec R\cdot\vec v_Q+\vec M_Q\cdot\vec\omega\qquad(5.37)$$

## Formule chiave
- **Forze interne:** $dL=\frac12\sum_i\sum_{j\ne i}\varphi_{ij}\,d|P_i-P_j|$; in un sistema rigido $d|P_i-P_j|=0$, quindi il lavoro interno è nullo (Lect4 p. 54). Il manoscritto dà una formula analoga per la potenza delle forze interne, $\Pi^{(i)}$ proporzionale a $\frac{d}{dt}|P_j-P_i|^2$ e quindi nulla nel moto rigido (pagina letta solo a bassa risoluzione: coefficienti da verificare sul PDF).
- **Reazioni:** la potenza di un vincolo ideale, bilatero e fisso è nulla (Thm 7.7); per un corpo rigido con vincoli ideali, bilateri e fissi il teorema dell'energia cinetica diventa $\dot T=\Pi^{(a,e)}$, potenza delle sole forze attive esterne (manoscritto, da verificare sul PDF).
- **Forze conservative:** $\Pi_U=\dot U$ (Thm 7.8).

## Intuizione
Dato che i punti si muovono con l'atto di moto rigido ($\vec v_Q,\vec\omega$), ogni sistema di forze "vede" solo i suoi due vettori caratteristici: per questo sistemi equivalenti compiono lo stesso lavoro.

## Come si usa
Si calcola la potenza di una coppia ($\vec M\cdot\vec\omega$, per esempio una molla torsionale) o del peso ($m\vec g\cdot\vec v_G$) senza sommare punto per punto. La stessa formula con spostamenti virtuali dà $\delta L=\vec R\cdot\delta\Omega+\vec M_\Omega\cdot\vec\varepsilon'$, usata per dimostrare che le equazioni cardinali bastano per l'equilibrio del rigido (Thm 6.3).

## Nei corsi
- **Meccanica** (triennale): fonti `triennale/ANNO 2/Meccanica/Lect4-MechanicsLaws.pdf` (pp. 51, 54, eqq. 5.34-5.37; numerazione stampata); `triennale/ANNO 2/Meccanica/Lect6-Dynamics.pdf` (p. 73, Thm 7.6-7.8); `triennale/ANNO 2/Meccanica/Lez11-PotenzaEqLagrangeLagrangiana.pdf` (pp. 1-2, stesse pagine del manoscritto 2017).

## Prerequisiti
- [[Sistemi di vettori applicati]]: risultante e momento risultante
- [[Formula fondamentale della cinematica rigida]]: dP = dQ + ε∧(P−Q)
- [[Lavoro di una forza]]: lavoro elementare di una forza

## Porta a
- [[Teorema dell'energia cinetica]]: T' = Π per il corpo rigido

## Collegati
- [[Principio dei lavori virtuali]]: stessa formula con spostamenti virtuali
