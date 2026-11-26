---
tipo: competenza
area: fisica
corsi: [Quantum physics]
livello: [triennale]
aliases: ["coherent states", "stati coerenti dell'operatore di distruzione", "annihilation-operator coherent states", "stati di minima indeterminazione", "minimum-uncertainty states", "stati di Glauber"]
tags: [competenza, area/fisica]
---

# Stati coerenti

> Autostati dell'operatore di distruzione dell'oscillatore armonico, $a\psi_z=z\psi_z$: minimizzano il prodotto delle indeterminazioni ($\Delta x\Delta p=\hbar/2$) e i loro valori medi seguono la traiettoria classica.

## Definizione / enunciato
Con $a=\sqrt{\frac{m\omega}{2\hbar}}\left(x+\frac{ip}{m\omega}\right)$ e $\lambda=\sqrt{\hbar/m\omega}$, l'equazione $a\psi_z=z\psi_z$ è un'equazione differenziale del primo ordine con soluzione gaussiana. Equivalentemente, sviluppando sulla base $\psi_n$ dell'oscillatore, $\sqrt nf_n=zf_{n-1}$.

## Formule chiave
$$\psi_z(x)=C\exp\left(-\frac{x^2}{2\lambda^2}+\frac{\sqrt2\,z}{\lambda}x\right)=e^{-|z|^2/2}\sum_{n=0}^\infty\frac{z^n}{\sqrt{n!}}\psi_n(x)$$
$$\mathrm{Re}\,z=\frac{\langle x\rangle}{\sqrt2\lambda},\qquad \mathrm{Im}\,z=\frac{\lambda\langle p\rangle}{\sqrt2\hbar}$$
$$\Delta x^2=\frac{\hbar}{2m\omega},\quad \Delta p^2=\frac{m\omega\hbar}{2},\quad \Delta x\,\Delta p=\frac\hbar2$$
Evoluzione: $e^{-itH/\hbar}\psi_{z_0}=e^{-i\omega t/2}\psi_{z(t)}$, $z(t)=z_0e^{-i\omega t}$; $\langle H\rangle=\hbar\omega|z_0|^2+\frac{\hbar\omega}2$.
Non ortogonalità: $(\psi_z,\psi_\xi)=e^{-(|z|^2+|\xi|^2)/2}e^{z^*\xi}\ne0$, ma $(\psi_z,\psi_z)=1$.

## Intuizione
Lo stato coerente è una gaussiana di larghezza fissa (quella dello stato fondamentale) centrata in $\langle x\rangle$ e moltiplicata da un'onda piana di impulso $\langle p\rangle$: è lo stato "più classico" possibile. A differenza del pacchetto libero non si allarga: resta coerente per sempre.

## Come si usa
Dalla formula di propagazione si ottengono $\bar x(t)=\sqrt{\frac{2\hbar}{m\omega}}|z_0|\cos(\omega t-\phi_0)$ e $\bar p(t)=-\sqrt{2\hbar m\omega}|z_0|\sin(\omega t-\phi_0)$, identici alla soluzione classica con $A=|z_0|\sqrt{2\hbar/m\omega}$, a conferma del teorema di Ehrenfest. Confronto con gli autostati: $\Delta x\Delta p=(2n+1)\hbar/2$, minimo solo per $n=0$ (`2022_QP.pdf` pp. 95-97). Per $|z_0|\to0$ lo stato coerente diventa lo stato fondamentale e resta l'energia di punto zero $\hbar\omega/2$.

## Nei corsi
- **Quantum physics** (triennale): §8.3 della dispensa di V. Penna (due derivazioni equivalenti, evoluzione temporale, confronto classico). Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 90-98).

## Prerequisiti
- [[Oscillatore armonico quantistico]]: operatori a, a⁺ e base ψₙ
- [[Principio di indeterminazione di Heisenberg]]: gli stati coerenti saturano il limite ħ/2
- [[Operatore di evoluzione temporale]]: la serie si somma esattamente

## Porta a
- [[Quantizzazione del campo elettromagnetico]]: ogni modo del campo è un oscillatore con operatori b, b⁺

## Collegati
- [[Pacchetto d'onda gaussiano]]: gaussiana che invece si allarga (particella libera)
- [[Teorema di Ehrenfest]]: i valori medi seguono la traiettoria classica
- [[Distribuzione di Poisson]]: i pesi $|f_n|^2=e^{-|z|^2}|z|^{2n}/n!$ sono poissoniani (calcolo mio dalla formula della dispensa)
