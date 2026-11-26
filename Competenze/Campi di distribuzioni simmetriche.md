---
tipo: competenza
area: fisica
corsi: [Fisica 1, Fisica 2]
livello: [triennale]
aliases: ["fields of symmetric distributions", "distribuzione a simmetria sferica", "guscio sferico", "sfera piena", "filo carico infinito", "piano carico infinito", "doppio strato piano"]
tags: [competenza, area/fisica]
---

# Campi di distribuzioni simmetriche

> Applicazioni del teorema di Gauss a distribuzioni piane, cilindriche e sferiche di carica o di massa, in cui la simmetria fissa direzione e modulo del campo.

## Definizione / enunciato
- **Piano infinito** con densità superficiale $\sigma$: superficie gaussiana cilindrica con asse perpendicolare al piano; $2EA=\sigma A/\varepsilon_0$.
- **Due piani** con $\pm\sigma$: per sovrapposizione il campo è $\sigma/\varepsilon_0$ tra i piani e nullo fuori (da verificare sul PDF).
- **Filo infinito** con densità lineare $\lambda=Q/L$: cilindro coassiale; il flusso dalle basi è nullo e $E\,2\pi rh=Q/\varepsilon_0$.
- **Sfera di massa** $M$ con densità $\rho_0$ uniforme: per $r>R$ il campo è quello di tutta la massa concentrata nel centro; per $r<R$ conta solo la massa interna $m=\rho_0\frac43\pi r^3$.

## Formule chiave
$$E_{piano}=\frac{\sigma}{2\varepsilon_0},\qquad E_{filo}=\frac{\lambda}{2\pi r\varepsilon_0},\qquad E_{grav}(r<R)=\frac{4\gamma\rho_0\pi r}{3},\qquad E_{grav}(r>R)=\frac{\gamma M}{r^2}$$

## Intuizione
All'interno di una sfera omogenea il campo cresce linearmente con $r$ e fuori decresce come $1/r^2$: il massimo è sulla superficie.

## Come si usa
Esempio 1 (pp. 31-37): sfera uniformemente carica, campo dentro e fuori, poi campo in un punto A sommando per sovrapposizione due contributi. Domande d'orale: guscio sferico e sfera piena con il teorema di Gauss.

## Nei corsi
- **Fisica 1** (triennale): lezione del 6/06/2022. Fonte: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Elettrostatica_gravitazione/Gravitazione_elesttrostatica_Lezione2.pdf` (pp. 2-37).
- **Fisica 2** (triennale): esempi della legge di Gauss. Piano uniforme indefinito $E=\frac{\sigma}{2\varepsilon_0}$; due piani infiniti con $+\sigma$ e $-\sigma$, $\sigma=Q/S$: la slide di Fisica 2 riporta $E=\frac{\sigma}{\varepsilon_0}$ tra i piani. Fonte: `triennale/ANNO 2/fisica 2/lezioni/6. LEZIONE.pdf` (pp. 39-40).

## Prerequisiti
- [[Teorema di Gauss del flusso]]: si applica con superfici adattate alla simmetria

## Porta a
- [[Capacità elettrica]]: campo σ/ε0 tra le armature piane

## Collegati
- [[Campo gravitazionale]]: all'esterno di una sfera come se la massa fosse nel centro
