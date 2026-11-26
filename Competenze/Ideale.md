---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra]
livello: [triennale]
aliases: ["ideal", "ideale bilatero", "two-sided ideal", "ideale principale", "principal ideal", "ideale generato", "generated ideal", "ideale somma", "sum of ideals", "ideali impropri"]
tags: [competenza, area/algebra-geometria]
---

# Ideale

> Un sottogruppo additivo di un anello che assorbe i prodotti con qualunque elemento dell'anello. Gli ideali sono esattamente i nuclei degli omomorfismi, e permettono di costruire anelli quoziente.

## Definizione / enunciato
**Def. 9.** Un sottoinsieme non vuoto $I$ di un anello $A$ è un **ideale** (bilatero) se:
1. $x-y\in I$ per ogni $x,y\in I$;
2. $ax\in I$ e $xa\in I$ per ogni $x\in I$ e $a\in A$.

Fatti elementari:
- $A$ e $\{0\}$ sono gli ideali **impropri**;
- ogni ideale è un sottoanello;
- se $1_A\in I$ allora $I=A$.

Altri risultati:
- **Prop. 1:** un campo non ha ideali propri.
- **Prop. 2:** $\mathrm{Ker}\varphi$ è un ideale per ogni omomorfismo di anelli.
- **Def. 5, Prop. 6:** l'**ideale principale** $(x)$ è il più piccolo ideale contenente $x$; se $A$ è commutativo con unità, $(x)=\{ax\mid a\in A\}$.
- **Prop. 8:** l'intersezione di ideali è un ideale. L'unione di solito no: il più piccolo ideale che contiene $I$ e $J$ è la somma $I+J=\{i+j\}$.
- **Def. 9 (ideale generato):** $(S)=\bigcap\{I\text{ ideale}\mid S\subseteq I\}$.

## Formule chiave
$$(x)=\{ax\mid a\in A\},\qquad I+J=\{i+j\mid i\in I,\ j\in J\},\qquad (a)+(b)=(\mathrm{MCD}(a,b))\ \text{in }\mathbb Z$$

## Intuizione
Un ideale è ciò che si può "mandare a zero" mantenendo un anello. Se $x\mapsto0$, anche ogni multiplo $ax$ deve andare a zero: è la proprietà di assorbimento.

## Come si usa
Esempi delle lezioni:
- $n\mathbb Z$ è un ideale di $\mathbb Z$, mentre $\mathbb Z$ è un sottoanello di $\mathbb Q$ ma non un suo ideale;
- in $\mathbb R[x]$, i polinomi con termine noto nullo formano l'ideale $(x)$;
- in $\mathbb Z[x]$, i polinomi con $a_0$ pari formano l'ideale $(2,x)$, che non è principale;
- l'immagine di un ideale non è sempre un ideale: $2\mathbb Z$ in $\mathbb R$ tramite l'inclusione.

## Nei corsi
- **Istituzioni algebra** (triennale): lezione 19 (definizione) e lezioni 20-21 (proprietà). Nella stampa di p. 2 della lezione 20-21 manca la "$I$" in "per ogni $x\in I$". Fonti: `triennale/ANNO 2/istituzioni/Alg-07-10-22.pdf` (lezione 19 del 07/11/22, pp. 10-11); `triennale/ANNO 2/istituzioni/Alg-09-11-22.pdf` (lezioni 20-21, pp. 2-7); `triennale/ANNO 2/istituzioni/Alg-30-11-22.pdf` (lezioni 25-26, p. 5).

## Prerequisiti
- [[Anello]]: un ideale è un sottoinsieme di un anello
- [[Omomorfismo di anelli]]: i nuclei sono ideali

## Porta a
- [[Anello quoziente]]: $A/I$ è un anello
- [[Dominio a ideali principali]]: tutti gli ideali sono del tipo $(x)$
- [[Ideali primi e massimali]]: classificazione tramite il quoziente
- [[Identità di Bézout]]: $(a)+(b)=(\mathrm{MCD}(a,b))$
- [[Equazione diofantea lineare]]: $n\in(a,b)$ se e solo se $\mathrm{MCD}(a,b)\mid n$

## Collegati
- [[Sottoanello]]: un ideale è un sottoanello assorbente
- [[Campo (struttura algebrica)]]: i campi non hanno ideali propri
