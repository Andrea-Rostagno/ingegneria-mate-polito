---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["monotone convergence theorem for sequences", "successioni monotone", "monotone sequences"]
tags: [competenza, area/analisi]
---

# Teorema sulle successioni monotone

> Una successione monotona ha sempre limite: converge al suo sup (o inf) se è limitata, diverge altrimenti. Da qui nasce il numero $e$.

## Definizione / enunciato
$\{a_n\}$ è crescente se $a_n\le a_{n+1}$ per ogni $n$, decrescente se $a_n\ge a_{n+1}$ (Mazzi, prop. 1.4).

**Teorema (Morandotti 2.2.16).** Ogni successione monotona è regolare. Se è crescente, converge se è superiormente limitata e diverge a $+\infty$ altrimenti; se è decrescente, converge se è inferiormente limitata e diverge a $-\infty$ altrimenti. Più precisamente (cor. 2.2.17)
$$\{a_n\}\ \text{crescente}\Rightarrow\lim_n a_n=\sup_n a_n,\qquad \{a_n\}\ \text{decrescente}\Rightarrow\lim_n a_n=\inf_n a_n.$$

**Il numero $e$** (Mazzi, prop. 1.9; Morandotti, def. 2.2.20): $a_n=\left(1+\frac1n\right)^n$ è crescente e $a_n\le3$, quindi converge; si pone
$$e=\lim_{n\to\infty}\left(1+\frac1n\right)^n,\qquad a_n\in(2,3].$$

## Formule chiave
$$\ell=\sup_n a_n:\quad \ell-\varepsilon<a_{\nu_\varepsilon}\le a_n\le\ell<\ell+\varepsilon\quad\forall n>\nu_\varepsilon$$

## Intuizione
Una successione crescente non può tornare indietro: o sale senza limite, o si accumula sotto il suo sup. La dimostrazione usa solo la definizione di sup: per ogni $\varepsilon$ un termine supera $\ell-\varepsilon$, e per monotonia anche tutti i successivi.

## Come si usa
È il modo standard per dimostrare la convergenza senza conoscere il limite: si prova monotonia e limitatezza. Morandotti (es. 2.2.18) studia $a_n=\sum_{k=1}^n\frac1{n+k}$ (primi termini $0{,}5$; $0{,}58\overline3$; $0{,}61\overline6$; $\approx0{,}635$). Il limite $(1+1/n)^n\to e$ è il prototipo della forma indeterminata $1^\infty$ e da esso discendono $\log(1+a_n)/a_n\to1$ e $(e^{a_n}-1)/a_n\to1$ se $a_n\to0$.

## Nei corsi
- **Analisi 1** (triennale): "teorema sui limiti di successioni monotone. Il numero e". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (teor. 2.2.16, cor. 2.2.17, es. 2.2.18, def. 2.2.20, PDF pp. 73-76); `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/0.Limiti-totale.pdf` (cor. 1.14, §1.10, prop. 1.9, pp. 32-34).

## Prerequisiti
- [[Limite di successione]]: definizione di convergenza
- [[Estremo superiore e inferiore]]: il limite è il sup

## Porta a
- [[Criteri del rapporto e della radice per successioni]]: la successione è definitivamente monotona
- [[Teorema degli zeri]]: gli estremi di bisezione convergono
- [[Limiti notevoli]]: definisce il numero e

## Collegati
- Nessuno.
