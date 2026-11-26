---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["residue theorem", "teorema di Cauchy dei residui", "integrali con i residui", "calcolo di integrali con il teorema dei residui"]
tags: [competenza, area/analisi]
---

# Teorema dei residui

> L'integrale di $f$ su un cammino chiuso semplice è $2\pi i$ per la somma dei residui delle singolarità interne: il calcolo di un integrale diventa il calcolo di pochi coefficienti.

## Definizione / enunciato
**Teorema 3.24.** Sia $C$ un cammino chiuso e semplice (antiorario) e $f$ analitica dentro e su $C$ eccetto un numero finito di singolarità $z_1,\dots,z_n$ interne a $C$. Allora
$$\oint_C f(z)\,dz=2\pi i\sum_{k=1}^{n}\operatorname{Res}f(z_k).$$

## Formule chiave
Dimostrazione: si tolgono dischi disgiunti $B_{r_k}(z_k)$ e si applica il teorema di Cauchy al dominio con bordo che resta:
$$0=\oint_{C_0}f\,dz=\oint_Cf\,dz-\sum_{k=1}^n\oint_{C_k}f\,dz=\oint_Cf\,dz-2\pi i\sum_{k=1}^n\operatorname{Res}f(z_k).$$

## Intuizione
Generalizza sia Cauchy-Goursat (nessuna singolarità: integrale nullo) sia la formula integrale di Cauchy ($\frac{f(z)}{z-z_0}$ ha residuo $f(z_0)$). Ogni singolarità contribuisce solo con il suo $c_{-1}$ (Oss. 3.25).

## Come si usa
Procedura (Richiami dell'esercitazione 6): trovare le singolarità, classificare quelle interne alla curva, calcolarne i residui, sommare.
- Esempio 3.26 i): $\oint_{|z|=3}\frac{z}{z^2-1}dz=2\pi i\big(\frac12+\frac12\big)=2\pi i$.
- Esempio 3.26 ii): sul bordo del quadrato $[-1,1]\times[-1,1]$, $\oint e^{1/z}dz=2\pi i\cdot1=2\pi i$.
- Altri usi nel corso: integrali reali su $\mathbb R$ chiudendo con semicirconferenze (calcolo di trasformate di Fourier nell'esercitazione 8, `11 - Trasformata di Fourier di Funzioni (2).pdf`) e antitrasformata di Laplace di funzioni razionali.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): §3.5, Teorema 3.24. Fonti: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 3 (1).pdf` (pp. 19-20 del PDF); `8 - Teorema dei Residui.pdf` (Richiami di teoria).

## Prerequisiti
- [[Residuo]]: somma dei residui interni
- [[Teorema di Cauchy-Goursat]]: applicato al dominio con bordo

## Porta a
- [[Antitrasformata di Laplace]]: antitrasformata di funzioni razionali con i residui

## Collegati
- Nessuno.
