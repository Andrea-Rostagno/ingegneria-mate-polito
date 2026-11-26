---
tipo: competenza
area: fisica
corsi: [Fisica 1]
livello: [triennale]
aliases: ["inelastic collision", "coefficiente di restituzione", "coefficient of restitution", "urti tra punti materiali"]
tags: [competenza, area/fisica]
---

# Urto anelastico

> Urto in cui si conserva la quantità di moto ma non l'energia cinetica e i corpi si separano; è il caso generale, misurato dal coefficiente di restituzione $e$.

## Definizione / enunciato
Una parte dell'energia cinetica relativa al CM si converte in energia di deformazione o in calore. Nel sistema del CM si definisce
$$e=-\frac{p'_{1,fin}}{p'_{1,in}}=-\frac{v'_{1,fin}}{v'_{1,in}}=-\frac{v'_{2,fin}}{v'_{2,in}},\qquad 0\le e\le1.$$

## Formule chiave
$$E'_{k,f}=e^2E'_{k,i}$$
$$v_{1,fin}=\frac{(e+1)m_2v_{2,in}+(m_1-em_2)v_{1,in}}{m_1+m_2},\qquad v_{2,fin}=\frac{(e+1)m_1v_{1,in}+(m_2-em_1)v_{2,in}}{m_1+m_2}$$

## Intuizione
$e$ dice quanta velocità relativa "sopravvive" all'urto: con $e=1$ si ritrovano le formule dell'urto elastico, con $e=0$ entrambi i corpi escono con $v_{CM}$.

## Come si usa
Dati masse, velocità iniziali e $e$, si calcolano le velocità finali e l'energia dissipata $(1-e^2)E'_{k,i}$ (passaggio algebrico dalla formula di p. 39).

## Nei corsi
- **Fisica 1** (triennale): lezione dell'11/04/2022. Fonte: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Dinamica_Sistemi_di_punti/Dinamica_Sistemi_Lezione3.pdf` (pp. 35-48).

## Prerequisiti
- [[Conservazione della quantità di moto]]: si conserva anche se E_k no

## Porta a
- Nessuno.

## Collegati
- [[Urto elastico]]: caso e = 1
- [[Urto completamente anelastico]]: caso e = 0
