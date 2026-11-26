---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra]
livello: [triennale]
aliases: ["Cayley's theorem", "rappresentazione regolare sinistra", "left regular representation", "traslazione sinistra"]
tags: [competenza, area/algebra-geometria]
---

# Teorema di Cayley

> Ogni gruppo è isomorfo a un gruppo di permutazioni dei propri elementi. In particolare ogni gruppo finito di ordine $n$ sta dentro $S_n$.

## Definizione / enunciato
**Teorema 9 (Cayley).** Ogni gruppo $G$ è isomorfo a un gruppo di permutazioni sull'insieme dei suoi elementi, cioè a un sottogruppo di $Sym(G)$.

**Cor. 10.** Se $G$ è finito di ordine $n$, $G$ è isomorfo a un sottogruppo di $S_n$.

## Formule chiave
$$\lambda_a:G\to G,\ g\mapsto ag;\qquad \lambda:G\to Sym(G),\ a\mapsto\lambda_a;\qquad \lambda_{aa'}=\lambda_a\circ\lambda_{a'}$$

## Intuizione
Moltiplicare a sinistra per $a$ rimescola gli elementi di $G$ senza perderne nessuno: è una permutazione. Il gruppo è quindi "codificato" dal modo in cui permuta sé stesso.

## Come si usa
Dimostrazione (pp. 6-7):
1. $\lambda_a$ è biiettiva: è iniettiva per la legge di cancellazione, è suriettiva perché $\lambda_a(a^{-1}g)=g$, e ha inversa $\lambda_{a^{-1}}$.
2. $\lambda$ è un omomorfismo, perché $\lambda_{aa'}=\lambda_a\circ\lambda_{a'}$.
3. $\lambda$ è iniettiva, perché $\lambda_a=Id$ implica $a=ae=e$.

Quindi $G\cong\lambda(G)<Sym(G)$. Se $|G|=n$, $Sym(G)\cong S_n$.

Il teorema dice che studiare i sottogruppi dei gruppi simmetrici equivale a studiare tutti i gruppi finiti.

## Nei corsi
- **Istituzioni algebra** (triennale): lezione 10, subito dopo il segno delle permutazioni. Fonti: `triennale/ANNO 2/istituzioni/Alg-17-10-22.pdf` (lezione 10, pp. 6-7).

## Prerequisiti
- [[Gruppo simmetrico]]: il gruppo in cui si immerge $G$
- [[Omomorfismo di gruppi]]: $\lambda$ è un monomorfismo

## Porta a

## Collegati
