---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità, Analisi funzionale]
livello: [triennale]
aliases: ["Fatou's lemma", "Fatou", "semicontinuità inferiore dell'integrale"]
tags: [competenza, area/analisi]
---

# Lemma di Fatou

> Per funzioni misurabili non negative l'integrale del liminf non supera il liminf degli integrali: nel passaggio al limite si può solo perdere massa, mai guadagnarla.

## Definizione / enunciato
Sia $(f_n)_{n\ge1}$ una successione di funzioni misurabili non negative. Allora
$$\int_X\liminf_nf_n\,d\mu\le\liminf_n\int_Xf_n\,d\mu.$$

## Formule chiave
Dimostrazione: $f=\liminf_nf_n=\sup_n\inf_{k\ge n}f_k$; posto $g_n=\inf_{k\ge n}f_k\ge0$, si ha $g_n\nearrow f$ e $g_n\le f_k$ per $k\ge n$, quindi
$$\int_Xg_n\,d\mu\le\inf_{k\ge n}\int_Xf_k\,d\mu\quad\Longrightarrow\quad\int_Xf\,d\mu=\lim_n\int_Xg_n\,d\mu\le\liminf_n\int_Xf_n\,d\mu$$
(l'uguaglianza è il teorema di Beppo Levi applicato alle $g_n$).

## Intuizione
Non servono né monotonia né dominazione, ma si ottiene solo una disuguaglianza. La positività è essenziale: impedisce che parti negative compensino.

## Come si usa
È lo strumento della dimostrazione del teorema di convergenza dominata: lo si applica alle funzioni non negative $g+f_n$ e $g-f_n$ e si semplifica $\int g\,d\mu$, che è finito.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): lezione 11; fonte manoscritta. Fonte: `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione11(11-05-23).pdf` (lezione 11, pp. 4-5).
- **Analisi funzionale** (triennale): usato nel caso della misura che conta $(\mathbb N,\mathcal P(\mathbb N),\#)$: se $x^{(n)}_k\in[0,\infty]$ e $x_k=\liminf_nx^{(n)}_k$, allora $\sum_kx_k\le\liminf_n\sum_kx^{(n)}_k$. Serve a dimostrare che $\ell^p$ è completo (il limite componente per componente di una successione di Cauchy sta in $\ell^p$). Fonti: `triennale/ANNO 3/analisi funzionale/04_spaziLp_handout.pdf` (p. 4); `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (Prop. 5.18, p. 52).

## Prerequisiti
- [[Teorema di convergenza monotona]]: applicato agli inf delle code

## Porta a
- [[Teorema di convergenza dominata]]: applicato a g+f_n e g-f_n
- [[Spazi di successioni lp]]: completezza di ℓp con la misura che conta (Analisi funzionale)

## Collegati
- Nessuno.
