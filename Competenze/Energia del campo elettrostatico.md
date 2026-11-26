---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["electrostatic field energy", "energia di un condensatore", "densità di energia del campo elettrico", "w = ε0E²/2", "Q²/2C"]
tags: [competenza, area/fisica]
---

# Energia del campo elettrostatico

> Il lavoro speso per caricare un condensatore resta immagazzinato nel campo elettrico, con una densità di energia proporzionale a $E^2$.

## Definizione / enunciato
Per caricare un condensatore di capacità $C$ si porta la carica $+dq$ da un'armatura all'altra contro la d.d.p. $V=q/C$ già presente. Partendo da armature scariche, il trasferimento di una carica totale $Q$ richiede un lavoro $L$, fatto da un generatore di forza elettromotrice che spinge le cariche attraverso un filo conduttore. Il lavoro va nella costruzione del campo elettrico dentro il condensatore: **diventa energia del campo elettrostatico** $W$. Per il condensatore piano, dividendo per il volume $Sd$ si ottiene la **densità di energia** $w$; il risultato si può generalizzare a qualsiasi campo elettrostatico.

## Formule chiave
$$dL=(V_1-V_2)\,dq=V\,dq,\qquad V=\frac qC$$
$$L=\int_0^Q\frac qC\,dq=\frac12\frac{Q^2}{C},\qquad L=\int_0^{V_0}V\,d(CV)=\frac12CV_0^2=W$$
$$C=\frac{\varepsilon S}{d},\ V_0=Ed\;\Rightarrow\;W=\frac12\frac{\varepsilon S}{d}(Ed)^2=\frac12\varepsilon E^2(Sd),\qquad w=\frac{W}{(Sd)}=\frac12\varepsilon E^2$$

## Intuizione
L'energia non sta "nelle cariche" ma nello spazio dove c'è campo: il condensatore piano ha campo uniforme nel volume $Sd$, quindi l'energia è densità per volume. Il fattore 1/2 nasce perché la d.d.p. cresce linearmente durante la carica.

## Come si usa
Data una configurazione con campo noto, si integra $w=\frac12\varepsilon E^2$ sul volume; per un condensatore basta $W=\frac12CV_0^2=\frac12Q^2/C$. In seguito la densità elettrica si somma a quella magnetica per dare l'energia del campo elettromagnetico.

## Nei corsi
- **Fisica 2** (triennale): fine della lezione 7, sul condensatore a facce piane parallele. Le slide scrivono $\varepsilon$ (mezzo generico); nel vuoto $\varepsilon=\varepsilon_0$. Fonti: `triennale/ANNO 2/fisica 2/lezioni/7. LEZIONE.pdf` (pp. 14-16).

## Prerequisiti
- [[Capacità elettrica]]: lavoro per caricare il condensatore, L = Q²/2C

## Porta a
- Nessuno.

## Collegati
- [[Energia del campo magnetico]]: densità analoga ε0E²/2; insieme danno w_EM
