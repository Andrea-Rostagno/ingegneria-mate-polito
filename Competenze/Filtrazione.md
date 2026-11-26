---
tipo: competenza
area: probabilita
corsi: [Processi stocastici, Financial engineering]
livello: [magistrale]
aliases: ["filtration", "filtrazione naturale", "processo adattato", "processo progressivamente misurabile", "progressively measurable process", "processi indistinguibili", "spazio di probabilità filtrato"]
tags: [competenza, area/probabilita]
---

# Filtrazione

> Famiglia crescente di $\sigma$-algebre che rappresenta l'informazione disponibile nel tempo: serve a definire processi adattati, tempi d'arresto e martingale.

## Definizione / enunciato
Dato uno spazio con $\sigma$-algebra $\mathcal F$, una **filtrazione** è una famiglia $\{\mathcal F_i\}_{i\in I}$ di $\sigma$-algebre tale che
1. $\mathcal F_i\subseteq\mathcal F$ per ogni $i\in I$;
2. $\mathcal F_i\subseteq\mathcal F_j$ per ogni $i<j$.

Un processo $\{X_i\}_{i\in I}$ è **adattato** a $\{\mathcal F_i\}$ se $X_i$ è $\mathcal F_i$-misurabile per ogni $i$. La **filtrazione naturale** di $X$ è $\mathcal F_i=\sigma\{X_j: j\le i\}$: ogni processo è adattato alla propria filtrazione naturale.

## Formule chiave
$$\mathcal F_i\subseteq\mathcal F_j\subseteq\mathcal F\quad (i<j),\qquad \mathcal F^X_i=\sigma\{X_j:\ j\le i\}.$$
Definizione alternativa di incrementi indipendenti (lezione 3): per ogni $i_0<i_1$, $X_{i_1}-X_{i_0}$ è indipendente da $\mathcal F_{i_0}$ (filtrazione naturale).

## Intuizione
$\mathcal F_i$ contiene tutte le possibili evoluzioni del processo fino al tempo $i$, e può contenere anche più informazione. Crescere nel tempo significa che l'informazione non si dimentica.

## Come si usa
- Esempio della lezione 1: $Y_i\sim \mathrm{Unif}(0,1)$ i.i.d., $X_i=\mathbf 1\{Y_i\ge 0.5\}$ e $\mathcal F_i=\sigma\{Y_j:j\le i\}$. $X$ è adattato perché $X_i$ è funzione di $Y_i$. La filtrazione contiene più informazione di quella naturale di $X$.
- Negli esercizi sulle martingale va **sempre specificata la filtrazione** (schema del `.tex`): la stessa successione può essere martingala rispetto a una filtrazione e non rispetto a un'altra.

## Nei corsi
- **Processi stocastici** (magistrale): Introdotta nella lezione 1 ("Some technical definition") insieme al processo adattato e alla filtrazione naturale. È riusata per i tempi d'arresto (lezione 6) e per le martingale (lezione 16). La filtrazione aumentata del moto browniano è trattata nella nota sulla Markov forte del browniano. Fonti principali: `magistrale/Processi stocastici/lezione_01_23_09.pdf` (lezione 1), `magistrale/Processi stocastici/Lezione_06_07_10.pdf` (lezione 6); `magistrale/Processi stocastici/riassunto_del_corso.tex` §Prerequisiti e notazione.
- **Financial engineering** (magistrale): filtrazione e filtrazione naturale $\mathcal F^X_t=\sigma(X_u,u\le t)$, processo adattato (def. c11-filtrazione, c11-adattato), processo misurabile e **progressivamente misurabile** (def. c11-prog-misurabile; adattato e continuo a destra ⇒ progressivo, lem. c11-continuo-destra), processi indistinguibili. Esempio: nell'albero binomiale a due periodi $\mathcal F_1=\{\emptyset,\{uu,ud\},\{du,dd\},\Omega\}=\sigma(S(1))$, le partizioni si raffinano. $W_t^2-t$, $\max_{u\le t}W_u$, $\int_0^tW_udu$ sono adattati, $W_{t+1}$ no: in finanza le quantità detenute devono essere adattate (niente "insider trading"); la progressiva misurabilità definisce gli spazi $M^p$ degli integrandi di Itô. Fonti: `Libri/Financial engineering/capitoli/cap11.tex`; lezione d'origine `magistrale/Financial engineering/onofrio/Lezione 01 - analisi stocastica - 24 apr 26.pdf`.

## Prerequisiti
- Nessun prerequisito interno al corso.

## Porta a
- [[Tempo d'arresto]]: evento deciso con informazione presente
- [[Speranza condizionata]]: condiziona rispetto a una sigma-algebra
- [[Martingala]]: processo adattato all'informazione
- [[Martingale a tempo continuo]]: filtrazione con le ipotesi abituali
- [[Proprietà di Markov forte del moto browniano]]: rispetto alla filtrazione aumentata

## Collegati
- Nessuno.
- [[Integrale di Itô]]: integrandi progressivamente misurabili (Financial engineering)
- [[Strategia autofinanziante]]: le quantità detenute sono processi adattati o prevedibili (Financial engineering)
