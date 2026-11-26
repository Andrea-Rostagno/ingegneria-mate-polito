---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["orthonormal basis of a Hilbert space", "base hilbertiana", "Hilbert basis", "insieme ortonormale completo", "complete orthonormal set", "base ortonormale numerabile", "isomorfismo con ℓ^2"]
tags: [competenza, area/analisi]
---

# Base ortonormale di uno spazio di Hilbert

> Un insieme ortonormale al più numerabile il cui span è denso: ogni vettore si sviluppa in serie (convergente in norma) dei suoi coefficienti; esiste se e solo se lo spazio è separabile.

## Definizione / enunciato
In uno spazio di Hilbert $H$ (Def. 6.40): un insieme ortonormale $E$ è **completo** se $\overline{\operatorname{span}E}=H$; una **base ortonormale** è un insieme ortonormale completo al più numerabile.
**Prop. 6.44.** Per $\{e_n\}_{n\in\mathbb N}$ ortonormale sono equivalenti:
(i) $\{e_n\}$ è completo; (ii) $\{e_n\}^\perp=\{0\}$; (iii) $x=\sum_n\langle x,e_n\rangle e_n$ per ogni $x$; (iv) $\|x\|^2=\sum_n|\langle x,e_n\rangle|^2$; (v) $\langle x,y\rangle=\sum_n\langle x,e_n\rangle\overline{\langle y,e_n\rangle}$.
**Teor. 6.46.** $H$ ha una base ortonormale se e solo se è separabile.
**Cor. 6.48.** Se $H$ è separabile e $\dim H=\infty$, $\Xi(x)=(\langle x,e_n\rangle)_n$ è un isomorfismo isometrico $H\to\ell^2$; se $\dim H=n$, $H\cong\mathbb F^n$.

## Formule chiave
Basi di $L^2$ (Prop. 6.51): $\{\sqrt{1/\pi}\}\cup\{\sqrt{2/\pi}\cos nt\}_{n\ge1}$ e $\{\sqrt{2/\pi}\sin nt\}_{n\ge1}$ in $L^2(0,\pi)$; $\{\sqrt{1/2\pi}\}\cup\{\sqrt{1/\pi}\cos nt\}\cup\{\sqrt{1/\pi}\sin nt\}$ e, se $\mathbb F=\mathbb C$, $\{e^{int}/\sqrt{2\pi}\}_{n\in\mathbb Z}$ in $L^2(-\pi,\pi)$. Prodotti tensori di basi danno basi di $L^2$ del prodotto (Prop. 6.54).

## Intuizione
Una base ortonormale **non** è una base nel senso algebrico (di Hamel): in $\ell^2$ lo span della base canonica è $c_{00}$, che è solo denso; servono combinazioni infinite (serie). Separabilità = poter costruire la base con Gram-Schmidt a partire da un denso numerabile. La serie in (iii) converge incondizionatamente ma in generale non assolutamente (Oss. 6.45).

## Come si usa
Per verificare la completezza di un insieme ortonormale si usa (ii): se $f\perp e_n$ per ogni $n$ allora $f=0$; oppure si mostra che lo span è denso (per le basi trigonometriche, tramite densità di $C[0,\pi]$ in $L^2$ e Stone-Weierstrass). Tutti gli spazi di Hilbert separabili di dimensione infinita sono "lo stesso" $\ell^2$.

## Nei corsi
- **Analisi funzionale** (triennale): §6.3 "Basi ortonormali" e §6.4 "Serie di Fourier" (Def. 6.40, Oss. 6.42, Es. 6.43, Prop. 6.44, Oss. 6.45, Teor. 6.46, Def. 6.47, Cor. 6.48, Prop. 6.51, Prop. 6.54). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 80-88).

## Prerequisiti
- [[Disuguaglianza di Bessel]]: convergenza della serie dei coefficienti
- [[Procedimento di Gram-Schmidt]]: costruzione della base da un denso numerabile
- [[Spazio separabile]]: condizione di esistenza
- [[Complemento ortogonale]]: completezza come {e_n}⊥ = {0}

## Porta a
- [[Identità di Parseval]]: uguaglianza (iv) della Prop. 6.44
- [[Serie di Fourier]]: sviluppo nella base trigonometrica di L^2
- [[Teorema spettrale per operatori compatti]]: base ortonormale di autovettori

## Collegati
- [[Base e dimensione]]: differenza fra base algebrica e base ortonormale
- [[Spazio vettoriale euclideo]]: base ortonormale in dimensione finita
- [[Spazio di Hilbert]]: sistema ortonormale completo e Fisher-Riesz
