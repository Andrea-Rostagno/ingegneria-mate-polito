---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [second Doob's convergence theorem, convergenza in L1 delle martingale, uniforme integrabilità, uniform integrability]
tags: [competenza, area/probabilita]
---

# Secondo teorema di convergenza di Doob

> Caratterizza quando una (sub/super)martingala converge in $L^1$: esattamente quando è uniformemente integrabile, ovvero chiusa dal suo limite.

## Definizione / enunciato
**Uniforme integrabilità.** $(X_n)$ è u.i. se $\forall\varepsilon>0\ \exists K$: $\mathbb E[|X_n|\mathbf 1_{\{|X_n|>K\}}]<\varepsilon$ per ogni $n$. U.i. $\Rightarrow\sup_n\mathbb E|X_n|<\infty$; se $\sup_n\mathbb E[|X_n|^p]<\infty$ per un $p>1$ allora è u.i. (inversi falsi). Se $X_n\to X$ in probabilità: $L^1\iff$ u.i. $\iff\mathbb E|X_n|\to\mathbb E|X|<\infty$.

**Teorema (submartingala, tempo discreto).** Sono equivalenti:
1. esiste $X$ con $X_n\to X$ in $L^1$;
2. esiste $X$ integrabile con $X_n\to X$ q.c., $X_n\le\mathbb E[X\mid\mathcal F_n]$ q.c. per ogni $n$ e $\mathbb E[X_n]\to\mathbb E[X]$;
3. $(X_n)$ è uniformemente integrabile.

Per supermartingale vale con $X_n\ge\mathbb E[X\mid\mathcal F_n]$; per **martingale** il punto 2 diventa $X_n=\mathbb E[X\mid\mathcal F_n]$, cioè la martingala è chiusa. In tempo continuo (lezione 22) vale per processi càdlàg.

## Formule chiave
$$X_n\xrightarrow{L^1}X\iff X_n\xrightarrow{P}X\ +\ \text{uniforme integrabilità}$$

## Intuizione
Il primo teorema dà il limite q.c., ma la massa può "fuggire" senza farsi vedere nel limite. L'uniforme integrabilità vieta che code sempre più rare ma sempre più alte portino via la media.

## Come si usa
Controesempio delle slide: passeggiata simmetrica da $X_0=5$, $T=\inf\{n:X_n=0\}$. $X_{n\wedge T}$ è martingala non negativa, converge q.c. a $0$, ma $\mathbb E[|X_{n\wedge T}-0|]=5\not\to0$: non è u.i. né chiusa. Uso positivo: nella legge forte per martingale, $\sup_n\mathbb E[M_n^2]<\infty$ dà u.i. e quindi convergenza q.c. e in $L^1$. La prova del teorema è nel materiale ma non è chiesta all'esame.

## Nei corsi
- **Processi stocastici** (magistrale): argomento d'orale 13 (non è nel `.tex`). L'uniforme integrabilità è un concetto esterno al corso. Fonti: `magistrale/Processi stocastici/Lezione_20_25_11.pdf` (lezione 20), `magistrale/Processi stocastici/Lezione_22_02_12.pdf` (lezione 22).

## Prerequisiti
- [[Primo teorema di convergenza di Doob]]: rafforza la convergenza quasi certa
- [[Martingala chiusa]]: martingala chiusa equivale a convergenza L1

## Collegati
- Uniforme integrabilità (corso Probabilità / teoria della misura) (non trattato nei corsi)
