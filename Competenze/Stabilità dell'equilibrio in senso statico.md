---
tipo: competenza
area: fisica
corsi: [Meccanica]
livello: [triennale]
aliases: ["static stability of equilibrium", "stabilità in senso statico", "equilibrio stabile", "massimo isolato del potenziale", "minimo dell'energia potenziale", "criterio dell'hessiana del potenziale"]
tags: [competenza, area/fisica]
---

# Stabilità dell'equilibrio in senso statico

> Un equilibrio è stabile in senso statico se il lavoro effettivo delle forze attive per allontanare il sistema è sempre negativo; per forze conservative questo equivale a un massimo isolato del potenziale.

## Definizione / enunciato
**Def. 6.4:** l'equilibrio $q^*$ è stabile in senso statico se esiste $\varepsilon>0$ tale che per ogni $\tilde q\in I(q^*,\varepsilon)\setminus\{q^*\}$ il lavoro effettivo (finito, non virtuale) per portare il sistema da $q^*$ a $\tilde q$ è negativo:
$$\Delta L^{(a)}_{q^*\to\tilde q}<0\qquad(6.10).$$
**Prop. 6.2:** per un sistema olonomo conservativo, $q^*$ è staticamente stabile se e solo se $U(q^*)$ è un **massimo relativo isolato**, cioè se l'energia potenziale $V=-U$ ha un minimo relativo isolato. Vale anche per le configurazioni di confine.

## Formule chiave
Nel manoscritto: se $dL^{(a)}=\sum_k\frac{\partial U}{\partial q_k}dq_k$ è esatto,
$$0>\int_{q^*}^{q}dL^{(a)}=\int_{t^*}^{t}\frac{d}{dt'}U(q(t'))\,dt'=U(q)-U(q^*),$$
cioè $U(q)<U(q^*)$ in un intorno bucato. Se $U\in C^2$ e $q^*$ è interna, si studia la **matrice hessiana** $H=(\partial^2_{q_iq_j}U)$ in $q^*$: definita negativa significa stabile.

## Intuizione
Lavoro negativo significa che le forze si oppongono allo spostamento e riportano il sistema in $q^*$. Esempio delle figure: una pallina sul fondo di una coppa (stabile) e sulla cima di una collina (instabile).

## Come si usa
**Lect7, Ex5:** $U(\vartheta,\varphi)=mgl\cos\vartheta+mgl(2\cos\vartheta+\cos\varphi)$, hessiana diagonale $\mathrm{diag}(-3mgl\cos\vartheta,-mgl\cos\varphi)$, definita negativa solo in $(0,0)$: è l'unico equilibrio stabile. **Lect5, Ex2:** $\vartheta=0$ è stabile perché per $\delta\vartheta>0$ il lavoro è negativo.

## Nei corsi
- **Meccanica** (triennale): convenzione $U$ = potenziale, quindi la stabilità corrisponde a un massimo di $U$ (in Fisica 1 si ragiona con il minimo dell'energia potenziale). Fonti: `triennale/ANNO 2/Meccanica/Lect5-Statics.pdf` (p. 59, Def. 6.4, Prop. 6.2; numerazione stampata); `triennale/ANNO 2/Meccanica/MeccRazLezioni.pdf` ("Stabilità (in senso statico) delle configurazioni di equilibrio", pp. 135-138).

## Prerequisiti
- [[Teorema di stazionarietà del potenziale]]: si studia la natura del punto stazionario

## Porta a
- [[Teorema di Lagrange-Dirichlet]]: il massimo isolato dà anche stabilità dinamica

## Collegati
- [[Classificazione dei punti critici]]: test dell'hessiana di U
- [[Stabilità secondo Lyapunov]]: nozione dinamica, contro quella statica
