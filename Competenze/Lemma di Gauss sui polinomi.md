---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra]
livello: [triennale]
aliases: ["Gauss's lemma (polynomials)", "lemma di Gauss", "polinomio primitivo", "primitive polynomial", "contenuto di un polinomio", "raccoglimento a fattore comune", "test delle radici razionali", "rational root test", "irriducibilità su Q e su Z"]
tags: [competenza, area/algebra-geometria]
---

# Lemma di Gauss sui polinomi

> Il prodotto di due polinomi interi primitivi è primitivo. Ne segue che l'irriducibilità su $\mathbb Q$ si riduce all'irriducibilità su $\mathbb Z$ di un polinomio primitivo.

## Definizione / enunciato
**Def. 6.** $f=a_0+\dots+a_nx^n\in\mathbb Z[x]$, non nullo, è **primitivo** se $\mathrm{MCD}(a_0,\dots,a_n)=1$.

**Lemma 8.** Ogni $0\neq f\in\mathbb Z[x]$ si scrive $f=df_0$ con $d\in\mathbb Z$ e $f_0$ primitivo, in modo unico a meno del segno.
**Lemma 9.** Ogni $0\neq f\in\mathbb Q[x]$ si scrive $f=\gamma f_0$ con $\gamma\in\mathbb Q$ e $f_0\in\mathbb Z[x]$ primitivo, in modo unico a meno del segno.

**Lemma di Gauss.** Il prodotto di polinomi interi primitivi è primitivo.

**Prop. 10.** Se $f=\gamma f_0$ come sopra, allora $f$ è irriducibile in $\mathbb Q[x]$ $\iff$ $f_0$ è irriducibile in $\mathbb Z[x]$.

**Oss. 12 (radici razionali).** Se $u=a/b$, con $\mathrm{MCD}(a,b)=1$ e $b\ge1$, è radice di $f=\sum a_ix^i\in\mathbb Z[x]$, allora $a\mid a_0$ e $b\mid a_n$. In particolare le radici razionali di un polinomio monico intero sono intere e dividono $a_0$.

## Formule chiave
$$f\ \text{primitivo}\iff\varphi_p(f)\neq\bar0\ \text{in}\ \mathbb Z_p[x]\ \ \forall p\ \text{primo}$$

## Intuizione
Si riducono i coefficienti modulo un primo $p$ con $\varphi_p:\mathbb Z[x]\to\mathbb Z_p[x]$.
- Un polinomio non è primitivo se e solo se esiste un primo $p$ che lo manda a zero.
- Se $fg$ non fosse primitivo, $\bar0=\varphi_p(f)\varphi_p(g)$, e poiché $\mathbb Z_p[x]$ è un dominio uno dei due fattori si annulla.

## Come si usa
- **Raccoglimento:** si raccoglie il MCD dei coefficienti o il denominatore comune, e si studia il polinomio primitivo che resta.
- **Esempio (lezioni 31/32, p. 18):** $f=\tfrac23x^4+x^3+\tfrac16x^2-\tfrac12x-\tfrac23=\tfrac16(4x^4+6x^3+x^2-3x-4)$, e il secondo fattore è primitivo. Si continua con il criterio di riduzione modulo $p$.
- **Test delle radici razionali:** per le radici di $f$ basta provare le frazioni con numeratore che divide $a_0$ e denominatore che divide $a_n$. La dimostrazione usa $g(x)=x^nf(1/x)$ per scambiare i ruoli di $a_0$ e $a_n$.

## Nei corsi
- **Istituzioni algebra** (triennale): lezioni 31/32, "Polinomi a coefficienti in $\mathbb Z$ e $\mathbb Q$". Fonti: `triennale/ANNO 2/istituzioni/Alg-13-12-22.pdf` (lezioni 31/32, pp. 9-18).

## Prerequisiti
- [[Polinomio irriducibile]]: definizione di irriducibilità
- [[Teorema fondamentale dell'aritmetica]]: MCD dei coefficienti e primi
- [[Classi di resto modulo n]]: riduzione modulo $p$ in $\mathbb Z_p[x]$

## Porta a
- [[Criterio di Eisenstein]]: si applica al polinomio primitivo

## Collegati
