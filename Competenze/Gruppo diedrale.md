---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra]
livello: [triennale]
aliases: ["dihedral group", "D_n", "Δ_n", "gruppo delle isometrie del poligono", "isometria del piano", "gruppo di Klein", "Klein four-group", "4-gruppo di Klein", "gruppo trirettangolo"]
tags: [competenza, area/algebra-geometria]
---

# Gruppo diedrale

> Il gruppo delle isometrie di un poligono regolare di $n$ lati: $n$ rotazioni e $n$ riflessioni. È il primo esempio di gruppo finito non abeliano.

## Definizione / enunciato
Un'**isometria** di $\mathbb A^n$ è una biiezione che conserva la distanza. **Lemma 2:** le isometrie $\mathcal I(\mathbb A^n)$ formano un sottogruppo delle biiezioni di $\mathbb A^n$. Per $S\subseteq\mathbb A^n$, anche $\mathcal I(S)=\{\alpha\mid\alpha(S)=S\}$ è un sottogruppo.

Nel piano le isometrie sono traslazioni, rotazioni, riflessioni e glissoriflessioni.

Il **gruppo diedrale** $\Delta_n$ (o $D_n$) è il gruppo delle isometrie del poligono regolare di $n$ lati. Contiene:
- le rotazioni $R^i$ di angolo $\frac{2i\pi}n$, per $i=0,\dots,n-1$, che formano un sottogruppo di $n$ elementi;
- le $n$ riflessioni $D_i$, di periodo 2.

Per ogni $n\ge3$, $\Delta_n$ è non abeliano e ha $2n$ elementi.

## Formule chiave
$$|\Delta_n|=2n,\qquad R^n=Id,\qquad D_i^2=Id$$

## Intuizione
Ogni simmetria del poligono è determinata da dove va un vertice ($n$ scelte) e dal fatto che conservi o inverta l'orientazione (2 scelte). Fare prima una riflessione e poi una rotazione non dà lo stesso risultato che fare il contrario.

## Come si usa
- **$\Delta_3$:** $\{1,R,R^2,D_1,D_2,D_3\}$; le rotazioni hanno ordine 3 e le riflessioni ordine 2. Le dispense danno la tabella di moltiplicazione completa (p. 11), e mostrano che $\Delta_3$ non è abeliano.
- **$\Delta_3\cong S_3$:** ogni isometria permuta i vertici. Per $n>3$, $\Delta_n\not\cong S_n$ perché $2n<n!$, ma c'è sempre un'iniezione $\Delta_n\to S_n$.
- **Gruppo di Klein** $T=\mathcal I(\text{rettangolo})=\{1,\rho,\sigma_r,\sigma_s\}$: identità, rotazione di $\pi$ e due riflessioni negli assi. Tutti gli elementi diversi da 1 hanno periodo 2, quindi $T$ è abeliano ma non ciclico; è il più piccolo gruppo non ciclico.
- **Ordine 8:** $\Delta_4$ e $Q_8$ sono, a meno di isomorfismo, i soli gruppi non commutativi di ordine 8 (enunciato, da dimostrare).

## Nei corsi
- **Istituzioni algebra** (triennale): lezioni 4-5 ($\Delta_3$) e 11/12 (isometrie, Klein, $\Delta_n$). Fonti: `triennale/ANNO 2/istituzioni/Alg-05-10-22.pdf` (lezioni 4-5, pp. 9-10); `triennale/ANNO 2/istituzioni/Alg-19-10-22.pdf` (lezione 11/12, pp. 5-12).

## Prerequisiti
- [[Gruppo]]: le isometrie formano un gruppo con la composizione

## Porta a

## Collegati
- [[Gruppo simmetrico]]: $\Delta_3\cong S_3$ e $\Delta_n\hookrightarrow S_n$
- [[Gruppo ciclico]]: le rotazioni formano un sottogruppo ciclico; Klein è abeliano ma non ciclico
- [[Teorema di Lagrange sui gruppi]]: in $\Delta_3$ le classi laterali destre e sinistre di $\langle D_1\rangle$ sono diverse
