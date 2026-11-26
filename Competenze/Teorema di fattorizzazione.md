---
tipo: competenza
area: statistica
corsi: [Prob e statistica]
livello: [triennale]
aliases: ["factorization theorem", "teorema di fattorizzazione di Fisher-Neyman", "Fisher-Neyman factorization", "criterio di fattorizzazione", "f(x|theta) = g(T(x)|theta) h(x)"]
tags: [competenza, area/statistica]
---

# Teorema di fattorizzazione

> $T(\mathbf X)$ è sufficiente per $\theta$ se e solo se la densità congiunta si scrive $f(\mathbf x|\theta)=g(T(\mathbf x)|\theta)\,h(\mathbf x)$: si leggono le statistiche sufficienti direttamente dalla congiunta.

## Definizione / enunciato
**Teorema.** Sia $f(\mathbf x|\theta)$ la congiunta (pmf o pdf) di un campione $\mathbf X$. $T(\mathbf X)$ è sufficiente per $\theta$ se e solo se esistono $g(t|\theta)$ e $h(\mathbf x)$ tali che per ogni $\mathbf x\in\mathcal X$ e $\theta\in\Theta$
$$f(\mathbf x|\theta)=g(T(\mathbf x)|\theta)\,h(\mathbf x).$$

## Formule chiave
Dimostrazione (caso discreto):
- ($\Rightarrow$) $h(\mathbf x)=\mathbb P(\mathbf X=\mathbf x|T(\mathbf X)=T(\mathbf x))$ (non dipende da $\theta$) e $g(T(\mathbf x)|\theta)=\mathbb P_\theta(T(\mathbf X)=T(\mathbf x))$.
- ($\Leftarrow$) $q(T(\mathbf x)|\theta)=\sum_{\mathbf y\in A_{T(\mathbf x)}}f(\mathbf y|\theta)=g(T(\mathbf x)|\theta)\sum_{\mathbf y\in A_{T(\mathbf x)}}h(\mathbf y)$, quindi $\frac{f(\mathbf x|\theta)}{q(T(\mathbf x)|\theta)}=\frac{h(\mathbf x)}{\sum_{\mathbf y\in A_{T(\mathbf x)}}h(\mathbf y)}$ non dipende da $\theta$.

## Intuizione
Il parametro "vede" i dati solo attraverso $T$: tutto ciò che dipende da $\theta$ deve passare per $T(\mathbf x)$, il resto è un fattore costante in $\theta$.

## Come si usa
Gamma $G(a,b)$, campione di numerosità $n$:
$$f(\mathbf x|a,b)=\frac{b^{na}}{\Gamma(a)^n}\exp\Big((a-1)\sum\log x_i\Big)\exp\Big(-b\sum x_i\Big).$$
Soluzioni: $h=1$ dà la statistica banale $T=\mathbf X$; anche il campione ordinato è sufficiente; la più interessante è $T=(\sum\log X_i,\sum X_i)$. Con $a$ noto, $h(\mathbf x)=\exp((a-1)\sum\log x_i)$ e $T=\sum X_i$ è sufficiente per $b$. Poisson: $h(\mathbf x)=1/\prod x_i!$, $g=e^{-n\lambda}\lambda^{\sum x_i}$, $T=\sum X_i$.

## Nei corsi
- **Prob e statistica** (triennale): lezione 3 di statistica. Fonti: `triennale/ANNO 3/prob e statistica/statistica/data reduction lez3.pdf` (Teorema di fattorizzazione I-VII, Minimalità X).

## Prerequisiti
- [[Statistica sufficiente]]: definizione e teorema del rapporto $p/q$

## Porta a
- [[Statistica sufficiente minimale]]: dimostrazione della sufficienza nel teorema di minimalità
- [[Stimatore di massima verosimiglianza]]: l'MLE è funzione della statistica sufficiente
- [[Test del rapporto di verosimiglianza]]: $\lambda(T(\mathbf x))=\lambda(\mathbf x)$
