---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["derivative of the inverse function", "inverse function rule"]
tags: [competenza, area/analisi]
---

# Derivata della funzione inversa

> Se $f$ è continua, invertibile e derivabile con $f'(x_0)\ne0$, l'inversa è derivabile in $y_0=f(x_0)$ con derivata $1/f'(x_0)$.

## Definizione / enunciato
**Teorema 1.5** (Mazzi). Sia $x_0$ interno al dominio di $f$ e
- (a) $f$ continua e invertibile in un intorno $B(x_0)$;
- (b) $f$ derivabile in $x_0$;
- (c) $f'(x_0)\ne0$.

Allora $y_0=f(x_0)$ è interno a $J=f(B(x_0))$, $f^{-1}$ è derivabile in $y_0$ e
$$(f^{-1})'(y_0)=\frac1{f'(f^{-1}(y_0))}=\frac1{f'(x_0)} .$$
**Corollario 1.1.** Se invece $f'(x_0)=0$, $f^{-1}$ non è derivabile in $y_0$ e $\lim_{y\to y_0}\left|\frac{f^{-1}(y)-f^{-1}(y_0)}{y-y_0}\right|=+\infty$.

**Teor. 1.6** (versione locale): se $f$ è derivabile in un intorno di $x_0$, $f'$ è continua in $x_0$ e $f'(x_0)\ne0$, allora $f$ è localmente invertibile e $f^{-1}$ è derivabile in $f(x_0)$.

## Formule chiave
$$\frac{f^{-1}(y)-f^{-1}(y_0)}{y-y_0}=\frac{x-x_0}{f(x)-f(x_0)}\ \xrightarrow[\ y\to y_0\ ]{}\ \frac1{f'(x_0)}$$

## Intuizione
Il grafico dell'inversa è il simmetrico rispetto a $y=x$: le pendenze diventano reciproche. Se la tangente a $f$ è orizzontale, quella dell'inversa è verticale ($x^3$ e $\sqrt[3]y$ in $0$).

## Come si usa
Dà le derivate delle inverse elementari. Esempio di Mazzi (es. 1.8): da $(e^x)'=e^x>0$ si ottiene $(\log y)'=\frac1{e^{\log y}}=\frac1y$. Allo stesso modo si ottengono le derivate di $\arcsin$, $\arccos$, $\arctan$ (Morandotti, teor. 4.1.15 e (4.11g)). La continuità di $f^{-1}$, necessaria per far tendere $x\to x_0$ quando $y\to y_0$, viene dal teorema sulla continuità della funzione inversa.

## Nei corsi
- **Analisi 1** (triennale): nell'elenco dei teoremi d'esame ("derivata della funzione inversa"). Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/calcolo differenziale corretto.pdf` (§1.4, teor. 1.5-1.6, cor. 1.1, es. 1.8, pp. 12-14); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (teor. 4.1.15, PDF p. 121).

## Prerequisiti
- [[Derivata]]: rapporto incrementale capovolto
- [[Continuità della funzione inversa]]: serve x→x0 quando y→y0

## Porta a
- Nessuno.

## Collegati
- [[Funzioni trigonometriche inverse]]: derivate di arcsin, arctan
- [[Regole di derivazione]]: regola di calcolo
