---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [renewal property, renewal of Brownian motion, ripartenza dopo un tempo d'arresto, rinnovo del moto browniano]
tags: [competenza, area/probabilita]
---

# Proprietà di rinnovo del moto browniano

> Ovunque si inizi a osservare un moto browniano, anche a un tempo d'arresto, si vede un nuovo moto browniano indipendente dal passato.

## Definizione / enunciato
**Teorema (renewal).** Sia $(W_t)$ un moto browniano $d$-dimensionale e $\tau$ un tempo d'arresto rispetto alla filtrazione naturale o aumentata. Allora
$$\big(W_{t+\tau}-W_\tau\big)_{t\ge0}$$
è un moto browniano $d$-dimensionale, indipendente da $\mathcal F_\tau$ e da $\mathcal F_{\tau+}$.

## Formule chiave
Verifica della definizione:
- $W_{0+\tau}-W_\tau=0$;
- $t\mapsto W_{t+\tau}-W_\tau$ è continua q.c. perché lo è $t\mapsto W_t$;
- per $0<t_1<\dots<t_q$:
$$(W_{t_1+\tau}-W_\tau,\dots,W_{t_q+\tau}-W_\tau)\ \overset{d}{=}\ (W_{t_1},\dots,W_{t_q}),$$
per la Markov forte rispetto alla filtrazione aumentata, che dà anche l'indipendenza da $\mathcal F_\tau$ e $\mathcal F_{\tau+}$ (dettagli lasciati come esercizio).

## Intuizione
È una conseguenza diretta della Markov forte: "whenever we start observing a Brownian motion, we see a Brownian motion". Come nei processi di rinnovo, al tempo aleatorio $\tau$ tutto riparte da capo; qui la ripartenza vale per ogni tempo d'arresto, non solo per gli istanti di rinnovo.

## Come si usa
- **Principio di riflessione**: dopo $\tau=\inf\{t:W_t=a\}$ gli incrementi $W_{s+\tau}-W_\tau$ sono un browniano indipendente e si possono sostituire con il loro opposto (simmetria).
- **Inversione temporale**: si usa per ricondurre $\sup_{n\le t\le n+1}(W_t-W_n)^2$ a $\sup_{0\le t\le1}W_t^2$.
- Esercizio M: tempi $\sigma(a)=\inf\{t:W_t\ge a\}$ e $\tau(a)=\inf\{t:W_t>a\}$ coincidono q.c. per $a$ fissato.

## Nei corsi
- **Processi stocastici** (magistrale): argomento d'orale 18 ("renewal"). Il `.tex` la elenca fra le invarianze come "renewal/strong Markov". Fonti: `magistrale/Processi stocastici/Lezione_24_15_12.pdf` (lezione 24), `magistrale/Processi stocastici/Lezione_25_16_12.pdf` (lezione 25), `riassunto_del_corso.tex` §Proprietà di invarianza, `suggested_exercises_brownian_motion.pdf` (es. M).

## Prerequisiti
- [[Proprietà di Markov forte del moto browniano]]: riparte dopo un tempo d'arresto

## Porta a
- [[Principio di riflessione]]: ripartenza al tempo di hitting

## Collegati
- [[Invarianze del moto browniano]]: invarianze elencate nell'argomento 18
- [[Processo di rinnovo]]: analogia con la ripartenza dei rinnovi
