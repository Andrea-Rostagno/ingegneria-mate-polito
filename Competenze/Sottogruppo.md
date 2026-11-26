---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra]
livello: [triennale]
aliases: ["subgroup", "criterio per i sottogruppi", "subgroup test", "sottogruppo generato", "generated subgroup", "sottogruppo unione", "H ∨ K", "sottogruppi impropri", "sottoinsieme stabile"]
tags: [competenza, area/algebra-geometria]
---

# Sottogruppo

> Un sottoinsieme di un gruppo che è a sua volta un gruppo con la stessa operazione. Per verificarlo basta un solo criterio: $xy^{-1}\in H$.

## Definizione / enunciato
**Def. 9.** $H\subseteq G$ è un **sottogruppo**, $H<G$, se è un gruppo per la restrizione dell'operazione di $G$. $\{1_G\}$ e $G$ sono i sottogruppi **impropri**.

**Prop. 10.** Se $H<G$:
1. $H$ è **stabile**, cioè chiuso per il prodotto;
2. se $G$ è abeliano lo è anche $H$;
3. $1_H=1_G$;
4. l'inverso in $H$ coincide con quello in $G$.

**Criterio.** Un $H\subseteq G$ non vuoto è un sottogruppo se e solo se
$$\forall x,y\in H:\ xy^{-1}\in H\qquad(\text{additivo: } x-y\in H).$$

Altri risultati:
- **Prop. 16:** l'intersezione $H\cap K$ di due sottogruppi è un sottogruppo. L'unione in generale no: $2+3=5\notin2\mathbb Z\cup3\mathbb Z$.
- **Sottogruppo generato** da $A\subseteq G$: $\langle A\rangle=\bigcap_{H<G,\,H\supseteq A}H$, il più piccolo sottogruppo che contiene $A$.
- **Sottogruppo unione** $H\vee K=\langle H\cup K\rangle$ (Prop. 2 della lezione 7):
$$H\vee K=\{h_1k_1\cdots h_nk_n\mid h_i\in H,\ k_i\in K\},$$
  e se $G$ è abeliano $H\vee K=H+K=\{h+k\}$.

## Formule chiave
$$H<G\iff H\neq\emptyset\ \wedge\ \forall x,y\in H:\ xy^{-1}\in H;\qquad \langle A\rangle=\bigcap_{H<G,\ H\supseteq A}H$$

## Intuizione
Un sottoinsieme che contiene $x$ e $y$ contiene $xy^{-1}$ se e solo se è chiuso per prodotti e per inversi, e allora contiene anche $1=xx^{-1}$. Il criterio racchiude in una riga i tre assiomi.

## Come si usa
Esempi delle lezioni:
- $n\mathbb Z<(\mathbb Z,+)$;
- $\mathbb N\subseteq\mathbb Z$ è stabile ma non è un sottogruppo;
- $\Lambda=\{m/2^i\mid m\in\mathbb Z,\ i\in\mathbb N\}<(\mathbb Q,+)$, perché $\frac m{2^i}-\frac n{2^j}=\frac{2^jm-2^in}{2^{i+j}}\in\Lambda$.

I sottogruppi ciclici $\langle x\rangle$ sono il caso $A=\{x\}$.

## Nei corsi
- **Istituzioni algebra** (triennale): lezioni 6 e 7. Notazione $H<G$. Fonti: `triennale/ANNO 2/istituzioni/Alg-10-10-22.pdf` (lezione 6, pp. 6-16; p. 12 in parte illeggibile); `triennale/ANNO 2/istituzioni/Alg-11-10-22.pdf` (lezione 7, pp. 2-4).

## Prerequisiti
- [[Gruppo]]: un sottogruppo eredita l'operazione

## Porta a
- [[Omomorfismo di gruppi]]: immagine e nucleo sono sottogruppi
- [[Ordine di un elemento]]: il sottogruppo ciclico $\langle x\rangle$
- [[Gruppo ciclico]]: gruppi generati da un solo elemento
- [[Teorema di Lagrange sui gruppi]]: l'ordine di un sottogruppo divide quello del gruppo
- [[Sottoanello]]: il criterio additivo è metà del criterio per sottoanelli

## Collegati
- [[Sottospazio vettoriale]]: stesso tipo di criterio di chiusura, nel contesto lineare
