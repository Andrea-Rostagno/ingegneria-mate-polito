---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra]
livello: [triennale]
aliases: ["quotient ring", "anello quoziente di A modulo I", "A/I", "anello delle classi laterali", "factor ring"]
tags: [competenza, area/algebra-geometria]
---

# Anello quoziente

> Dato un ideale $I$ di $A$, le classi laterali $I+a$ formano un anello, con somma e prodotto definiti sui rappresentanti. È la generalizzazione di $\mathbb Z_n=\mathbb Z/n\mathbb Z$.

## Definizione / enunciato
Un ideale $I$ è un sottogruppo normale di $(A,+)$, quindi:
- le classi $I+a$ formano una partizione di $A$;
- $A/I$ è un gruppo con $(I+a)+(I+b)=I+(a+b)$;
- la proiezione $\pi:A\to A/I$ è un omomorfismo di gruppi con nucleo $I$.

Si definisce anche il prodotto
$$(I+a)(I+b)=I+ab.$$

**Prop. 10.** Con queste operazioni $A/I$ è un anello, detto **anello quoziente di $A$ modulo $I$**, e $\pi:A\to A/I$ è un omomorfismo di anelli.
- Se $A$ è unitario lo è anche $A/I$, con unità $I+1_A$.
- Se $A$ è commutativo lo è anche $A/I$.

## Formule chiave
$$(I+a)+(I+b)=I+(a+b),\qquad (I+a)(I+b)=I+ab$$

## Intuizione
Il prodotto è ben definito proprio perché $I$ assorbe: se $a'=i+a$ e $b'=j+b$, allora $a'b'=ij+ib+ja+ab$, e i primi tre termini stanno in $I$. Con un semplice sottoanello questo non funzionerebbe.

## Come si usa
Esempi delle lezioni:
- $\mathbb Z/n\mathbb Z=\mathbb Z_n$, l'anello delle classi di resto;
- $\mathbb R[x]/(x)\simeq\mathbb R$ tramite $(x)+a\mapsto a$;
- $K[x]/(f)$: due polinomi sono nella stessa classe se e solo se $f\mid\alpha-\beta$, cioè $\alpha\equiv\beta\pmod f$. Ogni classe ha un unico rappresentante di grado $<\deg f$, il resto della divisione per $f$;
- $\mathbb Z[x]/(x)\simeq\mathbb Z$ e $\mathbb Z[x]/(2,x)\simeq\mathbb Z_2$.

Le proprietà del quoziente (dominio, campo) classificano gli ideali in primi e massimali.

## Nei corsi
- **Istituzioni algebra** (triennale): lezioni 20-21; il quoziente di $K[x]$ è nella lezione 30. Fonti: `triennale/ANNO 2/istituzioni/Alg-09-11-22.pdf` (lezioni 20-21, pp. 8-11, 13); `triennale/ANNO 2/istituzioni/Alg-12-12-22.pdf` (lezione 30, p. 2).

## Prerequisiti
- [[Ideale]]: si quozienta per un ideale
- [[Sottogruppo normale e gruppo quoziente]]: la struttura additiva è un gruppo quoziente

## Porta a
- [[Teorema fondamentale degli omomorfismi di anelli]]: $A/\mathrm{Ker}\varphi\simeq\mathrm{Im}\varphi$
- [[Ideali primi e massimali]]: $A/I$ dominio o campo

## Collegati
- [[Classi di resto modulo n]]: $\mathbb Z_n$ è l'anello quoziente modello
