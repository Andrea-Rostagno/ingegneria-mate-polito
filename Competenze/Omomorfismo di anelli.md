---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra]
livello: [triennale]
aliases: ["ring homomorphism", "morfismo di anelli", "omomorfismo unitario", "unital ring homomorphism", "isomorfismo di anelli", "ring isomorphism", "nucleo di un omomorfismo di anelli", "omomorfismo di campi"]
tags: [competenza, area/algebra-geometria]
---

# Omomorfismo di anelli

> Una funzione tra anelli che rispetta somma e prodotto. Il suo nucleo è un ideale, e la sua immagine è un sottoanello.

## Definizione / enunciato
**Def. 17.** $\varphi:A\to A'$ è un **omomorfismo** (morfismo) di anelli se
$$\varphi(a+b)=\varphi(a)+\varphi(b),\qquad \varphi(ab)=\varphi(a)\varphi(b).$$
Si chiama monomorfismo, epimorfismo o isomorfismo se è iniettivo, suriettivo o biiettivo.

**Def. 18.** Per anelli con unità si richiede anche $\varphi(1_A)=1_{A'}$. Non è automatico: $n\mapsto\begin{pmatrix}n&0\\0&0\end{pmatrix}$ da $\mathbb Z$ a $M(2,\mathbb Z)$ è un omomorfismo che non manda $1$ nell'identità.

**Prop. 19.** L'identità è un omomorfismo, e la composizione di omomorfismi è un omomorfismo. Inoltre
$$\varphi(0)=0,\quad\varphi(-a)=-\varphi(a),\quad\varphi(na)=n\varphi(a),\quad\varphi(a^k)=\varphi(a)^k.$$

**Nucleo** (Def. 20): $\mathrm{Ker}\varphi=\{a\mid\varphi(a)=0_{A'}\}$, cioè il nucleo come omomorfismo di gruppi additivi.

Risultati:
- **Prop. 24:** $\mathrm{Im}\varphi$ è un sottoanello.
- **Prop. 2 (lezioni 20-21):** $\mathrm{Ker}\varphi$ è un ideale. $\mathrm{Im}\varphi$ invece in generale non lo è: $\mathbb Z\hookrightarrow\mathbb Q$.
- **Cor. 3:** tutti gli omomorfismi di campi sono iniettivi.
- **Prop. 4:** immagini e retroimmagini di sottoanelli sono sottoanelli; la retroimmagine di un ideale è un ideale; l'immagine di un ideale lo è se $\varphi$ è suriettivo.

## Formule chiave
$$\varphi(a+b)=\varphi(a)+\varphi(b),\quad \varphi(ab)=\varphi(a)\varphi(b),\quad \mathrm{Ker}\varphi\ \text{ideale}$$

## Intuizione
Un omomorfismo di anelli è un omomorfismo dei gruppi additivi che rispetta anche il prodotto. Per questo il nucleo, oltre a essere un sottogruppo, "assorbe" i prodotti: $\varphi(ab)=\varphi(a)\cdot0=0$.

## Come si usa
Esempi delle lezioni:
- le inclusioni $\mathbb Z\hookrightarrow\mathbb Q\hookrightarrow\mathbb R\hookrightarrow\mathbb C$ sono monomorfismi, e la proiezione $\mathbb Z\twoheadrightarrow\mathbb Z_p$ è un epimorfismo;
- il **morfismo unitario** $\mu:\mathbb Z\to A$, $n\mapsto n1_A$, è l'unico omomorfismo unitario da $\mathbb Z$;
- la **valutazione** $\mathbb R[x]\to\mathbb R$, $\sum a_ix^i\mapsto a_0$, è suriettiva con nucleo $(x)$;
- la **valutazione in un elemento** $p(x)\mapsto p(s)$ ha immagine $K[s]$.

## Nei corsi
- **Istituzioni algebra** (triennale): lezione 19 del 07/11/22 (il nome del file dice 07-10), ripresa nelle 20-21. Fonti: `triennale/ANNO 2/istituzioni/Alg-07-10-22.pdf` (lezione 19, pp. 2-6, 9); `triennale/ANNO 2/istituzioni/Alg-09-11-22.pdf` (lezioni 20-21, pp. 2-5).

## Prerequisiti
- [[Anello]]: dominio e codominio
- [[Omomorfismo di gruppi]]: un morfismo di anelli è un morfismo dei gruppi additivi

## Porta a
- [[Caratteristica di un anello]]: nucleo del morfismo unitario
- [[Ideale]]: i nuclei sono ideali
- [[Teorema fondamentale degli omomorfismi di anelli]]: $A/\mathrm{Ker}\varphi\simeq\mathrm{Im}\varphi$

## Collegati
- [[Sottoanello]]: l'immagine è un sottoanello
