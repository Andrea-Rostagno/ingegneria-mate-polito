---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [strong Markov property of Brownian motion, filtrazione aumentata, augmented filtration, usual conditions, ipotesi abituali, versioni di un processo, proprietà di Markov del moto browniano]
tags: [competenza, area/probabilita]
---

# Proprietà di Markov forte del moto browniano

> Il moto browniano dimentica il passato non solo ai tempi fissi ma anche ai tempi d'arresto, persino rispetto alla filtrazione aumentata $\mathcal F_{t+}$.

## Definizione / enunciato
**Markov.** Per ogni boreliano $B$ e $t,h\ge0$, con $(\mathcal F_t)$ filtrazione naturale:
$$P(W_{t+h}\in B\mid\mathcal F_t)=P(W_{t+h}\in B\mid W_t).$$
**Markov forte.** Per ogni tempo d'arresto $\tau$ rispetto a $(\mathcal F_t)$, ogni $A\in\mathcal F_\tau$, $x\in\mathbb R$, $h\ge0$:
$$P(W_{\tau+h}\in B\mid W_\tau=x,\ \tau<\infty,\ A)=P(W_{t+h}\in B\mid W_t=x).$$
**Versione "più forte".** Lo stesso vale per tempi d'arresto rispetto alla filtrazione aumentata e per $A\in\mathcal F_{\tau+}$, dove
$$\mathcal F_{t+}=\sigma\Big(\bigcap_{s>t}\mathcal F_s\cup\mathcal N\Big),\qquad\mathcal N=\{A\subset\Omega:\exists G\in\mathcal F,\ A\subseteq G,\ P(G)=0\}.$$
Teorema non banale, non dimostrato a lezione. Una filtrazione è aumentata (ipotesi abituali) se è completa e continua a destra.

## Formule chiave
Prova della Markov semplice, dall'indipendenza degli incrementi:
$$P(W_{t+h}\in B\mid\mathcal F_t)=P(W_{t+h}-W_t+W_t\in B\mid\mathcal F_t)=P(W_{t+h}-W_t+W_t\in B\mid W_t).$$

## Intuizione
L'incremento dopo $t$ è indipendente da tutto ciò che è successo prima; la versione forte dice che lo stesso vale a un istante aleatorio che "non guarda il futuro". Aumentare la filtrazione aggiunge solo l'informazione infinitesimamente successiva e gli eventi trascurabili, senza rompere la proprietà.

## Come si usa
Il `.tex` la enuncia così: per $T$ tempo d'arresto, $(W_{T+t}-W_T)_{t\ge0}$ è, sotto ipotesi standard, un moto browniano indipendente dal passato fino a $T$. È esattamente la proprietà di rinnovo, base del principio di riflessione; con la Markov rispetto a $\mathcal F_{t+}$ si mostra anche che $W$ è martingala rispetto alla filtrazione aumentata (esercizio D: lo stesso per $W_t^2-t$).

## Nei corsi
- **Processi stocastici** (magistrale): argomento d'orale 17 ("proprietà di Markov forte rispetto alla filtrazione aumentata"); il programma dice che l'argomento presuppone tempi d'arresto e proprietà di Markov. Fonti: `magistrale/Processi stocastici/Lezione_23_09_12.pdf` (lezione 23), `magistrale/Processi stocastici/Lezione_24_15_12.pdf` (lezione 24, recap), `magistrale/Processi stocastici/Lezione_22_02_12.pdf` (lezione 22, filtrazione aumentata e versioni), `riassunto_del_corso.tex` §Moto browniano.

## Prerequisiti
- [[Moto browniano]]: incrementi indipendenti dal passato
- [[Filtrazione]]: rispetto alla filtrazione aumentata

## Porta a
- [[Proprietà di rinnovo del moto browniano]]: riparte dopo un tempo d'arresto

## Collegati
- [[Proprietà di Markov forte]]: versioni per catene e per browniano
