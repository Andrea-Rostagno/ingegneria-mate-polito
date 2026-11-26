---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità, Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["Liouville's theorem", "funzione intera e limitata", "bounded entire function", "teorema di Liouville per le funzioni armoniche", "Liouville for harmonic functions"]
tags: [competenza, area/analisi]
---

# Teorema di Liouville

> Una funzione intera e limitata su tutto $\mathbb C$ è costante: da qui segue in poche righe il teorema fondamentale dell'algebra.

## Definizione / enunciato
**Teorema 2.37.** Sia $f$ intera e limitata, $|f(z)|\le M$ per ogni $z\in\mathbb C$. Allora $f$ è costante.

## Formule chiave
Con $C_0$ circonferenza di centro $z_0$ e raggio $r_0$, dalla formula di Cauchy per le derivate (2.20) con $n=1$ e dalla stima $ML$ (2.17):
$$|f'(z_0)|=\frac1{2\pi}\Big|\oint_{C_0}\frac{f(z)}{(z-z_0)^2}dz\Big|\le\frac1{2\pi}\sup_{C_0}\Big|\frac{f(z)}{(z-z_0)^2}\Big|\cdot2\pi r_0\le\frac{M}{r_0}.$$
Poiché $r_0$ è arbitrario, $f'(z_0)=0$ per ogni $z_0$, quindi $f$ è costante.

## Intuizione
Una funzione analitica è controllata dai suoi valori su cerchi sempre più grandi: se resta limitata, la derivata è schiacciata a zero. In $\mathbb C$ non esistono quindi analoghi di $\sin x$ (intera e limitata su $\mathbb R$).

## Come si usa
**Teorema fondamentale dell'algebra** (dimostrazione del testo): se $P(z)=a_0+\dots+a_nz^n$, $a_n\ne0$, $n\ge1$, non avesse zeri, $1/P(z)$ sarebbe intera e limitata (perché $|P(z)|\to\infty$), quindi costante: assurdo. Altro uso: $\sin z$ e $\cos z$ sono intere non costanti, dunque illimitate in $\mathbb C$.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): §2.8 "Risultati globali". Fonte: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 2 (1).pdf` (pp. 23-24 del PDF).
- **Equazioni alle derivate parziali** (triennale): versione per le **funzioni armoniche** in $\mathbb R^n$. Teor. 3.1.16: $u$ armonica e limitata è costante, perché la stima sulle derivate su $B_R(x)$ dà $|\partial_{x_i}u(x)|\le\frac nR\sup_{B_R(x)}|u|\le\frac{Cn}R\to0$ (3.9). Oss. 3.1.17: basta $|u(x)|\le A+B|x|^\alpha$ con $\alpha<1$; con crescita lineare le derivate seconde si annullano e $u$ è affine. Teor. 3.5.3: basta che $u$ sia limitata dal basso, applicando Harnack a $u-m$ e mandando $R\to+\infty$. Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (pp. 22-23, 31).

## Prerequisiti
- [[Formula integrale di Cauchy]]: stima di $f'$ dalla formula per le derivate
- [[Stime sulle derivate delle funzioni armoniche]]: versione armonica, $|\partial_iu|\le\frac nR\sup|u|$
- [[Disuguaglianza di Harnack]]: versione per armoniche limitate dal basso

## Porta a
- [[Teorema fondamentale dell'algebra]]: $1/P$ sarebbe intera e limitata

## Collegati
- [[Funzioni elementari complesse]]: seno e coseno complessi sono illimitati
