---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra]
livello: [triennale]
aliases: ["simple extension", "simple field extension", "K(s)", "K[s]", "estensione algebrica semplice", "espressioni razionali in s", "campo di spezzamento", "splitting field", "chiusura algebrica", "algebraic closure"]
tags: [competenza, area/algebra-geometria]
---

# Estensione semplice

> $K(s)$ è il più piccolo campo che contiene $K$ e $s$. Se $s$ è algebrico coincide con $K[s]\simeq K[x]/(p)$ e ha grado $\deg p$ su $K$.

## Definizione / enunciato
**Def. 6.** Siano $K\subseteq F$ campi e $s\in F$. L'**estensione semplice** $K(s)$ è il più piccolo sottocampo di $F$ che contiene $K$ e $s$, cioè l'intersezione di tutti questi sottocampi.

$K[s]=\{a_0+a_1s+\dots+a_ns^n\}$ è il più piccolo sottoanello di $F$ che contiene $K$ e $s$.

**Prop. 7.** $K(s)=\{\alpha(s)/\beta(s)\mid\alpha,\beta\in K[x],\ \beta(s)\neq0\}$, cioè le espressioni razionali fratte in $s$.

**Teorema 12.**
1. $s$ è algebrico su $K$ $\iff K[s]=K(s)$.
2. Se $s$ è algebrico, ogni elemento di $K(s)$ si scrive in modo unico come polinomio in $s$ di grado $<\deg p$, dove $p$ è il polinomio minimo.

**Cor. 13.** Se il polinomio minimo di $s$ ha grado $n$, allora $[K(s):K]=n$, con base $1,s,\dots,s^{n-1}$. La stampa è degradata (da verificare sul PDF), ma la dimostrazione a mano è leggibile.

**Costruzione astratta (Def. 14).** Per $p\in K[x]$ irriducibile, $E=K[x]/(p(x))$ è l'**estensione algebrica semplice di $K$ mediante $p$**.
- $K\hookrightarrow E$ tramite $a\mapsto(p)+a$.
- **Prop. 15:** $[E:K]=\deg p$ (stampa degradata, da verificare sul PDF).
- La classe $\bar x$ è una radice di $p$ in $E$.

**Oss. 17.** Si può costruire un campo in cui $p$ ha $n$ radici, il **campo di spezzamento**. Con l'assioma della scelta ogni campo ha una **chiusura algebrica**.

## Formule chiave
$$K(s)=K[s]\simeq K[x]/(p(x)),\qquad [K(s):K]=\deg p,\qquad (p)+x\leftrightarrow s$$

## Intuizione
La valutazione $\Phi:K[x]\to F$, $f\mapsto f(s)$, ha immagine $K[s]$.
- Se $s$ è algebrico, il nucleo è $(p)$ con $p$ irriducibile, quindi massimale, e $K[s]\simeq K[x]/(p)$ è già un campo.
- Se $s$ è trascendente, il nucleo è $(0)$ e $K[s]\simeq K[x]$, che non è un campo.

L'estensione dipende solo da $p$, quindi si può costruire anche senza un campo ambiente.

## Come si usa
**Esempio $\mathbb Q(\sqrt3)$ (pp. 7-8).**
- Razionalizzando: $\frac{a+b\sqrt3}{c+d\sqrt3}=\frac{(ac-3bd)+(bc-ad)\sqrt3}{c^2-3d^2}\in\mathbb Q[\sqrt3]$.
- Quindi $\mathbb Q(\sqrt3)=\mathbb Q[\sqrt3]\simeq\mathbb Q[x]/(x^2-3)$, e $[\mathbb Q(\sqrt3):\mathbb Q]=2$.

## Nei corsi
- **Istituzioni algebra** (triennale): lezioni 33/34. In `Alg-14-12-22.pdf` mancano le pagine stampate 18-19 (enunciato 16). Fonti: `triennale/ANNO 2/istituzioni/Alg-14-12-22.pdf` (lezioni 33/34, pp. 5-8, 14-20).

## Prerequisiti
- [[Polinomio minimo]]: genera il nucleo della valutazione
- [[Estensione di campi]]: grado come dimensione
- [[Teorema fondamentale degli omomorfismi di anelli]]: $K[x]/(p)\simeq K[s]$
- [[Ideali primi e massimali]]: $(p)$ massimale, quindi il quoziente è un campo

## Porta a
- [[Campo finito]]: ogni campo finito è un'estensione semplice di $\mathbb Z_p$

## Collegati
- [[Teorema fondamentale dell'algebra]]: $\mathbb C$ è algebricamente chiuso; la chiusura algebrica dà a ogni campo un'estensione con questa proprietà
