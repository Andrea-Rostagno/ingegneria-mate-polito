---
tipo: competenza
area: probabilita
corsi: [Financial engineering]
livello: [magistrale]
aliases: [local martingale, successione localizzante, localizing sequence, localizzazione, integrale fino a un tempo d'arresto]
tags: [competenza, area/probabilita]
---

# Martingala locale

> Processo che diventa una martingala quando lo si arresta lungo una successione di tempi d'arresto che tende all'infinito: è ciò che è in generale l'integrale di Itô di un integrando in $M^2_{\mathrm{loc}}$.

## Definizione / enunciato
$M=(M_t)_{t\in[0,T]}$ adattato è una **martingala locale** se esiste una successione crescente di tempi d'arresto $\tau_m\to\infty$ (o $\ge T$ da un certo $m$) q.c. tale che ogni processo arrestato $(M_{t\wedge\tau_m})$ sia una martingala (def. c12-martingala-locale).

**Integrale fino a un tempo d'arresto** (prop. c12-arresto): per $X\in M^2_{\mathrm{loc}}([0,T])$ e $\tau\le T$ tempo d'arresto, $X\mathbf 1_{[0,\tau)}\in M^2_{\mathrm{loc}}$ e
$$I_\tau=\int_0^\tau X_u\,dW_u=\int_0^TX_u\mathbf 1_{[0,\tau)}(u)\,dW_u\quad\text{q.c.}$$
**Proposizione** (prop. c12-locale): per $X\in M^2_{\mathrm{loc}}([0,T])$, $I_t=\int_0^tX_u\,dW_u$ è una martingala locale.

## Formule chiave
Successione localizzante: $\tau_m=\inf\{t:\int_0^tX_u^2du\ge m\}$; arrestato, l'integrando sta in $M^2$ e l'integrale è una vera martingala.

## Intuizione
Una martingala locale non è automaticamente una martingala e può non avere media costante: prima di scrivere $\mathbb E[\int X\,dW]=0$ bisogna verificare che $X\in M^2$. Negli esercizi gli integrandi (polinomi o esponenziali di $W$ su intervalli limitati) stanno in $M^2$, ma la verifica fa parte della risposta. Un processo di Itô con drift nullo è una martingala locale.

## Come si usa
Controllo tipico: $X_t=e^{W_t^2}$ su $[0,1]$ ha traiettorie continue (quindi $\int_0^1X^2<\infty$ q.c.) ma $\mathbb E\int_0^1X^2=\infty$: l'integrale esiste ed è solo una martingala locale, senza garanzia di media nulla né isometria.

## Nei corsi
- **Financial engineering** (magistrale): cap. 12 §Localizzazione e martingale locali (dimostrazione con $\tau_m$ come a lezione). Fonti: `Libri/Financial engineering/capitoli/cap12.tex`; lezioni d'origine `magistrale/Financial engineering/onofrio/Lezione 03 - analisi stocastica - 5 maggio 26.pdf`, `Lezione 04 - analisi stocastica - 8 mag 26.pdf`.

## Prerequisiti
- [[Tempo d'arresto]]: successione localizzante
- [[Processo arrestato]]: $M_{t\wedge\tau_m}$
- [[Integrale di Itô]]: caso $M^2_{\mathrm{loc}}$

## Porta a
- [[Processo di Itô]]: con drift nullo è una martingala locale

## Collegati
- [[Martingale a tempo continuo]]: nozione più forte
- [[Isometria di Itô]]: vale solo in $M^2$
