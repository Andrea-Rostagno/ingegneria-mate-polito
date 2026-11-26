---
tipo: competenza
area: ottimizzazione
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["conjugate function", "convex conjugate", "coniugata convessa", "funzione di supporto", "support function", "funzione indicatrice di un insieme", "convoluzione infimale", "infimal convolution", "convolution property", "funzione a valori reali estesi", "extended real-valued function"]
tags: [competenza, area/ottimizzazione]
---

# Funzione coniugata

> $f^*(\mathbf y)=\sup_{\mathbf x}\{\mathbf y^T\mathbf x-f(\mathbf x)\}$: per ogni pendenza dà (col segno cambiato) l'intercetta dell'iperpiano di supporto. È sempre convessa e trasforma indicatrici in funzioni di supporto e norme in indicatrici della palla duale.

## Definizione / enunciato
Per $f:\mathbb R^n\to\mathbb R$ (non necessariamente convessa)
$$f^*(\mathbf y)=\sup_{\mathbf x\in\mathrm{dom}f}\big\{\mathbf y^T\mathbf x-f(\mathbf x)\big\}.$$
$f^*$ è convessa perché massimo puntuale di funzioni affini in $\mathbf y$; può valere $+\infty$ (funzione a valori reali estesi, con dominio effettivo $\{f<+\infty\}$). Se il massimo è interno e $f$ è differenziabile, il massimizzatore soddisfa $\nabla f(\mathbf x_0)=\mathbf y$. **Indicatrice** di $S$: $I_S(\mathbf x)=0$ se $\mathbf x\in S$, $+\infty$ altrimenti, che trasforma un problema vincolato in $\min_{\mathbf x}\{f+I_S\}$. **Funzione di supporto** di un convesso $C$: $\sigma_C(\mathbf a)=\sup_{\mathbf x\in C}\mathbf a^T\mathbf x$.

## Formule chiave
- $f(x)=-\log x$: $f^*(y)=-(1+\log(-y))$ per $y<0$.
- $f(\mathbf x)=\mathbf a^T\mathbf x-b$: $f^*(\mathbf y)=b$ se $\mathbf y=\mathbf a$, $+\infty$ altrimenti.
- $I_S^*(\mathbf y)=\sup_{\mathbf x\in S}\mathbf y^T\mathbf x=\sigma_S(\mathbf y)$.
- $f(\mathbf x)=\|\mathbf x\|$: $f^*(\mathbf y)=0$ se $\|\mathbf y\|_*\le1$, $+\infty$ altrimenti (indicatrice della palla della norma duale); per $|x|$: $f^*(y)=0$ se $|y|\le1$.
- **Convoluzione infimale**: $(f_1+f_2)^*(\mathbf y)=\inf_{\boldsymbol\lambda_1+\boldsymbol\lambda_2=\mathbf y}\{f_1^*(\boldsymbol\lambda_1)+f_2^*(\boldsymbol\lambda_2)\}$, dimostrata duplicando la variabile ($\mathbf z=\mathbf x$) e dualizzando il vincolo.

## Intuizione
In una dimensione $f^*(y)$ è la massima distanza verticale con segno fra la retta $yx$ e il grafico di $f$; la retta $g(x)=yx-f^*(y)$ tocca il grafico. Per $-\log x$ in $x=e$ la tangente ha pendenza $-1/e$ e intercetta $-f^*(-1/e)=0$. La norma duale è la funzione di supporto della palla unitaria.

## Come si usa
Nell'ottimizzazione robusta il vincolo $\mathbf a_0^T\mathbf x+\max_{\boldsymbol\xi\in\mathcal U}(P^T\mathbf x)^T\boldsymbol\xi\le b$ diventa $\mathbf a_0^T\mathbf x+I^*_{\mathcal U}(P^T\mathbf x)\le b$; se $\mathcal U$ è un'intersezione di palle, l'indicatrice è una somma e la convoluzione infimale dà la riformulazione (incertezza budgettata).

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): "Conjugate functions" e "Indicator and support functions"; convoluzione nelle slide robuste. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/05a - Analisi convessa (versione completa).pdf` (p. 15, 19-20, 24-32); `magistrale/Ottimizzazione in condizione di incertezza/06b - WorstCaseRobust.pdf` (p. 32-34).

## Prerequisiti
- [[Funzione convessa]]: epigrafo e iperpiani di supporto
- [[Norma duale]]: coniugata della norma e funzione di supporto della palla

## Porta a
- [[Incertezza budgettata]]: riformulazione con la convoluzione infimale

## Collegati
- [[Teoremi di separazione]]: la funzione di supporto nasce dal teorema dell'iperpiano
- [[Subgradiente]]: iperpiani di supporto di una funzione convessa
- [[Programmazione lineare robusta]]: il caso peggiore è una funzione di supporto
