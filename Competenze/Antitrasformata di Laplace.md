---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["inverse Laplace transform", "formula di Riemann-Fourier", "Bromwich integral", "formula di Heaviside", "Heaviside expansion formula", "iniettività della trasformata di Laplace"]
tags: [competenza, area/analisi]
---

# Antitrasformata di Laplace

> La trasformata di Laplace è iniettiva sulle funzioni continue, quindi si può invertire: in generale con la formula di Riemann-Fourier, per le funzioni razionali con i residui (formula di Heaviside).

## Definizione / enunciato
**Formula di Riemann-Fourier (6.19).** Per $t>0$ e $s_1>\lambda_f$:
$$f(t)=\frac1{2\pi i}\int_{s_1-i\infty}^{s_1+i\infty}\mathcal L(f)(s)\,e^{st}\,ds.$$
Vale (Teorema 6.18) se $f$ è continua, L-trasformabile e $\mathcal L(f)(s_1+is_2)$ è sommabile in $s_2$.
**Teorema 6.20.** $\mathcal L$ è iniettiva sulle funzioni L-trasformabili continue: $\mathcal L(f)=\mathcal L(g)\Rightarrow f=g$. L'unica $f$ con $\mathcal L(f)=F$ è l'**antitrasformata** $\mathcal L^{-1}(F)$.
**Teorema 6.27.** Se $F$ è analitica in $\{\operatorname{Re}s>\sigma_0\}$ e $|F(s)|\le M/|s|^2$ lì, allora $F$ è la trasformata della $f$ data da Riemann-Fourier.

## Formule chiave
**Teorema 6.28.** $P,Q$ polinomi senza radici comuni, $\deg P<\deg Q$, $z_1,\dots,z_N$ poli di $F=P/Q$:
$$\mathcal L^{-1}\Big(\frac PQ\Big)(t)=H(t)\sum_{k=1}^N\operatorname{Res}\Big[\frac{P(s)}{Q(s)}e^{ts}\Big](z_k),$$
e se i poli sono tutti semplici (**formula di Heaviside**)
$$\mathcal L^{-1}\Big(\frac PQ\Big)(t)=H(t)\sum_{k=1}^N\frac{P(z_k)}{Q'(z_k)}e^{z_kt}\quad(6.25).$$

## Intuizione
Lungo la retta $\operatorname{Re}s=s_1$ la trasformata di Laplace è una trasformata di Fourier di $f e^{-s_1t}$: invertire Laplace è invertire Fourier e rimoltiplicare per $e^{s_1t}$. Chiudendo il cammino verso sinistra si raccolgono i residui dei poli.

## Come si usa
- Esempio 6.22: si riconduce alla tavola con una traslazione, $\mathcal L^{-1}\big(\frac2{(s+1)^2+4}\big)=e^{-t}\mathcal L^{-1}\big(\frac2{s^2+4}\big)=e^{-t}\sin(2t)H(t)$.
- Esempio 6.29: $F(s)=\frac1{(s^2+3)(s-2)}=\frac17\big(\frac{-s-2}{s^2+3}+\frac1{s-2}\big)$; per linearità $\mathcal L^{-1}F=\frac17\big(-\cos\sqrt3t-\frac2{\sqrt3}\sin\sqrt3t+e^{2t}\big)H(t)$ (ricomposto da noi: nel PDF il coefficiente dell'ultimo termine è poco leggibile). Lo stesso risultato si ottiene con la formula di Heaviside sui tre poli semplici $\pm i\sqrt3$, $2$.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): §6.3 "Formula di inversione" (dimostrazione via formula di inversione di Fourier, Corollario 5.30). Fonti: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 6 (1).pdf` (pp. 8-13 del PDF); `13 - Trasformata di Laplace.pdf` (Richiami di teoria).

## Prerequisiti
- [[Trasformata di Laplace]]: iniettività
- [[Teorema dei residui]]: antitrasformata di funzioni razionali
- [[Formula di inversione di Fourier]]: dà la formula di Riemann-Fourier

## Porta a
- Nessuno.

## Collegati
- [[Integrazione delle funzioni razionali]]: decomposizione in fratti semplici
