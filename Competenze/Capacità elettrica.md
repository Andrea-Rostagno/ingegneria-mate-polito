---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["capacitance", "condensatore", "capacitor", "farad", "condensatore a facce piane parallele", "capacità di una sfera", "Q = CV"]
tags: [competenza, area/fisica]
---

# Capacità elettrica

> Costante di proporzionalità tra la carica di un conduttore (o di un condensatore) e il suo potenziale: dipende solo dalla geometria e dal dielettrico.

## Definizione / enunciato
Per un conduttore isolato con carica $Q$, qualunque sia la geometria, la carica è proporzionale al potenziale: $Q=CV$. Infatti $V(P_0)/Q=\int_{\sup}f(\vec r)dS/(4\pi\varepsilon_0|\vec r-\vec r_0|)$, dove $f=\sigma/Q$ è la distribuzione unica che annulla il campo interno, quindi il rapporto è una costante $=1/C$.
Due conduttori isolati con cariche $+Q$ e $-Q$ formano un **condensatore**: $Q=C\Delta V$, con $\Delta V$ differenza di potenziale tra i metalli e $C$ che dipende solo dalla geometria e dal dielettrico in cui il condensatore è immerso. Unità: farad, $[F]=CV^{-1}$.

## Formule chiave
$$\frac{V(P_0)}{Q}=\int_{\sup}\frac{f(\vec r)dS}{4\pi\varepsilon_0|\vec r-\vec r_0|}=\frac1C,\qquad Q=CV,\qquad Q=C\Delta V$$
Sfera metallica di raggio $R$: $V=\dfrac{Q}{4\pi\varepsilon R}$, quindi $C=4\pi\varepsilon R$.
Condensatore piano (area $S$, distanza $d$, $\sigma=Q/S$):
$$E=\frac{Q}{\varepsilon_0S}=\frac{\sigma}{\varepsilon_0},\qquad V_1-V_2=E\cdot d=\frac{Q\,d}{S\,\varepsilon_0},\qquad C_0=\frac{\varepsilon_0S}{d}$$

## Intuizione
Raddoppiando la carica raddoppia la densità superficiale in ogni punto (la forma della distribuzione non cambia) e quindi raddoppia il potenziale: il rapporto resta fisso. Più grande è il conduttore, o più vicine le armature, più carica si accumula a parità di tensione.

## Come si usa
Si calcola il campo (per il condensatore piano, il campo $\sigma/\varepsilon_0$ tra due piani carichi), poi la d.d.p. integrando il campo, infine $C=Q/\Delta V$. Con un dielettrico tra le armature la capacità aumenta di un fattore $\varepsilon_r$: $C_{dielettrico}=\varepsilon_rC_{vuoto}$ (lezione 8).

## Nei corsi
- **Fisica 2** (triennale): lezione 7, esempi della sfera e del condensatore a facce piane parallele. La slide della sfera scrive $\varepsilon$ (non $\varepsilon_0$), cioè la sfera immersa in un mezzo generico. Fonti: `triennale/ANNO 2/fisica 2/lezioni/7. LEZIONE.pdf` (pp. 9-13); `triennale/ANNO 2/fisica 2/lezioni/8.  LEZIONE.pdf` (p. 3).

## Prerequisiti
- [[Conduttori in equilibrio elettrostatico]]: il rapporto V/Q è fissato dalla distribuzione superficiale unica
- [[Campi di distribuzioni simmetriche]]: campo σ/ε0 tra le armature piane

## Porta a
- [[Energia del campo elettrostatico]]: lavoro per caricare il condensatore, L = Q²/2C
- [[Circuito RC]]: V_C = q/C

## Collegati
- [[Vettore spostamento elettrico]]: il dielettrico riduce la d.d.p. di un fattore εr a carica fissata
