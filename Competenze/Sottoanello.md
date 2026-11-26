---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra]
livello: [triennale]
aliases: ["subring", "criterio per sottoanelli", "subring test", "interi di Gauss", "Gaussian integers", "Z[i]", "Z[√2]", "Q[√2]"]
tags: [competenza, area/algebra-geometria]
---

# Sottoanello

> Un sottoinsieme di un anello che è un anello con le stesse operazioni. Per verificarlo basta che sia chiuso per differenza e prodotto.

## Definizione / enunciato
**Def. 23.** Un sottoinsieme non vuoto $S$ di un anello (campo) $A$ è un **sottoanello** (**sottocampo**) se è un anello (campo) con le operazioni ristrette.

**Criterio per sottoanelli.** $S\neq\emptyset$ è un sottoanello di $A$ se e solo se
$$\forall x,y\in S:\quad x-y\in S\quad\text{e}\quad xy\in S.$$
La prima condizione è il criterio di sottogruppo additivo, la seconda la stabilità per il prodotto.

**Prop. 24.** Se $\varphi:A\to A'$ è un omomorfismo di anelli, $\mathrm{Im}\varphi$ è un sottoanello di $A'$.

## Formule chiave
$$(a+bi)-(c+di)=(a-c)+i(b-d),\qquad (a+bi)(c+di)=(ac-bd)+i(ad+bc)$$

## Intuizione
Basta controllare la chiusura: associatività e distributività si ereditano dall'anello grande. Un ideale è un sottoanello molto più forte, perché assorbe anche i prodotti con elementi esterni.

## Come si usa
Esempi delle dispense (pp. 8-10):
- $n\mathbb Z$ è un sottoanello di $\mathbb Z$, e a mano si osserva che sono tutti di questa forma;
- **interi di Gauss** $\mathbb Z[i]=\{a+ib\mid a,b\in\mathbb Z\}$, sottoanello di $\mathbb C$, verificato con le due formule sopra;
- $\mathbb Z[\sqrt2]=\{a+b\sqrt2\mid a,b\in\mathbb Z\}$ è un sottoanello di $\mathbb R$, e $\mathbb Q[\sqrt2]$ è un sottocampo di $\mathbb R$;
- $\mathbb Z$ è un sottoanello di $\mathbb Q$ ma **non** un suo ideale;
- ogni ideale è in particolare un sottoanello.

## Nei corsi
- **Istituzioni algebra** (triennale): lezione 19, sezione "Sottoanelli e ideali", ripresa all'inizio delle 20-21. Fonti: `triennale/ANNO 2/istituzioni/Alg-07-10-22.pdf` (lezione 19 del 07/11/22, pp. 7-10); `triennale/ANNO 2/istituzioni/Alg-09-11-22.pdf` (lezioni 20-21, p. 2).

## Prerequisiti
- [[Anello]]: un sottoanello eredita le operazioni
- [[Sottogruppo]]: il criterio additivo è quello dei sottogruppi

## Porta a

## Collegati
- [[Omomorfismo di anelli]]: l'immagine di un omomorfismo è un sottoanello
- [[Ideale]]: ogni ideale è un sottoanello, non viceversa ($\mathbb Z\subseteq\mathbb Q$)
