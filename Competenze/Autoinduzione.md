---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["self-inductance", "coefficiente di autoinduzione", "induttanza", "inductance", "henry", "flusso autoconcatenato", "induttanza di un solenoide"]
tags: [competenza, area/fisica]
---

# Autoinduzione

> Un circuito percorso da corrente concatena il flusso del proprio campo magnetico; se la corrente varia, nel circuito stesso si induce una f.e.m. $-L\,dI/dt$.

## Definizione / enunciato
La corrente $i$ di un circuito $\gamma$ genera (Ampère-Laplace) un campo $\vec B$ le cui linee sono concatenate al circuito: il flusso attraverso una superficie $S(\gamma)$ con contorno il circuito è il **flusso autoconcatenato**. Esso è proporzionale a $i$; la costante $L$, **coefficiente di autoinduzione** (induttanza), dipende solo dalla forma del circuito e dal mezzo circostante. Unità SI: Wb A$^{-1}$ = H (henry). Il risultato vale qualunque sia la geometria del circuito.

## Formule chiave
$$\Phi_{autoconc}=\left[\int_{S(\gamma)}\oint_\gamma\frac{\mu_0}{4\pi}\frac{d\vec l}{r^2}\times\vec u_r\cdot\vec u_N\,ds\right]i=Li$$
$$V_L=-\frac{d}{dt}\Phi=-L\frac{dI}{dt}$$
Solenoide di $N$ spire, sezione $S$, lunghezza $l$:
$$B=\mu\frac{N}{l}i;\qquad \Phi=NSB=\left(\mu\frac{N^2S}{l}\right)i;\qquad L=\mu\frac{N^2S}{l}$$

## Intuizione
L'induttanza è l'"inerzia" elettrica del circuito: per la legge di Lenz la f.e.m. autoindotta si oppone alla variazione della corrente (si oppone all'aumento quando $I$ cresce, la sostiene quando $I$ decresce).

## Come si usa
Si calcola $B$ prodotto dalla corrente (per il solenoide con la legge di Ampère), il flusso concatenato con tutte le spire e si divide per $i$. Per il solenoide $L$ cresce con $N^2$ e con la sezione. La f.e.m. $-L\,dI/dt$ entra poi nella legge di Ohm dei circuiti RL.

## Nei corsi
- **Fisica 2** (triennale): flusso autoconcatenato ricavato da Ampère-Laplace, coefficiente $L$ e calcolo per il solenoide (con $\mu$ generico del mezzo). Fonti: `triennale/ANNO 2/fisica 2/lezioni/23&24. LEZIONE.pdf` (pp. 15-18, 26).

## Prerequisiti
- [[Legge di Faraday-Henry]]: la fem autoindotta è -L di/dt
- [[Legge di Ampère]]: campo del solenoide per calcolare L

## Porta a
- [[Circuito RL]]: fem -L di/dt nella legge di Ohm
- [[Mutua induzione]]: stesso calcolo di flusso tra due circuiti

## Collegati
- Nessuno.
