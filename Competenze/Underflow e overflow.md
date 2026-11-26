---
tipo: competenza
area: numerica
corsi: [Algebra lineare, Informatica, Metodi numerici]
livello: [triennale]
aliases: ["regione di underflow", "regione di overflow"]
tags: [competenza, area/numerica]
---

# Underflow e overflow

> Regioni di reali troppo piccoli o troppo grandi in modulo per essere numeri di macchina, e come riformulare i calcoli per evitarle.

## Definizione / enunciato
Detti $m$ e $M$ il più piccolo e il più grande numero di macchina positivo:
- **regione di underflow**: i reali non nulli in $(-m,m)$;
- **regione di overflow**: $(-\infty,-M)\cup(M,+\infty)$.

Se un risultato intermedio cade in underflow viene approssimato con zero; se cade in overflow viene sostituito dal simbolo `Inf`. In entrambi i casi il calcolatore segnala l'evento.

## Formule chiave
Media senza overflow: $\dfrac{\bar M+M}{2}$ si calcola come $\dfrac{\bar M}{2}+\dfrac M2$ oppure $\bar M+\dfrac{M-\bar M}{2}$.
$$R=\sqrt{x_1^2+x_2^2}=\begin{cases}|x_1|\sqrt{1+(x_2/x_1)^2}, & |x_1|>|x_2|\\ |x_2|\sqrt{(x_1/x_2)^2+1}, & |x_2|>|x_1|\end{cases}$$

## Intuizione
Dati e risultato finale possono essere rappresentabili anche se un passaggio intermedio non lo è. Riscrivere l'espressione in modo che le quantità intermedie restino dell'ordine dei dati evita il problema senza cambiare il risultato in aritmetica esatta.

## Come si usa
Esempi delle slide: con $N=10$, $t=8$, $L=-125$ si ha $m=0.10000000\cdot10^{-125}$; con $U=128$, $M=0.99999999\cdot10^{128}$. La media di $\bar M=M/2$ e $M$ calcolata come $(\bar M+M)/2$ va in overflow perché $\bar M+M>M$. Il calcolo di $\sqrt{x_1^2+x_2^2}$ con $x_1^2$ non rappresentabile si salva raccogliendo il modulo maggiore.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn1_aritmetica_print.pdf` (slide 14-18).
- **Informatica** (triennale): unità T1. Overflow come errore quando il risultato non è rappresentabile con la stessa codifica e lo stesso numero di bit degli operandi (condizione "dinamica"): in binario puro carry sul MSB (es. 4 bit $0101+1110=1\,0011$), in complemento a due risultato di segno discorde da operandi concordi. Per IEEE-754 singola precisione: underflow (valore portato a 0) sotto circa $10^{-38}$ in modulo, overflow (NaN nelle slide) oltre $10^{38}$. Fonti: `triennale/ANNO 1/informatica/Unita T1 - Rappresentazione dati.pdf` (p. 15-16, 32, 41).
- **Metodi numerici** (triennale, L. Scuderi, a.a. 2022/23): regione di underflow $(-m,m)\setminus\{0\}$, di overflow $(-\infty,-M)\cup(M,+\infty)$; in underflow il risultato diventa 0 e il calcolo prosegue con una segnalazione, in overflow diventa `Inf` e il calcolo si arresta, quindi va evitato riscrivendo l'espressione. Le soglie $m$ e $M$ dipendono da $t$ e dai limiti $L$, $U$ dell'esponente della rappresentazione floating-point. Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_01_aritmetica_print.pdf` (p. 7-8).

## Prerequisiti
- [[Rappresentazione floating-point]]: le soglie m e M dipendono da t, L e U (Metodi numerici)
- [[Numeri di macchina]]: limiti L e U dell'esponente

## Porta a
- Nessuno.

## Collegati
- [[Metodo delle potenze]]: la normalizzazione evita underflow e overflow
- [[Aritmetica binaria]]: overflow intero su N bit, analogo del caso floating-point (collegamento concettuale, non nelle slide) (Informatica)
- [[Complemento a due]]: overflow quando operandi concordi danno un risultato di segno discorde
