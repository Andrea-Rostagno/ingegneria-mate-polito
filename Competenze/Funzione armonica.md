---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità, Equazioni alle derivate parziali, Equazioni di fisica matematica]
livello: [triennale]
aliases: ["harmonic function", "equazione di Laplace", "Laplace equation", "armonica coniugata", "harmonic conjugate", "funzioni armoniche radiali", "-Δu = 0"]
tags: [competenza, area/analisi]
---

# Funzione armonica

> Una funzione reale $h(x,y)$ di classe $C^2$ con laplaciano nullo; le parti reale e immaginaria di una funzione analitica sono armoniche, e viceversa una armonica è (localmente) parte reale di una analitica.

## Definizione / enunciato
**Definizione 2.10.** $h:\Omega\subseteq\mathbb R^2\to\mathbb R$ è **armonica** in $\Omega$ se è di classe $C^2(\Omega)$ e
$$h_{xx}(x,y)+h_{yy}(x,y)=0\quad(2.12),\qquad\text{cioè }\ \Delta h=0,\ \ \Delta=\frac{\partial^2}{\partial x^2}+\frac{\partial^2}{\partial y^2}.$$
**Teorema 2.11.** Se $f=u+iv$ è analitica in $\Omega$, allora $u$ e $v$ sono armoniche in $\Omega$.
Se $u,v$ sono armoniche e soddisfano le CR, $v$ si dice **armonica coniugata** di $u$; in tal caso $f=u+iv$ è analitica.

## Formule chiave
Dalle CR $u_x=v_y$, $u_y=-v_x$ e dal teorema di Schwarz:
$$u_{xx}+u_{yy}=v_{yx}-v_{xy}=0,\qquad v_{xx}+v_{yy}=-u_{yx}+u_{xy}=0.$$

## Intuizione
L'accoppiamento delle CR, derivato una seconda volta, forza la somma delle derivate seconde ad annullarsi. Non è simmetrico: se $v$ è coniugata di $u$, in generale $u$ non è coniugata di $v$ (es. $u=x^2-y^2$, $v=2xy$); se lo sono a vicenda, sono costanti.

## Come si usa
Costruzione dell'armonica coniugata (esempio del testo): $u=y^3-3x^2y$. Da $v_y=u_x=-6xy$ si ottiene $v=-3xy^2+\varphi(x)$; da $u_y=-v_x$ si ricava $\varphi'(x)=3x^2$, quindi $v=-3xy^2+x^3+c$ e $f=u+iv=i(z^3+c)$, intera. Il teorema 2.36 vale anche per le armoniche (principio del massimo).

## Nei corsi
- **Metodi matematici e probabilità** (triennale): §2.3 "Funzioni analitiche e armoniche". Fonti: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 2 (1).pdf` (pp. 7-9 del PDF); `2 - Funzioni Complesse (2).pdf` (Richiami di teoria: definizione e teorema).
- **Equazioni alle derivate parziali** (triennale): Def. 3.0.1 in dimensione qualunque: $\Omega\subset\mathbb R^N$ aperto connesso, $u\in C^2(\Omega)$ con $-\Delta u=0$; in una variabile le armoniche sono le affini; l'armonicità è invariante per traslazioni, riscalamenti e trasformazioni ortogonali, da cui lo studio delle armoniche radiali $u(x)=v(|x|)$ che porta alla soluzione fondamentale. §3.1.1: parte reale e immaginaria di una olomorfa sono armoniche (Cauchy-Riemann) e, su $\Omega$ semplicemente connesso, ogni armonica è parte reale di una olomorfa (lemma di Poincaré). Il capitolo 3 ne sviluppa media, stime, principio del massimo, Green, Harnack. Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (pp. 16, 23).
- **Equazioni di fisica matematica** (triennale): solo come primo esempio di PDE, $\Delta u=\sum_{i=1}^n\partial^2u/\partial x_i^2=0$ in $\Omega\subseteq\mathbb R^n$, con $u=u(x)$ indipendente dal tempo; è del secondo ordine. Fonte: `triennale/ANNO 3/eq fisica matematica/11 - Lezione 31_10_23.pdf` (pp. 3, 6).

## Prerequisiti
- [[Condizioni di Cauchy-Riemann]]: derivate due volte danno l'equazione di Laplace

## Porta a
- [[Proprietà di media delle funzioni armoniche]]: valore al centro = media su sfere e palle (Equazioni alle derivate parziali)
- [[Principio del massimo per le funzioni armoniche]]: massimo sul bordo (Equazioni alle derivate parziali)

## Collegati
- [[Problema di Dirichlet e moto browniano]]: le soluzioni del problema di Dirichlet sono funzioni armoniche
- [[Formula integrale di Cauchy]]: proprietà della media e principio del massimo valgono anche per le armoniche
- [[Generatore infinitesimale]]: per il moto browniano è $\frac12\Delta$, il laplaciano
- [[Equazione di Poisson]]: senza cariche ∇²V = 0: il potenziale è armonico
- [[Equazione alle derivate parziali]]: l'equazione di Laplace è il prototipo ellittico
- [[Operatore uniformemente ellittico]]: $-\Delta$ è il caso modello degli operatori ellittici
