---
tipo: competenza
area: analisi
corsi: [Equazioni di fisica matematica, Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["energy method", "metodo energetico", "unicità per l'equazione delle onde", "unicità per il calore con Neumann", "conservazione dell'energia per le onde", "stima dell'energia"]
tags: [competenza, area/analisi]
---

# Metodo dell'energia

> Per dimostrare l'unicità si studia la differenza $w$ di due soluzioni e un'energia integrale che si conserva (onde) o decresce (calore): partendo da zero, resta zero.

## Definizione / enunciato
**Onde (L25 pp. 4-8).** Il problema $\partial_t^2u-c^2\Delta u=0$ in $Q=\Omega\times(0,+\infty)$, $u=u_0$, $\partial_tu=u_1$ a $t=0$, $u=g$ su $\partial\Omega$ ammette al più una soluzione $u\in C^2(Q)$.
**Calore (L30).** Il problema $\partial_tu-D\Delta u=0$, $u=u_0$ a $t=0$, $\partial u/\partial n=h$ su $\partial\Omega$ ammette al più una soluzione $u\in C^1(0,+\infty;C^2(\Omega))$ (cioè $C^2$ in $x$ a $t$ fissato e $C^1$ in $t$).

## Formule chiave
Si pone $w=u-\tilde u$, che risolve il problema con dati nulli.
- Onde: si moltiplica per $\partial_tw$ e si integra; con $\partial_t^2w\,\partial_tw=\frac12\partial_t(\partial_tw)^2$ e il teorema di Gauss ($w=0$ sul bordo ⇒ $\partial_tw=0$ lì):
$$\frac{d}{dt}E(t)=0,\qquad E(t)=\int_\Omega\big[(\partial_tw)^2+c^2|\nabla w|^2\big]dx .$$
$E(t)=E(0)=0$, quindi $\partial_tw=0$ e $\nabla w=0$: $w$ è costante, e dato che $w(x,0)=0$ si ha $w\equiv0$.
- Calore: si moltiplica per $w$ e si integra; con $\partial w/\partial n=0$:
$$\frac{d}{dt}\int_\Omega w^2\,dx=-2D\int_\Omega|\nabla w|^2dx\le0 ,$$
quindi $\int_\Omega w^2(x,t)\,dx\le\int_\Omega w^2(x,0)\,dx=0$ e $w=0$ q.o.

## Intuizione
L'energia (cinetica più elastica) di un'onda senza forzanti né flussi al bordo si conserva; il calore invece dissipa la "norma $L^2$". Entrambe le quantità sono nulle all'inizio per la differenza di due soluzioni.

## Come si usa
Lo schema è sempre: differenza di due soluzioni → moltiplicare per $\partial_tw$ (onde) o $w$ (calore) → integrare per parti con Gauss usando la condizione al bordo → segno della derivata dell'energia. Per le onde vale anche con Neumann $\partial u/\partial n=h$ (verifica lasciata per esercizio in L25 p. 8).

## Nei corsi
- **Equazioni di fisica matematica** (triennale): fonti `triennale/ANNO 3/eq fisica matematica/25 - Lezione 06_12_23.pdf` (pp. 4-8); `triennale/ANNO 3/eq fisica matematica/30 - Lezione 20_12_23.pdf` (pp. 1-3).
- **Equazioni alle derivate parziali** (triennale): Prop. 6.4.3, seconda dimostrazione ("metodo energetico") dell'unicità per il problema di Dirichlet del calore $\partial_tu-\Delta_xu=f$ in $\Omega_T$, $u=g$ su $\Gamma_T$: con $w=u-\tilde u$ ed $e(t)=\frac12\int_\Omega|w(x,t)|^2dx$ si ha $\dot e(t)=\int_\Omega w\,\Delta_xw\,dx=-\int_\Omega|\nabla w|^2dx\le0$, quindi $e(t)\le e(0)=0$. Qui la condizione al bordo è di Dirichlet ($w=0$ su $\partial\Omega$); la prima dimostrazione usa il principio del massimo. Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (p. 67).

## Prerequisiti
- [[Equazione delle onde]]: unicità per il problema ai valori iniziali e al bordo
- [[Equazione del calore]]: unicità con condizione di Neumann
- [[Teorema della divergenza]]: per spostare il laplaciano sul gradiente

## Collegati
- [[Equazione del calore su un dominio limitato]]: la positività si dimostra con lo stesso calcolo applicato a u⁻
- [[Principio del massimo per l'equazione del calore]]: l'altra dimostrazione dell'unicità per il problema di Dirichlet (Equazioni alle derivate parziali)
