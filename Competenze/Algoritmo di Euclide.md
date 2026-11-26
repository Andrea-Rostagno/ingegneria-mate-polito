---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra, Crittografia]
livello: [triennale, magistrale]
aliases: ["Euclidean algorithm", "algoritmo euclideo per il MCD", "algoritmo delle divisioni successive", "MCD di polinomi", "algoritmo esteso di Euclide", "extended Euclidean algorithm", "Kuttaka", "inverso modulo n"]
tags: [competenza, area/algebra-geometria]
---

# Algoritmo di Euclide

> Calcola il MCD di due interi, o di due polinomi, con divisioni successive. Si sostituisce ogni volta la coppia $(a,b)$ con $(b,r)$ finché il resto si annulla.

## Definizione / enunciato
**Lemma 4.** Siano $a,b$ interi non nulli e $r$ il resto della divisione di $a$ per $b$. Allora $\mathrm{MCD}(a,b)=\mathrm{MCD}(b,r)$.

**Algoritmo.** Siano $a\ge b>0$, che non è restrittivo perché $\mathrm{MCD}(a,b)=\mathrm{MCD}(|a|,|b|)$.
1. Si pone $a_1=a$, $a_2=b$.
2. Si divide: $a_{i-1}=q_{i-1}a_i+a_{i+1}$ con $0\le a_{i+1}<a_i$.
3. I resti decrescono strettamente, quindi esiste $n$ con $a_n=0$.
4. Si conclude: $\mathrm{MCD}(a_1,a_2)=\cdots=\mathrm{MCD}(a_{n-1},0)=a_{n-1}$.

## Formule chiave
$$a=qb+r\ \Rightarrow\ \mathrm{MCD}(a,b)=\mathrm{MCD}(b,r)$$

## Intuizione
- Un divisore comune di $a$ e $b$ divide anche $r=a-qb$.
- Un divisore comune di $b$ e $r$ divide $a=qb+r$.

Le coppie hanno quindi gli stessi divisori comuni, ma i numeri si rimpiccioliscono a ogni passo.

## Come si usa
**Esempio delle dispense (p. 8):** $\mathrm{MCD}(6468,2275)$.
$$6468=2\cdot2275+1918,\quad 2275=1\cdot1918+357,\quad 1918=5\cdot357+133,$$
$$357=2\cdot133+91,\quad 133=1\cdot91+42,\quad 91=2\cdot42+7,\quad 42=6\cdot7.$$
Quindi $\mathrm{MCD}=7$.

**Coefficienti di Bézout:** si risale la catena delle divisioni. Nell'esempio del teorema cinese, $9=5\cdot1+4$ e $5=4\cdot1+1$ danno $2\cdot5+(-1)\cdot9=1$.

**Polinomi (lezioni 28-29, p. 13).** In $\mathbb Q[x]$, con $f=12x^7+5x^5+10x^4-7x^3+10x^2$ e $g=2x^5-x^4+2x^3+1$, le divisioni successive danno i resti
$$r_1=2x^4-3x^3+4x^2-3x+2,\quad r_2=x^3-x^2+x-1,\quad r_3=x^2+1,$$
con $r_2=(x-1)(x^2+1)$. Quindi $\mathrm{MCD}(f,g)=x^2+1$.

## Nei corsi
- **Istituzioni algebra** (triennale): lezioni 25-26 per gli interi, 28-29 per i polinomi. Fonti: `triennale/ANNO 2/istituzioni/Alg-30-11-22.pdf` (lezioni 25-26, pp. 6-8, 16); `triennale/ANNO 2/istituzioni/Alg-07-12-22.pdf` (lezioni 28-29, pp. 12-13).
- **Crittografia** (magistrale): si usa la versione **estesa**, che dà insieme MCD e coefficienti con una tabella a righe $[r,x,y]$, $r=ax+Ny$. Si sottrae ogni volta il multiplo intero di una riga dall'altra finché un resto si annulla. Esempio di lezione: righe $[29,1,0]$ e $[45,0,1]$, poi $[16,-1,1]$, $[13,2,-1]$, $[3,-3,2]$, $[1,14,-9]$, da cui $1=14\cdot29-9\cdot45$. Il programma `MCD.py` (§3.3.7) restituisce $[d,x,y]$ e `inv.py` (§3.3.8) l'inverso modulo $n$, oppure $0$ se non esiste. È citata la variante indiana Kuttaka ("polverizzazione") di Aryabhata. Lo stesso algoritmo inverte un polinomio modulo un irriducibile in $GF(2^8)$. Le dispense inglesi fanno notare che l'inverso per tentativi è inefficiente. Fonti: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week3.pdf` (Critto 3 §3.3.1, NOTA 3.3.6, §3.3.7-3.3.8, pp. 5-8 del PDF; NOTA 3.6.2, p. 17); `magistrale/Crittografia/Slide/slides week 1-14/week6/Crypto6.pdf` (§6.2, pp. 6-8).

## Prerequisiti
- [[Divisione euclidea]]: ogni passo è una divisione con resto
- [[Identità di Bézout]]: definizione di MCD e coefficienti da ricostruire

## Porta a
- [[Teorema cinese dei resti]]: fornisce i coefficienti $\alpha,\beta$ della soluzione
- [[Cifrario affine]]: inverso della chiave in $\mathbb Z_{26}$ (Crittografia)
- [[Attacco del modulo comune]]: i coefficienti di Bézout di $e_1,e_2$ ricombinano i cifrati (Crittografia)

## Collegati
- [[Divisione tra polinomi]]: lo stesso algoritmo in $K[x]$
