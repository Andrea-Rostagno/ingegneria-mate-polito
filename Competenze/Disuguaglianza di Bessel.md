---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["Bessel's inequality", "disuguaglianza di Bessel", "serie ortonormali", "convergenza di Σ α_n e_n", "insieme ortonormale", "orthonormal set"]
tags: [competenza, area/analisi]
---

# Disuguaglianza di Bessel

> I coefficienti di un vettore rispetto a un insieme ortonormale hanno somma dei quadrati al più pari al quadrato della norma; e una serie $\sum\alpha_ne_n$ converge esattamente quando $(\alpha_n)\in\ell^2$.

## Definizione / enunciato
Un insieme $S\subseteq H$ è **ortonormale** se $\langle e_i,e_j\rangle=\delta_{i,j}$ (Def. 6.21, Oss. 6.22); un insieme ortogonale di vettori non nulli è linearmente indipendente e vale Pitagora $\|x_1+\dots+x_n\|^2=\sum\|x_j\|^2$ (Prop. 6.23).
**Prop. 6.36 (Bessel).** Sia $H$ pre-hilbertiano e $\{e_n\}_{n\in\mathbb N}$ ortonormale. Per ogni $x\in H$:
$$\sum_{n=0}^\infty|\langle x,e_n\rangle|^2\le\|x\|^2,\qquad\text{in particolare }(\langle x,e_n\rangle)_n\in\ell^2.$$
**Teor. 6.37.** Sia $H$ di Hilbert, $\{e_n\}$ ortonormale e $\alpha\in\mathbb F^{\mathbb N}$. La serie $\sum_n\alpha_ne_n$ converge in $H$ se e solo se $\alpha\in\ell^2$, e allora
$$\Big\|\sum_{n=0}^\infty\alpha_ne_n\Big\|=\|\alpha\|_2,\qquad\Big\langle\sum_{n=0}^\infty\alpha_ne_n,e_k\Big\rangle=\alpha_k.$$

## Formule chiave
Nel caso finito: con $x_N=\sum_{n=0}^N\langle x,e_n\rangle e_n$ si ha $x-x_N\perp e_n$ per $n\le N$, quindi $\|x\|^2=\|x_N\|^2+\|x-x_N\|^2\ge\sum_{n\le N}|\langle x,e_n\rangle|^2$.
Prop. 6.39: se $Y=\overline{\operatorname{span}}\{e_n\}$, allora $P_Yx=\sum_n\langle x,e_n\rangle e_n$ (serie convergente in $H$).

## Intuizione
$x_N$ è la proiezione di $x$ sullo spazio generato dai primi $N+1$ vettori: la sua norma non può superare quella di $x$. L'uguaglianza (Parseval) vale esattamente quando l'insieme ortonormale "vede" tutto $H$.

## Come si usa
Bessel garantisce che i coefficienti $\langle x,e_n\rangle$ siano in $\ell^2$, e allora il Teor. 6.37 dice che la serie converge: insieme danno la formula della proiezione sul sottospazio generato. Esempio: la base canonica $e^{(n)}$ di $\ell^2$ (Es. 6.34). Una serie $\sum\alpha_ne_n$ con $\alpha\in\ell^2\setminus\ell^1$ converge senza convergere assolutamente (Oss. 6.38).

## Nei corsi
- **Analisi funzionale** (triennale): §6.2-6.3 (Def. 6.21, Prop. 6.23, Es. 6.34, Prop. 6.36, Teor. 6.37, Oss. 6.38, Prop. 6.39). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 68, 76-80).

## Prerequisiti
- [[Spazio di Hilbert]]: prodotto scalare e completezza
- [[Proiezione ortogonale di un vettore]]: x_N è la proiezione sui primi vettori

## Porta a
- [[Base ortonormale di uno spazio di Hilbert]]: quando vale l'uguaglianza

## Collegati
- [[Identità di Parseval]]: caso di uguaglianza per sistemi completi
- [[Spazi di successioni lp]]: i coefficienti stanno in ℓ^2
