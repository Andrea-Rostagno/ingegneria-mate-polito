---
tipo: competenza
area: analisi
corsi: [Analisi 1, Metodi matematici e probabilità]
livello: [triennale]
aliases: ["forma trigonometrica", "forma esponenziale", "formula di Eulero", "Euler's formula", "formula di De Moivre", "argomento", "anomalia"]
tags: [competenza, area/analisi]
---

# Forma trigonometrica ed esponenziale dei numeri complessi

> Scrivere $z=\rho(\cos\vartheta+i\sin\vartheta)=\rho e^{i\vartheta}$ trasforma i prodotti in somme di angoli: è la forma adatta a prodotti, potenze e radici.

## Definizione / enunciato
Per $z=a+ib$ si pone $\rho=|z|=\sqrt{a^2+b^2}$ e $\vartheta$ l'angolo (**anomalia** o argomento) che il segmento $Oz$ forma con il semiasse reale positivo: $a=\rho\cos\vartheta$, $b=\rho\sin\vartheta$. Allora
$$z=\rho(\cos\vartheta+i\sin\vartheta)\qquad\text{(forma trigonometrica).}$$
**Formula di Eulero**: $e^{i\vartheta}=\cos\vartheta+i\sin\vartheta$, da cui la **forma esponenziale** $z=\rho e^{i\vartheta}$. Più in generale $e^{x+iy}=e^x(\cos y+i\sin y)$: l'esponenziale complesso ha modulo $e^{\operatorname{Re}z}$ e anomalia $\operatorname{Im}z$.

## Formule chiave
$$z=\rho e^{i\vartheta},\ w=re^{i\varphi}\ \Rightarrow\ zw=\rho r\,e^{i(\vartheta+\varphi)}$$
$$z^n=\rho^n e^{in\vartheta}=\rho^n\big(\cos(n\vartheta)+i\sin(n\vartheta)\big),\quad n\in\mathbb Z\qquad\text{(De Moivre)}$$
Due complessi non nulli sono uguali se e solo se $|z_1|=|z_2|$ e $\arg z_1=\arg z_2+2k\pi$, $k\in\mathbb Z$ (lezione del 22/12/2021).

## Intuizione
Moltiplicare per $\rho e^{i\vartheta}$ significa dilatare di $\rho$ e ruotare di $\vartheta$: i moduli si moltiplicano e gli angoli si sommano, come i logaritmi trasformano prodotti in somme (nota 9 di Morandotti).

## Come si usa
Per calcolare una potenza si passa alla forma esponenziale e si applica De Moivre. Esercizio di Morandotti (es. 1.5.45-1): calcolare $(\sqrt2(1+i))^{-4}$ e $(1+i\sqrt3)^{-4}$. L'anomalia si ricava da $\tan\vartheta=b/a$ facendo attenzione al quadrante.

## Nei corsi
- **Analisi 1** (triennale): "forma trigonometrica, modulo e argomento, esponenziale di un numero complesso e formule di Eulero". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (§1.5.3, (1.51)-(1.55), PDF pp. 43-45); `triennale/ANNO 1/analisi 1/Lezioni 2021-22 (manoscritte)/Lezione 2021-12-22.pdf` (p. 1, uguaglianza tramite modulo e argomento).
- **Metodi matematici e probabilità** (triennale): §1.1.3 "Forma trigonometrica e forma esponenziale". Qui si introduce l'**argomento principale** $\operatorname{Arg}z\in(-\pi,\pi]$, distinto da $\arg z=\operatorname{Arg}z+2k\pi$, che diventa essenziale per il logaritmo complesso; la formula di Eulero è il punto di partenza per definire $e^z$, $\sin z$, $\cos z$. Fonti: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 1.pdf` (pp. 5-9); richiami (formule di modulo e argomento principale per quadranti, De Moivre) in `1 - Numeri Complessi (2).pdf`.

## Prerequisiti
- [[Numeri complessi]]: modulo e coordinate polari
- [[Formule trigonometriche]]: prodotti via formule di addizione

## Porta a
- [[Radici n-esime dei numeri complessi]]: si usa De Moivre
- [[Equazioni lineari del secondo ordine a coefficienti costanti]]: radici complesse danno seni e coseni
- [[Metodo di somiglianza]]: si confronta α+iβ con le radici
- [[Funzioni elementari complesse]]: la formula di Eulero definisce esponenziale, seno e coseno complessi
- [[Logaritmo complesso]]: l'argomento principale dà il valore principale Log z
- [[Trasformazioni di Möbius]]: rotazioni e dilatazioni via modulo e argomento
- [[Metodo dei fasori]]: il fasore è E0 e^{iφ} che ruota con ω

## Collegati
- [[Onde elettromagnetiche]]: onde scritte come parte immaginaria di E0 e^{i(kx-ωt)}
