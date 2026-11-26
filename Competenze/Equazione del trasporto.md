---
tipo: competenza
area: analisi
corsi: [Equazioni di fisica matematica]
livello: [triennale]
aliases: ["transport equation", "equazione del trasporto lineare", "trasporto lineare", "bordo di afflusso", "bordo di deflusso", "problema ai valori iniziali e al bordo per il trasporto"]
tags: [competenza, area/analisi]
---

# Equazione del trasporto

> PDE del primo ordine $\partial_tu+v\,\partial_xu=0$: il profilo iniziale viene traslato rigidamente con velocità $v$. È il prototipo su cui si introduce il metodo delle caratteristiche.

## Definizione / enunciato
In generale $\partial_tu+a(x,t)\cdot\nabla u=0$ in $\Omega\times(0,+\infty)$, con $a$ campo di velocità assegnato (L11 p. 5). Caso lineare 1D, $v\in\mathbb R$ costante:
$$\partial_tu+v\,\partial_xu=0\quad\text{in }\mathbb R\times(0,+\infty),\qquad u(x,0)=u_0(x)\quad(\text{problema di Cauchy}).$$
**Teorema (L12 p. 3).** Se $u_0\in C^1(\mathbb R)$, la soluzione è $u(x,t)=u_0(x-vt)$, ed è l'unica: lungo le caratteristiche $x=vt+x_0$ la funzione $\hat u(t)=u(vt+x_0,t)$ ha derivata nulla, quindi $u(x,t)=u_0(x_0)$ con $x_0=x-vt$.

## Formule chiave
**Dominio limitato** $\Omega=(0,1)$, $v>0$ (L13): serve un dato al bordo solo sul **bordo di afflusso** $\{x=0\}$, da cui le caratteristiche entrano:
$$u(x,t)=\begin{cases}u_0(x-vt)&x\ge vt\\ g\!\left(t-\frac xv\right)&x<vt\end{cases}$$
Sul **bordo di deflusso** $\{x=1\}$ la soluzione è già determinata. Afflusso e deflusso dipendono dal segno di $v$. Se $u_0(0)\ne g(0)$, $u$ è discontinua lungo $x=vt$.

**Con termine forzante** (L21 pp. 4-5): $\partial_tu-c\,\partial_xu=w$, $u(x,0)=u_0$ ha soluzione
$$u(x(t),t)=u(x_0,0)+\int_0^tw(x(s),s)\,ds,\qquad x(t)=-ct+x_0 .$$

## Intuizione
L'informazione viaggia lungo rette di pendenza $1/v$ nel piano $(x,t)$: ogni punto "ricorda" il valore del dato da cui parte la sua caratteristica.

## Come si usa
Esempio di L13 p. 4: $u_0=0$, $g=1$ su $(0,1)$ con $v>0$ dà $u=1$ per $x<vt$ e $u=0$ per $x>vt$: un gradino che avanza. Anche il dato di Heaviside su $\mathbb R$ dà $u=H(x-vt)$, discontinua (L13 p. 5): da qui nasce l'esigenza di soluzioni deboli.

## Nei corsi
- **Equazioni di fisica matematica** (triennale): fonti `triennale/ANNO 3/eq fisica matematica/11 - Lezione 31_10_23.pdf` (p. 5); `triennale/ANNO 3/eq fisica matematica/12 - Lezione 03_11_23.pdf` (pp. 2-5); `triennale/ANNO 3/eq fisica matematica/13 - Lezione 07_11_23.pdf` (pp. 1-5); `triennale/ANNO 3/eq fisica matematica/21 - Lezione 24_11_23.pdf` (pp. 4-5).

## Prerequisiti
- [[Equazione alle derivate parziali]]: è il primo esempio di PDE del primo ordine

## Porta a
- [[Metodo delle caratteristiche]]: generalizza la costruzione per caratteristiche
- [[Soluzione debole di una legge di conservazione]]: dati discontinui come H(x) richiedono la formulazione debole
- [[Formula di d'Alembert]]: l'onda si fattorizza in due trasporti
- [[Equazione delle onde sulla semiretta]]: il trasporto con bordo dà le soluzioni nella zona x < ct
