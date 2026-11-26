---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["conductors in electrostatic equilibrium", "conduttore in campo elettrico", "induzione elettrostatica", "carica sulla superficie del conduttore", "campo nullo nel conduttore"]
tags: [competenza, area/fisica]
---

# Conduttori in equilibrio elettrostatico

> Proprietà di un conduttore le cui cariche libere hanno smesso di muoversi: campo interno nullo, volume equipotenziale, carica tutta sulla superficie e campo esterno normale alla superficie.

## Definizione / enunciato
In un conduttore immerso in un campo elettrico esterno, le cariche libere vengono spinte dalla forza del campo e si addensano sulle superfici finché il campo che producono all'interno non annulla completamente il campo esterno applicato: si raggiunge l'equilibrio (induzione elettrostatica). Lo stesso accade per un eccesso di carica posto su un conduttore. In conclusione:
1. in un conduttore in equilibrio elettrostatico il campo elettrico nei punti interni è **nullo**;
2. il campo alla superficie è **normale** alla superficie (altrimenti le cariche sarebbero libere di muoversi lungo di essa);
3. l'intera carica di un conduttore in equilibrio si trova **sulla sua superficie**.
Di conseguenza il potenziale è costante in tutto il conduttore, fino alla superficie.

## Formule chiave
Potenziale in un punto interno $P_0$ di un blocco di metallo con carica $Q$ distribuita in superficie con densità $\sigma(x,y,z)$ ($V=0$ all'infinito):
$$V(P_0)=\int_{\sup}\frac{\sigma(\vec r)\,dS}{4\pi\varepsilon_0|\vec r-\vec r_0|}$$

## Intuizione
Se ci fosse un campo interno, le cariche libere si muoverebbero ancora: l'equilibrio stesso impone $E=0$ dentro. Con il teorema di Gauss applicato a una superficie tutta interna al metallo, flusso nullo significa carica interna nulla, quindi la carica può stare solo in superficie.

## Come si usa
Per calcolare il potenziale di un conduttore basta un punto qualsiasi (tutto il volume è equipotenziale). Il rapporto $\sigma/Q$ che annulla il campo interno e la componente tangenziale è unico: da qui segue che $V/Q$ dipende solo dalla geometria, cioè la capacità.

## Nei corsi
- **Fisica 2** (triennale): lezione 7, figure del conduttore scarico in campo esterno e del conduttore carico. Fonti: `triennale/ANNO 2/fisica 2/lezioni/7. LEZIONE.pdf` (pp. 2-9).

## Prerequisiti
- [[Potenziale elettrostatico]]: il conduttore è un volume equipotenziale
- [[Teorema di Gauss del flusso]]: campo interno nullo implica carica solo in superficie

## Porta a
- [[Capacità elettrica]]: il rapporto V/Q è fissato dalla distribuzione superficiale unica

## Collegati
- Nessuno.
