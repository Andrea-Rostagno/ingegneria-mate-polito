---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["Hölder's inequality", "disuguaglianza di Holder", "esponenti coniugati", "conjugate exponents", "disuguaglianza di Young", "Young's inequality"]
tags: [competenza, area/analisi]
---

# Disuguaglianza di Hölder

> Stima l'integrale (o la serie) di un prodotto con il prodotto delle norme $p$ e $q$, con $1/p+1/q=1$: è la generalizzazione di Cauchy-Schwarz e la base della teoria degli spazi $L^p$.

## Definizione / enunciato
$q\in[1,\infty]$ è l'**esponente coniugato** di $p\in[1,\infty]$ se $\frac1p+\frac1q=1$ (con $1/\infty=0$).
**Young (Prop. 5.13).** Se $p,q\in(1,\infty)$ sono coniugati: $\ ab\le\dfrac{a^p}{p}+\dfrac{b^q}{q}$ per ogni $a,b\ge0$.
**Hölder (Prop. 5.14, Teor. 5.24).** Se $p,q\in[1,\infty]$ sono coniugati:
$$\Big|\sum_{k=0}^\infty x_ky_k\Big|\le\sum_{k=0}^\infty|x_ky_k|\le\|x\|_p\|y\|_q\qquad x\in\ell^p,\ y\in\ell^q,$$
$$\Big|\int_Mfg\,d\mu\Big|\le\int_M|fg|\,d\mu\le\|f\|_p\|g\|_q\qquad f\in L^p,\ g\in L^q,$$
e la serie converge assolutamente.

## Formule chiave
Esponenti coniugati: $p-1=\dfrac{1}{q-1}$, quindi $y=x^{p-1}\iff x=y^{q-1}$.
Caso $p=q=2$: $|\langle x,y\rangle|\le\|x\|_2\|y\|_2$ (Cauchy-Schwarz).

## Intuizione
Young ha una prova geometrica (Fig. 1 delle note): le aree $\int_0^ax^{p-1}dx=a^p/p$ e $\int_0^by^{q-1}dy=b^q/q$ sotto e a sinistra della curva $y=x^{p-1}$ ricoprono il rettangolo $a\times b$. Hölder: i casi $p=1$, $q=\infty$ (e viceversa) sono immediati; per $p,q\in(1,\infty)$ le note trattano prima il caso $\|x\|_p=\|y\|_q=1$ (dove si applica Young termine a termine) e poi si normalizza.

## Come si usa
- Garantisce che $\varphi_y(x)=\sum x_ky_k$ e $\varphi_g(f)=\int fg\,d\mu$ siano funzionali limitati su $\ell^p$, $L^p$ con norma $\le\|y\|_q$, $\|g\|_q$: è il primo passo per identificare il duale di $L^p$ con $L^q$.
- Dimostra la disuguaglianza di Minkowski.
- Su uno spazio di misura finita dà $\|f\|_p\le\mu(M)^{1/p-1/q}\|f\|_q$ per $p\le q$.

## Nei corsi
- **Analisi funzionale** (triennale): Def. 5.11, Prop. 5.13 (Young, con figura), Prop. 5.14 (successioni), Teor. 5.24 (funzioni). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 48-50, 54); `triennale/ANNO 3/analisi funzionale/04_spaziLp_handout.pdf` (pp. 3, 5).

## Prerequisiti
- [[Integrale di Lebesgue]]: versione integrale della disuguaglianza
- [[Integrale di Riemann]]: Young si legge come confronto di aree sotto y = x^(p-1)

## Porta a
- [[Disuguaglianza di Minkowski]]: si dimostra con Hölder
- [[Duale degli spazi Lp]]: limitatezza dei funzionali φ_g

## Collegati
- [[Disuguaglianza di Cauchy-Schwarz]]: caso p = q = 2
- [[Spazi Lp]]: inclusioni su spazi di misura finita
