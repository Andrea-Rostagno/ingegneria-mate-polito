---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["Fourier inversion formula", "antitrasformata di Fourier", "inverse Fourier transform", "uguaglianza di Parseval", "Parseval's identity"]
tags: [competenza, area/analisi]
---

# Formula di inversione di Fourier

> L'antitrasformata $\check g(\nu)=\int g(t)e^{2\pi i\nu t}dt$ inverte la trasformata di Fourier: in $\mathcal S$ e in $\mathcal S'$ esattamente, per funzioni sommabili con trasformata sommabile puntualmente.

## Definizione / enunciato
**Definizione 5.12.** Per $g$ sommabile: $\check g(\nu)=\int_{\mathbb R}g(t)e^{2\pi i\nu t}dt=\hat g(-\nu)$, notazione $\mathcal F^{-1}(g)$.
**Teorema 5.14 (inversione in $\mathcal S$).** Se $\varphi\in\mathcal S(\mathbb R)$:
$$\mathcal F^{-1}(\mathcal F\varphi)=\varphi=\mathcal F(\mathcal F^{-1}\varphi),\qquad\text{cioè}\quad\mathcal F(\mathcal F(\varphi))(t)=\varphi(-t)\quad(5.20)\text{-}(5.21).$$
**Teorema 5.29 (inversione in $\mathcal S'$).** $\mathcal F:\mathcal S'\to\mathcal S'$ è invertibile con inversa l'antitrasformata; $\mathcal F(\mathcal F(T))(t)=T(-t)$.
**Corollario 5.30.** Se $g\in C(\mathbb R)$ è sommabile e $\hat g$ è sommabile, allora
$$g(t)=\int_{\mathbb R}\hat g(\nu)e^{2\pi it\nu}\,d\nu\qquad\forall t\in\mathbb R\quad(5.40).$$

## Formule chiave
**Uguaglianza di Parseval** (§5.6, senza dimostrazione): se $g$ è sommabile e a quadrato sommabile, $\hat g$ è a quadrato sommabile e
$$\|g\|_2=\|\hat g\|_2,\qquad \|f\|_2=\Big(\int_{\mathbb R}|f(t)|^2dt\Big)^{1/2}.$$

## Intuizione
Trasformare due volte equivale a riflettere $t\mapsto-t$: la trasformata è "quasi" un'involuzione e l'antitrasformata differisce solo per il segno dell'esponente. Parseval dice che l'energia del segnale si conserva passando alle frequenze.

## Come si usa
Si usa per ricavare nuove trasformate da quelle note: da $\mathcal F(e^{-a|t|})=\frac{2a}{a^2+4\pi^2\nu^2}$ applicando $\mathcal F\mathcal F\varphi(t)=\varphi(-t)$ si ottiene $\mathcal F\big(\frac1{a^2+t^2}\big)=\frac\pi ae^{-2\pi a|\nu|}$ (passaggio nostro, coerente con la tavola del formulario). La dimostrazione del Teorema 5.14 usa Fubini e il nucleo gaussiano (appendice §5.10).

## Nei corsi
- **Metodi matematici e probabilità** (triennale): §5.3 (Def. 5.12, Teor. 5.14), §5.5 (Teor. 5.29, Cor. 5.30), §5.6 (Parseval). Fonte: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 5 (3).pdf` (pp. 9-10, 18-19, 26-27 del PDF).

## Prerequisiti
- [[Spazio di Schwartz]]: inversione esatta in $\mathcal S$
- [[Trasformata di Fourier]]: definizione dell'antitrasformata

## Porta a
- [[Trasformata di Fourier di distribuzioni temperate]]: inversione in $\mathcal S'$
- [[Antitrasformata di Laplace]]: formula di Riemann-Fourier

## Collegati
- [[Teorema di Fubini]]: scambio degli integrali nella dimostrazione
