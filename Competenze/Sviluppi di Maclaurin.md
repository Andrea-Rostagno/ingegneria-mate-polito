---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["Maclaurin expansions", "sviluppi di McLaurin", "formula di Taylor", "Taylor formula", "resto di Peano", "o piccolo", "sviluppi notevoli"]
tags: [competenza, area/analisi]
---

# Sviluppi di Maclaurin

> Gli sviluppi in $x=0$ delle funzioni elementari, con resto in forma di "o piccolo", usati per lo studio del comportamento locale e per i limiti.

## Definizione / enunciato
Il programma prevede la "Formula di Taylor con resto di Peano e di Lagrange" e gli "Sviluppi di McLaurin" (Taylor centrato in $0$); l'enunciato generale non è nel materiale della cartella (da verificare sul testo del corso). Il formulario riporta gli sviluppi notevoli.

## Formule chiave
$$e^x=1+x+\frac{x^2}2+\dots+\frac{x^k}{k!}+\dots+\frac{x^n}{n!}+o(x^n)$$
$$\log(1+x)=x-\frac{x^2}2+\dots+(-1)^{n-1}\frac{x^n}n+o(x^n)$$
$$\sin x=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\dots+(-1)^m\frac{x^{2m+1}}{(2m+1)!}+o(x^{2m+2})$$
$$\cos x=1-\frac{x^2}2+\frac{x^4}{4!}-\dots+(-1)^m\frac{x^{2m}}{(2m)!}+o(x^{2m+1})$$
$$\sinh x=x+\frac{x^3}{3!}+\frac{x^5}{5!}+\dots+\frac{x^{2m+1}}{(2m+1)!}+o(x^{2m+2}),\quad \cosh x=1+\frac{x^2}2+\frac{x^4}{4!}+\dots+\frac{x^{2m}}{(2m)!}+o(x^{2m+1})$$
$$\arcsin x=x+\frac{x^3}6+\frac{3x^5}{40}+\dots+\left|\binom{-1/2}{m}\right|\frac{x^{2m+1}}{2m+1}+o(x^{2m+2})$$
$$\arctan x=x-\frac{x^3}3+\frac{x^5}5-\dots+(-1)^m\frac{x^{2m+1}}{2m+1}+o(x^{2m+2})$$
$$(1+x)^\alpha=1+\alpha x+\frac{\alpha(\alpha-1)}2x^2+\dots+\binom\alpha nx^n+o(x^n)$$
$$\frac1{1+x}=1-x+x^2-\dots+(-1)^nx^n+o(x^n),\qquad \sqrt{1+x}=1+\frac12x-\frac18x^2+\frac1{16}x^3+o(x^3)$$

## Intuizione
Vicino a $0$ ogni funzione elementare si approssima con un polinomio, con errore trascurabile rispetto all'ultima potenza tenuta. Le funzioni dispari ($\sin$, $\sinh$, $\arctan$, $\arcsin$) hanno solo potenze dispari, le pari ($\cos$, $\cosh$) solo potenze pari: per questo il resto è $o(x^{2m+2})$ anziché $o(x^{2m+1})$.

## Come si usa
Troncati al primo ordine danno i limiti notevoli: $\sin x=x+o(x^2)$ dà $\frac{\sin x}x\to1$, $\cos x=1-\frac{x^2}2+o(x^3)$ dà $\frac{1-\cos x}{x^2}\to\frac12$ (deduzione fatta da me dalle due tavole del formulario). Il programma li usa per lo "studio del comportamento locale delle funzioni"; il materiale non contiene esercizi svolti.

## Nei corsi
- **Analisi 1** (triennale): Fonti: `triennale/ANNO 1/analisi 1/formulario.pdf` (p. 4, "Sviluppi di Maclaurin notevoli"); `triennale/ANNO 1/analisi 1/presentazione_corso15_2021-22.pdf` (programma).
- **Analisi 1** (seconda passata, 2026-11-24): l'enunciato generale ora è nel materiale. Mazzi (teor. 0.1): se $f$ è derivabile $n$ volte in $x_0$ interno al dominio, $f(x)=f(x_0)+f'(x_0)(x-x_0)+\dots+\frac1{n!}f^{(n)}(x_0)(x-x_0)^n+o((x-x_0)^n)$ per $x\to x_0$ (formula di Taylor con resto di Peano; per $x_0=0$ formula di Maclaurin), dimostrata per induzione con de l'Hôpital; il polinomio di Taylor è unico (teor. 0.2). Morandotti (teor. 4.2.21) chiede $f$ derivabile $n-1$ volte nell'intervallo e $f^{(n)}(x_0)$ esistente. Il resto di Lagrange è nella nota Formula di Taylor con resto di Lagrange. Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/Taylor-corretto.pdf` (def. 0.1-0.2, teor. 0.1-0.2, pp. 3-5; operazioni con gli sviluppi §0.4); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (teor. 4.2.21, PDF p. 139); esercitazione 21 (2021-22) ed esercitazione 16 (2022-23).

## Prerequisiti
- [[Derivate delle funzioni elementari]]: i coefficienti dipendono dalle derivate successive in 0
- [[Limiti notevoli]]: i limiti notevoli sono gli sviluppi al primo ordine
- [[Simboli di Landau]]: il resto è un o-piccolo

## Porta a
- [[Propagazione degli errori]]: sviluppo di Taylor al primo ordine di f
- [[Formula di Taylor con resto di Lagrange]]: stesso polinomio di Taylor
- [[Punti di estremo locale]]: test delle derivate successive

## Collegati
- [[Cancellazione numerica]]: lo sviluppo in 0 di $e^x$ e $\cos x$ elimina la cancellazione (dal corso Algebra lineare)
- [[Interpolazione polinomiale]]: il polinomio di Taylor approssima solo localmente, l'interpolazione è l'alternativa (dal corso Algebra lineare)
- [[Pendolo semplice]]: sen θ ≈ θ per angoli piccoli
