---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra, Crittografia]
livello: [triennale, magistrale]
aliases: ["Fermat's little theorem", "piccolo teorema di Fermat", "a^(p-1) ≡ 1 mod p", "congruenza di potenze", "freshman's dream", "(a+b)^p ≡ a^p + b^p"]
tags: [competenza, area/algebra-geometria]
---

# Piccolo teorema di Fermat

> Se $p$ è primo e non divide $a$, allora $a^{p-1}\equiv1\pmod p$. È il teorema di Lagrange applicato al gruppo moltiplicativo $\mathbb Z_p^*$.

## Definizione / enunciato
**Prop. 3.** In $\mathbb Z_n$, $\bar a$ è invertibile $\iff\mathrm{MCD}(a,n)=1$.
**Cor. 4.** Se $p$ è primo, $\mathbb Z_p$ è un campo.

**Teorema 7 (piccolo teorema di Fermat).** Sia $p$ un primo positivo e $a\in\mathbb Z$ non divisibile per $p$. Allora
$$a^{p-1}\equiv1\pmod p.$$

**Prop. 8.** Per $p$ primo e $a,b\in\mathbb Z$: $(a+b)^p\equiv a^p+b^p\pmod p$.

**Esercizio (p. 23).** Per ogni $a\in\mathbb Z$ vale $a^p\equiv a\pmod p$. Se $p\nmid a$, da $a(a^{p-1}-1)\equiv0$ si ritrova il teorema; il testo stampato scrive "$p$ divide $a^{p-1}$" invece di $a^{p-1}-1$.

## Formule chiave
$$a^{p-1}\equiv1\pmod p\ \ (p\nmid a),\qquad a^p\equiv a\pmod p,\qquad (a+b)^p\equiv a^p+b^p\pmod p$$

## Intuizione
$\mathbb Z_p^*$ è un gruppo con $p-1$ elementi, e per Lagrange l'ordine di $\bar a$ divide $p-1$, quindi $\bar a^{p-1}=\bar1$. La formula $(a+b)^p\equiv a^p+b^p$ vale perché $p\mid\binom pi$ per $0<i<p$: $p$ divide $p!$ ma non $i!(p-i)!$.

## Come si usa
- **Ridurre gli esponenti:** se $a\equiv r$ allora $a^k\equiv r^k$. Esempio delle dispense: $2^5\equiv1\pmod{31}$, quindi $2^{62}=(2^5)^{12}\cdot2^2\equiv4\pmod{31}$.
- **Calcolare inversi:** in $\mathbb Z_p$, $\bar a^{-1}=\bar a^{p-2}$, perché $\bar a^{p-1}=\bar1$. È una conseguenza immediata ricavata da me, non scritta nelle dispense.
- **Seconda dimostrazione:** per induzione su $a\in\mathbb N$, usando la Prop. 8 con $b=1$.
- **Campi finiti:** la stessa idea, $a^{|K^*|}=1$ in $K^*$, dà che gli elementi di un campo con $p^n$ elementi sono le radici di $x^{p^n}-x$.

## Nei corsi
- **Istituzioni algebra** (triennale): lezioni 25-26, sezione "Piccolo teorema di Fermat e numeri primi" (numerazione propria da p. 18). Fonti: `triennale/ANNO 2/istituzioni/Alg-30-11-22.pdf` (lezioni 25-26, pp. 18-23).
- **Crittografia** (magistrale): compare tra i risultati dell'Esercizio 3.7.1, che li elenca insieme come caso particolare di una catena. La catena comprende: il teorema di Eulero $m^{\varphi(n)}\equiv1\pmod n$ per $m\in\mathbb Z_n^\times$; la forma generalizzata $m^{\varphi(n)+1}\equiv m$ per $n$ square free; Fermat; Wilson $\prod_{m\in\mathbb Z_p^\times}m\equiv-1\pmod p$. Vicino a Fermat c'è il **criterio di Lucas**: $N$ è primo se e solo se esiste $g$ con $g^{N-1}\equiv1\pmod N$ e $g^d\not\equiv1$ per gli altri divisori $d$ di $N-1$ (NOTA 3.7.4). È la base del test di primalità di Fermat e della correttezza di RSA. Fonti: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week3.pdf` (Critto 3 §3.7, pp. 26-28 del PDF).

## Prerequisiti
- [[Classi di resto modulo n]]: congruenze e campo $\mathbb Z_p$
- [[Teorema di Lagrange sui gruppi]]: l'ordine di $\bar a$ divide $|\mathbb Z_p^*|=p-1$
- [[Identità di Bézout]]: invertibilità in $\mathbb Z_n$ (Prop. 3)

## Porta a
- [[Campo finito]]: $a^{p^n}=a$ e automorfismo di Frobenius
- [[Test di primalità]]: test di Fermat e pseudoprimi (Crittografia)
- [[Funzione phi di Eulero]]: il teorema di Eulero generalizza Fermat a $\mathbb Z_n^\times$ (Crittografia)

## Collegati
- [[Calcolo combinatorio]]: $p$ divide $\binom pi$ per $0<i<p$
