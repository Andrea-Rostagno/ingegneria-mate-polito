---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["dual of Lp spaces", "duale di ℓp", "duale di Lp", "il duale di Lp è Lq", "duale di c0", "accoppiamento di dualità", "duality pairing", "norma per dualità"]
tags: [competenza, area/analisi]
---

# Duale degli spazi Lp

> Per $1\le p<\infty$ il duale di $L^p$ (e di $\ell^p$) si identifica isometricamente con $L^q$ ($\ell^q$), con $q$ esponente coniugato; il duale di $c_0$ è $\ell^1$, mentre il duale di $\ell^\infty$ è più grande di $\ell^1$.

## Definizione / enunciato
Siano $p,q\in[1,\infty]$ coniugati.
**Teor. 8.10.** $\Psi:\ell^q\to(\ell^p)'$, $\Psi(y)(x)=\sum_kx_ky_k$, è un'isometria lineare; se $p\ne\infty$ è un **isomorfismo isometrico**.
**Teor. 8.13.** $\Psi:\ell^1\to(c_0)'$, $\Psi(y)(x)=\sum_kx_ky_k$, è un isomorfismo isometrico.
**Teor. 8.15.** Se $(M,\mathcal M,\mu)$ è $\sigma$-finito, $\Psi:L^q(M)\to L^p(M)'$, $\Psi(g)(f)=\int_Mfg\,d\mu$, è un'isometria lineare, e un isomorfismo isometrico se $p<\infty$.

## Formule chiave
Norma per dualità (Cor. 8.17), $\mu$ $\sigma$-finita:
$$\|f\|_{L^p(M)}=\sup\Big\{\Big|\int_Mfg\,d\mu\Big|:\ g\in L^q(M),\ \|g\|_{L^q}\le1\Big\}.$$
Caso $p=\infty$: $\Psi(\ell^1)$ è un sottospazio chiuso proprio di $(\ell^\infty)'$; infatti $(\ell^\infty)'\not\cong\ell^1$ (Cor. 8.44) perché $\ell^1$ è separabile e $\ell^\infty$ no. Analogamente il duale di $L^\infty(I)$ non è isomorfo a $L^1(I)$.

## Intuizione
Hölder dice che ogni $g\in L^q$ produce un funzionale su $L^p$ di norma al più $\|g\|_q$; la parte profonda è che la norma è esattamente $\|g\|_q$ (si sceglie un $f$ "allineato" con $g$) e che, per $p<\infty$, non ci sono altri funzionali. Per $p=2$ si ritrova Riesz-Fréchet.

## Come si usa
Informalmente "il duale di $\ell^p$ è $\ell^q$", "il duale di $c_0$ è $\ell^1$". Serve a descrivere concretamente convergenza debole e debole* ($f_n\rightharpoonup f$ in $L^p$ $\iff\int f_ng\to\int fg$ per ogni $g\in L^q$), a dimostrare che $L^p$ ($1<p<\infty$) è riflessivo e a calcolare norme per dualità.

## Nei corsi
- **Analisi funzionale** (triennale): §8.3 "Duale degli spazi ℓp e Lp" (Teor. 8.10, 8.13, 8.15, Cor. 8.17) e §8.5 (Prop. 8.42, Cor. 8.44). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 117-121, 131-132); `triennale/ANNO 3/analisi funzionale/07_duale_handout.pdf` (pp. 5-6, 11).

## Prerequisiti
- [[Disuguaglianza di Hölder]]: limitatezza dei funzionali φ_g
- [[Spazi Lp]]: spazi di cui si calcola il duale
- [[Spazi di successioni lp]]: caso discreto
- [[Spazio duale]]: definizione di X'
- [[Isometria lineare]]: le identificazioni sono isomorfismi isometrici

## Porta a
- [[Spazio riflessivo]]: Lp riflessivo per 1 < p < ∞
- [[Convergenza debole in spazi normati]]: descrizione concreta in Lp

## Collegati
- [[Teorema di rappresentazione di Riesz-Fréchet]]: caso p = 2
- [[Spazio di misura]]: serve la σ-finitezza
- [[Norma duale]]: in dimensione finita la duale di ‖·‖1 è ‖·‖∞
