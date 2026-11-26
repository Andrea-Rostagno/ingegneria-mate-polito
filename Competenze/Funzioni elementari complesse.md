---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["complex elementary functions", "esponenziale complesso", "seno e coseno complessi", "funzioni iperboliche complesse", "sinh z", "cosh z", "zeri del seno e del coseno complessi"]
tags: [competenza, area/analisi]
---

# Funzioni elementari complesse

> Esponenziale, seno, coseno e funzioni iperboliche estese a $z\in\mathbb C$ tramite la formula di Eulero: sono intere e conservano le identità formali del caso reale, ma non la limitatezza.

## Definizione / enunciato
Per $z=x+iy$:
$$e^z=e^xe^{iy}=e^x(\cos y+i\sin y),\qquad \sin z=\frac{e^{iz}-e^{-iz}}{2i},\quad \cos z=\frac{e^{iz}+e^{-iz}}{2},$$
$$\sinh z=\frac{e^z-e^{-z}}{2},\qquad \cosh z=\frac{e^z+e^{-z}}{2}.$$
Le altre (tangente, cotangente, ...) si definiscono come nel caso reale.

## Formule chiave
- $e^{z_1+z_2}=e^{z_1}e^{z_2}$, $|e^z|=e^x$, $\arg e^z=y$, $\overline{e^z}=e^{\bar z}$; $e^z$ è periodica di periodo $2\pi i$.
- $\sin z=\sin x\cosh y+i\cos x\sinh y$, $\cos z=\cos x\cosh y-i\sin x\sinh y$ (1.29)-(1.30).
- $|\sin z|^2=\sin^2x+\sinh^2y$, $|\cos z|^2=\cos^2x+\sinh^2y$ (1.34).
- $\cos z=0\iff z=\frac\pi2+k\pi$, $\sin z=0\iff z=k\pi$, $k\in\mathbb Z$ (1.31)-(1.32).
- $\sinh iz=i\sin z$, $\cosh iz=\cos z$, $\sin iz=i\sinh z$, $\cos iz=\cosh z$.
- Derivate: $De^z=e^z$, $D\sin z=\cos z$, $D\cos z=-\sin z$, $D\sinh z=\cosh z$, $D\cosh z=\sinh z$ (§2.1).

## Intuizione
La (1.34) mostra che $|\sin z|$ cresce come $\sinh y$ lungo l'asse immaginario: in $\mathbb C$ seno e coseno non sono limitati (coerente con il teorema di Liouville). Gli zeri invece restano solo quelli reali.

## Come si usa
Per separare parte reale e immaginaria (Esempio 1.24: $u=\sin x\cosh y$, $v=\cos x\sinh y$), trovare zeri e domini di $\tan z$ (definita per $z\ne k\pi+\frac\pi2$) e scrivere gli sviluppi di Taylor del formulario.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): §1.3.2-1.3.4 e Teorema 1.32 (continuità delle funzioni elementari). Fonti: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 1.pdf` (pp. 21-23); serie di $e^z,\sin z,\cos z,\sinh z,\cosh z$ in `formulario_analisi.pdf`.

## Prerequisiti
- [[Forma trigonometrica ed esponenziale dei numeri complessi]]: formula di Eulero come definizione

## Porta a
- [[Logaritmo complesso]]: inversa multivoca dell'esponenziale
- [[Funzione olomorfa]]: esempi di funzioni intere

## Collegati
- [[Teorema di Liouville]]: seno e coseno intere ma non limitate
- [[Formule trigonometriche]]: le identità restano valide in campo complesso
- [[Trasformazioni di Möbius]]: altra famiglia di funzioni elementari del §1.3
