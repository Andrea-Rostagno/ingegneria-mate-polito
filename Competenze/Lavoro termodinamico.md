---
tipo: competenza
area: fisica
corsi: [Fisica 1]
livello: [triennale]
aliases: ["thermodynamic work", "lavoro di un gas", "lavoro di volume", "W = integrale di p dV"]
tags: [competenza, area/fisica]
---

# Lavoro termodinamico

> Il lavoro scambiato da un gas in una trasformazione è l'integrale di $p\,dV$, cioè l'area sottesa alla trasformazione nel piano di Clapeyron.

## Definizione / enunciato
Da $dW=F\,dh=p\,dV$ (lavoro delle forze di pressione):
$$W=\int_A^Bp\,dV.$$
Vale se la trasformazione è reversibile (la pressione è definita in ogni stato intermedio ed è funzione continua di $V$), oppure se è nota la pressione esterna, per esempio costante.

## Formule chiave
$$W=p(V_B-V_A)\ \ (p\ \text{costante}),\qquad W_{isoterma}=nRT\ln\frac{V_B}{V_A},\qquad W_{ciclo}=\oint p\,dV$$

## Intuizione
Il lavoro dipende dal cammino: tra gli stessi stati A e B trasformazioni diverse sottendono aree diverse. In un ciclo l'area racchiusa è il lavoro netto.

## Come si usa
Si calcola trasformazione per trasformazione e si somma; in un'espansione $W>0$ (fatto dal gas), in una compressione $W<0$.

## Nei corsi
- **Fisica 1** (triennale): lezione del 16/05/2022. Fonte: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Termodinamica/Termodinamica_Lezione2.pdf` (pp. 2-8).

## Prerequisiti
- [[Pressione]]: lavoro delle forze di pressione p dV
- [[Equazione di stato dei gas ideali]]: p come funzione di V lungo la trasformazione

## Porta a
- [[Trasformazione adiabatica reversibile]]: dW = p dV nel primo principio
- [[Trasformazioni notevoli dei gas ideali]]: W per ciascuna trasformazione

## Collegati
- [[Primo principio della termodinamica]]: W compare nel bilancio ΔU = Q - W
- [[Entalpia di reazione]]: W = -PΔV nel bilancio energetico
