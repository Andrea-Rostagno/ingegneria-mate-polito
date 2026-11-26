---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["Poynting vector", "teorema di Poynting", "Poynting's theorem", "intensità di un'onda elettromagnetica", "flusso di energia elettromagnetica", "S = E × B / μ0"]
tags: [competenza, area/fisica]
---

# Vettore di Poynting

> Il vettore $\vec S=\vec E\times\vec B/\mu_0$ dà direzione, verso e modulo del flusso di energia elettromagnetica per unità di tempo e di superficie; la sua media temporale è l'intensità dell'onda.

## Definizione / enunciato
Come tutte le onde, quelle e.m. trasportano energia. Il **vettore di Poynting** ha come direzione e verso quelli del flusso di energia e come modulo l'energia per unità di tempo e superficie attraverso un'area ortogonale alla propagazione; $[S]=\mathrm{J/(m^2s)}=\mathrm{W/m^2}$.
**Teorema di Poynting** (30bis): per una superficie chiusa $\Sigma$ fissa che racchiude il volume $\tau$, senza correnti, la diminuzione per unità di tempo dell'energia del campo nel volume è uguale al flusso di $\vec S$ uscente da $\Sigma$.

## Formule chiave
$$U=\int_\tau\frac12\varepsilon_0E^2d\tau+\int_\tau\frac{B^2}{2\mu_0}d\tau,\qquad \frac{\partial U}{\partial t}=-\int_\tau\nabla\cdot\left(\frac{\vec E\times\vec B}{\mu_0}\right)d\tau=-\oint_\Sigma\left(\frac{\vec E\times\vec B}{\mu_0}\right)\cdot\hat u_nd\Sigma$$
$$\vec S=\frac{1}{\mu_0}\vec E\times\vec B,\qquad w=\frac{B^2}{\mu_0}=\frac{E^2}{c^2\mu_0},\qquad wc=\frac{E^2}{c\mu_0}=\frac{EB}{\mu_0}\ \left[\frac{W}{m^2}\right]$$
Onda piana armonica, $\vec E=E_0\sin(kx-\omega t)\hat u_y$, $\vec B=\frac{E_0}{c}\sin(kx-\omega t)\hat u_z$:
$$\vec S=\varepsilon_0cE_0^2\sin^2(kx-\omega t)\hat u_x,\qquad \bar S=\frac12\varepsilon_0cE_0^2\ \text{(intensità)}$$

## Intuizione
In un'onda e.m. le densità di energia elettrica e magnetica sono uguali punto per punto e istante per istante ($u_m=\frac12B^2/\mu_0=\frac12\varepsilon_0E^2=u_e$). Questa energia viaggia a velocità $c$ nella direzione $\vec E\times\vec B$: il flusso per unità di superficie è quindi $wc$, che vettorialmente è $\vec S$.

## Come si usa
Si calcola $\vec S$ dai campi; poiché i campi oscillano conta la media su molti periodi, $\frac12\varepsilon_0cE_0^2$. Per una sorgente isotropa la potenza media che attraversa una sfera è la stessa a ogni raggio. L'energia trasportata per unità di tempo e superficie è il punto di partenza per la pressione di radiazione.

## Nei corsi
- **Fisica 2** (triennale): giustificazione "rapida" della forma algebrica nelle slide (ripetuta in `37&38` pp. 21-23); dimostrazione del teorema con l'identità $\vec a\cdot(\nabla\times\vec b)-\vec b\cdot(\nabla\times\vec a)=-\nabla\cdot(\vec a\times\vec b)$ e il teorema della divergenza nel testo 30bis. Fonti: `triennale/ANNO 2/fisica 2/lezioni/30bis. LEZIONE (Onde_em).pdf` (pp. 6-7); `triennale/ANNO 2/fisica 2/lezioni/34.   LEZIONE.pdf` (pp. 13-15).

## Prerequisiti
- [[Onde elettromagnetiche]]: E = cB e direzione E × B
- [[Energia del campo magnetico]]: densità di energia w_EM
- [[Teorema della divergenza]]: dalla derivata dell'energia al flusso uscente

## Porta a
- [[Pressione di radiazione]]: energia trasportata per unità di tempo e superficie
- [[Interferenza da due sorgenti]]: l'intensità è la media temporale dell'energia

## Collegati
- [[Fronti d'onda e raggi]]: conservazione della potenza media su sfere di raggio diverso
