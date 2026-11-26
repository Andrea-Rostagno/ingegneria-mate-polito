---
tipo: competenza
area: fisica
corsi: [Quantum physics]
livello: [triennale]
aliases: ["Gaussian wave packet", "particella libera quantistica", "free particle", "stato localizzato", "localized state", "allargamento del pacchetto d'onda", "wave packet spreading"]
tags: [competenza, area/fisica]
---

# Pacchetto d'onda gaussiano

> Sovrapposizione di onde piane con distribuzione gaussiana dei vettori d'onda: descrive una particella libera localizzata, che si muove con velocità $\hbar\vec q/m$ e si allarga col tempo.

## Definizione / enunciato
La particella libera in $\mathbb R^3$ ha soluzioni stazionarie onde piane $\phi_k=\frac{e^{i(\vec k\cdot\vec x-\omega t)}}{\sqrt{(2\pi)^3}}$, $\omega=\hbar k^2/2m$, e soluzione generale $\phi(\vec x,t)=\int d^3k\,a(\vec k)\phi_k(\vec x,t)$. Scegliendo
$$a(\vec k)=A\,e^{-(\vec k-\vec q)^2d^2},\qquad s=s(t)=\frac{\hbar t}{2m},$$
l'integrale si fattorizza nelle tre direzioni e ogni fattore è un integrale gaussiano ($\nu=d^2+is$).

## Formule chiave
$$|\phi_j(x_j,t)|^2\propto\frac{1}{\sqrt{d^4+s^2}}\exp\left[-d^2\frac{(x_j-2sq_j)^2}{2(d^4+s^2)}\right],\qquad 2sq_j=\frac{\hbar q_j}{m}t=v_jt$$
A $t\simeq0$: $|\vec x|\le\sqrt2\,d$, $\vec v=\hbar\vec q/m$. Prefattore stampato: $\frac{|A_j|^2}{2\sqrt{d^4+s^2}}$. La dispensa indica la larghezza della gaussiana con $\sqrt{2(d^4+s^2)}$, che cresce con $s^2\propto t^2$.

## Intuizione
Il picco si muove come una particella classica con impulso $\hbar\vec q$, ma l'indeterminazione sugli impulsi fa sì che le componenti si sparpaglino: la gaussiana si allarga e per $t\to\infty$ la distribuzione diventa piatta (delocalizzazione completa). Per tempi lunghi domina un fattore di onda piana.

## Come si usa
È l'esempio standard di stato localizzato costruito con la base di onde piane: $a(\vec k)$ è la trasformata di Fourier dello stato, e la distribuzione degli impulsi $|a(\vec k)|^2$ resta costante nel tempo per la particella libera (`2022_QP.pdf` p. 65).
## Nei corsi
- **Quantum physics** (triennale): §4.5 della dispensa di V. Penna (calcolo completo, con esercizio sul fattore di onda piana). Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 48-50, 65).

## Prerequisiti
- [[Base di onde piane]]: lo stato è una sovrapposizione di onde piane
- [[Trasformata di Fourier]]: $a(\vec k)$ è la trasformata dello stato
- [[Distribuzione normale]]: la densità di probabilità è gaussiana

## Porta a
- [[Stati coerenti]]: pacchetti gaussiani che non si allargano nell'oscillatore

## Collegati
- [[Velocità di gruppo]]: il picco del pacchetto viaggia alla velocità di gruppo
- [[Principio di indeterminazione di Heisenberg]]: la larghezza in k impedisce la localizzazione permanente
