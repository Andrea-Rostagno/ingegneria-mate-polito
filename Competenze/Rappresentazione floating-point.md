---
tipo: competenza
area: numerica
corsi: [Algebra lineare, Informatica, Metodi numerici, Programmazione e calcolo scientifico]
livello: [triennale]
aliases: ["floating-point representation", "virgola mobile", "mantissa", "esponente", "caratteristica", "rappresentazione normalizzata", "virgola fissa", "singola precisione", "floating point"]
tags: [competenza, area/numerica]
---

# Rappresentazione floating-point

> Scrittura di un reale come segno, mantissa ed esponente in una base $N$: è il modo in cui il calcolatore memorizza i numeri.

## Definizione / enunciato
La **rappresentazione floating-point** di $a\in\mathbb R$ in base $N$ è
$$a=(-1)^s\,p\,N^q,\qquad s\in\{0,1\},\ p\ge 0 \text{ reale},\ q \text{ intero}.$$
Non è unica ($0.015\cdot10^{-1}=0.15\cdot10^{-2}=0.0015\cdot10^{0}$). Si dice **normalizzata** se
$$N^{-1}\le p<1,$$
cioè se la prima cifra di $p$ dopo il punto è diversa da zero; allora $p$ (**mantissa**) e $q$ (**esponente** o **caratteristica**) sono univocamente determinati. $N=10$ dà il sistema decimale, $N=2$ il binario.

## Formule chiave
$$a=(-1)^s\,p\,N^q,\qquad N^{-1}\le p<1$$

## Intuizione
Fissata la base, la terna $(s,p,q)$ della forma normalizzata individua $a$: basta memorizzare quelle tre quantità. La normalizzazione elimina gli zeri iniziali, così tutte le $t$ cifre disponibili della mantissa sono significative.

## Come si usa
Esempi delle slide con $N=10$: $a=0.15\cdot10^{-2}$ ha $p=0.15$, $q=-2$; $a=12.4\cdot10^0=0.124\cdot10^2$ ha $p=0.124$, $q=2$; $a=-0.0013\cdot10^4=-0.13\cdot10^2$ ha $p=0.13$, $q=2$. Per normalizzare si sposta il punto finché la prima cifra della mantissa non è nulla, correggendo l'esponente.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Primo argomento del modulo di calcolo numerico: `triennale/ANNO 1/algebra lineare/2022_cn1_aritmetica_print.pdf` (slide 6-10).
- **Informatica** (triennale): unità T1. Virgola fissa ($M$ bit per la parte frazionaria con pesi $2^{-i}$, precisione fissa) contro virgola mobile $X=\pm M\times 2^{E}$ (precisione variabile: numeri molto grandi e molto piccoli nella stessa codifica). Standard **IEEE-754**: mantissa nella forma $1,\dots$ (valore massimo $<2$, convenzione diversa dalla normalizzazione $N^{-1}\le p<1$ di Algebra lineare), base 2; singola precisione (`float`) 1 bit di segno + 8 di esponente + 23 di mantissa, doppia (`double`) 1 + 11 + 52. Intervallo SP circa da $10^{-38}$ a $10^{38}$ in modulo, con underflow (0) e overflow (NaN nelle slide). Valori comuni come 0.1 e 0.6 non sono rappresentabili esattamente. Fonti: `triennale/ANNO 1/informatica/Unita T1 - Rappresentazione dati.pdf` (p. 34-42).
- **Metodi numerici** (triennale, L. Scuderi, a.a. 2022/23): definizione con cui si apre il corso, $a=(-1)^s pN^q$, normalizzata se $N^{-1}\le p<1$; nel corso si usa $N=10$ e si memorizzano solo $s$, $p$ (al più $t$ cifre) e $q$ ($L\le q\le U$). Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_01_aritmetica_print.pdf` (p. 3-5).
- **Programmazione e calcolo scientifico** (triennale): lezioni 1 e 7 di M. Cicuttin ("Is my code correct?"). In C++ `float` ha 32 bit (1 di segno, 8 di esponente, 23 di mantissa) e `double` 64 bit (1, 11 e "53 mantissa bits" nella slide, contando il bit implicito); `float` si usa in elaborazione di segnali e immagini e nei videogiochi, `double` nel calcolo scientifico, e non vanno mescolati. Tre racconti: (1) *Chaotic Bank Society*: $b_0=e-1$, $b_i=i\cdot b_{i-1}-1$; srotolando, $b_n=n!\left(b_0-\sum_{i=1}^n\frac1{i!}\right)$, che per lo sviluppo di Maclaurin di $e$ dovrebbe tendere a 0, ma $e-1$ non è rappresentabile esattamente e l'errore cresce "like crazy"; (2) *The missing block*: `floor(total_width/block_width)` con 0.6 e 0.1 sbaglia il conto, perché in base 2 né 1/10 né 6/10 hanno espansione finita ($F(0.6)=0.599999999999999978$, $F(0.1)=0.100000000000000006$) e $F(x)$ può essere un po' più piccolo o più grande di $x$; (3) *The odometer that stopped*: un `float meters` incrementato di `0.01f` a ogni interrupt smette di crescere, perché la precisione non è costante ma dipende dalla grandezza del numero. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione1.pdf` (p. 15-22); `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione7.pdf` (p. 2).

## Prerequisiti
- Nessun prerequisito interno al corso.

## Porta a
- [[Numeri di macchina]]: mantissa ed esponente con spazio limitato
- [[Precisione di macchina]]: la normalizzazione p >= 1/N limita l'errore relativo
- [[Confronto tra numeri floating point]]: precisione limitata della mantissa (Informatica)

## Collegati
- [[Sistema di numerazione posizionale]]: in informatica mantissa ed esponente sono in base 2 (IEEE-754)
- [[Unità centrale di elaborazione]]: la FPU calcola sui numeri in virgola mobile
- [[Tipi fondamentali del C++]]: float e double del C++ seguono IEEE 754 (Programmazione e calcolo scientifico)
