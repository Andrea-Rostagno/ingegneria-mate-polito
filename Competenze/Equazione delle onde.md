---
tipo: competenza
area: fisica
corsi: [Fisica 2, Equazioni di fisica matematica]
livello: [triennale]
aliases: ["equazione di d'Alembert", "d'Alembert equation", "onda progressiva e regressiva", "velocità di fase", "onda armonica", "lunghezza d'onda", "numero d'onda", "pulsazione", "periodo"]
tags: [competenza, area/fisica]
---

# Equazione delle onde

> Equazione alle derivate parziali le cui soluzioni sono perturbazioni $f(x\pm vt)$ che si propagano senza deformarsi con velocità $v$.

## Definizione / enunciato
Traslando una funzione $y=f(x)$ di $a=vt$ verso le $x$ positive si ottiene $y=f(x-vt)$: una curva che si muove verso destra con **velocità di fase** $v$; $f(x+vt)$ si muove verso sinistra. Questo tipo di propagazione è detto **onda** e l'argomento $(x-vt)$ è la **fase dell'onda**. Qualunque funzione $f(x\pm vt)$ soddisfa l'equazione delle onde, la cui soluzione generale è la somma di un'onda regressiva e una progressiva. Non si propaga la materia ma lo stato di moto: energia e quantità di moto viaggiano nello spazio.

## Formule chiave
$$\frac{\partial^2y}{\partial t^2}=v^2\frac{\partial^2y}{\partial x^2},\qquad y(x,t)=f_1(x+vt)+f_2(x-vt),\qquad \frac{\partial^2y}{\partial t^2}=v^2\nabla^2y\ \text{(3D)}$$
Onde armoniche:
$$f(x\pm vt)=A\sin[k(x\pm vt)]=A\sin[kx\pm\omega t]=A\sin\left[2\pi\left(\frac x\lambda\pm\frac tT\right)\right],\qquad \omega=v\cdot k$$
$$\lambda=\frac{2\pi}{k},\qquad T=\frac{2\pi}{\omega},\qquad \nu=\frac1T,\qquad \omega=2\pi\nu,\qquad v=\frac\lambda T=\frac\omega k$$

## Intuizione
La fase resta costante per chi si muove con $x=vt+\text{cost}$: per questo $v=\omega/k$ è la velocità di fase. Un'onda armonica è periodica nello spazio (periodo $\lambda$ a $t$ fissato) e nel tempo (periodo $T$ a $x$ fissato).

## Come si usa
Si verifica che una funzione sia un'onda controllando che dipenda da $x$ e $t$ solo tramite $x\pm vt$, o sostituendola nell'equazione. Per un'onda armonica, da due tra $\lambda$, $T$, $\nu$, $k$, $\omega$, $v$ si ricavano gli altri. La stessa equazione descrive deformazioni di una sbarra, pressione di un gas, corde, superfici liquide; dalle equazioni di Maxwell la soddisfano $\vec E$ e $\vec B$.

## Nei corsi
- **Fisica 2** (triennale): "Le onde e la loro equazione" e "Moto ondulatorio", poi ripreso in forma tridimensionale nel testo 30bis (onda progressiva/regressiva, $\xi=x\pm vt$). Fonti: `triennale/ANNO 2/fisica 2/lezioni/29&30. LEZIONE.pdf` (pp. 30-41, 47); `triennale/ANNO 2/fisica 2/lezioni/30bis. LEZIONE (Onde_em).pdf` (pp. 1-2).
- **Equazioni di fisica matematica** (triennale): $\partial_t^2u-c^2\Delta u=0$ in $Q\subseteq\mathbb R^{n+1}$, con $c\in\mathbb R$ costante; si scrive $c^2$ per avere coefficiente non negativo davanti a $\Delta u$. È del secondo ordine in tempo, quindi servono due dati iniziali $u=u_0$, $\partial_tu=u_1$. In 1D si fattorizza $(\partial_t+c\partial_x)(\partial_t-c\partial_x)u=0$ (teorema di Schwarz per soluzioni $C^2$) in due equazioni del trasporto, da cui la formula di d'Alembert; seguono la semiretta con dati al bordo, la soluzione per serie su domini limitati, l'unicità con l'energia e la derivazione dalla corda vibrante ($c^2=T/\rho$). Fonti: `triennale/ANNO 3/eq fisica matematica/21 - Lezione 24_11_23.pdf` (pp. 1-2); `triennale/ANNO 3/eq fisica matematica/24 - Lezione 05_12_23.pdf` (p. 1); `triennale/ANNO 3/eq fisica matematica/31 - Lezione 09_01_24 (1).pdf` (pp. 1-6).

## Prerequisiti
- [[Derivate parziali]]: equazione alle derivate parziali in x e t
- [[Equazione alle derivate parziali]]: PDE lineare del secondo ordine (Equazioni di fisica matematica)

## Porta a
- [[Onde elettromagnetiche]]: E e B soddisfano l'equazione delle onde
- [[Fronti d'onda e raggi]]: fase f(r·u - vt) costante sui fronti
- [[Velocità di gruppo]]: velocità di fase ω/k delle componenti armoniche
- [[Formula di d'Alembert]]: soluzione del problema di Cauchy su R (Equazioni di fisica matematica)
- [[Equazione delle onde sulla semiretta]]: problema con dato al bordo (Equazioni di fisica matematica)
- [[Soluzione per serie di autofunzioni]]: soluzione su domini limitati (Equazioni di fisica matematica)
- [[Metodo dell'energia]]: unicità tramite conservazione dell'energia (Equazioni di fisica matematica)

## Collegati
- [[Moto armonico semplice]]: a x fissato l'onda armonica oscilla nel tempo
- [[Corda vibrante]]: modello fisico da cui si ricava l'equazione con c² = T/ρ (Equazioni di fisica matematica)
