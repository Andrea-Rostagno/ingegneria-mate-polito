---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [American option, call americana, put americana, esercizio anticipato, early exercise, valore di continuazione, continuation value, C^A, P^A]
tags: [competenza, area/finanza]
---

# Opzione americana

> Opzione esercitabile in qualunque istante fino alla scadenza: la call senza dividendi vale quanto l'europea, la put può convenire esercitarla prima.

## Definizione / enunciato
Una **call (put) americana** con strike $K$ e scadenza $T$ dà il diritto di comprare (vendere) a $K$ in un qualunque $t\in[0,T]$; esercitando in $t$ si riceve $(S(t)-K)^+$ o $(K-S(t))^+$ (def. c07-americana). Ovviamente $C^A\ge c$, $P^A\ge p$.

**Teorema** (teo. c07-call-americana): se il titolo non paga dividendi in $[0,T]$ e $r\ge0$, allora $C^A=c$: l'esercizio anticipato della call non è mai ottimale.

**Nell'albero binomiale** (prop. c10-americana): con valore di continuazione $CV(t;k)=\frac1{1+r}[q_uV^A(t+1;k+1)+q_dV^A(t+1;k)]$,
$$V^A(t;k)=\max\{\varphi(S(t;k)),\,CV(t;k)\},$$
per induzione all'indietro da $V^A(T;k)=\varphi(S(T;k))$.

## Formule chiave
$c\ge S_t-Ke^{-r(T-t)}\ge S_t-K$ (con $r\ge0$): la call europea vale almeno il valore intrinseco dell'americana, quindi esercitare in anticipo non conviene (meglio vendere l'opzione).

## Intuizione
Esercitare subito la call fa pagare $K$ prima del necessario e rinuncia all'assicurazione contro i ribassi. Per la put invece incassare $K$ prima frutta interessi: una put profondamente ITM può valere esattamente il valore intrinseco (conviene esercitarla), il che non è un arbitraggio.

## Come si usa
Esempi del libro: $S(0)=3$, $K=100$, un anno, $r=5\%$: la put europea vale al più $95.12<97$, quindi $P^A\ge97$ e conviene esercitare subito ($97e^{0.05}=101.97>100$). Albero a due passi (lezione): $K=S_0=80$, $u=1.1$, $d=0.95$, $r=5\%$: esercizio anticipato al nodo 76, $P^A=1.27$ contro $P^E=0.79$. Con $S=40$, $\pm10\%$, $r=12\%$, $K=42$: put europea 2.118, americana 2.537.

## Nei corsi
- **Financial engineering** (magistrale): cap. 7 §§Opzioni americane, La call americana su un titolo senza dividendi; cap. 10 §Opzioni americane, prop. c10-americana. Fonti: `Libri/Financial engineering/capitoli/cap07.tex`, `cap10.tex`; lezioni d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/26 - lez 20 marzo - put call parity e bounds.pdf`, `31 - lez 31 marzo b - opzioni americane binomiale.pdf`.

## Prerequisiti
- [[Opzioni call e put]]: versione europea
- [[Limiti di prezzo delle opzioni]]: limite inferiore della call

## Collegati
- [[Modello binomiale multiperiodale]]: prezzo per induzione all'indietro con confronto
- [[Tempo d'arresto]]: la data di esercizio è un tempo d'arresto (collegamento concettuale, non esplicito nel libro)
