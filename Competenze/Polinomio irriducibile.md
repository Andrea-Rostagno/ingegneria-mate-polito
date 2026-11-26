---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra]
livello: [triennale]
aliases: ["irreducible polynomial", "polinomi associati", "associated polynomials", "divisori impropri", "fattorizzazione unica in K[x]", "unique factorization of polynomials", "irriducibili di R[x]", "irriducibili di C[x]", "K[x]/(p) campo", "MCD di polinomi"]
tags: [competenza, area/algebra-geometria]
---

# Polinomio irriducibile

> Un polinomio che ha solo divisori impropri: è il "numero primo" di $K[x]$. Ogni polinomio si fattorizza in modo unico in irriducibili, e $K[x]/(p)$ è un campo esattamente quando $p$ è irriducibile.

## Definizione / enunciato
In $K[x]$, con $K$ campo:
- due polinomi sono **associati** se differiscono per una costante non nulla;
- i **divisori impropri** di $f$ sono le costanti non nulle e gli associati di $f$;
- $f$ è **irriducibile** se ha solo divisori impropri;
- il **MCD** di $f$ e $g$ è definito a meno di costanti; $f$ e $g$ sono coprimi se $\mathrm{MCD}=1$, prendendo il MCD monico;
- vale **Bézout**: $\mathrm{MCD}(f,g)=\alpha f+\beta g$.

Risultati:
- **Prop. 7:** se $f$ è irriducibile e divide un prodotto, divide uno dei fattori.
- **Teorema di fattorizzazione unica:** ogni $f$ con $\deg f\ge1$ è un prodotto di irriducibili, unico a meno dell'ordine e di associati.
- **Teor. 13, Cor. 14:** se $p$ è irriducibile, $(p)$ è massimale e $K[x]/(p)$ è un campo.

**Su $\mathbb C$ e $\mathbb R$ (lezioni 31/32):**
- **Prop. 2:** gli irriducibili di $\mathbb C[x]$ sono i polinomi di grado 1.
- **Prop. 4:** gli irriducibili di $\mathbb R[x]$ sono quelli di grado 1 e gli $ax^2+bx+c$ con $a\neq0$ e $b^2-4ac<0$.
- **Oss. 5:** ogni polinomio reale è un prodotto di fattori di grado 1 e 2, e uno di grado dispari ha una radice reale.

## Formule chiave
$$p\ \text{irriducibile}\iff(p)\ \text{massimale}\iff K[x]/(p)\ \text{campo};\qquad \deg f\le3:\ f\ \text{riducibile}\iff f\ \text{ha radici}$$

## Intuizione
- $p$ irriducibile implica $(p)$ primo (Teor. A nei PID), e un primo non nullo in un PID è massimale (Teor. B).
- Il criterio delle radici vale solo fino al grado 3, perché una fattorizzazione non banale di un polinomio di grado $\le3$ contiene per forza un fattore lineare. In grado 4 il criterio cade: le dispense danno come esempio un prodotto di due quadratici reali senza radici reali, $(x^2+1)(x^2+c)$ con $c$ di lettura incerta (da verificare sul PDF). Un esempio sicuro, scelto da me, è $(x^2+1)^2$.

## Come si usa
**Esempi delle dispense (pp. 19-20)**, verificati cercando radici:
- $x^2+x+1$ è irriducibile su $\mathbb Z_2$: vale $\bar1$ sia in $\bar0$ sia in $\bar1$;
- $x^2+1$ è irriducibile su $\mathbb Z_7$;
- $x^3-\bar9$ è riducibile su $\mathbb Z_{11}$, perché si annulla in $\bar4$.

**Serve un campo:** in $\mathbb Z_{15}[x]$, $x^2-\bar1=(x-\bar1)(x+\bar1)=(x-\bar4)(x+\bar4)$.

**$\mathbb R[x]$:** se $\alpha$ è una radice non reale, il fattore reale è $(x-\alpha)(x-\bar\alpha)=x^2-2ax+(a^2+b^2)$, con $\alpha=a+bi$.

## Nei corsi
- **Istituzioni algebra** (triennale): lezioni 28-29 per $K[x]$ e 31/32 per $\mathbb C$ e $\mathbb R$. Fonti: `triennale/ANNO 2/istituzioni/Alg-07-12-22.pdf` (lezioni 28-29, pp. 12-20); `triennale/ANNO 2/istituzioni/Alg-13-12-22.pdf` (lezioni 31/32, pp. 2-8).

## Prerequisiti
- [[Divisione tra polinomi]]: MCD e algoritmo di Euclide in $K[x]$
- [[Dominio a ideali principali]]: Teoremi A e B
- [[Ideali primi e massimali]]: $(p)$ massimale e quoziente campo
- [[Teorema di Ruffini]]: radici e fattori lineari
- [[Identità di Bézout]]: dimostrazione della Prop. 7

## Porta a
- [[Lemma di Gauss sui polinomi]]: irriducibilità su $\mathbb Q$ e su $\mathbb Z$
- [[Criterio di Eisenstein]]: criterio pratico di irriducibilità
- [[Polinomio minimo]]: il polinomio minimo è irriducibile

## Collegati
- [[Teorema fondamentale dell'aritmetica]]: la fattorizzazione unica in $\mathbb Z$ è il modello
- [[Teorema fondamentale dell'algebra]]: da esso seguono gli irriducibili di $\mathbb C[x]$ e $\mathbb R[x]$
