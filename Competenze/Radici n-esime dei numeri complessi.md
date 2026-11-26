---
tipo: competenza
area: analisi
corsi: [Analisi 1, Metodi matematici e probabilità]
livello: [triennale]
aliases: ["n-th roots of complex numbers", "radici dell'unità", "equazione z^n = w"]
tags: [competenza, area/analisi]
---

# Radici n-esime dei numeri complessi

> Ogni numero complesso non nullo ha esattamente $n$ radici $n$-esime distinte, che stanno sui vertici di un poligono regolare di raggio $\sqrt[n]{\rho}$.

## Definizione / enunciato
Dati $z=\rho e^{i\vartheta}$ e $w=re^{i\varphi}$, si cerca quando $w^n=z$. Uguagliando moduli e anomalie (De Moivre) si ottiene
$$\rho=r^n\Rightarrow r=\sqrt[n]{\rho},\qquad n\varphi=\vartheta+2k\pi\Rightarrow\varphi=\frac{\vartheta+2k\pi}{n},\ k\in\mathbb Z.$$
Solo $k\in\{0,\dots,n-1\}$ danno angoli diversi, quindi le radici sono esattamente $n$.

## Formule chiave
$$w_k=\sqrt[n]{\rho}\left(\cos\frac{\vartheta+2k\pi}{n}+i\sin\frac{\vartheta+2k\pi}{n}\right),\qquad k=0,\dots,n-1$$

## Intuizione
Le radici hanno tutte lo stesso modulo $\sqrt[n]\rho$ e angoli che differiscono di $2\pi/n$: si dispongono sulla circonferenza di raggio $\sqrt[n]{\rho}$ come vertici di un $n$-agono regolare. L'equazione $z^n=z^*$ ha quindi $n$ soluzioni, anticipo del teorema fondamentale dell'algebra.

## Come si usa
Si scrive il numero in forma esponenziale, si prende la radice reale del modulo e si divide l'anomalia per $n$ aggiungendo $2k\pi/n$. Nelle equazioni non algebriche della lezione del 22/12/2021 si arriva spesso a una condizione del tipo $z^n=w$ e si conclude con questa formula. Esercizi tipo: esercitazione 25 (2021-22).

## Nei corsi
- **Analisi 1** (triennale): "radici di numeri complessi". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (§1.5.3, (1.56), PDF p. 45); `triennale/ANNO 1/analisi 1/Lezioni 2021-22 (manoscritte)/Lezione 2021-12-22.pdf`.
- **Metodi matematici e probabilità** (triennale): §1.1.4 "Potenze e radici" e §1.1.5: il simbolo $\sqrt{\ }$ in $\mathbb C$ indica implicitamente entrambe le radici quadrate, così $z=\frac{-b+\sqrt{b^2-4ac}}{2a}$ risolve $az^2+bz+c=0$ anche con coefficienti complessi. Fonti: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 1.pdf` (pp. 9-11); formula $z_k=\sqrt[n]r\,e^{i(\frac\theta n+\frac{2k\pi}n)}$ anche nei Richiami di teoria di `1 - Numeri Complessi (2).pdf`.

## Prerequisiti
- [[Forma trigonometrica ed esponenziale dei numeri complessi]]: si usa De Moivre

## Porta a
- [[Teorema fondamentale dell'algebra]]: z^n=w ha n soluzioni

## Collegati
- [[Logaritmo complesso]]: altra multifunzione nata dalla periodicità dell'argomento
