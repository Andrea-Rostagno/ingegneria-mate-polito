---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [Doob's upcrossing inequality, upcrossing, attraversamenti, attraversamenti verso l'alto]
tags: [competenza, area/probabilita]
---

# Disuguaglianza di upcrossing

> Stima il numero medio di attraversamenti verso l'alto di un intervallo $[a,b]$ da parte di una supermartingala: "comprare sotto $a$ e vendere sopra $b$" non produce guadagni infiniti.

## Definizione / enunciato
Sia $(X_n)$ supermartingala e $a<b$. Si pone $\sigma_1=\inf\{n:X_n\le a\}$ e ricorsivamente
$$\tau_i=\inf\{n\ge\sigma_i:X_n\ge b\},\qquad \sigma_{i+1}=\inf\{n\ge\tau_i:X_n\le a\},$$
$U^{a,b}(N)=\sup\{k:\tau_k\le N\}$ (upcrossing entro $N$) e $U^{a,b}=\lim_N U^{a,b}(N)$.

**Teorema (tempo discreto).**
$$(b-a)\,\mathbb E[U^{a,b}(N)]\le\mathbb E[(X_N-a)^-]\le\mathbb E[|X_N-a|].$$
**Corollario.** Se $\sup_n\mathbb E[X_n^-]<\infty$, allora $\mathbb E[U^{a,b}]<\infty$ e $U^{a,b}$ è finito q.c.

## Formule chiave
Il guadagno della strategia è $Y_n=X_0+\sum_{m=1}^n C_m(X_m-X_{m-1})$ con
$$C_m=\mathbf 1\{\exists i:\ \sigma_i\le m-1<\tau_i\}\ \text{(prevedibile)},\qquad Y_N\ge X_0+(b-a)U^{a,b}(N)-(X_N-a)^-.$$
Poiché $Y$ è supermartingala, $\mathbb E[Y_N]\le\mathbb E[X_0]$, da cui la tesi. Il corollario segue per convergenza monotona usando $(k_1-k_2)^-\le k_1^-+k_2^+$.

## Intuizione
Ogni upcrossing completato frutta almeno $b-a$; l'unica perdita possibile è nell'ultimo attraversamento incompiuto, controllata da $(X_N-a)^-$. Ma una strategia prevedibile su un gioco sfavorevole resta sfavorevole, quindi gli upcrossing non possono essere troppi: "again, no easy money!".

## Come si usa
È il cuore del primo teorema di convergenza: se $\liminf X_n<a<b<\limsup X_n$ ci sarebbero infiniti upcrossing di $[a,b]$, contro il corollario. Esercizio D (batteri): stimare il numero medio di risalite della quota di tipo $\alpha$ da sotto 25% a sopra 75%.

## Nei corsi
- **Processi stocastici** (magistrale): argomento d'orale 13. Le slide enunciano per supermartingale con la parte negativa $(X_N-a)^-$; il `.tex` dà la versione equivalente per submartingale, $(b-a)\mathbb E[U_n[a,b]]\le\mathbb E[(X_n-a)^+]-\mathbb E[(X_0-a)^+]$. Fonti: `magistrale/Processi stocastici/Lezione_19_24_11.pdf` (lezione 19), `magistrale/Processi stocastici/Lezione_20_25_11.pdf` (lezione 20), `riassunto_del_corso.tex` §Upcrossing, convergenza e disuguaglianze, `suggested_exercises_martingales.pdf` (es. D).

## Prerequisiti
- [[Trasformata di martingala]]: strategia compra basso vendi alto
- [[Martingala]]: vale per sub e supermartingale

## Porta a
- [[Primo teorema di convergenza di Doob]]: numero finito di attraversamenti
