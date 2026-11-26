---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["linear programming duality", "duale di un LP", "LP dual", "dualità forte nel caso LP", "simplesso duale", "dual simplex", "regole di costruzione del duale"]
tags: [competenza, area/ottimizzazione]
---

# Dualità nella programmazione lineare

> Il duale di un LP è ancora un LP (si scambiano $\mathbf b$ e $\mathbf c$, si traspone $A$, si inverte il verso); se uno dei due ha ottimo finito i valori ottimi coincidono.

## Definizione / enunciato
Dualizzando $A\mathbf x\ge\mathbf b$ in $\min\mathbf c^T\mathbf x$: $\max_{\boldsymbol\mu\ge0}\{\boldsymbol\mu^T\mathbf b+\min_{\mathbf x}(\mathbf c^T-\boldsymbol\mu^TA)\mathbf x\}$, finito solo se $\mathbf c^T-\boldsymbol\mu^TA=\mathbf 0$:
$$(P1)\ \min\mathbf c^T\mathbf x\ \text{s.t. }A\mathbf x\ge\mathbf b\quad\Longleftrightarrow\quad(D1)\ \max\mathbf b^T\boldsymbol\mu\ \text{s.t. }A^T\boldsymbol\mu=\mathbf c,\ \boldsymbol\mu\ge\mathbf 0;$$
$$(P2)\ \min\mathbf c^T\mathbf x\ \text{s.t. }A\mathbf x=\mathbf b,\ \mathbf x\ge\mathbf 0\quad\Longleftrightarrow\quad(D2)\ \max\mathbf b^T\boldsymbol\mu\ \text{s.t. }A^T\boldsymbol\mu\le\mathbf c .$$

**Teorema (dualità forte LP).** Se il primale ha ottimo finito $\mathbf x^*$, anche il duale ha ottimo finito $\boldsymbol\mu^*$ e $\mathbf c^T\mathbf x^*=\mathbf b^T\boldsymbol\mu^*$. Se il primale (di minimo) è illimitato inferiormente il duale non è ammissibile, e viceversa; possono essere non ammissibili entrambi.

## Formule chiave
Regole (primale di minimo, duale di massimo):

| primale | duale |
|---|---|
| $\mathbf a_i^T\mathbf x\ge b_i$ | $\mu_i\ge0$ |
| $\mathbf a_i^T\mathbf x\le b_i$ | $\mu_i\le0$ |
| $\mathbf a_i^T\mathbf x=b_i$ | $\mu_i$ libera |
| $x_j\ge0$ | $A_j^T\boldsymbol\mu\le c_j$ |
| $x_j\le0$ | $A_j^T\boldsymbol\mu\ge c_j$ |
| $x_j$ libera | $A_j^T\boldsymbol\mu=c_j$ |

## Intuizione
Le variabili duali sono i prezzi delle risorse. Nel mix ottimo il duale (con $\mu_i=-q_i$) è $\min2400\mu_1+2400\mu_2+50\mu_3$ s.t. $15\mu_1+25\mu_2\ge45$, $35\mu_1+15\mu_2+\mu_3\ge60$, $\boldsymbol\mu\ge\mathbf 0$, con ottimo $5538.46$ (uguale al primale) in $\mu^*=(1.2692,1.0385,0)$: prezzi ombra delle risorse critiche, nullo per il vincolo di domanda non attivo.

## Come si usa
Il **simplesso duale** applica il simplesso al duale e recupera il primale con gli scarti complementari; spesso è più efficiente (fase 1 più veloce, meno problemi di degenerazione) ed è indispensabile quando si aggiunge un vincolo che rende inammissibile l'ottimo corrente, come nei nodi del branch and bound/cut. La dualità LP serve anche a riformulare l'LP robusto con incertezza poliedrale e a dimostrare l'assenza di arbitraggio.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap6.pdf` (p. 44); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap7.pdf` (p. 20-24).

## Prerequisiti
- [[Dualità lagrangiana]]: il duale LP si ottiene dualizzando i vincoli
- [[Programmazione lineare]]: forme canonica e standard

## Porta a
- [[Programmazione lineare robusta]]: dualizzazione del sottoproblema sui coefficienti
- [[Opportunità di arbitraggio]]: duale non ammissibile se c'è arbitraggio

## Collegati
- [[Teorema di dualità forte]]: versione generale con Slater
- [[Prezzo ombra]]: variabili duali come prezzi delle risorse
- [[Metodo del simplesso]]: nell'esempio i costi ridotti finali degli slack coincidono con le variabili duali
- [[Lemma di Farkas]]: teorema delle alternative
