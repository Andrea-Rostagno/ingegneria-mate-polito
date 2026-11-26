---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["Biot-Savart law", "campo di un filo rettilineo infinito", "B = μ0 I / 2πR", "linee di campo circolari"]
tags: [competenza, area/fisica]
---

# Legge di Biot-Savart

> Campo magnetico di un filo rettilineo infinito percorso da corrente: modulo $\mu_0I/2\pi R$, inversamente proporzionale alla distanza, linee di campo circolari centrate sul filo.

## Definizione / enunciato
Si integra la legge di Ampère-Laplace lungo un filo rettilineo di lunghezza infinita percorso dalla corrente $I$. Ogni elemento $d\vec l$ contribuisce con $d\vec B$ diretto lungo $\vec u_\theta$ (tangente alla circonferenza attorno al filo passante per P), quindi i contributi si sommano senza cancellazioni.
**Enunciato (nelle slide):** il campo magnetico generato da una corrente rettilinea ha modulo inversamente proporzionale alla distanza dal filo e ha come linee di campo circonferenze centrate sul filo; il verso si ottiene con la regola della mano destra (pollice lungo $I$).

## Formule chiave
$$\vec B=\int_{filo}d\vec B=\frac{\mu_0}{4\pi}I\int_{filo}\frac{d\vec l\times\vec u_r}{r^2}=\frac{\mu_0}{4\pi}I\int_{-\infty}^{+\infty}dl\frac{\sin\theta}{r^2}\vec u_\theta$$
Cambio di variabile con le notazioni della figura: $r=\dfrac{R}{\sin(\pi-\theta)}=\dfrac R{\sin\theta}$, $l=-\dfrac{R}{tg\theta}$, $dl=\dfrac{R}{\sin^2\theta}d\theta$:
$$\vec B=\frac{\mu_0I}{4\pi R}\int_0^\pi\sin\theta\,d\theta\,\vec u_\theta=\frac{\mu_0I}{4\pi R}[-\cos\theta]_0^\pi\vec u_\theta=\frac{\mu_0I}{2\pi R}\vec u_\theta$$

## Intuizione
Lontano dal filo il campo cala solo come $1/R$ (e non $1/R^2$ come per una carica) perché il filo è infinito: tutti gli elementi contribuiscono nello stesso verso. La simmetria cilindrica rende il campo costante su ogni circonferenza attorno al filo.

## Come si usa
Dà il campo di un primo filo nella posizione di un secondo, da cui la forza tra correnti parallele. La sua circuitazione lungo una circonferenza di raggio $R$ vale $B\cdot2\pi R=\mu_0I$, indipendente da $R$: è il punto di partenza della legge di Ampère.

## Nei corsi
- **Fisica 2** (triennale): lezione 15&16, "Il campo magnetico generato da una corrente rettilinea di lunghezza infinita". Fonti: `triennale/ANNO 2/fisica 2/lezioni/15&16. LEZIONE.pdf` (pp. 7-8).

## Prerequisiti
- [[Legge di Ampère-Laplace]]: si integra dB lungo il filo infinito

## Porta a
- [[Forza tra correnti parallele]]: campo del primo filo nella posizione del secondo
- [[Legge di Ampère]]: circuitazione lungo una circonferenza attorno al filo

## Collegati
- Nessuno.
