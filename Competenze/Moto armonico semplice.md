---
tipo: competenza
area: fisica
corsi: [Fisica 1]
livello: [triennale]
aliases: ["simple harmonic motion", "moto armonico", "oscillatore armonico", "pulsazione", "frequenza angolare", "ampiezza", "fase iniziale", "moto periodico"]
tags: [competenza, area/fisica]
---

# Moto armonico semplice

> Moto periodico unidimensionale con legge oraria sinusoidale; si riconosce dal fatto che l'accelerazione è proporzionale allo spostamento con costante negativa.

## Definizione / enunciato
Un moto è periodico se a intervalli regolari il punto ripassa nella stessa posizione con la stessa velocità. È **armonico semplice** se
$$x(t)=A\,\mathrm{sen}(\omega t+\phi)$$
con ampiezza $A$, pulsazione $\omega$ (dimensione del reciproco di un tempo) e fase iniziale $\phi$. Condizione necessaria e sufficiente: $a=-\omega^2x$.

## Formule chiave
$$v(t)=\omega A\cos(\omega t+\phi),\qquad a(t)=-\omega^2A\,\mathrm{sen}(\omega t+\phi)=-\omega^2x(t)$$
$$T=\frac{2\pi}{\omega},\qquad f=\frac1T,\qquad \omega=2\pi f,\qquad \mathrm{tg}\,\phi=\frac{\omega x_0}{v_0}$$
$$\frac{d^2x}{dt^2}+\omega^2x=0$$

## Intuizione
Velocità sfasata di $\pi/2$ e accelerazione sfasata di $\pi$ rispetto allo spostamento: la velocità è massima al centro, l'accelerazione è massima agli estremi, dove il moto si inverte.

## Come si usa
Esercizio (pp. 26-30): oscillazione di periodo $T=4$ s, ampiezza $A=20$ cm, con $x_0=10$ cm a $t=0$; si ottiene $\phi=\pi/6$ e a $t=7$ s risultano $x=-0.17$ m, $v=0.16$ m/s, $a=0.43$ m/s$^2$.

## Nei corsi
- **Fisica 1** (triennale): lezione del 14/03/2022; ripreso per massa-molla (16/03), pendolo semplice e pendolo composto. Fonte: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Cinematica_punto_materiale/Cinematica_Lezione3.pdf` (pp. 9-30).

## Prerequisiti
- [[Velocità e accelerazione]]: accelerazione proporzionale allo spostamento

## Porta a
- [[Forza elastica]]: soluzione dell'equazione del moto
- [[Pendolo semplice]]: equazione per piccoli angoli
- [[Indice di rifrazione]]: elettrone legato da forza elastica e forzato dal campo
- [[Oscillatore armonico quantistico]]: versione classica con ω = √(k/m)

## Collegati
- [[Pendolo composto]]: equazione per piccole oscillazioni
- [[Equazioni lineari del secondo ordine a coefficienti costanti]]: l'equazione $\ddot x+\omega^2x=0$ e la sua soluzione generale
- [[Equazione delle onde]]: a x fissato l'onda armonica oscilla nel tempo
