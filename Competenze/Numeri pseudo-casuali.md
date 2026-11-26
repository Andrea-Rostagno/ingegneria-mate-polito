---
tipo: competenza
area: informatica
corsi: [Informatica, Statistica computazionale, Ottimizzazione in condizione di incertezza, Crittografia]
livello: [triennale, magistrale]
aliases: [random, generatore di numeri casuali, randint, simulazione, pseudo-random, generatore congruenziale lineare, linear congruential generator, seed, set.seed, LCG, generatore di Wichman-Hill, multiple recursive generator]
tags: [competenza, area/informatica]
---

# Numeri pseudo-casuali

> Le funzioni del modulo random che producono sequenze di numeri apparentemente casuali, base delle simulazioni.

## Definizione / enunciato
Python ha un generatore di numeri **pseudo-casuali**: i numeri sembrano casuali ma sono estratti da una sequenza deterministica che non si ripete se non dopo moltissimo tempo. Si trova nel modulo `random`:
- `random()`: float in $[0, 1)$;
- `randint(i, j)`: intero tra `i` e `j`, estremi compresi;
- dal prontuario: `uniform(a, b)` (reale tra a e b), `choice(seq)` (elemento a caso), `shuffle(seq)` (rimescola).

Una **simulazione** usa il computer per imitare un'attività, di solito ciclando su una sequenza di eventi (giorni, lanci, estrazioni) e introducendo la casualità con il generatore.

## Formule chiave
```python
from random import randint
d1 = randint(1, 6)   # lancio di un dado
```

## Intuizione
Pseudo-casuale significa riproducibile in linea di principio: il generatore è un algoritmo. Per un gioco o una simulazione basta che la sequenza "sembri" casuale.

## Come si usa
Esempi delle slide: lancio di dadi con `randint(1, 6)`; BlackJack semplificato (P4 p. 112-117) con estrazioni da un mazzo "infinito" in cui ogni carta da 1 a 10 ha la stessa probabilità; stima di $\pi$ con il metodo Monte Carlo.

## Nei corsi
- **Informatica** (triennale): unità P4 sezione 4.9. Fonti: `triennale/ANNO 1/informatica/Unita P4 - Cicli.pdf` (p. 93-96, 112-117), `triennale/ANNO 1/informatica/Python_Cheat_Sheet-v2.6.pdf` (p. 1).
- **Statistica computazionale** (magistrale): definizione formale di generatore pseudo-casuale $U(0,1)$: un algoritmo che da un seme $u_0$ e una trasformazione $D(\cdot)$ produce $(u_1,\dots,u_n)$ con $u_i=D(u_{i-1})\in[0,1]$, che "riproduce le caratteristiche" di un vettore i.i.d. $U(0,1)$, nel senso che nessun test di $H_0: U_1,\dots,U_n\overset{iid}{\sim}U(0,1)$ viene rifiutato. Osservazioni: è deterministico (noti seme e $D$ si ricostruisce il campione), le sequenze sono periodiche, `set.seed(100)` in R riproduce la stessa sequenza. Esempio: generatore congruenziale $d_i=(a\,d_{i-1}+c)\bmod m$, $u_i=d_i/m$, con $0\le c\le m$ (incremento) e $0<a<m$ (moltiplicatore); $m$, $a$, $c$ vanno scelti in modo da non creare loop. Fonti: `magistrale/Statistica computazionale/monte carlo.pdf` (p. 3-5); `magistrale/Statistica computazionale/esercitazioni/Monte Carlo.R` (funzione `r_unif01`).
- **Ottimizzazione in condizione di incertezza** (magistrale): primo stadio della struttura di un simulatore Monte Carlo (generatore $\to$ trasformazione in variabili aleatorie $\to$ generazione di traiettorie $\to$ analisi dell'output). LCG $Z_i=(aZ_{i-1}+c)\bmod m$, $U_i=Z_i/m$: numeri razionali, periodo al più $m$, scelta di $a$ e $c$ per massimizzarlo (usati fino a MATLAB 4). Struttura generale: stati finiti, stato iniziale, transizione, spazio e funzione di output. Generatori combinati come **Wichman-Hill** (tre LCG $X_i=171X_{i-1}\bmod 30269$, $Y_i=172Y_{i-1}\bmod 30307$, $Z_i=170Z_{i-1}\bmod 30232$ come scritto nella slide; output $U_i=(X_i/m_1+Y_i/m_2+Z_i/m_3)\bmod1$) e generatori ricorsivi multipli $X_i=(a_1X_{i-1}+\dots+a_kX_{i-k})\bmod m$. Proprietà desiderate: uniformità, indipendenza, portabilità, niente overflow, partizione in sottosequenze disgiunte per la riduzione della varianza. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/02 - IntroSimulation.pdf` (p. 14-19).
- **Crittografia** (magistrale): la casualità serve per chiavi, IV e cifratura probabilistica. Si distinguono il TRNG (fonte fisica) e il PRNG. Un PRNG è una funzione $G:\mathbb Z_2^n\to\mathbb Z_2^{l(n)}$ con $l(n)>n$ (fattore di espansione) tale che nessun avversario la distingua da una sequenza casuale con probabilità $>1/2$. Si costruisce con due algoritmi: **Init**(seme, IV) dà lo stato iniziale $st_0$, **GetBits**($st_{i-1}$) dà un bit $y_i$ e lo stato aggiornato (entropy pool). Per i test si cita TestU01, nelle dispense italiane i test NIST. Forma generale dell'LCG di Lehmer: $s_{i+1}\equiv a s_i+b\pmod m$. Esempio `rand()` dell'ANSI C: $s_0=12345$, $s_{i+1}\equiv1103515245\,s_i+12345\pmod{2^{31}}$. Park-Miller usa $a=7^5$, $m=2^{31}-1$. Gli LCG sono prevedibili e quindi non adatti come generatori crittografici, da cui LFSR, cifrari ARX e Blum-Blum-Shub. Fonti: `magistrale/Crittografia/Slide/slides week 1-14/week2/Crypto2.pdf` (§2.1-2.3, pp. 2-10); `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week4.pdf` (Critto 4 §4.1-4.4).

## Prerequisiti
- [[Moduli e import]]: funzioni del modulo random

## Porta a
- [[Metodo Monte Carlo]]: genera i punti casuali
- [[Trasformazione integrale di probabilità]]: da uniformi a qualsiasi legge con $F^{-1}(U)$ (Statistica computazionale)
- [[Trasformazione di Box-Muller]]: da due uniformi a due normali (Statistica computazionale)
- [[Successioni a bassa discrepanza]]: alternativa quasi-casuale con copertura più uniforme (Ottimizzazione in condizione di incertezza)
- [[Campionamento antitetico]]: usa le uniformi complementari $1-U_k$ (Ottimizzazione in condizione di incertezza)
- [[Cifrario a flusso]]: il keystream è l'output di un PRNG inizializzato con la chiave (Crittografia)
- [[LFSR]]: generatore di bit a registro lineare (Crittografia)
- [[Generatore Blum-Blum-Shub]]: PRNG crittograficamente sicuro (Crittografia)
