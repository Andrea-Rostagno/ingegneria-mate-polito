---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["monotone convergence theorem", "teorema di Beppo Levi", "Beppo Levi", "integrazione per serie di funzioni non negative"]
tags: [competenza, area/analisi]
---

# Teorema di convergenza monotona

> Per una successione crescente di funzioni misurabili non negative, limite e integrale si scambiano sempre (anche quando il limite vale $+\infty$).

## Definizione / enunciato
**Teorema (Beppo Levi).** Sia $(f_n)_{n\ge1}$ una successione crescente di funzioni misurabili non negative. Allora esiste
$$\lim_n\int_Xf_n\,d\mu=\int_X\lim_nf_n\,d\mu.$$
Vale più in generale se $f_n\nearrow f$ q.o. con $f$ misurabile.
**Corollario.** Per $f_n\ge0$ misurabili: $\displaystyle\int_X\Big(\sum_{n=1}^\infty f_n\Big)d\mu=\sum_{n=1}^\infty\int_Xf_n\,d\mu$.

## Formule chiave
Dimostrazione ($\ge$): fissati $\varepsilon\in(0,1)$ e $\varphi=\sum b_i\mathbb 1_{B_i}\le f$ semplice, $A_n=\{\varepsilon\varphi\le f_n\}\nearrow X$ e per continuità dal basso
$$\varepsilon\int_X\varphi\,d\mu=\lim_n\int_{A_n}\varepsilon\varphi\,d\mu\le\lim_n\int_Xf_n\,d\mu,$$
poi $\varepsilon\to1$ e sup su $\varphi$. L'altra disuguaglianza segue dalla monotonia.

## Intuizione
Con funzioni non negative che crescono non c'è massa che "scappa": l'integrale può solo salire fino all'integrale del limite.

## Come si usa
- Definizione alternativa: se $\varphi_n\in\mathcal S^+$, $\varphi_n\nearrow f$, allora $\int f\,d\mu=\lim_n\int\varphi_n\,d\mu$.
- Linearità per funzioni non negative: $\int(f+g)=\lim\int(f_n+g_n)=\int f+\int g$ (lezione 11).
- Il corollario sulle serie dà la σ-additività di $\nu(A)=\int_Af\,d\mu$ (lezione 13).

## Nei corsi
- **Metodi matematici e probabilità** (triennale): lezioni 10-11; fonte manoscritta. Fonti: `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione10(04-05-23) (1).pdf` (lezione 10, pp. 11-13), `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione11(11-05-23).pdf` (lezione 11, pp. 1-2).

## Prerequisiti
- [[Integrale di Lebesgue]]: passaggio al limite sotto integrale
- [[Continuità della misura]]: usata nella dimostrazione

## Porta a
- [[Lemma di Fatou]]: applicato agli inf delle code

## Collegati
- Nessuno.
