---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["weak convergence in normed spaces", "convergenza debole negli spazi di Banach", "x_n ⇀ x", "limite debole", "convergenza in norma", "norm convergence", "semicontinuità inferiore della norma"]
tags: [competenza, area/analisi]
---

# Convergenza debole in spazi normati

> $x_n\rightharpoonup x$ se ogni funzionale continuo converge: $\varphi(x_n)\to\varphi(x)$. È più debole della convergenza in norma e permette di recuperare la compattezza in dimensione infinita.

## Definizione / enunciato
$(x_n)$ in $X$ normato **converge debolmente** a $x$ ($x_n\rightharpoonup x$) se
$$\varphi(x_n)\to\varphi(x)\qquad\forall\varphi\in X'.$$
Prop. 9.13: il limite debole è unico (Hahn-Banach) e $x_n\to x$ in norma $\Rightarrow x_n\rightharpoonup x$; se $\dim X<\infty$ le due convergenze coincidono.
Prop. 9.18: se $x_n\rightharpoonup x$, $(x_n)$ è limitata e $\|x\|\le\liminf_n\|x_n\|\le\sup_n\|x_n\|$.
Prop. 9.19: se $\overline{\operatorname{span}\Delta}=X'$, allora $x_n\rightharpoonup x\iff(x_n)$ limitata e $\varphi(x_n)\to\varphi(x)$ per ogni $\varphi\in\Delta$.

## Formule chiave
- Hilbert: $x_n\rightharpoonup x\iff\langle x_n,y\rangle\to\langle x,y\rangle\ \forall y$.
- $L^p(M)$, $p<\infty$, $\sigma$-finita: $f_n\rightharpoonup f\iff\int f_ng\,d\mu\to\int fg\,d\mu\ \forall g\in L^q$.
- $\ell^p$ ($1<p<\infty$) e $c_0$: $x^{(n)}\rightharpoonup x\iff\sup_n\|x^{(n)}\|<\infty$ e $x^{(n)}_k\to x_k$ per ogni $k$.
- $L^p(I)$, $1<p<\infty$: limitatezza più $\int_a^bf_n\to\int_a^bf$ su ogni intervallo limitato.

## Intuizione
Esempio chiave (Oss. 9.15): la base canonica $e^{(n)}$ di $\ell^2$ converge debolmente a 0 ($\langle e^{(n)},y\rangle=y_n\to0$) ma $\|e^{(n)}\|=1$, quindi non converge in norma. La norma può "cadere" al limite debole, mai crescere (semicontinuità inferiore).

## Come si usa
Per verificare $x_n\rightharpoonup x$ si controlla la limitatezza e la convergenza su un insieme di funzionali con span denso (componenti, integrali su intervalli). Abbinata a Banach-Alaoglu dà esistenza di limiti deboli e di minimi.

## Nei corsi
- **Analisi funzionale** (triennale): §9.2 "Convergenza debole" (Def. 9.12, Prop. 9.13, Oss. 9.14-9.15, Prop. 9.16-9.19, Cor. 9.20). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 135-140); `triennale/ANNO 3/analisi funzionale/08_biduale_handout.pdf` (pp. 4-7).

## Prerequisiti
- [[Spazio duale]]: si testa con i funzionali di X'
- [[Teorema di Banach-Steinhaus]]: le successioni deboli sono limitate
- [[Teorema di Hahn-Banach]]: unicità del limite debole
- [[Duale degli spazi Lp]]: descrizione concreta in Lp e ℓp

## Porta a
- [[Teorema di Banach-Alaoglu]]: estrazione di sottosuccessioni debolmente convergenti

## Collegati
- [[Convergenza debole-star]]: analoga nozione sul duale
- [[Convergenza di distribuzioni]]: convergenza debole contro funzioni test
- [[Base ortonormale di uno spazio di Hilbert]]: e_n ⇀ 0 ma ‖e_n‖ = 1
