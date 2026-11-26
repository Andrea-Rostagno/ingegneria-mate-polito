---
tipo: competenza
area: fisica
corsi: [Quantum physics, Meccanica]
livello: [triennale]
aliases: ["Lagrange equations", "equazioni di Eulero-Lagrange della meccanica", "lagrangiana", "Lagrangian", "azione", "action", "principio di Hamilton", "Hamilton's principle", "principio di minima azione", "momenti generalizzati", "generalized momenta", "meccanica lagrangiana"]
tags: [competenza, area/fisica]
---

# Equazioni di Lagrange

> Equazioni del moto di un sistema scritte nelle coordinate generalizzate: seguono dal principio di Hamilton (azione stazionaria) e sono equivalenti alle leggi di Newton.

## Definizione / enunciato
**Lagrangiana:** $L(q_i,\dot q_i)=K(q_i,\dot q_i)-U(q_i)$.
**Azione** lungo un cammino $\gamma$ nello spazio delle configurazioni tra $t_1$ e $t_2$: $A[\gamma]=\int_{t_1}^{t_2}dt\,L(q_i,\dot q_i)$.
**Principio di Hamilton:** il moto reale rende stazionaria l'azione, $\delta A[\gamma]=0$.
**Teorema:** dal principio di Hamilton, usando la derivata funzionale, seguono le equazioni di Lagrange (valide anche per $L$ dipendente dal tempo).

## Formule chiave
$$\frac{d}{dt}\frac{\partial L}{\partial\dot q_i}-\frac{\partial L}{\partial q_i}=0,\qquad p_i:=\frac{\partial L}{\partial\dot q_i}\ \text{(momenti generalizzati)}$$
Se $L$ non dipende da $q_i$ (coordinata ciclica), $p_i$ è una costante del moto.

## Intuizione
Tra gli infiniti cammini che collegano due configurazioni, la natura sceglie quello con azione stazionaria. La formulazione è generale, completa (stesse informazioni di Newton), unificante e autonoma; e fornisce le costanti del moto come sottoprodotto.

## Come si usa
Si scelgono le coordinate generalizzate, si scrivono $K$ e $U$, si applica la formula. Esempi (`2022_QP.pdf` pp. 21-24):
- oscillatore: $L=\frac m2\dot x^2-\frac k2(x-\ell)^2\Rightarrow m\ddot x=-k(x-\ell)$;
- pendolo fisico: $L=\frac I2\dot\alpha^2+Mg\frac\ell2\cos\alpha\Rightarrow I\ddot\alpha+Mg\frac\ell2\sin\alpha=0$;
- pendolo sferico: $\varphi$ è ciclica, quindi $I\dot\varphi\sin^2\alpha=L_z$ è costante e il problema si riduce a un'equazione in $\alpha$;
- due corpi con gravità: $L=\frac M2\dot{\vec R}^2+\frac\mu2(\dot r^2+r^2\dot\varphi^2)+\frac{\gamma m_1m_2}{r}$; si ritrovano la conservazione di $\vec P$ e di $L_z=\mu r^2\dot\varphi$ (seconda legge di Keplero) e l'equazione radiale $\mu\ddot r-\frac{L_z^2}{\mu r^3}+\frac{\gamma m_1m_2}{r^2}=0$.

## Nei corsi
- **Quantum physics** (triennale): §2.3-2.4 della dispensa di V. Penna, come prima tappa verso la formulazione hamiltoniana e la quantizzazione canonica. Ripresa nell'appendice B (principio variazionale dipendente dal tempo) e nel §13 (lagrangiana di una carica in campo e.m.). Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 18-24, 152-153).
- **Meccanica** (triennale): derivate **dal principio di d'Alembert**, non da un principio variazionale. Per vincoli olonomi, ideali e bilateri le equazioni della dinamica equivalgono a $Q_k=\tau_k$ (Thm 8.1). Il "binomio di Lagrange" vale $\tau_k=\frac{d}{dt}\frac{\partial T}{\partial\dot q_k}-\frac{\partial T}{\partial q_k}$ (Thm 8.2), da cui la forma generale $\frac{d}{dt}\frac{\partial T}{\partial\dot q_k}-\frac{\partial T}{\partial q_k}=Q_k$ (8.10), valida per forze di qualsiasi natura. **Convenzione di segno diversa da Quantum physics:** $U$ è il *potenziale* ($Q_k=\partial U/\partial q_k$, energia potenziale $V=-U$), quindi $L=T+U$ (8.17) e $\frac{d}{dt}\frac{\partial L}{\partial\dot q_k}-\frac{\partial L}{\partial q_k}=Q_k^{(nc)}$ con forze non conservative. Thm 8.3: il problema di Cauchy per le equazioni di Lagrange ha soluzione unica se le $Q_k$ sono lipschitziane, perché $A\ddot q=F+Q$ con $A$ invertibile. Esempio svolto: carrucole con fune inestensibile, $L=(\frac34m+M+2\mu)\dot y_B^2+(m-2\mu)gy_B$, da cui $\ddot q=\frac{2(m-2\mu)g}{3m+4M+8\mu}$. Fonti: `triennale/ANNO 2/Meccanica/Lect7-Lagrangian (2).pdf` (pp. 79-84, numerazione stampata); `triennale/ANNO 2/Meccanica/MeccRazLezioni.pdf` ("Meccanica lagrangiana", da p. 151).

## Prerequisiti
- [[Derivata funzionale]]: $\delta A/\delta q_i=0$ dà le equazioni
- [[Coordinate generalizzate]]: la lagrangiana si scrive in $q_i,\dot q_i$
- [[Principio di d'Alembert]]: in Meccanica le equazioni si ricavano da qui
- [[Componenti lagrangiane delle forze]]: membro destro Q_k (Meccanica)
- [[Energia cinetica in coordinate lagrangiane]]: T = ½ q̇ᵀAq̇ + bᵀq̇ + C (Meccanica)

## Porta a
- [[Equazioni di Hamilton]]: si passa dalle velocità ai momenti generalizzati
- [[Hamiltoniana di una carica in campo elettromagnetico]]: lagrangiana con il termine $\frac qc\dot{\vec x}\cdot\vec A$
- [[Principio variazionale dipendente dal tempo]]: una lagrangiana efficace per i parametri dello stato
- [[Coordinate cicliche]]: ∂L/∂q_k = 0 dà un integrale primo (Meccanica)
- [[Integrale di Jacobi]]: H = Σ q̇_k ∂L/∂q̇_k − L si conserva (Meccanica)
- [[Piccole oscillazioni attorno all'equilibrio]]: si linearizzano le equazioni (Meccanica)

## Collegati
- [[Leggi di Newton]]: formulazione equivalente del moto
- [[Pendolo composto]]: esempio del pendolo fisico
- [[Teoremi di König]]: decomposizione dell'energia cinetica dei due corpi
- [[Conservazione del momento angolare]]: $L_z$ emerge come momento coniugato di una coordinata ciclica
- [[Teorema di esistenza e unicità locale]]: Thm 8.3 di Meccanica, unicità con Q_k lipschitziane
