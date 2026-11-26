---
tipo: competenza
area: analisi
corsi: [Analisi 1, Algebra lineare, Metodi matematici e probabilità, Istituzioni algebra]
livello: [triennale]
aliases: ["complex numbers", "forma algebrica", "unità immaginaria", "coniugato", "modulo di un numero complesso", "parte reale", "parte immaginaria"]
tags: [competenza, area/analisi]
---

# Numeri complessi

> L'insieme $\mathbb C$ delle coppie di reali con somma e prodotto che lo rendono un campo in cui $i^2=-1$: si scrive $z=a+ib$ e ha modulo, coniugato e inverso.

## Definizione / enunciato
Su $\mathbb R^2$ si definiscono (Morandotti, (1.50))
$$(a,b)\oplus(c,d)=(a+c,\,b+d),\qquad (a,b)\odot(c,d)=(ac-bd,\,ad+bc).$$
$(\mathbb R^2,\oplus,\odot)$ è un campo (prop. 1.5.41) con neutri $(0,0)$ e $(1,0)$; posto $i=(0,1)$ si ha $i^2=(-1,0)=-1$. Ogni $z=(a,b)$ si scrive in **forma algebrica** $z=a+ib$, con $a=\operatorname{Re}z$ parte reale e $b=\operatorname{Im}z$ parte immaginaria.

- **Coniugato**: $\bar z=a-ib$; $\operatorname{Re}z=\frac{z+\bar z}2$, $\operatorname{Im}z=\frac{z-\bar z}{2i}$.
- **Modulo**: $|z|=\sqrt{a^2+b^2}$, distanza di $z$ dall'origine; $|z|^2=z\bar z$ e $|zw|=|z||w|$.
- **Inverso** di $z\ne0$: $\dfrac1z=\dfrac{a}{a^2+b^2}-\dfrac{b}{a^2+b^2}\,i=\dfrac{\bar z}{|z|^2}$.

## Formule chiave
$$z\bar z=|z|^2,\qquad z^{-1}=\frac{\bar z}{|z|^2},\qquad (x_1+iy_1)(x_2+iy_2)=x_1x_2-y_1y_2+i(x_1y_2+x_2y_1)$$

## Intuizione
$\mathbb C$ è il piano con una moltiplicazione: si calcola come con i polinomi in $i$ ricordando $i^2=-1$. Due complessi sono uguali se e solo se hanno uguali parte reale e parte immaginaria: per questo un'equazione in $\mathbb C$ diventa un sistema di due equazioni reali.

## Come si usa
Per risolvere un'equazione non algebrica in $z$ si pone $z=x+iy$ e si separano parte reale e immaginaria, oppure si confrontano moduli e argomenti. Nella lezione del 22/12/2021 l'equazione $z^3=|z|^4$ viene riscritta come $z^3=z^2\bar z^2$ (perché $|z|^4=(z\bar z)^2$): $z_0=0$ è soluzione e per $z\neq0$ si riduce a $z=\bar z^2$, da risolvere con $z=x+iy$. Esercizi tipo: esercitazione 25 (2021-22, "numeri complessi") con i relativi svolgimenti.

## Nei corsi
- **Analisi 1** (triennale): "forma algebrica, parte reale, parte immaginaria, modulo, operazioni di somma e prodotto". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (§1.5.3, PDF pp. 42-43); `triennale/ANNO 1/analisi 1/Lezioni 2021-22 (manoscritte)/Lezione 2021-12-20.pdf` (p. 1, somma e prodotto); `triennale/ANNO 1/analisi 1/Lezioni 2021-22 (manoscritte)/Lezione 2021-12-22.pdf` (p. 1, equazioni non algebriche). La dispensa Mazzi `complessi.pdf` è una scansione non trascritta.
- **Algebra lineare** (triennale): $\mathbb C$ è uno dei campi degli scalari; $\mathbb C^n$ è l'estensione di $\mathbb R^n$ e uno spazio vettoriale su $\mathbb C$; gli autovalori di una matrice reale possono essere complessi. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/4_Calcolo_vettoriale_K^n.pdf` (p. 4-5); `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/polinomi-slides.pdf` (R. Notari).
- **Metodi matematici e probabilità** (triennale): punto di partenza dell'analisi complessa. $z=(x,y)$ come coppia ordinata con somma e prodotto (1.3)-(1.4), identificazione $\mathbb R\subset\mathbb C$, immaginari puri, coordinate cartesiane (§1.1.1-1.1.2). Il modulo dà la distanza su cui si costruiscono intorni e domini. Fonte: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 1.pdf` (pp. 1-5); richiami in `1 - Numeri Complessi (2).pdf`.
- **Istituzioni algebra** (triennale): $\mathbb C$ come struttura algebrica.
  - $\mathbb C|\mathbb R$ è un'estensione di grado 2 con base $\{1,i\}$.
  - $\mathbb R[x]/(x^2+1)\simeq\mathbb C$, tramite la valutazione $p(x)\mapsto p(i)$ e il teorema fondamentale degli omomorfismi.
  - Il coniugio è un isomorfismo di anelli che fissa $\mathbb R$, quindi le radici non reali di un polinomio reale vengono a coppie coniugate.
  - $\mathbb Z[i]$ è un sottoanello, e $\mathbb C$ è un sottocampo dei quaternioni.

  Fonti: `triennale/ANNO 2/istituzioni/Alg-13-12-22.pdf` (lezioni 31/32, pp. 3, 7-8); `triennale/ANNO 2/istituzioni/Alg-14-12-22.pdf` (lezioni 33/34, p. 4); `triennale/ANNO 2/istituzioni/Alg-07-10-22.pdf` (lezione 19, p. 8).

## Prerequisiti
- [[Assiomi dei numeri reali]]: C è un campo come R

## Porta a
- [[Forma trigonometrica ed esponenziale dei numeri complessi]]: modulo e coordinate polari
- [[Teorema fondamentale dell'algebra]]: radici complesse coniugate
- [[Topologia del piano complesso]]: il modulo come distanza definisce intorni e domini

## Collegati
- [[Teorema fondamentale degli omomorfismi di anelli]]: $\mathbb R[x]/(x^2+1)\simeq\mathbb C$
- [[Estensione di campi]]: $[\mathbb C:\mathbb R]=2$
- [[Valore assoluto]]: il modulo estende |x| al piano
- [[Spazio vettoriale]]: C è un campo e C^n uno spazio vettoriale su C
