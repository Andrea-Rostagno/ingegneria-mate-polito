---
tipo: competenza
area: data-ml
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["representer theorem", "teorema di rappresentazione", "reproducing property", "proprietà riproducente"]
tags: [competenza, area/data-ml]
---

# Teorema del rappresentante

> Per un'ampia classe di problemi regolarizzati in uno spazio di Hilbert a nucleo riproducente, la soluzione è una combinazione lineare dei kernel centrati nei punti del campione.

## Definizione / enunciato
**Teorema 6.11** (Mohri). Sia $K:\mathcal X\times\mathcal X\to\mathbb R$ un kernel PDS e $\mathbb H$ il suo RKHS. Per ogni funzione non decrescente $G:\mathbb R\to\mathbb R$ e ogni funzione di perdita $L:\mathbb R^m\to\mathbb R\cup\{+\infty\}$, il problema
$$\arg\min_{h\in\mathbb H}F(h)=\arg\min_{h\in\mathbb H}\ G(\|h\|_{\mathbb H})+L\big(h(x_1),\dots,h(x_m)\big)$$
ammette una soluzione della forma $h^*=\sum_{i=1}^m\alpha_iK(x_i,\cdot)$. Se $G$ è crescente, **ogni** soluzione ha questa forma.

## Formule chiave
**Dimostrazione.** $\mathbb H_1=\mathrm{span}\{K(x_i,\cdot)\}$, $h=h_1+h^\perp$ con $\mathbb H=\mathbb H_1\oplus\mathbb H_1^\perp$. Poiché $G$ è non decrescente, $G(\|h_1\|)\le G\big(\sqrt{\|h_1\|^2+\|h^\perp\|^2}\big)=G(\|h\|)$. Per la **proprietà riproducente** $h(x_i)=\langle h,K(x_i,\cdot)\rangle=\langle h_1,K(x_i,\cdot)\rangle=h_1(x_i)$, quindi $L$ non cambia e $F(h_1)\le F(h)$.

## Intuizione
La componente ortogonale allo span dei dati non influisce sui valori nei punti del campione, ma aumenta la norma: conviene sempre toglierla. Il problema infinito-dimensionale si riduce a trovare $m$ coefficienti.

## Come si usa
Giustifica la forma della soluzione delle SVM (a meno dell'offset $b$): $h(x)=\sum_i\alpha_iy_iK(x_i,x)+b$. Vale per regressione con kernel, ranking, riduzione di dimensione (kernel PCA) e clustering, che si estendono con lo stesso schema.

## Nei corsi
- **Matematica per l'AI** (triennale): capitolo 6 del libro di testo (Metodi kernel), nel programma del corso. Fonti: `triennale/ANNO 3/matematica AI/FML.pdf` §6.3.2 (p. 134 del PDF); `CapitoliFOM.pdf`.

## Prerequisiti
- [[Kernel definito positivo]]: definisce l'RKHS
- [[Teorema della proiezione]]: decomposizione $\mathbb H=\mathbb H_1\oplus\mathbb H_1^\perp$

## Porta a
- Nessuno nel corso.

## Collegati
- [[Regolarizzazione]]: $G(\|h\|)$ è un termine di regolarizzazione
- [[Support vector machine]]: la soluzione SVM ha esattamente questa forma
