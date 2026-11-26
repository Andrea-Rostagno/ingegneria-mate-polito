---
tipo: competenza
area: analisi
corsi: [Equazioni di fisica matematica]
livello: [triennale]
aliases: ["shock wave", "condizione di Rankine-Hugoniot", "Rankine-Hugoniot condition", "velocità dell'urto", "urto"]
tags: [competenza, area/analisi]
---

# Onda d'urto

> Soluzione debole discontinua di una legge di conservazione, costante a tratti, il cui salto si muove con la velocità $s$ fissata dalla condizione di Rankine-Hugoniot.

## Definizione / enunciato
Per il problema di Riemann con stati $u_\ell$, $u_r$, l'**onda d'urto** (L17 p. 2) è
$$u(x,t)=\begin{cases}u_\ell&x<st\\u_r&x>st.\end{cases}$$
**Teorema (L17 p. 5).** Un'onda d'urto tra $u_\ell$ e $u_r$ che si propaga con velocità $s$ è soluzione (debole) della legge di conservazione **se e solo se** vale la **condizione di Rankine-Hugoniot**
$$s=\frac{f(u_r)-f(u_\ell)}{u_r-u_\ell}.$$

## Formule chiave
Derivazione (L17 pp. 3-5, caso $s\ge0$; $s<0$ lasciato per esercizio): si inserisce $u$ in $\iint(u\partial_t\varphi+f(u)\partial_x\varphi)=0$, si spezza nelle zone $x<st$ e $x>st$, si integra e si cambia variabile $x/s=t$:
$$0=\big[s(u_r-u_\ell)+f(u_\ell)-f(u_r)\big]\int_0^{+\infty}\varphi(st,t)\,dt\quad\forall\varphi\in\mathcal D(Q).$$

## Intuizione
$s$ è la pendenza della corda del grafico di $f$ tra $u_\ell$ e $u_r$: il salto si sposta in modo che il flusso che entra da una parte uguagli quello che esce dall'altra (bilancio di massa attraverso la discontinuità).

## Come si usa
- Con $f''>0$ e $u_\ell>u_r$ l'urto è l'unica soluzione data dalle caratteristiche ed è entropico. Con $u_\ell<u_r$ è ancora soluzione debole su tutto $Q$, ma **non** è entropico (L19 p. 6).
- Esempio Buckley-Leverett (L20 p. 2): $u_\ell=1$, $u_r=0$; il gradino fermo ($s=0$) non va bene perché $\frac{f(0)-f(1)}{0-1}=1\ne0$; l'urto con $s=1$ soddisfa R-H ma non è entropico.

## Nei corsi
- **Equazioni di fisica matematica** (triennale): fonti `triennale/ANNO 3/eq fisica matematica/17 - Lezione 15_11_23 (1).pdf` (pp. 2-6); `triennale/ANNO 3/eq fisica matematica/18 - Lezione 17_11_23.pdf` (p. 1); `triennale/ANNO 3/eq fisica matematica/20 - Lezione 22_11_23.pdf` (p. 2).

## Prerequisiti
- [[Problema di Riemann]]: dato iniziale a gradino
- [[Soluzione debole di una legge di conservazione]]: la condizione R-H viene dalla forma debole
- [[Metodo delle caratteristiche]]: l'urto nasce dove le caratteristiche si intersecano

## Porta a
- [[Soluzione entropica]]: seleziona gli urti fisicamente ammissibili
- [[Equazione di Buckley-Leverett]]: urto che segue una rarefazione

## Collegati
- [[Onda di rarefazione]]: alternativa continua quando u_ℓ < u_r con f'' > 0
