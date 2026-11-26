---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["weak-* convergence", "weak star convergence", "convergenza debole*", "convergenza debole stella", "φ_n ⇀* φ", "convergenza puntuale di funzionali"]
tags: [competenza, area/analisi]
---

# Convergenza debole-star

> Nel duale di uno spazio di Banach, $\varphi_n\overset{*}{\rightharpoonup}\varphi$ significa convergenza puntuale dei funzionali: $\varphi_n(x)\to\varphi(x)$ per ogni $x\in X$.

## Definizione / enunciato
Sia $X$ di Banach, $(\varphi_n)\subseteq X'$, $\varphi\in X'$. $\varphi_n$ **converge debolmente\*** a $\varphi$ se
$$\varphi_n(x)\to\varphi(x)\qquad\forall x\in X.$$
Sul duale ci sono tre convergenze: in norma $\Rightarrow$ debole ($\Lambda(\varphi_n)\to\Lambda(\varphi)$ per ogni $\Lambda\in X''$) $\Rightarrow$ debole\*; l'implicazione debole $\Leftarrow$ debole\* vale se $X$ è riflessivo. Il limite debole\* è unico.
Prop. 9.28: se $\varphi_n\overset{*}{\rightharpoonup}\varphi$, $(\varphi_n)$ è limitata e $\|\varphi\|\le\liminf_n\|\varphi_n\|$ (Banach-Steinhaus).
Prop. 9.29: se $\overline{\operatorname{span}\Delta}=X$, $\varphi_n\overset{*}{\rightharpoonup}\varphi\iff(\varphi_n)$ limitata e $\varphi_n(x)\to\varphi(x)$ per $x\in\Delta$.

## Formule chiave
Identificando $L^\infty=(L^1)'$, $\ell^\infty=(\ell^1)'$, $\ell^1=(c_0)'$:
- $f_n\overset{*}{\rightharpoonup}f$ in $L^\infty(M)\iff\int f_ng\,d\mu\to\int fg\,d\mu$ per ogni $g\in L^1$ $\iff$ limitata e $\int_Ef_n\to\int_Ef$ per ogni $E$ di misura finita;
- $x^{(n)}\overset{*}{\rightharpoonup}x$ in $\ell^\infty$ o in $\ell^1$ $\iff$ limitata e convergente componente per componente.
Per $q\in(1,\infty)$ in $L^q$ e $\ell^q$ coincide con la convergenza debole.

## Intuizione
È la convergenza più debole che resta "sensata" sul duale, e proprio perché chiede poco permette di estrarre sottosuccessioni convergenti da ogni successione limitata (Banach-Alaoglu). Prop. 9.23 la confronta con le altre due: la debole implica la debole\*, e il viceversa vale sui duali di spazi riflessivi.

## Come si usa
Si usa sui duali non riflessivi ($L^\infty$, $\ell^\infty$, $\ell^1$), dove la convergenza debole è troppo forte: per verificarla basta la limitatezza più la convergenza su un insieme con span denso.

## Nei corsi
- **Analisi funzionale** (triennale): §9.3 "Convergenza debole sul duale" (Def. 9.21, Prop. 9.23, 9.25, 9.28-9.29, Cor. 9.30). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 140-144); `triennale/ANNO 3/analisi funzionale/08_biduale_handout.pdf` (pp. 8-11).

## Prerequisiti
- [[Spazio duale]]: successioni nel duale
- [[Teorema di Banach-Steinhaus]]: limitatezza delle successioni debolmente* convergenti
- [[Spazio riflessivo]]: confronto con la convergenza debole

## Porta a
- [[Teorema di Banach-Alaoglu]]: compattezza debole* sequenziale della palla del duale

## Collegati
- [[Convergenza debole in spazi normati]]: nozione più forte sul duale
- [[Convergenza di distribuzioni]]: le distribuzioni convergono puntualmente sulle funzioni test, come nella debole*
