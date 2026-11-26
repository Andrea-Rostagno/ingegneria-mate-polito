---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [stopped process, sigma-algebra arrestata, stopped sigma-algebra, martingala arrestata]
tags: [competenza, area/probabilita]
---

# Processo arrestato

> Il processo congelato a un tempo d'arresto, $X_{n\wedge\tau}$: conserva la natura di martingala, sub- o supermartingala del processo originale.

## Definizione / enunciato
Con $a\wedge b=\min\{a,b\}$, il processo arrestato è $X_{i\wedge\tau}=X_i$ se $\tau\ge i$, $X_\tau$ se $\tau\le i$.

**σ-algebra arrestata.**
$$\mathcal F_{i\wedge\tau}=\{A\in\mathcal F_i:\ A\cap\{\tau\le j\}\in\mathcal F_j\ \forall j\le i\}\subseteq\mathcal F_i.$$
**Teorema.** Se $X$ è adattato e $\tau$ è un tempo d'arresto: $(\mathcal F_{i\wedge\tau})$ è una filtrazione e $(X_{i\wedge\tau})$ è adattato sia a $(\mathcal F_{i\wedge\tau})$ sia a $(\mathcal F_i)$.

**Teorema (tempo discreto).** Se $(X_n)$ è martingala (sub-, super-) rispetto a $(\mathcal F_n)$, allora $(X_{n\wedge\tau})$ è martingala (sub-, super-) rispetto a $(\mathcal F_n)$ **e** a $(\mathcal F_{n\wedge\tau})$.

## Formule chiave
$$X_{i\wedge\tau}=\mathbf 1_{\{\tau\le i\}}X_\tau+\mathbf 1_{\{\tau>i\}}X_i,\qquad X_{(n+1)\wedge\tau}-X_{n\wedge\tau}=\mathbf 1_{\{\tau\ge n+1\}}(X_{n+1}-X_n)$$
$$\mathbb E[|X_{n\wedge\tau}|]\le\sum_{i=0}^n\mathbb E[|X_i|]<\infty$$

## Intuizione
Fermarsi è una strategia prevedibile: si punta 1 finché $\tau\ge n+1$ (evento noto al tempo $n$) e poi 0. Per la [[Trasformata di martingala]] il gioco non cambia natura: fermarsi "al momento giusto" non rende favorevole un gioco sfavorevole.

## Come si usa
Si prova prima il caso submartingala (l'indicatore $\mathbf 1_{\{\tau\ge n+1\}}$ esce dall'attesa condizionata), poi super con $-X$ e martingala come sub e super insieme. Esempio (lezione 20): passeggiata simmetrica da $X_0=5$ arrestata in $T=\inf\{n:X_n=0\}$ è martingala non negativa che converge q.c. a $0$ ma con $\mathbb E[X_{n\wedge T}]=5$: niente convergenza $L^1$. In Foster-Lyapunov si usa $V(X_{n\wedge\tau})$ come supermartingala non negativa.

## Nei corsi
- **Processi stocastici** (magistrale): parte dell'argomento 12 (non è nel `.tex`). Fonti: `magistrale/Processi stocastici/Lezione_18_18_11.pdf` (lezione 18), `magistrale/Processi stocastici/Lezione_19_24_11.pdf` (lezione 19, recap).

## Prerequisiti
- [[Tempo d'arresto]]: arresto in un istante aleatorio
- [[Trasformata di martingala]]: arresto come strategia prevedibile

## Porta a
- [[Teorema di optional sampling]]: martingala arrestata resta martingala
