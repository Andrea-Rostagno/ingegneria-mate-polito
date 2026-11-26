---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: ["Blum-Blum-Shub", "BBS", "BBS PRNG", "generatore x^2 mod N", "x^2 mod N generator", "next bit test", "test del bit successivo", "PRNG crittograficamente sicuro", "sostituzione omofonica"]
tags: [competenza, area/informatica]
---

# Generatore Blum-Blum-Shub

> Il generatore Blum-Blum-Shub (BBS), detto anche "generatore $x^2 \bmod N$", produce bit pseudocasuali elevando al quadrato modulo $N=pq$. Prevederne il bit successivo è difficile quanto fattorizzare $N$: è l'esempio di PRNG crittograficamente sicuro.

## Definizione / enunciato
**Next bit test** (`Critto_week4.pdf` p. 31, da [Welsh89]). Un PRNG crittograficamente sicuro deve superarlo: chi conosce il generatore e i primi $n$ bit $x_1,\dots,x_n$, ma non il seme, non sa prevedere $x_{n+1}$ in modo computazionalmente efficiente con probabilità migliore di $\frac12$.

**BBS** (`Critto_week4.pdf` p. 32):
- $N=p\cdot q$, con $p,q$ primi della stessa dimensione in bit e $p,q\equiv3\pmod4$;
- il seme $x_0$ è un residuo quadratico modulo $N$ scelto a caso;
- l'uscita è il bit $b_i=\mathrm{parità}(x_i)$.

## Formule chiave
$$x_{i+1}\equiv x_i^2\pmod N,\qquad b_i=\mathrm{parità}(x_i)$$

## Intuizione
Andare avanti è facile: basta elevare al quadrato. Tornare indietro significa estrarre radici quadrate modulo $N$, e questo è facile solo conoscendo la fattorizzazione. Le tre proprietà di [BBS86, p. 373] riportate nella nota 4.9.2:
1. per proseguire la successione da un $x_{j_0}$ la fattorizzazione di $N$ non serve;
2. per ricavare la successione all'indietro in modo efficiente, la fattorizzazione è necessaria e sufficiente;
3. la fattorizzazione serve anche per prevedere il bit successivo con probabilità migliore di $\frac12$.

## Come si usa
- **Esercizi della dispensa:**
  - con $N=133$ (cioè $7\cdot19$, entrambi $\equiv3\pmod4$: calcolo mio) e $x_0=4$, trovare il periodo di $b_0b_1\cdots$ (es. 4.9.3);
  - verificare che, se $p\equiv3\pmod4$, per ogni $a$ o $a$ o $-a$ è residuo quadratico (es. 4.9.4). È la ragione della condizione $p,q\equiv3\pmod4$.
- **Contesto: cifratura probabilistica** (Goldwasser-Micali). Cifrare più messaggi in modo sicuro richiede che lo stesso messaggio dia crittogrammi diversi ([KatLin15, p. 73]). L'esempio più semplice di casualità nella cifratura è la **sostituzione omofonica**:
  - la chiave è una partizione ordinata $(A_1,\dots,A_t)$ di un alfabeto più grande;
  - ogni simbolo $s_j$ si cifra con un elemento scelto a caso in $A_j$ (`Critto_week4.pdf` p. 30).

## Nei corsi
- **Crittografia** (magistrale): §4.9 "Probabilistic Encryption & Blum-Blum-Shub PRNG" delle dispense italiane. Fonti: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week4.pdf` (Critto 4, pp. 30-32).

## Prerequisiti
- [[Residui quadratici]]: seme e iterazione sono quadrati modulo $N$
- [[Numeri pseudo-casuali]]: BBS è un PRNG

## Porta a
- [[Sicurezza IND-CPA]]: la cifratura probabilistica serve per la sicurezza IND

## Collegati
- [[Cifrario a flusso]]: BBS può generare il keystream
- [[Crittosistema di Rabin]]: stessa trappola, le radici quadrate modulo $pq$
- [[Teorema cinese dei resti]]: con $p,q$ noti si inverte il quadrato
- [[RSA]]: sicurezza legata alla fattorizzazione
