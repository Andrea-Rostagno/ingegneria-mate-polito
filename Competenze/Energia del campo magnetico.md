---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["magnetic field energy", "energia immagazzinata in un induttore", "W = LI²/2", "densità di energia magnetica", "w = B²/2μ0", "densità di energia del campo elettromagnetico"]
tags: [competenza, area/fisica]
---

# Energia del campo magnetico

> Il lavoro che il generatore compie contro la f.e.m. autoindotta resta immagazzinato nel campo magnetico, con densità di energia $\frac12 B^2/\mu$.

## Definizione / enunciato
Nel transitorio di un circuito RL ai capi dell'induttanza c'è la tensione $V_L$ e il generatore spende potenza per forzare la corrente. Quando la corrente è diventata stazionaria, il lavoro fatto sull'induttore è un'energia immagazzinata nell'induttore sotto forma di campo magnetico. Per il solenoide la si riscrive in funzione di $B$ e del volume $Sl$, il che definisce la **densità di energia del campo magnetico**; si può dimostrare che vale per qualsiasi campo magnetostatico.

## Formule chiave
$$P=V_LI=L\frac{dI}{dt}I,\qquad W=\int P\,dt=\int_0^I LI\,dI=\frac12LI^2$$
$$W=\frac12LI^2=\frac12\left(\mu\frac{N^2}{l}S\right)I^2=\frac12\frac{B^2}{\mu}(Sl),\qquad w=\frac{W}{(Sl)}=\frac12\frac{B^2}{\mu}$$
Campo elettromagnetico (energia per unità di volume, stessa espressione dei campi statici, enunciata senza dimostrazione):
$$w_{EM}=\frac12\varepsilon_0\varepsilon_rE^2+\frac12\frac{B^2}{\mu_0\mu_r}$$

## Intuizione
L'energia non è "nella corrente" ma nello spazio dove c'è campo: per il solenoide il passaggio da $\frac12LI^2$ a $\frac12B^2/\mu$ per il volume $Sl$ si ottiene moltiplicando e dividendo per $\mu l$.

## Come si usa
Per un induttore si usa $\frac12LI^2$; per un campo noto si integra $w$ sul volume. La somma con la densità elettrica dà $w_{EM}$, punto di partenza del teorema di Poynting. Con l'energia si dimostra anche $M_{1,2}=M_{2,1}$ nella mutua induzione.

## Nei corsi
- **Fisica 2** (triennale): energia nell'induttore dal transitorio RL, densità per il solenoide, densità del campo elettromagnetico (con $\varepsilon_r$ e $\mu_r$). Fonti: `triennale/ANNO 2/fisica 2/lezioni/23&24. LEZIONE.pdf` (pp. 24-27).

## Prerequisiti
- [[Circuito RL]]: lavoro del generatore sull'induttore durante il transitorio

## Porta a
- [[Mutua induzione]]: l'uguaglianza M12 = M21 si dimostra con l'energia
- [[Vettore di Poynting]]: densità di energia w_EM

## Collegati
- [[Energia del campo elettrostatico]]: densità analoga ε0E²/2; insieme danno w_EM
