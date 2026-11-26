---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità, Analisi 2]
livello: [triennale]
aliases: ["Taylor series", "sviluppo in serie di Taylor", "serie di Maclaurin", "Maclaurin series", "sviluppabilità in serie", "analiticità"]
tags: [competenza, area/analisi]
---

# Serie di Taylor

> Ogni funzione analitica in un disco è la somma della sua serie di Taylor in quel disco: in campo complesso "derivabile" equivale a "sviluppabile in serie di potenze".

## Definizione / enunciato
**Teorema 3.14 (sviluppo in serie di Taylor).** Sia $f$ analitica in un dominio $\Omega$, $z_0\in\Omega$ e $B_{r_0}(z_0)\subseteq\Omega$. Allora per ogni $z\in B_{r_0}(z_0)$
$$f(z)=\sum_{n=0}^{\infty}\frac{f^{(n)}(z_0)}{n!}(z-z_0)^n=f(z_0)+f'(z_0)(z-z_0)+\tfrac12f''(z_0)(z-z_0)^2+\cdots\quad(3.6)$$
Con $z_0=0$ si parla di serie di **Maclaurin**. Viceversa, ogni serie di potenze convergente coincide con lo sviluppo di Taylor della sua somma.

## Formule chiave
Sviluppi del formulario (centro $0$): $\frac1{1-z}=\sum z^n$ ($R=1$); $e^z=\sum\frac{z^n}{n!}$, $\sin z=\sum\frac{(-1)^nz^{2n+1}}{(2n+1)!}$, $\cos z=\sum\frac{(-1)^nz^{2n}}{(2n)!}$, $\sinh z=\sum\frac{z^{2n+1}}{(2n+1)!}$, $\cosh z=\sum\frac{z^{2n}}{(2n)!}$ ($R=+\infty$).

## Intuizione
Nella dimostrazione si scrive $f(z)=\frac1{2\pi i}\oint_{C_1}\frac{f(s)}{s-z}ds$ e si sviluppa $\frac1{s-z}$ come serie geometrica in $\frac{z-z_0}{s-z_0}$; i coefficienti sono le formule di Cauchy per le derivate. Il raggio arriva fino alla singolarità più vicina.

## Come si usa
Esempio 3.15: $\frac1{1-z}$ è analitica in $|z|<1$ con sviluppo $\sum z^n$, da cui $f^{(n)}(0)=n!$. Gli sviluppi servono per classificare zeri e singolarità e per trovare i residui (es. $z\sinh z=z^2+\frac1{3!}z^4+\dots$ ha uno zero di ordine 2 in $0$, Esempio 3.22).

## Nei corsi
- **Metodi matematici e probabilità** (triennale): §3.2 "Serie di Taylor". Fonti: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 3 (1).pdf` (pp. 11-13 del PDF); tabella degli sviluppi in `formulario_analisi.pdf`.
- **Analisi 2** (triennale): caso reale. Se $f=\sum a_n(x-x_0)^n$ con $R>0$, allora $a_n=\frac{f^{(n)}(x_0)}{n!}$. Sviluppi ricavati a lezione:
  - $e^x=\sum\frac{x^n}{n!}$ per ogni $x$ (da $f'=f$, $f(0)=1$), con la stima $|S_N-\frac1e|\le\frac1{N!}$ per $x=-1$;
  - $\log(1+t)$ e $\log\frac{1+t}{1-t}=2(t+\frac{t^3}3+\frac{t^5}5+\dots)$ per $|t|<1$, usato per le tavole dei logaritmi;
  - $\sin x$ e $\cos x$ per ogni $x$, sia mandando a zero il resto di Lagrange sia risolvendo $f''=-f$, $f(0)=0$, $f'(0)=1$;
  - $\arctan t$ per $|t|<1$, valido anche in $t=\pm1$ (non dimostrato), da cui $\frac\pi4=1-\frac13+\frac15-\dots$.

  Attenzione: una $f\in C^\infty$ non coincide per forza con la sua serie di Taylor. $e^{-1/x^2}$ (estesa con $0$) ha tutte le derivate nulle in $0$, quindi la sua serie di Taylor è nulla. Conviene combinare gli sviluppi notevoli, ad esempio $\frac1{x^2-5x+6}=\sum\frac{3^{n+1}-2^{n+1}}{6^{n+1}}x^n$ per $|x|<2$. Se $f$ è pari compaiono solo potenze pari, se è dispari solo dispari. Sulla p. 6 la stima del resto di $\sin x$ è scritta $\le\frac1{(2k+2)!}$, senza il fattore $|x|^{2k+2}$. Fonti: `triennale/ANNO 2/analisi 2/AII 20 2022 serie potenze.pdf` (pp. 21-22); `triennale/ANNO 2/analisi 2/AII 21 2022 serie di potenze.pdf` (lez. 12/12/2022, pp. 1-23).

## Prerequisiti
- [[Serie di potenze]]: somma di una serie di potenze nel disco
- [[Formula integrale di Cauchy]]: coefficienti $f^{(n)}(z_0)/n!$ come integrali
- [[Funzione olomorfa]]: ogni olomorfa è sviluppabile
- [[Derivazione e integrazione termine a termine]]: a_n = f^(n)(x0)/n! (Analisi 2)

## Porta a
- [[Singolarità isolate]]: ordine degli zeri dai coefficienti

## Collegati
- [[Sviluppi di Maclaurin]]: caso reale, formula con resto invece di serie
- [[Formula di Taylor con resto di Lagrange]]: il resto deve tendere a 0 (Analisi 2)
- [[Teorema di esistenza e unicità locale]]: l'unicità identifica la somma della serie di sin x (Analisi 2)
- [[Funzioni pari, dispari e periodiche]]: f pari ha solo potenze pari nello sviluppo (Analisi 2)
