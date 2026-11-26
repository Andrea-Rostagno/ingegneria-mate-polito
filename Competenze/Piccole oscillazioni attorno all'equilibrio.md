---
tipo: competenza
area: fisica
corsi: [Meccanica]
livello: [triennale]
aliases: ["small oscillations about equilibrium", "piccoli moti", "linearizzazione delle equazioni di Lagrange", "linearized equations of motion", "pulsazione propria", "matrice di rigidezza", "stiffness matrix"]
tags: [competenza, area/fisica]
---

# Piccole oscillazioni attorno all'equilibrio

> Vicino a un equilibrio stabile si sviluppano $T$ e $U$ al secondo ordine: le equazioni di Lagrange diventano lineari e il moto è un'oscillazione armonica.

## Definizione / enunciato
Si pone $q(t)=q^0+\varepsilon\eta(t)$ con $\varepsilon$ piccolo e $\eta$ limitata (8.27). **Un grado di libertà**, $T=\frac12a(q)\dot q^2$, $L=\frac12a(q)\dot q^2+U(q)$: l'equazione esatta è $a(q)\ddot q+\frac12a'(q)\dot q^2-U'(q)=0$. Al primo ordine in $\varepsilon$, dato che $U'(q^0)=0$:
$$a(q^0)\ddot\eta=U''(q^0)\,\eta\qquad(8.32).$$

## Formule chiave
Con $a(q^0)>0$ e $U''(q^0)<0$ (equilibrio stabile):
$$\omega=\sqrt{-\frac{U''(q^0)}{a(q^0)}},\qquad\eta(t)=\eta(0)\cos\omega t+\frac1\omega\dot\eta(0)\sin\omega t\qquad(8.33).$$
**Più gradi di libertà:** $L(\eta,\dot\eta)=\frac{\varepsilon^2}2\dot\eta^TA(q^0)\dot\eta+\frac{\varepsilon^2}2\eta^TB\eta+o(\varepsilon^2)$ (8.38), con $B$ hessiana di $U$ in $q^0$; le equazioni sono $A^0\ddot\eta=B^0\eta$ (8.40).
Nel manoscritto: $\ddot\eta+K(q^*)\eta=0$ con **matrice di rigidezza** $K=-A^{-1}(q^*)H(q^*)$, definita positiva se $q^*$ è stabile.

## Intuizione
Il termine $\frac12a'\dot q^2$ è di ordine $\varepsilon^2$ e sparisce: della matrice di massa conta solo il valore all'equilibrio, del potenziale solo la curvatura. È lo stesso schema del pendolo con $\sin\vartheta\approx\vartheta$.

## Come si usa
**Pendolo fisico** (manoscritto): $T=\frac12I_z\dot\Theta^2$, $U=mgh\cos\Theta$, $U''(0)=-mgh$, quindi $I_z\ddot\eta=-mgh\,\eta$ e $\omega=\sqrt{mgh/I_z}$, cioè $\nu=\frac1{2\pi}\sqrt{mgh/I_z}$. Lo stesso risultato si ottiene linearizzando direttamente $\ddot\Theta=-\frac{mgh}{I_z}\sin\Theta$.

## Nei corsi
- **Meccanica** (triennale): due notazioni. Nel testo inglese $\lambda^2$ e la condizione $\det(B^0-\lambda^2A^0)=0$; nel manoscritto frequenze $\nu$ con $(4\pi^2\nu^2A(q^*)+H(q^*))\eta_0=0$ e $\omega^2$ autovalori di $K$. Fonti: `triennale/ANNO 2/Meccanica/Lect7-Lagrangian (2).pdf` (pp. 86-88, eqq. 8.27-8.40; numerazione stampata); `triennale/ANNO 2/Meccanica/MeccRazLezioni.pdf` ("Piccoli moti", pp. 167-173, esempio del pendolo fisico).

## Prerequisiti
- [[Teorema di Lagrange-Dirichlet]]: si linearizza attorno a un equilibrio stabile
- [[Equazioni di Lagrange]]: si linearizzano
- [[Energia cinetica in coordinate lagrangiane]]: A(q⁰) matrice di massa
- [[Formula di Taylor in più variabili]]: sviluppo di U al secondo ordine con l'hessiana

## Porta a
- [[Modi normali di oscillazione]]: caso con più gradi di libertà

## Collegati
- [[Moto armonico semplice]]: soluzione con un grado di libertà
- [[Equazioni lineari del secondo ordine a coefficienti costanti]]: l'equazione linearizzata
- [[Pendolo composto]]: esempio svolto nel manoscritto
- [[Pendolo semplice]]: stessa approssimazione sin θ ≈ θ
